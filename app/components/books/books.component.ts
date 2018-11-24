import { BookService } from './../../services/book.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']   
})

export class BooksComponent implements OnInit {

  books = [];

  constructor(private bookService: BookService){ }

  ngOnInit() {
    this.bookService.getBooks().subscribe(books => {
      this.books = books;
      //console.log(this.books);
    });    
  }
}