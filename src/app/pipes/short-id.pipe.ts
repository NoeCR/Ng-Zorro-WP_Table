import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortId'
})
export class ShortIdPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return `${value.substr(0, 4)}...${value.substr(value.length - 4)}`;
  }

}
