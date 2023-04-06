import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'distance' })
export class DistancePipe implements PipeTransform {
  transform(value: number | string): unknown {
    const distance = Number(value);
    return distance < 750
      ? `${parseFloat((+distance).toFixed(2))} m`
      : `${parseFloat((+distance / 1000).toFixed(2))} km`;
  }
}
