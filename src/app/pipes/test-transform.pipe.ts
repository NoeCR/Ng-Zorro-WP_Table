import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'testTransform'
})
export class TestTransformPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let words = value.split(/(?=[A-Z])/);
    words = value.indexOf('_') !== -1 ? value.split('_') : words;
    words[0] = words[0].replace(/\b[a-z]/g, (char) => { return `${char.toUpperCase()}`; });
    return words.join (' ');
  }

}
