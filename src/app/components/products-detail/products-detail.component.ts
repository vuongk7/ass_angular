import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iproducts } from 'src/app/models/product';
@Component({
  selector: 'app-products-detail',
  templateUrl: './products-detail.component.html',
  styleUrls: ['./products-detail.component.css']
})
export class ProductsDetailComponent implements OnInit {
  constructor(private router: ActivatedRoute) {
    const id = this.router.snapshot.paramMap.get('id');
    console.log(id);  
   }
  ngOnInit(): void { 
  }

}
