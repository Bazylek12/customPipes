import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'filter' })
export class FilterPipe implements PipeTransform {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  transform(value: any[], criterion:(param: any) => boolean): any[] {
    if (!value || !criterion) {
      return value
    }

    return value.filter(criterion)
  }
}
