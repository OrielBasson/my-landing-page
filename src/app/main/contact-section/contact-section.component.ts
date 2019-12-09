import { Component, OnInit } from "@angular/core";
import { ClipboardService } from "ngx-clipboard";
import { EmailServiceService } from "src/app/services/email-service.service";
import { MailFormat } from "src/app/models/app.models";

@Component({
  selector: "app-contact-section",
  templateUrl: "./contact-section.component.html",
  styleUrls: ["./contact-section.component.css"]
})
export class ContactSectionComponent implements OnInit {
  email: MailFormat;

  constructor(
    private _clipboardService: ClipboardService,
    private emailService: EmailServiceService
  ) {}

  ngOnInit() {
    this.initEmail();
  }

  initEmail() {
    this.email = {
      name: null,
      bodyOfMessage: null
    };
  }

  copyToClipBoard(text: string) {
    this._clipboardService.copyFromContent(text);
  }

  sendEmail(email: MailFormat) {
    console.log(email);
    this.emailService.sendEmail(email).subscribe((response: any) => {
      console.log(response);
    });
  }
}
