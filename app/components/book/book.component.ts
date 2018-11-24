import { Component, OnInit } from '@angular/core';
import { BookService } from './../../services/book.service';
import { Book } from '../../models/book';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  ISBN: any;

  detailBooks: any;
  //editing: boolean = false;
  //editingBook: Book;

  constructor(public bookService:BookService, private router: Router,private route: ActivatedRoute) { }

  ngOnInit() {
    this.ISBN = this.route.snapshot.params['ISBN'];
    console.log('book.component.ts---Params....ISBN='+this.ISBN);
    
    this.bookService.getBookDetails(this.ISBN).subscribe(detailBooks => {
      this.detailBooks = detailBooks;
      //console.log(this.detailBooks);
      console.log('book.component.ts---Details...'+JSON.stringify(this.detailBooks));
    });
  }
}