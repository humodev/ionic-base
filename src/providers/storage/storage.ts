import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class StorageProvider {

  constructor(public http: HttpClient) {
  }

  getItem(key: string) {
    return new Promise((resolve, reject) => {
      let data = localStorage.getItem(key);
      if (data !== undefined) {
        resolve(data)
      } else {
        reject();
      }
    });
  }

  saveItem(key: string, data: any) {
    return new Promise((resolve, reject) => {
      localStorage.setItem(key, data);
      resolve();
    });
  }

}
