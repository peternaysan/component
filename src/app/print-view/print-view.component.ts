import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'aes-print-view',
    templateUrl: 'print-view.component.html',
    styleUrls: ['print-view.component.scss']
})

export class AesPrintViewComponent implements OnInit {
    @Input() aes;
    @Output() closeClick = new EventEmitter();
    public ultimateConsignee: any;
    public intermediateConsignee: any;
    public freightForwarder: any;
    constructor() { }

    ngOnInit() {
        var self = this;
     
     }

    print() {
        window.print()
    }

    close() {
        this.closeClick.emit({});
    }
}