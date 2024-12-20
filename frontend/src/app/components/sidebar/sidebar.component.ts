import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  standalone: true,
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrl: "./sidebar.component.css",
  imports: [CommonModule],
})
export class SidebarComponent {
  loggedIn: boolean = false; // Set to `true` when the user is logged in
  username: string = "Ngoc Tran Hong"; // Change dynamically when logged in
}
