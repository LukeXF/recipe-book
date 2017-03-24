import {Component, OnInit, OnDestroy} from '@angular/core';
import {RecipeService} from "./recipes/recipe.service";

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
        
        .navbar .dropdown li a {
            color: #222;
        }
    `]
})
export class HeaderComponent {

    constructor(private recipeService: RecipeService) {
    }

    onStore() {
        this.recipeService.storeData().subscribe(
            data => console.log(data),
            error => console.error(error)
        );
    }

    onFetch(){
        this.recipeService.fetchData();
    }
}
