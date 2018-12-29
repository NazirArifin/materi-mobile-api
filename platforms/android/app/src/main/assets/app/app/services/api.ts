import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { catchError } from 'rxjs/operators';

@Injectable()
export class ApiService {
  apiUrl = 'https://api.unira.ac.id';
  
  constructor(
    private http: HttpClient
  ) {}

  getMahasiswa(params: string = ''): Observable<any> { 
    return this.http.get(this.apiUrl + '/v1/mahasiswa' + params).pipe(
      catchError(this.handleErrors)
    );
  }

  handleErrors(error: Response) {
    console.log(JSON.stringify(error.json()));
    return Observable.throw(error);
  }
}
