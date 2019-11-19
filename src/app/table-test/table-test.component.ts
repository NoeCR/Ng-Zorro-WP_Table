import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  EventEmitter,
  Output } from '@angular/core';
import { DatePipe } from '@angular/common'
import { ShortIdPipe } from '../pipes/short-id.pipe';

@Component({
  selector: 'app-table-test',
  templateUrl: './table-test.component.html',
  styleUrls: ['./table-test.component.css']
})
export class TableTestComponent implements OnInit, OnChanges {

  // Inputs
  // - arrays de datos
  // - filtros posibles -> elementos de select
  // - Subelementos de select
  // - links o paths para mostrar o acceder a datos
  @Input() collection: Array<Object>;
  @Input() filters: Array<string>;
  @Input() subFilters: Object;
  @Input() formatters: Object;
  @Input() actions: Array<Object>;
  @Output() readonly valueChange = new EventEmitter();

  actionsList = [];
  searchType: string;
  searchQuery: string;
  subFilter: Array<string> = [];

  tablePagination = false;
  // searchValue = '';
  listOfDisplayData = [];
  tableFields = [];

  constructor(
    public datepipe: DatePipe,
    public shortId: ShortIdPipe) {}

  ngOnInit() {}

  ngOnChanges( changes: SimpleChanges ) {
    this.listOfDisplayData = changes['collection'] ? this.collection : [];
    this.actionsList = changes['actions'] ? this.actions : [];
    const objectData = this.listOfDisplayData[0]  ? this.listOfDisplayData[0] : {};
    this.tableFields = Object.keys (objectData);
    this.getValues(objectData);
  }

  getFilter() {
    Object.keys(this.subFilters).map ( val => {
      this.subFilter =  (val === this.searchType) ? this.subFilters[val] : [];
    });
  }

  getValues(data): Array<any> {
    const htmlElements = [];
    Object.keys(data).map( (el) => {
      let element;
      // console.log(el);
      if ( Object.keys (this.formatters).indexOf(el) !== -1 ) {
        // console.log(this.formatters[el].type);
        if ( this.formatters[el].type === 'date' ) {
          element = `${this.datepipe.transform(data[el], this.formatters[el].format)}`;
        }
        else if ( this.formatters[el].type === 'link' ) {
          element = `<a href="${
            this.formatters[el].path}${data[el]}">${
              this.shortId.transform(data[el])}</a>`;
        }
      }
      else {
        element = data[el];
      }
      htmlElements.push( element );
    })
    return htmlElements;
  }

  setValueData ( value: any ) {

  }
  reset(): void {
    this.searchType = '';
    this.searchQuery = '';
    this.search();
  }

  search(): void {
    this.valueChange.emit({
      filterBy: this.searchType,
      filterValue: this.searchQuery
    });
  }
}
