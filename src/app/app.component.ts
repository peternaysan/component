import { environment } from './../environments/environment';
import { PartiesComponent } from './parties/parties.component';
import { CommodityComponent } from './commodity/commodity.component';
import { AesPrintViewComponent } from './print-view/print-view.component';
import { Component, ViewChild } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { AesService } from '../app/services/aes.service';
import { ShipmentComponent } from '../app/shipment/shipment.component';
import { TransportationComponent } from '../app/transportation/transportation.component';
import { ToastrService } from 'ngx-toastr';
import { HubConnection, HubConnectionBuilder } from '@aspnet/signalr';
import { PrintViewEeiComponent } from './print-view/print-view-eei.component';
import { LookupService } from './services/lookup.service';
import { PrintView, States } from './shared/interface/print-view.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  closeResult: string;
  title = 'aes-component';
  aesId;
  aes;
  printViewData: PrintView;
  states: States;
  originStates: any = [];
  activeMenu = "Shipment";
  submitBtnText = "Submit";
  isPrintView = false;
  buttonDisabled: boolean;

  isUserAllowToEdit = false;
  selectedOption = 'PrintView';

  aesPrintView;

  private shipmentComponent: ShipmentComponent;
  @ViewChild(ShipmentComponent) set shipmentcontent(content: ShipmentComponent) {
    this.shipmentComponent = content;
  }
  private transportComponent: TransportationComponent;
  @ViewChild(TransportationComponent) set transportcontent(content: TransportationComponent) {
    this.transportComponent = content;
  }
  private partyComponent: PartiesComponent;
  @ViewChild(PartiesComponent) set partycontent(content: PartiesComponent) {
    this.partyComponent = content;
  }
  private commodityComponent: CommodityComponent;
  @ViewChild(CommodityComponent) set commoditycontent(content: CommodityComponent) {
    this.commodityComponent = content;
  }
  @ViewChild(AesPrintViewComponent) printview: AesPrintViewComponent;
  constructor(
    private modalService: NgbModal,
    private aesService: AesService,
    private toastr: ToastrService,
    private lookupService: LookupService) {
  }
  @ViewChild(PrintViewEeiComponent) printviewEei: PrintViewEeiComponent;

  private hubConnection: HubConnection;
  loading = true;
  ngOnInit() {
    const urlParams = new URLSearchParams(window.location.search);
    const aesId = urlParams.get('id');
    if (aesId) {
      this.aesId = aesId;
      this.aesService.getAesById(aesId).then(res => {
        this.aes = res;
        this.aesPrintView = this.aes;
        this.isUserAllowToEdit=this.aes.IsUserAllowToEdit=="1"?true:false;
        this.getOriginState();
        this.loading = false;
      },
        err => {
          this.toastr.error("An error occured loading aes data");
          this.loading = false;
        });
    }
    else {
      this.loading = false;
    }

    let builder = new HubConnectionBuilder();
    // as per setup in the startup.cs
    this.hubConnection = builder.withUrl(`${environment.apiBase}aesHub`).build();
    // message coming from the server
    this.hubConnection.on("getscallback", (data) => {

      if (data.ack.aes.shipmentRefNo == this.aes.shipmentHeader.shipmentReferenceNumber && data.senderappcode == this.aes.header.senderappcode) {
        if (data.ack.aes.status == "SUCCESS") {
          this.toastr.success("GETS approved submission : " + this.aes.shipmentHeader.shipmentReferenceNumber);
          this.aes.submissionStatus = "GETS APPROVED";
          this.aes.submissionStatusDescription = data.ack.aes.statusDescription;
          this.aes.getsResponse = {};
        }
        else if (data.ack.aes.status == "FAIL") {
          this.aes.submissionStatus = "GETS REJECTED";
          if (data.ack.aes.error && data.ack.aes.error.length > 0) {
            this.aes.submissionStatusDescription = data.ack.aes.error[0].errorDescription;
            this.aes.getsResponse = data;
          }
          this.toastr.error("GETS rejected submission : " + this.aes.shipmentHeader.shipmentReferenceNumber);
        }
      }
    });

    this.hubConnection.on("customscallback", (data) => {
      if (data.shipmentRefNo == this.aes.shipmentHeader.shipmentReferenceNumber && data.senderappcode == this.aes.header.senderappcode) {
        if (data.status == 'CUSTOMS APPROVED') {
          this.toastr.success("Customs approved submission : " + this.aes.shipmentHeader.shipmentReferenceNumber);
          this.aes.submissionStatus = "CUSTOMS APPROVED";
        }
        else if (data.status == 'CUSTOMS REJECTED') {
          this.toastr.error("Customs rejected submission : " + this.aes.shipmentHeader.shipmentReferenceNumber);
          this.aes.submissionStatus = "CUSTOMS REJECTED";
        }

        this.aes.submissionStatusDescription = data.description;
        if (!this.aes.submissionResponse) {
          this.aes.submissionResponse = {};
        }
        this.aes.submissionResponse.customsResponseList = data.errorList;
        this.aes.shipmentHeader.originalItn = data.itn;
      }
    });

    // starting the connection
    this.hubConnection.start();
  }

  getOriginState(): void {
    this.lookupService.states("United States")
    .subscribe((data) => { this.originStates = data;
      this.states = this.originStates.filter(state => state.code.toLocaleLowerCase().indexOf
                                                        (this.aes.shipmentHeader.originState.toLocaleLowerCase()) !== -1)[0];
                                                        this.printViewData = {states: this.states};
                          },

        (err) => { console.log(err); }
    );
  }

  onactivemenuchange(item) {
    this.activeMenu = item.name;
  }
  onSetPrintView(item, content) {
    this.aesPrintView = item.aesDetailEntity;
    this.openPrintView(content);
  }

  openPrintView(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed`;
    });
  }
  togglePrint() {
    this.isPrintView = !this.isPrintView;
  }

  onChange(event) {
  this.buttonDisabled = true;
}

  openErrorModal(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed`;
    });
  }

  onSaveDraft() {
    this.aesService.savedraft(this.aes).subscribe(data => {
      // show toastr
      this.getOriginState();
      this.toastr.success('Draft saved successfully !', 'Save Draft');
    },
      err => {
        // show toastr
        this.toastr.success('An error occured while saving draft !', 'Error');
        console.log(err);
      });

  }

  onSubmitClick() {
    if (!this.shipmentComponent.isValid) {
      this.activeMenu = "Shipment";
      this.toastr.warning('Please fix validation errors in Shipment tab !', 'Validation');
      return;
    }
    if (!this.partyComponent.isValid) {
      this.activeMenu = "Parties";
      this.toastr.warning('Please fix validation errors in Parties tab !', 'Validation');
      return;
    }
    if (!this.commodityComponent.isValid) {
      this.activeMenu = "Commodity";
      this.toastr.warning('Please fix validation errors in Commodity tab !', 'Validation');
      this.aes.commodityDetails.forEach(commodity => {
        commodity.isExpanded = !commodity.isExpanded;
      });

      return;
    }
    if (!this.transportComponent.isValid) {
      this.activeMenu = "Transportation";
      this.toastr.warning('Please fix validation errors in Transportation tab !', 'Validation');
      return;
    }
    if (!(this.aes.commodityDetails && this.aes.commodityDetails.length > 0)) {
      this.activeMenu = "Commodity";
      this.toastr.warning('Please add atleast one commodity line!', 'Validation');
      return;
    }
    this.submitBtnText = "Submitting";
    this.aesService.submitAes(this.aes).subscribe(data => {
      var currentAes: any = data;
      this.getOriginState();
      this.toastr.success('AES submitted successfully !', 'AES Submission');
      this.aes.submissionStatus = currentAes.submissionStatus;
      this.aes.submissionStatusDescription = currentAes.submissionStatusDescription;
      this.submitBtnText = "Submit";
    }, err => {
      console.log(err);
      this.toastr.error(err.error, 'Error', {
        timeOut: 0,
        closeButton: true,
        positionClass: 'toast-top-full-width'
      });
      this.submitBtnText = "Submit";
    });
  }
}
