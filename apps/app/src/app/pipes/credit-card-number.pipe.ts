import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'creditCardNumber' })
export class CreditCardNumberPipe implements PipeTransform {
  transform(value: unknown): string {
    if (typeof value !== 'string') {
      throw new Error(`Incorrect input type. It must be a string.`)
    }
    const digitsOnly = value.replace(/[^\d]/g, '');

    if (digitsOnly.length !== 16) {
      throw new Error(`Invalid card number string: ${value}`);
    }

    return digitsOnly.replace(/(\d{4})/g, '$1 ');
  }


  }
