import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    template: `
        <router-outlet></router-outlet>
    `
})
export class TagsCenterComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}
