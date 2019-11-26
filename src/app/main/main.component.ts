import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  ViewChildren,
  HostListener
} from "@angular/core";
import ParticlesConfig from "../../assets/data/ParticlesConfig.json";
import { Router } from "@angular/router";
import Swiper from "swiper";

declare var particlesJS: any;

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.css"],
  animations: []
})
export class MainComponent implements OnInit {
  navbarClassAnimation: string = "animated bounceInLeft";
  classAnimation: string;
  classPictureAnimation: string;
  classPulseAnimtaion: string;
  classPulseAnimtaion2: string;
  isNavbarVisible = false;

  constructor(private router: Router) {}

  ngOnInit() {
    var swiper = new Swiper(".swiper-container", {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 20,
        stretch: 10,
        depth: 1000,
        modifier: 1,
        slideShadows: false
      },
      pagination: {
        el: ".swiper-pagination"
      }
    });

    this.classPulseAnimtaion = "animated pulse";
    this.classAnimation = "animated fadeInUp";
    this.classPictureAnimation = "animated fadeInDown";
    this.classPulseAnimtaion2 = "animated pulse";

    particlesJS("particles-js", ParticlesConfig, function() {});
  }

  deletePulseClassAnimation(event) {
    this.classPulseAnimtaion = "";
  }

  setPulseClassAnimation(event) {
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

  getAnimationClass() {
    return this.classAnimation;
  }

  changeClassFunction(event) {
    this.classAnimation = "animated pulse";
  }

  changeClassFunctionOut(event) {
    this.classAnimation = "";
  }

  getNavbarAnimationClass() {
    return this.navbarClassAnimation;
  }

  scrollToSecond() {
    document.getElementById("about").scrollIntoView();
  }

  scrollToThird() {
    document.getElementById("projects").scrollIntoView();
  }

  @HostListener("window:scroll", ["$event"])
  doSomething(event) {
    this.isNavbarVisible = true;
  }
}
