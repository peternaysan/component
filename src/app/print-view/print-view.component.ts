import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
    selector: 'aes-print-view',
    templateUrl: 'print-view.component.html',
    styleUrls: ['print-view.component.scss']
})

export class AesPrintViewComponent implements OnInit {
    @Input() aes;
    @Output() closeClick = new EventEmitter();
    constructor() { }

    ngOnInit() {
        var self = this;

    }

    print() {
        // window.print()
        var data = document.getElementById('printbox');        
        html2canvas(data).then(canvas => {
            // Few necessary setting options                       
            const contentDataURL = canvas.toDataURL('image/png')
            var imgWidth = 200;
            var pageHeight = 290;
            var imgHeight = canvas.height * imgWidth / canvas.width;
            var heightLeft = imgHeight;

            var doc = new jspdf('p', 'mm', 'a4');
            var position = 6;
            doc.addImage(contentDataURL, 'JPEG', 6, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;

            while (heightLeft >= 0) {
                position = heightLeft - imgHeight;
                doc.addPage();
                doc.addImage(contentDataURL, 'PNG', 6, position, imgWidth, imgHeight);
                heightLeft -= pageHeight;
            }
            doc.autoPrint();
            doc.save(this.aes.shipmentHeader.shipmentReferenceNumber + '.pdf');
        });
    }

    close() {
        this.closeClick.emit({});
    }
}