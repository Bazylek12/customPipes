import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'sort' })
export class SortPipe implements PipeTransform {
  transform(value: string[] | null, direction: 'asc' | 'desc' = 'asc'): string[] | null {
    if (!value) {
     return null
    }

    const sortedItems = value.slice().sort();

    if (direction === 'desc') {
      sortedItems.reverse();
    }
    
    return sortedItems;
  }
}
