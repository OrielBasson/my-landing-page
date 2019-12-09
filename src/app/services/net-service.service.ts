import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { MailFormat } from "../models/app.models";

@Injectable({
  providedIn: "root"
})
export class NetServiceService {
  //BaseURL
  private BASE_URL = "https://3.134.77.249:8080/couponsystem";

  //PublicAPI - Send Mail
  private SEND_MAIL_URL = this.BASE_URL + "/sendEmail";

  private headers = new HttpHeaders({
    "Content-Type": "application/json"
  });

  constructor(private http: HttpClient) {}

  sendEmail(bodyOfMessage: MailFormat): Observable<any> {
    return this.http
      .post(this.SEND_MAIL_URL, JSON.stringify(bodyOfMessage), {
        headers: this.headers,
        responseType: "text" as "json",
        withCredentials: true
      })
      .pipe(catchError(err => this.handleError(err)));
  }

  private handleError(errorResponse: HttpErrorResponse) {
    if (errorResponse.error instanceof ErrorEvent) {
      console.log("Client Side Error: ", errorResponse.error.message);
      return throwError(errorResponse);
    } else {
      console.error("Server Side Error ", errorResponse);
      return throwError(errorResponse);
    }
  }
}
