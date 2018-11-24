import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(){
    //console.log('OnInit executed');
    //this.logTitle();
  }

  title = 'book-notes';

  logTitle(){
    console.log(this.title);
  }
}
