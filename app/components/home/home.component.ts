import { BookService } from './../../services/book.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  books = [];


  // Favorite Books
  favoriteBooks: any;

  // Unread Books
  unreadBooks: any;

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.bookService.getBooks().subscribe(books => {
      this.books = books;
      //console.log(this.books);
    });    
    this.bookService.getFavoriteBooks().subscribe(favBooks => {
      this.favoriteBooks = favBooks;
      //console.log(this.favoriteBooks);
    });
    this.bookService.getUnreadBooks().subscribe(ub => {
      this.unreadBooks = ub;
      //console.log(this.unreadBooks);
    });
  }

}
