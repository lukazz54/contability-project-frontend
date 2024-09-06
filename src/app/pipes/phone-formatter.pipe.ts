import { Pipe, PipeTransform } from '@angular/core';
import { LocaleEnum } from '../models/enums/PipeEnum/LocaleEnum.enum';

@Pipe({
  name: 'phoneFormatter',
  standalone: true
})
export class PhoneFormatterPipe implements PipeTransform {

  transform(value: string, args: string): string {

    var formatted_phone!: string;

    if(args == LocaleEnum.PT_BR) {
      if (value != undefined && value.length == 11) { //Contem o DDD
        formatted_phone = "(" + value.substring(0, 2) + ") " + value.substring(3, 9) + "-" + value.substring(10, value.length)
      } else {
        //formatted_phone = value.substring(0, 6) + "-" + value.substring(7, value.length)
      }
    }

    console.log(formatted_phone);

    return formatted_phone;
  }

}
