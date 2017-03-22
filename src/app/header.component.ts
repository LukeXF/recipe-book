import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'rb-header',
    templateUrl: './header.component.html',
    styles: [`
        .navbar {
            background: #333;
            border: transparent;
            border-radius: 0;
        }
        
        .navbar li a, .navbar-brand {
            padding: 20px;
            color: #eee;
        }
    `]
})
export class HeaderComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

}
