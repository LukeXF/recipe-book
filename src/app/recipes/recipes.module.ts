import {NgModule} from "@angular/core";
import {RecipeStartComponent} from "./recipe-start.component";
import {RecipeEditComponent} from "./recipe-edit/recipe-edit.component";
import {RecipeDetailComponent} from "./recipe-detail/recipe-detail.component";
import {RecipeItemComponent} from "./recipe-list/recipe-item.component";
import {RecipeListComponent} from "./recipe-list/recipe-list.component";
import {RecipesComponent} from "./recipes.component";
import {ReactiveFormsModule} from "@angular/forms";
import {recipesRouting} from "./recipe.routing";
import {SharedModule} from "../shared/shared.module";

@NgModule({
    declarations: [
        RecipesComponent,
        RecipeListComponent,
        RecipeItemComponent,
        RecipeDetailComponent,
        RecipeEditComponent,
        RecipeStartComponent
    ],
    imports: [
        SharedModule,
        ReactiveFormsModule,
        recipesRouting

    ]
})


export class RecipesModule {
}

