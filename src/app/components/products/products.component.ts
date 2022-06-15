import { Component, OnInit } from '@angular/core';
import { Iproducts } from 'src/app/models/product';
import { ServiceService } from 'src/app/service/service.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products:any;
  constructor(private productService: ServiceService) { }

  ngOnInit(): void {
    // chạy
    this.getProductList();
  }

  // khai báo
  getProductList() {
    this.productService.getProductList().subscribe(data => {
      this.products = data;
    })
  }
  onDelete(id: number|string) {
    if (id) {
      this.productService.deleteProduct(id).subscribe(data => {
        this.getProductList();
      });
    }
  }
}