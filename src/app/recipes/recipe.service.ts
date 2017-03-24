import {Injectable, EventEmitter} from '@angular/core';
import {Recipe} from "./recipe";
import 'rxjs/Rx';


import {Ingredient} from "../shared/ingredient";
import {Headers, Http, Response} from "@angular/http";


@Injectable()
export class RecipeService {
    recipesChanged = new EventEmitter<Recipe[]>();

    private recipes: Recipe[] = [
        new Recipe("Burger", "A juicy burger", "http://www.dfordelhi.in/wp-content/uploads/2016/03/burger_sandwich_1.jpg", [
            new Ingredient('French Fires', 2),
            new Ingredient('Burger Bread', 5)
        ]),
        new Recipe("Fish and Chips", "English style", "http://media.gizmodo.co.uk/wp-content/uploads/2014/01/fish-and-chips.jpg", [])
    ];

    constructor(private http: Http) { }

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

    storeData() {
        const body = JSON.stringify(this.recipes);
        const headers = new Headers({
            'Content-Type': 'application/json'
        });
        return this.http.put('https://angular2-course-3d62b.firebaseio.com/recipes.json', body, {headers: headers})
    }

    fetchData() {
        return this.http.get('https://angular2-course-3d62b.firebaseio.com/recipes.json')
            .map((response: Response) => response.json())
            .subscribe(
                (data: Recipe[]) => {
                    this.recipes = data;
                    this.recipesChanged.emit(this.recipes);
                }
            );
    }


}
