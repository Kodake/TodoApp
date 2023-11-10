import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(text: string, length: number): string {
    const words = text.split(' ');
    const result = words.map(word => (word.length > length ? word.substring(0, length) + '***' : word));
    return result.join(' ');
  }

}
