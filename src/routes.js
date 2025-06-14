/*!

=========================================================
* Black Dashboard PRO React - v1.2.4
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-pro-react
* Copyright 2024 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import VectorMap from "views/maps/VectorMap.js";
import GoogleMaps from "views/maps/GoogleMaps.js";
import FullScreenMap from "views/maps/FullScreenMap.js";
import ReactTables from "views/tables/ReactTables.js";
import RegularTables from "views/tables/RegularTables.js";
import ExtendedTables from "views/tables/ExtendedTables.js";
import Wizard from "views/forms/Wizard.js";
import ValidationForms from "views/forms/ValidationForms.js";
import ExtendedForms from "views/forms/ExtendedForms.js";
import RegularForms from "views/forms/RegularForms.js";
import Calendar from "views/Calendar.js";
import Widgets from "views/Widgets.js";
import Charts from "views/Charts.js";
import Dashboard from "views/Dashboard.js";
import Buttons from "views/components/Buttons.js";
import SweetAlert from "views/components/SweetAlert.js";
import Notifications from "views/components/Notifications.js";
import Grid from "views/components/Grid.js";
import Typography from "views/components/Typography.js";
import Panels from "views/components/Panels.js";
import Icons from "views/components/Icons.js";
import Pricing from "views/pages/Pricing.js";
import Register from "views/pages/Register.js";
import Timeline from "views/pages/Timeline.js";
import User from "views/pages/User.js";
import Login from "views/pages/Login.js";
import Rtl from "views/pages/Rtl.js";
import Lock from "views/pages/Lock.js";
import Insight from "views/segment/insight";
import RFM from "views/segment/rfm";
import SegmentList from "views/segment/segmentList";
import Campaigns from "views/campaigns";
import Events from "views/Analytics/Event";
import CreateEvent from "views/Analytics/Event/newEvent";
import PushNotification from "views/campaigns/pushNotification";
import Journey from "views/Journey";
import SMS from "views/campaigns/sms";
import AllUsers from "views/segment/PastBehavior/allUsers";
import FirstTime from "views/segment/liveSegment/firstTime";
import CustomerList from "views/Customer/CustomerList";
import FindPeople from "views/segment/FindPeople";
import CustomerProfile from "views/Customer/CustomerProfile";
import ViewSegment from "views/segment/ViewSegment";

const routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-chart-pie-36",
    component: <Dashboard />,
    layout: "/admin",
  },
  {
    collapse: true,
    name: "Understand",
    icon: "tim-icons icon-chart-bar-32",
    state: "mapCollapse",
    views: [
      {
        collapse: true,
        name: "Analytics",
        mini: "A",
        state: "analyticsCollapse",
        views: [
          {
            name: "Events",
            layout: "/admin",
            mini: "E",
            path: "/analytics/event",
            component: <Events />,
          },
          // {
          //   name: "Funnels",
          //   path: "#",
          //   layout: "/admin",
          //   mini: "F",
          // },
          // {
          //   name: "Cohorts",
          //   path: "#",
          //   layout: "/admin",
          //   mini: "C",
          // },
          // {
          //   name: "Trends",
          //   path: "#",
          //   layout: "/admin",
          //   mini: "T",
          // },
          // {
          //   name: "Pivots",
          //   path: "#",
          //   layout: "/admin",
          //   mini: "P",
          // },
          // {
          //   name: "Flows",
          //   path: "#",
          //   layout: "/admin",
          //   mini: "F",
          // },
          // {
          //   name: "Real Impact",
          //   path: "#",
          //   layout: "/admin",
          //   mini: "E",
          // },
        ],
      },

      {
        name: "Segments",
        mini: "S",
        collapse: true,
        state: "segmentCollapse", // Add a unique state
        views: [
          {
            name: "Segment",
            path: "/segment/segmentList",
            layout: "/admin",
            mini: "S",
            component: <SegmentList />,
          },
          {
            name: "RFM",
            path: "/segment/rfm",
            layout: "/admin",
            mini: "R",
            component: <RFM />,
          },
          {
            name: "Find People",
            path: "/segment/find-people",
            layout: "/admin",
            mini: "FP",
            component: <FindPeople />,
          },
        ],
      },
    ],
  },
  {
    collapse: true,
    name: "Messages",
    icon: "tim-icons icon-email-85",
    state: "pagesCollapse",
    views: [
      {
        name: "Campaigns",
        mini: "C",
        layout: "/admin",
        path: "/campaigns",
        component: <Campaigns />,
      },
      {
        name: "Journeys",
        mini: "J",
        path: "/Journey",
        layout: "/admin",
        component: <Journey />,
      },
      //  {
      //   name: "Grid",
      //   mini: "G",
      //   path: "/grid",
      //   layout: "/admin",
      //   component: <Grid />,
      // },
    ],
  },
  {
    path: "/customer-list",
    name: "Customer",
    rtlName: "الرسوم البيانية",
    icon: "tim-icons icon-single-02",
    component: <CustomerList />,
    layout: "/admin",
  },
  {
    collapse: true,
    name: "Pages",
    rtlName: "صفحات",
    icon: "tim-icons icon-image-02",
    state: "pagesCollapse",
    invisible: true,
    views: [
      {
        path: "/pricing",
        name: "Pricing",
        rtlName: "عالتسعير",
        mini: "P",
        rtlMini: "ع",
        component: <Pricing />,
        layout: "/auth",
      },
      {
        path: "/rtl-support",
        name: "RTL Support",
        rtlName: "صودعم رتل",
        mini: "RS",
        rtlMini: "صو",
        component: <Rtl />,
        layout: "/rtl",
      },
      {
        path: "/timeline",
        name: "Timeline",
        rtlName: "تيالجدول الزمني",
        mini: "T",
        rtlMini: "تي",
        component: <Timeline />,
        layout: "/admin",
      },
      {
        path: "/login",
        name: "Login",
        rtlName: "هعذاتسجيل الدخول",
        mini: "L",
        rtlMini: "هعذا",
        component: <Login />,
        layout: "/auth",
      },
      {
        path: "/register",
        name: "Register",
        rtlName: "تسجيل",
        mini: "R",
        rtlMini: "صع",
        component: <Register />,
        layout: "/auth",
      },
      {
        path: "/lock-screen",
        name: "Lock Screen",
        rtlName: "اقفل الشاشة",
        mini: "LS",
        rtlMini: "هذاع",
        component: <Lock />,
        layout: "/auth",
      },
      {
        path: "/user-profile",
        name: "User Profile",
        rtlName: "ملف تعريفي للمستخدم",
        mini: "UP",
        rtlMini: "شع",
        component: <User />,
        layout: "/admin",
      },
    ],
  },
  {
    collapse: true,
    name: "Components",
    rtlName: "المكونات",
    icon: "tim-icons icon-molecule-40",
    state: "componentsCollapse",
    invisible: true,
    views: [
      {
        collapse: true,
        name: "Multi Level Collapse",
        rtlName: "انهيار متعدد المستويات",
        mini: "MLT",
        rtlMini: "ر",
        state: "multiCollapse",
        views: [
          {
            path: "/buttons",
            name: "Buttons",
            rtlName: "وصفت",
            mini: "B",
            rtlMini: "ب",
            component: <Buttons />,
            layout: "/admin",
          },
        ],
      },
      {
        path: "/buttons",
        name: "Buttons",
        rtlName: "وصفت",
        mini: "B",
        rtlMini: "ب",
        component: <Buttons />,
        layout: "/admin",
      },
      {
        path: "/segment/insight",
        name: "insight",
        rtlName: "وصفت",
        mini: "B",
        rtlMini: "ب",
        component: <Insight />,
        layout: "/admin",
      },
      {
        path: "/analytics/event/create",
        name: "Create Event",
        rtlName: "وصفت",
        mini: "CE",
        rtlMini: "ب",
        component: <CreateEvent />,
        layout: "/admin",
      },
      {
        path: "/campaigns/new/push",
        name: "Push Notification",
        rtlName: "وصفت",
        mini: "PN",
        rtlMini: "ب",
        component: <PushNotification />,
        layout: "/admin",
      },
      {
        path: "/campaigns/new/sms",
        name: "SMS",
        rtlName: "وصفت",
        mini: "S",
        rtlMini: "ب",
        component: <SMS />,
        layout: "/admin",
      },
      {
        path: "/grid-system",
        name: "Grid System",
        rtlName: "نظام الشبكة",
        mini: "GS",
        rtlMini: "زو",
        component: <Grid />,
        layout: "/admin",
      },
      {
        path: "/panels",
        name: "Panels",
        rtlName: "لوحات",
        mini: "P",
        rtlMini: "ع",
        component: <Panels />,
        layout: "/admin",
      },
      {
        path: "/sweet-alert",
        name: "Sweet Alert",
        rtlName: "الحلو تنبيه",
        mini: "SA",
        rtlMini: "ومن",
        component: <SweetAlert />,
        layout: "/admin",
      },
      {
        path: "/notifications",
        name: "Notifications",
        rtlName: "إخطارات",
        mini: "N",
        rtlMini: "ن",
        component: <Notifications />,
        layout: "/admin",
      },
      {
        path: "/icons",
        name: "Icons",
        rtlName: "الرموز",
        mini: "I",
        rtlMini: "و",
        component: <Icons />,
        layout: "/admin",
      },
      {
        path: "/typography",
        name: "Typography",
        rtlName: "طباعة",
        mini: "T",
        rtlMini: "ر",
        component: <Typography />,
        layout: "/admin",
      },
    ],
  },
  {
    collapse: true,
    name: "Forms",
    rtlName: "إستمارات",
    icon: "tim-icons icon-notes",
    state: "formsCollapse",
    invisible: true,
    views: [
      {
        path: "/regular-forms",
        name: "Regular Forms",
        rtlName: "أشكال عادية",
        mini: "RF",
        rtlMini: "صو",
        component: <RegularForms />,
        layout: "/admin",
      },
      {
        path: "/extended-forms",
        name: "Extended Forms",
        rtlName: "نماذج موسعة",
        mini: "EF",
        rtlMini: "هوو",
        component: <ExtendedForms />,
        layout: "/admin",
      },
      {
        path: "/validation-forms",
        name: "Validation Forms",
        rtlName: "نماذج التحقق من الصحة",
        mini: "VF",
        rtlMini: "تو",
        component: <ValidationForms />,
        layout: "/admin",
      },
      {
        path: "/wizard",
        name: "Wizard",
        rtlName: "ساحر",
        mini: "W",
        rtlMini: "ث",
        component: <Wizard />,
        layout: "/admin",
      },
    ],
  },
  {
    collapse: true,
    name: "Tables",
    rtlName: "الجداول",
    icon: "tim-icons icon-puzzle-10",
    state: "tablesCollapse",
    invisible: true,
    views: [
      {
        path: "/regular-tables",
        name: "Regular Tables",
        rtlName: "طاولات عادية",
        mini: "RT",
        rtlMini: "صر",
        component: <RegularTables />,
        layout: "/admin",
      },
      {
        path: "/extended-tables",
        name: "Extended Tables",
        rtlName: "جداول ممتدة",
        mini: "ET",
        rtlMini: "هور",
        component: <ExtendedTables />,
        layout: "/admin",
      },
      {
        path: "/react-tables",
        name: "React Tables",
        rtlName: "رد فعل الطاولة",
        mini: "RT",
        rtlMini: "در",
        component: <ReactTables />,
        layout: "/admin",
      },
    ],
  },
  {
    collapse: true,
    name: "Maps",
    rtlName: "خرائط",
    icon: "tim-icons icon-pin",
    state: "mapsCollapse",
    invisible: true,
    views: [
      {
        path: "/google-maps",
        name: "Google Maps",
        rtlName: "خرائط جوجل",
        mini: "GM",
        rtlMini: "زم",
        component: <GoogleMaps />,
        layout: "/admin",
      },
      {
        path: "/full-screen-map",
        name: "Full Screen Map",
        rtlName: "خريطة كاملة الشاشة",
        mini: "FSM",
        rtlMini: "ووم",
        component: <FullScreenMap />,
        layout: "/admin",
      },
      {
        path: "/vector-map",
        name: "Vector Map",
        rtlName: "خريطة المتجه",
        mini: "VM",
        rtlMini: "تم",
        component: <VectorMap />,
        layout: "/admin",
      },
    ],
  },
  {
    path: "/widgets",
    name: "Widgets",
    rtlName: "الحاجيات",
    icon: "tim-icons icon-settings",
    component: <Widgets />,
    invisible: true,
    layout: "/admin",
  },
  {
    path: "/charts",
    name: "Charts",
    rtlName: "الرسوم البيانية",
    icon: "tim-icons icon-chart-bar-32",
    component: <Charts />,
    invisible: true,
    layout: "/admin",
  },
  {
    path: "/calendar",
    name: "Calendar",
    rtlName: "التقويم",
    icon: "tim-icons icon-time-alarm",
    component: <Calendar />,
    invisible: true,
    layout: "/admin",
  },
  {
    path: "/past-behavior/all-users",
    name: "All User",
    rtlName: "التقويم",
    icon: "bi bi-person-circle",
    component: <AllUsers />,
    layout: "/admin",
    // invisible: true,
  },
  {
    path: "/live-segment/app-launch",
    name: "First Time App Launch",
    rtlName: "التقويم",
    icon: "bi bi-hourglass-split",
    component: <FirstTime />,
    layout: "/admin",
    // invisible: true,
  },
  {
    path: "/customer-detail",
    component: <CustomerProfile />,
    invisible: true,
    layout: "/admin",
    name: "Customer Detail",
  },
  {
    path: "/segment/view",
    component: <ViewSegment />,
    invisible: true,
    layout: "/admin",
    name: "View Segment",
  },
];

export default routes;
