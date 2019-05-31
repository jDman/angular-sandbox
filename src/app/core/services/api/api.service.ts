import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Adapter } from '../../adapter';

@Injectable({ providedIn: 'root' })
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  public post<T>(
    url: string,
    body: T,
    adapter: Adapter<T>,
    options?: object
  ): Observable<T> {
    return this.httpClient
      .post<T>(url, body, options)
      .pipe(map(item => adapter.adapt(item)));
  }

  public put<T>(
    url: string,
    body: T,
    adapter: Adapter<T>,
    options?: object
  ): Observable<T> {
    return this.httpClient
      .put(url, body, options)
      .pipe(map(item => adapter.adapt(item)));
  }

  public get<T>(url: string, adapter: Adapter<T>): Observable<T> {
    return this.httpClient.get<T>(url).pipe(map(item => adapter.adapt(item)));
  }

  public list<T>(
    url: string,
    params: HttpParams,
    adapter: Adapter<T>
  ): Observable<T[]> {
    return this.httpClient
      .get<T[]>(url, { params })
      .pipe(map(items => items.map(item => adapter.adapt(item))));
  }
}
