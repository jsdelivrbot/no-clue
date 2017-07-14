import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GetRiddlesService {

  constructor(private http: Http) { }

  // Get all posts from the API
  getAllRiddles() {
    console.log('hi');
    return this.http.get('/api/riddles')
      .map(res => res.json());
  }

  getRiddleById(id: number): any {
    return this.http.get(`/api/riddles/${id}`)
      .map(res => res.json());
  }
}
