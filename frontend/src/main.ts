import { bootstrapApplication } from "@angular/platform-browser";
import { AppComponent } from "./app/app.component";
import { provideRouter, RouterModule } from "@angular/router";
import routeConfig from "./routes";
import { importProvidersFrom } from "@angular/core";

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routeConfig),
    importProvidersFrom(RouterModule) // Đảm bảo RouterModule được cung cấp
  ],
}).catch((err) => console.error(err));