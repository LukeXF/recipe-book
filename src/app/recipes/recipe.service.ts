import { Injectable } from '@angular/core';
import {Recipe} from "./recipe";

import {Ingredient} from "../shared/ingredient";


@Injectable()
export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe("Burger", "A juicy burger", "http://www.dfordelhi.in/wp-content/uploads/2016/03/burger_sandwich_1.jpg", [
            new Ingredient('French Fires', 2),
            new Ingredient('Burger Bread', 5)
        ]),
        new Recipe("Fish and Chips", "English style", "http://media.gizmodo.co.uk/wp-content/uploads/2014/01/fish-and-chips.jpg", [])
    ];

    constructor() { }

    getRecipes() {
        return this.recipes;
    }

    getRecipe(id: number) {
        return this.recipes[id];
    }

    deleteRecipe(recipe: Recipe) {
        this.recipes.splice(this.recipes.indexOf(recipe), 1);
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
    }

    editRecipe(oldRecipe: Recipe, newRecipe: Recipe) {
        this.recipes[this.recipes.indexOf(oldRecipe)] = newRecipe;
    }


}
