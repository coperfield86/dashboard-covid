import {Injectable} from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';
import {throwError} from 'rxjs/internal/observable/throwError';

@Injectable({
    providedIn: 'root',
})
export class RestClientErrorHandlerService {

    constructor() {}

    public handleError(httpErrorResponse: HttpErrorResponse) {
      console.log(httpErrorResponse);
      return throwError(httpErrorResponse.error);
    }
}
