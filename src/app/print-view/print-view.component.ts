import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'aes-print-view',
    templateUrl: 'print-view.component.html'
})

export class AesPrintViewComponent implements OnInit {
    @Input() aes;
    constructor() { }

    ngOnInit() { }
}