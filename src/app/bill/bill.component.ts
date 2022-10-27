import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.scss']
})
export class BillComponent implements OnInit {
  @Input() bill_details : any;
  @Input() overall = 0;
  @Input() charges : any;
  
  constructor() {
  }

  ngOnInit(): void {
    
  }
}
