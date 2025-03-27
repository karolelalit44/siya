import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter',
  standalone: true
})
export class SearchFilterPipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    if (!items || !searchText) {
      return items;
    }

    // Convert the searchText to lowercase for case-insensitive matching
    searchText = searchText.toLowerCase();

    // Filter the items by checking each field in the object
    return items.filter(item =>
      Object.keys(item).some(key =>
        item[key] && item[key].toString().toLowerCase().includes(searchText)
      )
    );
  }
}
