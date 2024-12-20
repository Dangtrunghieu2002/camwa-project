import { Component } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { CommonModule } from "@angular/common";
import { RouterModule, Router } from "@angular/router";
import { SidebarAdminComponent } from "./components/sidebar-admin/sidebar-admin.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";

@Component({
  selector: "app-root",
  standalone: true,
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  // imports: [SidebarComponent, RouterModule],
  imports: [SidebarAdminComponent, RouterModule,CommonModule,AppRoutingModule],
})
export class AppComponent {
  constructor(private router: Router) {}

  isLoginPage(): boolean {
    return this.router.url === "/login";
  }
}