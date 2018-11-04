import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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

    constructor(private modalService: NgbModal) { }

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
    }
    openPrintView(content) {
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed`;
        });
    }
}