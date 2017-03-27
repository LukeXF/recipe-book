import {NgModule} from "@angular/core";
import {ShoppingListComponent} from "./shopping-list.component";
import {ShoppingListAddComponent} from "./shopping-list-add.component";
import {FormsModule} from "@angular/forms";
import {shoppingListRouting} from "./shopping-list.routing";
import {SharedModule} from "../shared/shared.module";

@NgModule({
    declarations: [
        ShoppingListComponent,
        ShoppingListAddComponent],
    imports: [
        FormsModule,
        SharedModule,
        shoppingListRouting
    ]
})

export class ShoppingListModule {}