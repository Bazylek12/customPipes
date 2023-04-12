import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'phoneNumber' })
export class PhoneNumberPipe implements PipeTransform {
  private landlinePrefixes = '12 13 14 15 16 17 18 22 23 24 25 29 32 33 34 41 42 43 44 46 48 52 54 55 56 58 59 61 62 63 65 67 68 71 74 75 76 77 81 82 83 84 85 86 87 89 91 94 95';

  transform(value: string): string {
    const numbersWithoutCountryCode = value.match(/(\+48|0048)?((\d| |-)+)/)?.[2];

    if (!numbersWithoutCountryCode || numbersWithoutCountryCode.length !== 9) {
      throw new Error('Invalid Phone Number');
    }

    const numberWithoutSigns = numbersWithoutCountryCode.replace(/[ -]+/g, '');
    const possibleDirectionalCode = numberWithoutSigns.slice(0, 2);

    if (this.landlinePrefixes.includes(possibleDirectionalCode)) {
      // Landline number
      const formattedNumber = `+48 (${possibleDirectionalCode}) ${numberWithoutSigns.slice(2, 5)} ${numberWithoutSigns.slice(5)}`;
      return formattedNumber;
    } else {
      // Mobile phone number
      const formattedNumber = `+48 ${numberWithoutSigns.replace(/\d{3}/g, '$& ')}`;
      return formattedNumber;
    }
  }
  }
