import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'website',
})
export class WebsitePipe implements PipeTransform {
  transform(value: string): string {
    return `https://${value}`;
  }
}
