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
import { ScrollEvent } from "ngx-scroll-event";

declare var particlesJS: any;

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.css"],
  animations: []
})
export class MainComponent implements OnInit {
  isNavbarVisible = false;
  isAboutVisible = false;

  constructor(private router: Router) {}

  ngOnInit() {
    particlesJS("particles-js", ParticlesConfig, function() {});
  }

  // @HostListener("window:scroll", ["$event"])
  // doSomething(event) {

  // }

  @HostListener("window:scroll", ["$event"])
  public scrollHandler(event) {
    this.isNavbarVisible = true;
    this.isAboutVisible = true;
    let obj = document.getElementById("home");
    let objScrollHeight = Math.round(obj.scrollTop * 100) / 100;
    if (objScrollHeight === obj.scrollHeight - obj.offsetHeight - 0.55) {
      console.log("object to bottom");
    }
  }
}
