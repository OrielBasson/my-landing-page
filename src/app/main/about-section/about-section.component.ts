import { Component, OnInit } from "@angular/core";
import Swiper from "swiper";

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
    var swiper = new Swiper(".swiper-container", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 3,
        stretch: 5,
        depth: 700,
        modifier: 1,
        slideShadows: false
      },
      pagination: {
        el: ".swiper-pagination"
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }
    });

    this.classPictureAnimation = "animated fadeInDown";
    this.classPulseAnimtaion2 = "animated pulse";
    this.classPulseAnimtaion = "animated pulse";
  }

  getPulseClassAnimation() {
    return this.classPulseAnimtaion;
  }

  deletePulseClassAnimation(event) {
    this.classPulseAnimtaion = "";
  }

  setPulseClassAnimation(event) {
    this.classPulseAnimtaion = "animated pulse";
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
