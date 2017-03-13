import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {Recipe} from "../recipe";

@Component({
    selector: 'rb-recipe-list',
    templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
    recipes: Recipe[] = [
        new Recipe("Dummy", "dummy desc", "http://www.dfordelhi.in/wp-content/uploads/2016/03/burger_sandwich_1.jpg", []),
        new Recipe("Dummy2", "dummy desc2", "http://media.gizmodo.co.uk/wp-content/uploads/2014/01/fish-and-chips.jpg", [])
    ];
    @Output() recipeSelected = new EventEmitter<Recipe>();

    constructor() { }
    ngOnInit() {
    }

    onSelected(recipe: Recipe) {
        this.recipeSelected.emit(recipe);
    }

}
