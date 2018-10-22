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
  public aes:any={};
  title = 'aes-component';
  constructor(private modalService: NgbModal,private route: ActivatedRoute, private aesService: AesService) {

   }


   openPrintView(content) {
    this.route.queryParams.subscribe(param => {
      if(param && param.id){
        this.aesService.getAesById(param.id).then(res=>{
          this.aes = res;                     
        })
      }          
    });
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  onSubmitClick(){
    this.route.queryParams.subscribe(param => {
      if(param && param.id){
        this.aesService.submitAes(param.id);
      }          
      // load aes object and make cache it in service so it can be accessed from all components
    });
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
