export class Product {
    constructor( id, title, description, price, stock, category, thumbnails ) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.price = price;
        this.stock = stock;
        this.category = category;
        this.thumbnails = thumbnails || []
    }
}