import { Component } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { AesService } from '../app/services/aes.service'

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
    this.aesService.submitAes(this.aesId, this.aes)
  }
}
