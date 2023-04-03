import { Component } from "@angular/core"
import { AppService } from "./app.service"

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "angular-nginx-csp"

  constructor(private service: AppService) {
    this.service.get().then(console.log).catch(console.error)
  }
}
