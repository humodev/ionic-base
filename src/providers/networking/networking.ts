import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class NetworkingProvider {

  public verbs = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    DELETE: 'DELETE'
  };

  constructor(public http: HttpClient) {
  }

  executeRequest(verb: string, endpoint: string, payload?: any) {
    return new Promise((resolve, reject) => {
      switch(verb) {
        case this.verbs.GET:
          this.executeGET(endpoint).then((response) => { resolve(response); })
                                            .catch((err) => { reject(err); });
        break;
        case this.verbs.POST:
          this.executePOST(endpoint, payload).then((response) => { resolve(response); })
                                            .catch((err) => { reject(err); });
        break;
        case this.verbs.DELETE:
          this.executeDELETE(endpoint, payload).then((response) => { resolve(response); })
                                            .catch((err) => { reject(err); });
        break;
        case this.verbs.PUT:
          this.executePUT(endpoint, payload).then((response) => { resolve(response); })
                                            .catch((err) => { reject(err); });
        break;
      }
    });
  }

  executeGET(endopint: string) {
    return new Promise((resolve, reject) => {
      this.http.get(endopint)
      .subscribe(
        resp => {
          resolve(resp);
        },
        err => {
          reject(err);
        }
      );
    });
  }

  executePOST(endopint: string, payload: any) {
    return new Promise((resolve, reject) => {
      this.http.post(endopint, payload)
      .subscribe(
        resp => {
          resolve(resp);
        },
        err => {
          reject(err);
        }
      );
    });
  }

  executeDELETE(endopint: string, payload: any) {
    return new Promise((resolve, reject) => {
      this.http.delete(endopint, payload)
      .subscribe(
        resp => {
          resolve(resp);
        },
        err => {
          reject(err);
        }
      );
    });
  }

  executePUT(endopint: string, payload: any) {
    return new Promise((resolve, reject) => {
      this.http.put(endopint, payload)
      .subscribe(
        resp => {
          resolve(resp);
        },
        err => {
          reject(err);
        }
      );
    });
  }
}
