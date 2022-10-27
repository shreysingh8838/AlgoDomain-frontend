import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cartitems',
  templateUrl: './cartitems.component.html',
  styleUrls: ['./cartitems.component.scss']
})
export class CartitemsComponent implements OnInit {

  @Input() cart_items_details : any;

  // @Output() newItemEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
