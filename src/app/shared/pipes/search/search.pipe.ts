import { Pipe, PipeTransform } from '@angular/core';
import { Iproduct } from '../../interface/iproduct';

@Pipe({
  name: 'filterProducts',
  standalone: true
})
export class FilterProductsPipe implements PipeTransform {
  transform(products: Iproduct[], searchTerm: string): Iproduct[] {
    if (!searchTerm) return products;

    const term = searchTerm.toLowerCase();
    return products.filter(product =>
      product.title.toLowerCase().includes(term)
    );
  }
}
