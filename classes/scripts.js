//declare class + constructor
class Book{
    constructor(title, author, cover, page) {
        this.title = title;
        this.author = author;
        this.cover = cover;
        this.page = page;
    }

    //method
    bookInfo() {
        return `${this.title} by ${this.author} 
        has a beautiful ${this.cover} cover
        with ${this.page} pages!`;
    }
}

//instances
const book1 = new Book('Little Women', 'Louisa May Alcott', 'red', 528);
const book2 = new Book('Anna Karenina', 'Leo Tolstoy', 'black', 960);
const book3 = new Book('Pride and Prejudice', 'Jane Austen', 'green', 400);
const book4 = new Book('The Hobbit', 'J.R.R. Tolkien', 'gray', 310);

//print classes onto page
document.getElementById("book1").innerHTML = book1.bookInfo();
document.getElementById("book2").innerHTML = book2.bookInfo();
document.getElementById("book3").innerHTML = book3.bookInfo();
document.getElementById("book4").innerHTML = book4.bookInfo();