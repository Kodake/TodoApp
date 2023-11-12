import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})

/**
 * @pipe TruncatePipe
 * @description
 * This Angular pipe truncates a given text to a specified length, adding ellipsis (`***`) to truncated words.
 */
export class TruncatePipe implements PipeTransform {

  /**
   * Transforms a given text by truncating it to the specified length and adding ellipsis to truncated words.
   * @param {string} text - The input text to be truncated.
   * @param {number} length - The desired length to truncate the text.
   * @returns {string} - The truncated text with ellipsis.
   */
  transform(text: string, length: number): string {
    // Split the input text into words.
    const words = text.split(' ');

    // Map each word, truncating if necessary, and add ellipsis to truncated words.
    const result = words.map(word => (word.length > length ? word.substring(0, length) + '***' : word));

    // Join the words back into a truncated text.
    return result.join(' ');
  }

}
