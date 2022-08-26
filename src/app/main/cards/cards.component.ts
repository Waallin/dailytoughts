import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  @Input() db_date:any[] = [];
  @Input() db_name:any[] = [];
  @Input() db_text:any[] = [];
  @Input() db_rating:any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
