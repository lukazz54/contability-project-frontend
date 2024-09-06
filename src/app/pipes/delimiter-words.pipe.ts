import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'delimiter',
  standalone: true
})
export class DelimiterWordsPipe implements PipeTransform {

  transform(value: string, args: number): string {
    if(value !== null) {
      return value.length > args ? value.substring(0, args) + '...' : value
    }

    return '';
  }

}
