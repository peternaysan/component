import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'error-detail',
    templateUrl: 'error-detail.component.html',
    styleUrls: ['error-detail.component.scss']
})

export class ErrorDetailComponent implements OnInit {
    @Output() closeClick = new EventEmitter();
    ngOnInit(): void {
        
    }
    close() {
        this.closeClick.emit({});
    }
}
