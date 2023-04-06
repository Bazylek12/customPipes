import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'fileSize' })
export class FileSizePipe implements PipeTransform {
  transform(value: number): unknown {
    const units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB']
    let unitIndex = 0;
    
    while(value >= 1024 && unitIndex < units.length - 1) {
      value /= 1024
      unitIndex++
    }

    return `${parseFloat(value.toFixed(2))} ${units[unitIndex]}`
  }
}
