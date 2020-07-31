import { Routes } from "@angular/router";

import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { IconsComponent } from "../../pages/icons/icons.component";
import { MapComponent } from "../../pages/map/map.component";
import { NotificationsComponent } from "../../pages/notifications/notifications.component";
import { UserComponent } from "../../pages/user/user.component";
import { HomeComponent } from "../../pages/home/home.component";
import { MeetingsComponent } from "../../pages/meetings/meetings.component";
import { MeetingDetailsComponent } from "../../pages/meetings/meetingDetails.component";
import { LoginComponent } from "../../pages/login/login.component";
import { TablesComponent } from "../../pages/tables/tables.component";
import { TypographyComponent } from "../../pages/typography/typography.component";
import { NotificationDetailsComponent } from "../../pages/notificationDetails/notificationDetails.component";
// import { RtlComponent } from "../../pages/rtl/rtl.component";

export const AdminLayoutRoutes: Routes = [
  //{ path: "login", component: LoginComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "icons", component: IconsComponent },
  { path: "maps", component: MapComponent },
  { path: "notifications", component: NotificationsComponent },
  { path: "user", component: UserComponent },
  { path: "home", component: HomeComponent },
  { path: "meetings", component: MeetingsComponent },
  { path: "meetingDetails", component: MeetingDetailsComponent },
  { path: "tables", component: TablesComponent },
  { path: "typography", component: TypographyComponent },
  { path: "notificationDetails", component: NotificationDetailsComponent },
  // { path: "rtl", component: RtlComponent }
];
