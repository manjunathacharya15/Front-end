import React from 'react';



const Toaster = React.lazy(() => import('./views/notifications/toaster/Toaster'));
const Tables = React.lazy(() => import('./views/base/tables/Tables'));

const Breadcrumbs = React.lazy(() => import('./views/base/breadcrumbs/Breadcrumbs'));
const Cards = React.lazy(() => import('./views/base/cards/Cards'));
const Carousels = React.lazy(() => import('./views/base/carousels/Carousels'));
const Collapses = React.lazy(() => import('./views/base/collapses/Collapses'));
const BasicForms = React.lazy(() => import('./views/base/forms/BasicForms'));

const Jumbotrons = React.lazy(() => import('./views/base/jumbotrons/Jumbotrons'));
const ListGroups = React.lazy(() => import('./views/base/list-groups/ListGroups'));
const Navbars = React.lazy(() => import('./views/base/navbars/Navbars'));
const Navs = React.lazy(() => import('./views/base/navs/Navs'));
const Paginations = React.lazy(() => import('./views/base/paginations/Pagnations'));
const Popovers = React.lazy(() => import('./views/base/popovers/Popovers'));
const ProgressBar = React.lazy(() => import('./views/base/progress-bar/ProgressBar'));
const Switches = React.lazy(() => import('./views/base/switches/Switches'));

const Tabs = React.lazy(() => import('./views/base/tabs/Tabs'));
const Tooltips = React.lazy(() => import('./views/base/tooltips/Tooltips'));
const BrandButtons = React.lazy(() => import('./views/buttons/brand-buttons/BrandButtons'));
const ButtonDropdowns = React.lazy(() => import('./views/buttons/button-dropdowns/ButtonDropdowns'));
const ButtonGroups = React.lazy(() => import('./views/buttons/button-groups/ButtonGroups'));
const Buttons = React.lazy(() => import('./views/buttons/buttons/Buttons'));
const Charts = React.lazy(() => import('./views/charts/Charts'));
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));
const CoreUIIcons = React.lazy(() => import('./views/icons/coreui-icons/CoreUIIcons'));
const Flags = React.lazy(() => import('./views/icons/flags/Flags'));
const Brands = React.lazy(() => import('./views/icons/brands/Brands'));
const Alerts = React.lazy(() => import('./views/notifications/alerts/Alerts'));
const Badges = React.lazy(() => import('./views/notifications/badges/Badges'));
const Modals = React.lazy(() => import('./views/notifications/modals/Modals'));
const Colors = React.lazy(() => import('./views/theme/colors/Colors'));
const Typography = React.lazy(() => import('./views/theme/typography/Typography'));
const Widgets = React.lazy(() => import('./views/widgets/Widgets'));
const Users = React.lazy(() => import('./views/users/Users'));
const User = React.lazy(() => import('./views/users/User'));
const Userrs = React.lazy(() => import('./views/base/Instructor/Users'));
const Userr = React.lazy(() => import('./views/base/Instructor/User'));
const Catagory=React.lazy(() => import('./views/base/catagory/Users'));
const Catagoryy=React.lazy(() => import('./views/base/catagory/User'));
const Trainers=React.lazy(() => import('./views/base/userrs/Users'));
const Trainer=React.lazy(() => import('./views/base/userrs/User'));
const Videos=React.lazy(() => import('./views/base/video/Users'));
const Video=React.lazy(() => import('./views/base/video/user'));
const Dashboardss=React.lazy(() => import('./views/base/Dashboards/Users'));
const Dashboards=React.lazy(() => import('./views/base/Dashboards/User'));
const Subcatagorys=React.lazy(() => import('./views/base/Lowerbody/Users'));
const Subcatagory=React.lazy(() => import('./views/base/Lowerbody/User'));
const Packagess=React.lazy(() => import('./views/base/Packages/Users'));
const Packages=React.lazy(() => import('./views/base/Packages/User'));
const Upperbodys=React.lazy(() => import('./views/base/upperbody/Users'));
const Upperbody=React.lazy(() => import('./views/base/Packages/User'));
const VideoListings=React.lazy(() => import('./views/base/Videolisting/Users'));
const VideoListing=React.lazy(() => import('./views/base/Videolisting/User'));
const Filterings=React.lazy(() => import('./views/base/Filtering/Users'));
const Filtering=React.lazy(() => import('./views/base//Filtering/User'));

const Login=React.lazy(() => import('./componets/login.componet'));
const Loginn=React.lazy(() => import('./componets/trainerlogin.componet'));
const VideoLisgs=React.lazy(() => import('./views/base/VideoListingg/Users'));
const VideoLisg=React.lazy(() => import('./views/base/VideoListingg/User'));
const Uppercomponet=React.lazy(() => import('./componets/upperbody.componet'));
const Lowercomponet=React.lazy(() => import('./componets/lowerbody.componet'));
const Videocomponet=React.lazy(() => import('./componets/video.componet'));
const Videoscomponet=React.lazy(() => import('./componets/videos.componet'));
const Packagescomponet=React.lazy(() => import('./componets/package.componet'));
const Addvideocomponet=React.lazy(() => import('./componets/addvideo.componet'));








const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/theme', name: 'Theme', component: Colors, exact: true },
  { path: '/theme/colors', name: 'Colors', component: Colors },
  { path: '/theme/typography', name: 'Typography', component: Typography },
  { path: '/base', name: 'Base', component: Cards, exact: true },
  { path: '/base/breadcrumbs', name: 'Breadcrumbs', component: Breadcrumbs },
  { path: '/base/cards', name: 'Cards', component: Cards },
  { path: '/base/carousels', name: 'Carousel', component: Carousels },
  { path: '/base/collapses', name: 'Collapse', component: Collapses },
  { path: '/base/forms', name: 'Forms', component: BasicForms },
  { path: '/base/jumbotrons', name: 'Jumbotrons', component: Jumbotrons },
  { path: '/base/list-groups', name: 'List Groups', component: ListGroups },
  { path: '/base/navbars', name: 'Navbars', component: Navbars },
  { path: '/base/navs', name: 'Navs', component: Navs },
  { path: '/base/paginations', name: 'Paginations', component: Paginations },
  { path: '/base/popovers', name: 'Popovers', component: Popovers },
  { path: '/base/progress-bar', name: 'Progress Bar', component: ProgressBar },
  { path: '/base/switches', name: 'Switches', component: Switches },
  { path: '/base/tables', name: 'Tables', component: Tables },
  { path: '/base/tabs', name: 'Tabs', component: Tabs },
  { path: '/base/tooltips', name: 'Tooltips', component: Tooltips },
  { path: '/buttons', name: 'Buttons', component: Buttons, exact: true },
  { path: '/buttons/buttons', name: 'Buttons', component: Buttons },
  { path: '/buttons/button-dropdowns', name: 'Dropdowns', component: ButtonDropdowns },
  { path: '/buttons/button-groups', name: 'Button Groups', component: ButtonGroups },
  { path: '/buttons/brand-buttons', name: 'Brand Buttons', component: BrandButtons },
  { path: '/charts', name: 'Charts', component: Charts },
  { path: '/icons', exact: true, name: 'Icons', component: CoreUIIcons },
  { path: '/icons/coreui-icons', name: 'CoreUI Icons', component: CoreUIIcons },
  { path: '/icons/flags', name: 'Flags', component: Flags },
  { path: '/icons/brands', name: 'Brands', component: Brands },
  { path: '/notifications', name: 'Notifications', component: Alerts, exact: true },
  { path: '/notifications/alerts', name: 'Alerts', component: Alerts },
  { path: '/notifications/badges', name: 'Badges', component: Badges },
  { path: '/notifications/modals', name: 'Modals', component: Modals },
  { path: '/notifications/toaster', name: 'Toaster', component: Toaster },
  { path: '/widgets', name: 'Widgets', component: Widgets },
  { path: '/users', exact: true,  name: 'Users', component: Users },
  { path: '/users/:id', exact: true, name: 'User Details', component: User },
  { path: '/Instructor', exact: true,  name: 'Users', component: Userrs },
  { path: '/Instructor/:id', exact: true, name: 'User Details', component: Userr },
  { path: '/catagory', exact: true,  name: 'Category', component: Catagory },
  { path: '/catagory/:id', exact: true, name: 'User Details', component: Catagoryy },
  { path: '/userrs', exact: true,  name: 'Users', component: Trainers },
  { path: '/userrs/:id', exact: true, name: 'User Details', component: Trainer },
  { path: '/video', exact: true,  name: 'Users', component: Videos },
  { path: '/video/:id', exact: true, name: 'User Details', component: Video },
  { path: '/Dashboards', exact: true,  name: 'Users', component: Dashboardss },
  { path: '/Dashboards/:id', exact: true, name: 'User Details', component: Dashboards },
  { path: '/Lowerbody', exact: true,  name: 'Lowerbody', component: Subcatagorys },
  { path: '/Lowerbody/:id', exact: true, name: 'User Details', component: Subcatagory },
  { path: '/Packages', exact: true,  name: 'Users', component: Packagess },
  { path: '/Packages/:id', exact: true, name: 'User Details', component: Packages },
  { path: '/upperbody', exact: true,  name: 'Upperbody', component: Upperbodys },
  { path: '/upperbody/:id', exact: true, name: 'UpperBody', component: Upperbody },
  { path: '/Videolisting', exact: true,  name: 'Users', component: VideoListings },
  { path: '/Videolisting/:id', exact: true, name: 'VideoListing', component: VideoListing },
  { path: '/Filtering', exact: true,  name: 'Filtering', component: Filterings },
  { path: '/Filtering/:id', exact: true, name: 'Filtering', component: Filtering },
  { path: '/welcome', exact: true,  name: 'NewUser', component: Login},
  { path: '/trainer', exact: true,  name: 'NewTrainer', component: Loginn},
  { path: '/VideoListingg', exact: true,  name: 'VideoListing', component: VideoLisgs },
  { path: '/VideoListingg/:id', exact: true, name: 'VideoListing', component: VideoLisg },
  { path: '/come', exact: true,  name: 'NewLowerbody', component: Lowercomponet},
  { path: '/videos', exact: true,  name: 'NewVideo', component: Videocomponet},
  { path: '/videoss', exact: true,  name: 'NewVideos', component: Videoscomponet},
  { path: '/package', exact: true,  name: 'NewPackages', component: Packagescomponet},
  { path: '/addvideo', exact: true,  name: 'NewVideo', component: Addvideocomponet},
  { path: '/wel', exact: true,  name: 'NewUpperbody', component: Uppercomponet},
  


  




  

  
  
  
];

export default routes;
