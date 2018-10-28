import { Component, ViewChild } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { AesService } from '../app/services/aes.service';
import { ShipmentComponent } from '../app/shipment/shipment.component';
import { TransportationComponent } from '../app/transportation/transportation.component';


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
  activeMenu = "shipment";
  private shipmentComponent: ShipmentComponent;
  @ViewChild(ShipmentComponent) set shipmentcontent(content: ShipmentComponent) {
    this.shipmentComponent = content;
  }
  private transportComponent: TransportationComponent;
  @ViewChild(TransportationComponent) set transportcontent(content: TransportationComponent) {
    this.transportComponent = content;
  }

  constructor(
    private modalService: NgbModal,
    private aesService: AesService) {
  }

  ngOnInit() {
    const urlParams = new URLSearchParams(window.location.search);
    const aesId = urlParams.get('id');
    if (aesId) {
      this.aesId = aesId;
      this.aesService.getAesById(aesId).then(res => {
        this.aes = res;
      });
    }
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
    this.aesService.savedraft(this.aesId, this.aes).subscribe(data => {
      // show toastr
      console.log(data);
    },
      err => {
        // show toastr
        console.log(err);
      });
  }

  onSubmitClick() {
    console.log(this.shipmentComponent.isValid);
    if (this.shipmentComponent.isValid)
      this.aesService.submitAes(this.aesId, this.aes)
  }
}
