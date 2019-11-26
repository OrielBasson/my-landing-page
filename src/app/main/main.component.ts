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
  isNavbarVisible = false;

  constructor(private router: Router) {}

  ngOnInit() {
    particlesJS("particles-js", ParticlesConfig, function() {});
  }

  @HostListener("window:scroll", ["$event"])
  doSomething(event) {
    this.isNavbarVisible = true;
  }
}
