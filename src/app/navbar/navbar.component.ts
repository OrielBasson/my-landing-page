import { Component, OnInit, HostListener } from "@angular/core";
@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  isProjectsActive = false;
  isAboutActive = false;
  isHomeActive = false;
  isContactActive = false;

  constructor() {}

  ngOnInit() {}

  scrollToHome(event) {
    document.getElementById("home").scrollIntoView(true);
  }

  scrollToAbout(event) {
    document.getElementById("about").scrollIntoView(true);
  }

  scrollToProjects(event) {
    document.getElementById("projects").scrollIntoView(true);
  }

  scrollToContact(event) {
    document.getElementById("contact").scrollIntoView(true);
  }

  turnProjectsActive(event) {
    this.isProjectsActive = true;
    this.isAboutActive = false;
    this.isHomeActive = false;
    this.isContactActive = false;
  }

  turnAboutActive(event) {
    this.isAboutActive = true;
    this.isProjectsActive = false;
    this.isHomeActive = false;
    this.isContactActive = false;
  }

  turnHomeActive(event) {
    this.isHomeActive = true;
    this.isAboutActive = false;
    this.isProjectsActive = false;
    this.isContactActive = false;
  }

  turnContactActive(event) {
    this.isContactActive = true;
    this.isHomeActive = false;
    this.isAboutActive = false;
    this.isProjectsActive = false;
  }
  // @HostListener("window:scroll", ["$event"])
  // doSomething(event) {
  //   this.isVisible = true;
  // }
}
