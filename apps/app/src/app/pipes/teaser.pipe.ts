import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'teaser' })
export class TeaserPipe implements PipeTransform {
  transform(value: string, minWords: number): unknown {
    const words = value.split(' ');
    const teaser = words.length < minWords
      ?  `${value}`
      : `${words.slice(0, minWords).join(' ')} ...`;

    return teaser
  }
}
