import { Ingredient } from "../shared";

export class ShoppingListService {
    private items: Ingredient[] = [];

    constructor() {}

    getItems() {
        return this.items;
    }

    addItems(items: Ingredient[]) {
        Array.prototype.push.apply(this.items, items);
    }

}
