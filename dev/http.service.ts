import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import {Observable} from "rxjs/Observable";
import 'rxjs/Rx';
import {Headers} from "angular2/http";
@Injectable()
export class HttpService{
  constructor(private _http: Http){}
    getPosts(): Observable<any> {
      return this._http.get('http://localhost:8000/phones')
      .map(res => res.json());
    }
    createPost(post: {name: string, number: string}): Observable<any>{
      const body = JSON.stringify(post);
      console.log(body);
      let headers = new Headers();
      headers.append('content-Type','application/x-www-urlencoded');
      return this._http.post('http://localhost:8000/phones', body, {
        headers: headers
      }).map(res => res.json());
    }

}
