import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-about-section",
  templateUrl: "./about-section.component.html",
  styleUrls: ["./about-section.component.css"]
})
export class AboutSectionComponent implements OnInit {
  classPictureAnimation: string;
  classPulseAnimtaion2: string;
  classPulseAnimtaion: string;

  constructor() {}

  ngOnInit() {
    this.classPictureAnimation = "animated fadeInDown";
    this.classPulseAnimtaion2 = "animated pulse";
    this.classPulseAnimtaion = "animated pulse";
  }

  getPulseClassAnimation() {
    return this.classPulseAnimtaion;
  }

  deletePulseClassAnimation2(event) {
    this.classPulseAnimtaion2 = "";
  }

  setPulseClassAnimation2(event) {
    this.classPulseAnimtaion2 = "animated pulse";
  }

  getPulseClassAnimation2() {
    return this.classPulseAnimtaion2;
  }

  getAnimationPictureClass() {
    return this.classPictureAnimation;
  }

  changeClassProfilePicture(event) {
    this.classPictureAnimation = "animated pulse";
  }

  changeClassProfilePictureOut(event) {
    this.classPictureAnimation = "";
  }
}
