import { Inject, Pipe, PipeTransform } from '@angular/core';
import { TRANSLATION } from './translate-pipe-config';

@Pipe({ name: 'translate' })
export class TranslatePipe implements PipeTransform {
  constructor(@Inject(TRANSLATION) private _config: Record<string, Record<string, string>>) {

  }
  transform(value: string, language: string): string {
    if (!this._config[language]) {
      return value;
    }

    const translation = this._config[language][value];
    return translation ? translation : value;
  }
}
