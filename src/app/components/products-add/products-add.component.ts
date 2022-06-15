import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Iproducts } from 'src/app/models/product';
import { ServiceService } from 'src/app/service/service.service';
import { ActivatedRoute, Router } from '@angular/router';
import data from 'src/app/data';
@Component({
  selector: 'app-products-add',
  templateUrl: './products-add.component.html',
  styleUrls: ['./products-add.component.css']
})
export class ProductsAddComponent implements OnInit {
  // @Output() createProduct = new EventEmitter<{ name: string, price: number }>();
  product: Iproducts ={
    name: "",
    price: 0,
    status: true,
    img:""
  }
  constructor(
    private productService: ServiceService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }
  onSubmit() {
    console.log('submitted!')
    console.log(this.product);
    this.productService.addProduct(this.product).subscribe(data => {

      // chuyển hướng router
      this.router.navigateByUrl('/product');
    })
  
  }
  
}