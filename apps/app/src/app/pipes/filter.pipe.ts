import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'filter' })
export class FilterPipe implements PipeTransform {
  transform(value: any[], criterion:(param: any) => boolean): any[] {
    if (!value || !criterion) {
      return value
    }

    return value.filter(criterion)
  }
}
