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
    this.isHomeActive = true;
    this.isAboutActive = false;
    this.isProjectsActive = false;
    this.isContactActive = false;
  }

  scrollToAbout(event) {
    document.getElementById("about").scrollIntoView(true);
    this.isAboutActive = true;
    this.isProjectsActive = false;
    this.isHomeActive = false;
    this.isContactActive = false;
  }

  scrollToProjects(event) {
    document.getElementById("projects").scrollIntoView(true);
    this.isProjectsActive = true;
    this.isAboutActive = false;
    this.isHomeActive = false;
    this.isContactActive = false;
  }

  scrollToContact(event) {
    document.getElementById("contact").scrollIntoView(true);
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
