import { Component, OnInit } from '@angular/core';
import { ProductListService } from 'src/app/services/product-list.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  livros:any

  constructor(
    private productListService: ProductListService
  ) { }

  ngOnInit(): void {
    this.getBook()
  }

  getBook(){
    this.productListService.getBook().subscribe(data => {
      this.livros = data
    })
  }

}
