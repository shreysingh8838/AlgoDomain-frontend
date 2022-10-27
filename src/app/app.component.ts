import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'AlgoDomain';
  public products : any; // to store the respones of the api

  public cart : any = [];
  public cart_itemshow : any = []
  public productsBill: any;
  public finalBill :any;
  constructor(private http : HttpClient) {}

  ngOnInit(): void {
    this.http.get('http://localhost:8001/').subscribe(res=>{
      this.products = res;
      console.log(this.products[0]); // to check if the response
    })
  }


  inc(product: any){
    this.cart.push(product.Product_id);
    this.cart_itemshow.push(product);
  }
  dec(product: any){
    for(let i = 0; i<this.cart.length; i++){
      if(product.Product_id === this.cart[i]){
        this.cart.splice(i,1);
        this.cart_itemshow.splice(i,1);
        // console.log(this.cart)
        break;
      }
      // alert("This Product is not in the Cart");
    }
  }

  public logic : object = { cart : [] = this.cart };
  senddata(){
    // console.log(this.logic)
    console.log(JSON.stringify(this.logic));
    this.http.post('http://localhost:8001/sendCard', this.logic).subscribe(
      // res.sendStatus(200)
      res => console.log(res)
    )
    this.getdata();
  }

  public total = 0;
  getdata(){
    // this.finalBill = [];
    this.http.get('http://localhost:8001/getProduct').subscribe(res=>{
      this.finalBill = res;
      console.log(this.finalBill);  // TO check
      console.log(this.finalBill[1].name)  // to check 
    })

    this.total = 0;
    for(let i = 0; i<this.finalBill.length;i++){
      this.total = this.total + this.finalBill[i].finalPrice;
    }
  }
}
