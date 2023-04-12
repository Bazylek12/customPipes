import { NgModule } from '@angular/core';
import { TranslatePipe } from './translate.pipe';
import { TRANSLATION } from './translate-pipe-config';

@NgModule({
  imports: [],
  declarations: [TranslatePipe],
  providers: [{
    provide: TRANSLATION,
    useValue: {
      en: {
        ONE: 'One',
      },
      pl: {
        ONE: 'Jeden',
      },
    }
  }],
  exports: [TranslatePipe]
})
export class TranslatePipeModule {
}
