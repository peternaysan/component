import { Component } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';
import { AesService } from '../app/services/aes.service'
import { log } from 'util';

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
  constructor(
    private modalService: NgbModal,
    private route: ActivatedRoute,
    private aesService: AesService) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe(param => {
      if (param && param.id) {
        this.aesId = param.id;
        this.aesService.getAesById(param.id).then(res => {
          this.aes = res;
        })
      }
    });
  }

  openPrintView(content) {
    // this.aesService.getAesById(this.aesId).then(res => {
    //   this.aes = res;
    // });

    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  onSaveDraft() {
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

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
