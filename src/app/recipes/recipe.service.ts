import { Injectable } from '@angular/core';
import {Recipe} from "./recipe";

import {Ingredient} from "../shared/ingredient";


@Injectable()
export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe("Dummy", "dummy desc", "http://www.dfordelhi.in/wp-content/uploads/2016/03/burger_sandwich_1.jpg", [
            new Ingredient('French Fires', 2),
            new Ingredient('Burger Bread', 5)
        ]),
        new Recipe("Dummy2", "dummy desc2", "http://media.gizmodo.co.uk/wp-content/uploads/2014/01/fish-and-chips.jpg", [])
    ];

    constructor() { }

    getRecipes() {
        return this.recipes;
    }

}
