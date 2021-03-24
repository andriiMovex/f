import DashboardLayout from "@/layout/dashboard/DashboardLayout.vue";
// GeneralViews
import NotFound from "@/pages/NotFoundPage.vue";

// Admin pages
const Dashboard = () => import(/* webpackChunkName: "dashboard" */"@/pages/Dashboard.vue");
const Profile = () => import(/* webpackChunkName: "common" */ "@/pages/Profile.vue");
const Notifications = () => import(/* webpackChunkName: "common" */"@/pages/Notifications.vue");
const Icons = () => import(/* webpackChunkName: "common" */ "@/pages/Icons.vue");
const Maps = () => import(/* webpackChunkName: "common" */ "@/pages/Maps.vue");
const Typography = () => import(/* webpackChunkName: "common" */ "@/pages/Typography.vue");
const Service = () => import(/* webpackChunkName: "common" */ "@/pages/Service.vue");
const TableList = () => import(/* webpackChunkName: "common" */ "@/pages/TableList.vue");

const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/dashboard",
    children: [
      {
        path: "home",
        name: "home",
        component: Dashboard
      },
      {
        path: "makecall",
        name: "makecall",
        component: Profile
      },
      {
        path: "chat",
        name: "chat",
        component: Notifications
      },
      {
        path: "camera",
        name: "camera",
        component: Icons
      },
      {
        path: "storage",
        name: "storage",
        component: Maps
      },
      {
        path: "service",
        name: "service",
        component: Service
      },
      {
        path: "checklist",
        name: "checklist",
        component: TableList
      }
    ]
  },
  { path: "*", component: NotFound },
];

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes;
