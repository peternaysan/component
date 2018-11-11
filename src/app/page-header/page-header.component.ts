import { AesPrintViewComponent } from './../print-view/print-view.component';
import { AesService } from './../services/aes.service';
import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'page-header',
    templateUrl: 'page-header.component.html',
    styleUrls: ['page-header.component.scss']
})

export class PageHeaderComponent implements OnInit {
    @Input() activeMenu;
    @Input() aes;
    @Output() activemenuchanged = new EventEmitter();
    closeResult: string;
    transactions;

    @ViewChild(AesPrintViewComponent) aepv: AesPrintViewComponent;

    menulist = [
        {
            name: "Shipment",
            active: true,
        },
        {
            name: "Parties",
            active: false,
        },
        {
            name: "Commodity",
            active: false,
        },
        {
            name: "Transportation",
            active: false,
        },
    ]

    constructor(private modalService: NgbModal, private aesService: AesService) { }

    changeActive(item) {
        this.menulist.forEach(menu => {
            menu.active = false;
        });

        item.active = true;
        this.activemenuchanged.emit(item);
    }

    ngOnInit() {
        var item = this.menulist.find(x => x.active == true);
        this.activemenuchanged.emit(item);

        if (this.aes) {
            this.aesService.getalltransactions(this.aes.id).subscribe(items => {
                this.transactions = items;
            });
        }
    }
    openPrintView(content, aes) {
        this.aepv.aes = aes;
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed`;
        });
    }
}