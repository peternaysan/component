import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'aes-error-detail',
    templateUrl: 'error-detail.component.html',
    styleUrls: ['error-detail.component.scss']
})

export class ErrorDetailComponent implements OnInit {
    @Output() closeClick = new EventEmitter();
    @Input() aes;
    errorList:any;
    customsResponseList:any;
    headerText:string;
    ngOnInit(): void {
        if(this.aes.submissionStatus=="GETS REJECTED"){
            this.headerText="Error details";
            this.errorList=this.aes.getsResponse.ack.aes.error;
            
        }else if(this.aes.submissionStatus=="CUSTOMS REJECTED"){
            this.headerText="Customs Response details";
            this.customsResponseList=this.aes.submissionResponse.customsResponseList;
        }
    }
    close() {
        this.closeClick.emit({});
    }
}
