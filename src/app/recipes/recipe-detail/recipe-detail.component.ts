import {Component, OnInit, Input} from '@angular/core';
import {Recipe} from "../recipe";
import {ShoppingListService} from "../../shopping-list/shopping-list.service";

@Component({
    selector: 'rb-recipe-detail',
    templateUrl: './recipe-detail.component.html'
})
export class RecipeDetailComponent implements OnInit {
    @Input() selectedRecipe: Recipe;

    constructor(private sls: ShoppingListService) { }

    ngOnInit() {
    }

    onAddToShoppingList() {
        console.log(this);
        this.sls.addItems(this.selectedRecipe.ingredients);
    }

}
