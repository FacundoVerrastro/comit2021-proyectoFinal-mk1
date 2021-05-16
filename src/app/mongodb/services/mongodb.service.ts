import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { fromEventPattern } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json", "Authorization": "c31z", "Access-Control-Allow-Origin": "*" })
};
@Injectable({
  providedIn: 'root'
})
export class MongodbService {

  constructor(private http: HttpClient) { }

  /**
     * Function to handle error when the server return an error
     *
     * @param error
     */
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error("An error occurred:", error.error.message);
    } else {
      // The backend returned an unsuccessful response code. The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // return an observable with a user-facing error message
    alert("Hubo un error con la conexion a la base de datos. Contactese con Soporte");
    return throwError(error);
  }

  /**
   * Function to extract the data when the server return some
   *
   * @param res
   */
  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  public getMaterial(nombre: String): Observable<any> {
    return this.http.get(`http://localhost:8080/api/getMaterial/${nombre}`, httpOptions).pipe(
      map((response: any) => {
        return response;
      }),
      catchError(this.handleError)
    );
  }
  public countType(type: String): Observable<any> {
    return this.http.get(`http://localhost:8080/api/countType/${type}`, httpOptions).pipe(
      map((response: any) => {
        return response;
      }),
      catchError(this.handleError)
    );
  }
  public getMaterialByRating(rating: Number) {
    return this.http.get(`http://localhost:8080/api/getMaterialByRating/${rating}`, httpOptions).pipe(
      map((response: any) => {
        return response;
      }),
      catchError(this.handleError)
    );
  }
  public getLastMaterial(cant: Number) {
    return this.http.get(`http://localhost:8080/api/getLastMaterial/${cant}`, httpOptions).pipe(
      map((response: any) => {
        return response;
      }),
      catchError(this.handleError)
    );
  }
  public getAllMaterial() {
    return this.http.get(`http://localhost:8080/api/getAllMaterial`, httpOptions).pipe(
      map((response: any) => {
        return response;
      }),
      catchError(this.handleError)
    );
  }

}