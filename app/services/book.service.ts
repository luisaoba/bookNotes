import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Book } from '../models/book';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  favoriteBooksCollection: AngularFirestoreCollection<Book>;
  favoriteBooks: Observable<Book[]>;

  unreadBooksCollection: AngularFirestoreCollection<Book>;
  unreadBooks: Observable<Book[]>;


  detailBooksCollection: AngularFirestoreCollection<Book>;
  detailBooks: Observable<Book[]>;

  booksCollection: AngularFirestoreCollection<Book>;
  books: Observable<Book[]>;

  bookDoc: AngularFirestoreDocument<Book>;

  constructor(public db: AngularFirestore) {
    // this.books = this.db.collection('books').valueChanges();
    this.booksCollection = this.db.collection('books');
    this.books = this.booksCollection.snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Book;
        data.id = a.payload.doc.id;
         return data;
      });
    }));
    this.favoriteBooksCollection = this.db.collection('books', ref=> ref.where('rate', '>=', 4));
    this.favoriteBooks = this.favoriteBooksCollection.snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Book;
        data.id = a.payload.doc.id;
         return data;
      });
    }));
    this.unreadBooksCollection = this.db.collection('books', ref=> ref.where('dateread', '==', null));
    this.unreadBooks = this.unreadBooksCollection.snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Book;
        data.id = a.payload.doc.id;
         return data;
      });
    }));
    //console.log(this.books);
    //console.log(this.favoriteBooks);
    //console.log(this.unreadBooks);
  }
  getBooks(){
    return this.books;
  }

  getFavoriteBooks(){
    return this.favoriteBooks;
  }

  getUnreadBooks(){
    return this.unreadBooks;
  }

  getBookDetails(ISBN) {
    console.log('ISBN ==== '+ISBN);
    this.detailBooksCollection = this.db.collection('books', ref=> ref.where('ISBN', '==', ISBN));
    this.detailBooks = this.detailBooksCollection.snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Book;
        data.id = a.payload.doc.id;
         return data;
      });
    }));
    //console.log(this.detailBooks);
    return this.detailBooks;
  }
}
