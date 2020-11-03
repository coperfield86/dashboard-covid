import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {RestClientErrorHandlerService} from './rest-client-error-handler.service';
import {forOwn} from 'lodash';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RestClientService {
  constructor(private httpClient: HttpClient,
              private restClientErrorHandler: RestClientErrorHandlerService) {}

  public get<T>(url: string, params?: any): Observable<T> {
    return this.httpClient.get<T>(url, this.getRequestOptions(params))
      .pipe(catchError((error) => this.restClientErrorHandler.handleError(error)));
  }

  public post<T>(url: string, data: any, httpHeaders?: HttpHeaders): Observable<T> {
    return this.httpClient.post<T>(url, data, this.getRequestOptions({}, httpHeaders))
      .pipe(catchError((error) => this.restClientErrorHandler.handleError(error)));
  }

  public put<T>(url: string, data: any): Observable<T> {
    return this.httpClient.put<T>(url, data, this.getRequestOptions({}))
      .pipe(catchError((error) => this.restClientErrorHandler.handleError(error)));
  }

  public delete<T>(url: string, params?: any): Observable<T> {
    return this.httpClient.delete<T>(url, this.getRequestOptions(params))
      .pipe(catchError((error) => this.restClientErrorHandler.handleError(error)));
  }

  private getRequestOptions(params: any, httpHeaders?: HttpHeaders) {
    return {
      headers: this.getHttpHeaders(httpHeaders),
      params: this.getHttpParams(params)
    };
  }

  private getHttpHeaders(httpHeaders: HttpHeaders): HttpHeaders {
    httpHeaders = httpHeaders || new HttpHeaders();
    return httpHeaders;
  }

  private getHttpParams(params: any): HttpParams {
    let httpParams = new HttpParams();
    forOwn(params, (value, key) => {
      if (value !== undefined && value !== null) {
          httpParams = httpParams.set(key, value);
      }
    });
    return httpParams;
  }
}
