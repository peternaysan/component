import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'page-header',
    templateUrl: 'page-header.component.html',
    styleUrls: ['page-header.component.scss']
})

export class PageHeaderComponent implements OnInit {

    @Input() aes;
    @Output() activemenuchanged = new EventEmitter();

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

    constructor() { }

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
}