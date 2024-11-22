import { from } from "rxjs";
import { Routes } from "@angular/router";
import { SidebarComponent } from "./app/components/sidebar/sidebar.component";
import { LecturerModuleViewComponent } from "./app/pages/lecturer-module-view/lecturer-module-view.component";
import { LecturerClassViewComponent } from "./app/pages/lecturer-class-view/lecturer-class-view.component";
import { FacultyAssistantModuleViewComponent } from "./app/pages/faculty-assistant-module-view/faculty-assistant-module-view.component";

import { FacultyAssistantClassViewComponent } from "./app/pages/faculty-assistant-class-view/faculty-assistant-class-view.component";
import { ClassDetailsViewComponent } from "./app/pages/class-details-view/class-details-view.component";

const routeConfig: Routes = [
  {
    path: "",
    component: SidebarComponent,
    title: "Sidebar",
  },
  {
    path: "lecturer-module-view",
    component: LecturerModuleViewComponent,
    title: "Lecturer Module View",
  },
  {
    path: "lecturer-class-view",
    component: LecturerClassViewComponent,
    title: "Lecturer Module View",
  },

  {
    path: "faculty-assistant-class-view",
    component: FacultyAssistantClassViewComponent,
    title: "Faculty Class View",
  },
  {
    path: "faculty-assistant-module-view",
    component: FacultyAssistantModuleViewComponent,
    title: "Faculty Module View",
  },

  // {
  //   path: "class-details-view",
  //   component: ClassDetailsViewComponent,
  //   title: "Class Details View",
  // },
];

export default routeConfig;