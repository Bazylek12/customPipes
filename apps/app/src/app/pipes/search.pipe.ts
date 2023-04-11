import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'search' })
export class SearchPipe implements PipeTransform {
  transform(value: string, substring: string): string[] {
    const words = value.split(' ');
    const matchingWords = words.filter(word => word.toLowerCase().includes(substring.toLowerCase()))

    if (matchingWords.length === 0) {
      throw new Error('No result')
    }

    return matchingWords;
  }
}
