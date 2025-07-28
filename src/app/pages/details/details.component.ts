import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../core/services/products/products.service';
import { Iproduct } from '../../shared/interface/iproduct';
import { CommonModule } from '@angular/common';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private productService = inject(ProductsService);
  private readonly _ngxSpinner = inject(NgxSpinnerService);

  product: Iproduct | null = null;

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.getProductById(+id);
    }
  }

  getProductById(id: number): void {
    this._ngxSpinner.show();
    this.productService.getProductById(id).subscribe({
      next: (res) => {
        this.product = res;
        this._ngxSpinner.hide();
      },
      error: (err) => {
        console.error('Error fetching product:', err);
        this.product = null;
        this._ngxSpinner.hide();
      }
    });
  }
}
