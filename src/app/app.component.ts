import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'NG-Zorro';
  private _jsonURL = '../assets/affiliates.json';
  collection: Array<Object> = [];
  filters = [ 'user_id', 'code_id', 'type' ]
  subFilters = {
    type: [
      'newSon',
      'newGrandSon',
      'newGreatGrandSon',
      'earningsSon',
      'earningsGrandSon',
      'earningsGreatGrandSon',
      'payoutRequest',
      'payoutDone',
      'payoutRejected'
    ]
  };
  actions = [
    {
      create: {
        path: '',
        icon: '',
        styles:''
      }
    },
    {
      read: {
        path: '',
        icon: '',
        styles:''
      }
    },
    {
      update: {
        path: '',
        icon: '',
        styles:''
      }
    },
    {
      delete: {
        path: '',
        icon: '',
        styles:''
      }
    }
  ]
  colFormatter = {
    id: {
      type: 'link',
      path: '/affiliate/'
    },
    createdAt: {
      type: 'date',
      format: 'MMM d, y, h:mm:ss a'
    },
    status: [
      {
        type: 'warning',
        className: 'badge badge-pill badge-warning'
      },
      {
        type: 'danger',
        className: 'badge badge-pill badge-danger'
      },
      {
        type: 'success',
        className: 'badge badge-pill badge-success'
      },
      {
        type: 'primary',
        className: 'badge badge-pill badge-primary'
      },
      {
        type: 'light',
        className: 'badge badge-pill badge-light'
      }
    ]
  }
  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.getJSON().subscribe(data => {
     this.collection = data;
    });
  }
  public getJSON(): Observable<any> {
    return this.http.get(this._jsonURL);
  }
  loadData( evt ) {
    console.log('Filter for search received: ', evt);
  }
}
