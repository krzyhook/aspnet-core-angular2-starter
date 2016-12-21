import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'ngnco-home',
    templateUrl: 'app/home/home.component.html'
})

export class HomeComponent implements OnInit {

    public message: string;

    constructor() {
        this.message = 'Hello from HomeComponent ctor';
    }

    ngOnInit(): void {
    }
}
