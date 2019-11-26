import { Component, OnInit, HostListener } from "@angular/core";
import ParticlesConfig from "../../../assets/data/ParticlesConfig.json";
import { Router } from "@angular/router";
import Swiper from "swiper";

declare var particlesJS: any;

@Component({
  selector: "app-home-section",
  templateUrl: "./home-section.component.html",
  styleUrls: ["./home-section.component.css"]
})
export class HomeSectionComponent implements OnInit {
  navbarClassAnimation: string = "animated bounceInLeft";
  classAnimation: string;
  classPulseAnimtaion: string;
  isNavbarVisible = false;

  constructor() {}

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
