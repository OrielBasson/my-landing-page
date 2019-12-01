import { Component, OnInit } from "@angular/core";
import { ClipboardService } from "ngx-clipboard";

@Component({
  selector: "app-contact-section",
  templateUrl: "./contact-section.component.html",
  styleUrls: ["./contact-section.component.css"]
})
export class ContactSectionComponent implements OnInit {
  constructor(private _clipboardService: ClipboardService) {}

  ngOnInit() {}

  copyToClipBoard(text: string) {
    this._clipboardService.copyFromContent(text);
  }
}
