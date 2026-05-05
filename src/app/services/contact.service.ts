import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ContactService {

  private endpoint = 'https://formspree.io/f/xrejqeqd';

  constructor(private http: HttpClient){}

  sendContactMessage(payload: any) {
    return this.http.post(this.endpoint, payload);
  }
}
