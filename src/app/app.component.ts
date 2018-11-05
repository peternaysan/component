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
  ngOnInit() {
    const urlParams = new URLSearchParams(window.location.search);
    const aesId = urlParams.get('id');
    if (aesId) {
      this.aesId = aesId;
      this.aesService.getAesById(aesId).then(res => {
        this.aes = res;
      });
    }

    let builder = new HubConnectionBuilder();
    // as per setup in the startup.cs
    this.hubConnection = builder.withUrl(`${environment.apiBase}aesHub`).build();
    // message coming from the server
    this.hubConnection.on("getscallback", (message) => {
      console.log(message);
      this.toastr.success(message)
    });

    this.hubConnection.on("customscallback", (message) => {
      console.log(message);
      this.toastr.success(message)
    });

    // starting the connection
    this.hubConnection.start();
  }

  onactivemenuchange(item) {
    this.activeMenu = item.name;
  }

  openPrintView(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed`;
    });
  }

  onSaveDraft() {
    console.log(this.aes);
    this.aesService.savedraft(this.aes).subscribe(data => {
      // show toastr
      this.toastr.success('Draft saved successfully !', 'Save Draft');
      console.log(data);
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

    this.aesService.submitAes(this.aes).subscribe(data => {
      this.toastr.success('AES submitted successfully !', 'AES Submission');
      console.log("submitted successfully", data);
    }, err => {
      this.toastr.error('An error occured while submitting AES !', 'Error');
    });
  }
}
