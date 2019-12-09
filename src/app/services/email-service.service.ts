import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { NetServiceService } from "./net-service.service";
import { MailFormat } from "../models/app.models";

@Injectable({
  providedIn: "root"
})
export class EmailServiceService {
  constructor(private netService: NetServiceService) {}

  sendEmail(bodyOfMessage: MailFormat): Observable<any> {
    return this.netService.sendEmail(bodyOfMessage);
  }
}
