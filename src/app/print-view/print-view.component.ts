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
        var images = []
        
        html2canvas(data).then(canvas => {
            // Few necessary setting options                       
            const contentDataURL = canvas.toDataURL('image/png')
            var imgWidth = 210; 
            var pageHeight = 295;  
            var imgHeight = canvas.height * imgWidth / canvas.width;
            var heightLeft = imgHeight;
  
            var doc = new jspdf('p', 'mm');
            var position = 0;
  
            doc.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;
  
            while (heightLeft >= 0) {
              position = heightLeft - imgHeight-5;
              doc.addPage();
              doc.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
              heightLeft -= pageHeight;
            }
            doc.autoPrint();
            doc.save(this.aes.shipmentHeader.shipmentReferenceNumber+'.pdf');           
        });
    }

    close() {
        this.closeClick.emit({});
    }
}