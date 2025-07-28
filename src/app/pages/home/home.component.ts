import { Component, inject, OnInit } from '@angular/core';
import { ProductsService } from '../../core/services/products/products.service';
import { Iproduct } from '../../shared/interface/iproduct';
import { CardComponent } from "../../shared/components/card/card.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FilterProductsPipe } from '../../shared/pipes/search/search.pipe';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, CardComponent, FilterProductsPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  private readonly _products = inject(ProductsService);
  private readonly _ngxSpinner = inject(NgxSpinnerService);

  products: Iproduct[] = [];
  searchTerm: string = '';
  sortOption: string = '';

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this._ngxSpinner.show();
    this._products.getAllProduct().subscribe({
      next: (res) => {
        this.products = res;
        this._ngxSpinner.hide();
      },
      error: (e) => {console.log(e); this._ngxSpinner.hide();}
    });
  }

  onSortChange(): void {
    if (!this.sortOption) return;

    switch (this.sortOption) {
      case 'priceLowHigh':
        this.products.sort((a, b) => a.price - b.price);
        break;
      case 'priceHighLow':
        this.products.sort((a, b) => b.price - a.price);
        break;
      case 'nameAZ':
        this.products.sort((a, b) => a.title.localeCompare(b.title));
        break;
    }
  }
}
