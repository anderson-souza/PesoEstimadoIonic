import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class DataProvider {
  public paramData: any;
  constructor() {
    console.log('Hello DataProvider Provider');
  }

}
