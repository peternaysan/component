import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'aes-print-view',
    templateUrl: 'print-view.component.html',
    styleUrls: ['print-view.component.scss']
})

export class AesPrintViewComponent implements OnInit {
    @Input() aes;
    constructor() { }

    ngOnInit() { }
}