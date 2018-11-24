import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

import { BooksComponent } from './components/books/books.component';
import { BookComponent } from './components/book/book.component';
import { AddBookComponent } from './components/add-book/add-book.component';
import { EditBookComponent } from './components/edit-book/edit-book.component';
import { DeleteBookComponent } from './components/delete-book/delete-book.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

// Forms
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

// Material Design Modules
import { MatButtonModule, 
          MatCheckboxModule, 
          MatCardModule, 
          MatGridListModule, 
          MatInputModule, 
          MatDatepickerModule, 
          MatNativeDateModule, 
          MatToolbarModule, 
          MatProgressSpinnerModule, 
          MatTabsModule, 
          MatListModule, 
          MatIconModule } from '@angular/material';

// Firebase
// TESTE LUISAO
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';

// Service
import { BookService } from './services/book.service';

// Routes
const appRoutes:Routes = [
  {path: '', component:HomeComponent},
  {path: 'books', component:BooksComponent},
  {path: 'book/:ISBN', component:BookComponent},
  {path: 'add-book', component:AddBookComponent},
  {path: 'edit-book/:id', component:EditBookComponent},
  {path: 'delete-book/:id', component:DeleteBookComponent}
]



//   bootstrap: [AppComponent]
// Significa que serao componente inicial (boot)
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BooksComponent,
    BookComponent,
    AddBookComponent,
    EditBookComponent,
    DeleteBookComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule, FormsModule, MatButtonModule, 
    MatCheckboxModule, 
    MatCardModule, 
    MatGridListModule, 
    MatInputModule, 
    MatDatepickerModule, 
    MatNativeDateModule, 
    MatToolbarModule, 
    MatProgressSpinnerModule, 
    MatTabsModule, 
    MatListModule, 
    MatIconModule, 
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase, 'book-notes-app'),
    AngularFirestoreModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
