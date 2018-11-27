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
  activeMenu = "Shipment";
  submitBtnText = "Submit";

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
    private toastr: ToastrService) {
  }

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
      if (data.ack.aes.shipmentRefNo == this.aes.shipmentHeader.shipmentReferenceNumber) {
        if (data.ack.aes.status == "SUCCESS") {
          this.toastr.success("GETS approved submission : " + this.aes.shipmentHeader.shipmentReferenceNumber);
          this.aes.submissionStatus = "GETS APPROVED";
          this.aes.submissionStatusDescription = data.ack.aes.statusDescription;
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
      if (data.submissionStatus == 'CUSTOMS APPROVED') {
        this.toastr.success("Customs approved submission : " + this.aes.shipmentHeader.shipmentReferenceNumber);
      }
      else if (data.submissionStatus == 'CUSTOMS REJECTED') {
        this.toastr.error("Customs rejected submission : " + this.aes.shipmentHeader.shipmentReferenceNumber);
      }

      this.aes.submissionStatusDescription = data.SubmissionStatusDescription;
    });

    // starting the connection
    this.hubConnection.start();
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
      this.toastr.success('AES submitted successfully !', 'AES Submission');
      this.aes.submissionStatus = currentAes.submissionStatus;
      this.aes.submissionStatusDescription = currentAes.submissionStatusDescription;
      this.submitBtnText = "Submit";
    }, err => {
      this.toastr.error(err.error, 'Error', {
        timeOut: 0,
        closeButton:true,
        positionClass :'toast-top-full-width'
      });
      this.submitBtnText = "Submit";
    });
  }
}
