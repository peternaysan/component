import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'replace'
  })

export class ReplacePipe implements PipeTransform {
    transform(value: string, orgVal: string, replaceValue: string): any {
        return value.replace(orgVal, replaceValue);
      }
}
