import React, { Children } from 'react'
import CIcon from '@coreui/icons-react'

const _nav =  [
  {
    _tag: 'CSidebarNavItem',
    name: 'ADMIN PANEL',
    to: '/',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,
    badge: {
      color: 'info',
      text: 'NEW',
    }
  },
  
  
 
    {
      _tag: 'CSidebarNavItem',
      name: 'DASHBOARD',
      to: '/',
      icon: 'cil-puzzle',
    },
  
    {
      _tag: 'CSidebarNavDropdown',
  name: 'USER',
    to: '',
    icon: 'cil-group',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Customers',
        to: '/users', 
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Trainers',
        to: '/userrs', 
      }
    ]
 
    },
    {
      _tag: 'CSidebarNavDropdown',
  name: 'PACKAGES',
    to: '',
    icon: 'cil-storage',
    _children:[
      {
        _tag: 'CSidebarNavItem',
      name: ' Category',
      to: '/catagory',
     
     
      },
     
      {
        _tag: 'CSidebarNavDropdown',
    name: 'SubCategory',
    to: '',
    _children:[
      {
        _tag:'CSidebarNavItem',
        name:'Upperbody',
        to:'/Upperbody'
      },
      {
        _tag:'CSidebarNavItem',
        name:'Lowerbody',
        to:'/Lowerbody'

      }
    ]
    
      },
     {
            _tag: 'CSidebarNavItem',
          name: 'Videos',
          to: '/video',
         },
         {
          _tag: 'CSidebarNavItem',
        name: 'Packages',
        to: '/Packages',
       },
    ]
 
    },
    {
      _tag: 'CSidebarNavDropdown',
  name: 'Program Management',
    to: '',
    icon: 'cil-group',
    _children:[
      {
        _tag: 'CSidebarNavDropdown',
        name: 'Program Listing',
        to: '',
        _children:[
          {
            _tag:'CSidebarNavItem',
            name:'Programs',
            to:'/Videolisting',
          },
          {
            _tag: 'CSidebarNavItem',
            name: 'ProgramSearch & Filtering',
            to: '/Filtering',
           
          },  {
            _tag: 'CSidebarNavItem',
            name: 'Subscribe without payment',
            to: '/addvideo',
          },
          {
            _tag: 'CSidebarNavItem',
            name: 'VideoListing',
            to: '/VideoListingg',
          },
         
        ]
      },
     

    ]
},
{
  _tag: 'CSidebarNavDropdown',
name: 'Content Management',
to: '',
icon: 'cil-notes',
_children:[
  {
    _tag: 'CSidebarNavItem',
    name: 'Instructor',
    to: '/ProgramInstructor',
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Exercise Name',
    to: '/ExerciseName',
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'FAQ',
    to: '/FAQ',
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Contact us Enquiries',
    to: '/ContactUs',
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Recommended Programs',
    to: '/RecommendedPrograms',
  },


]
  },

    
    
  {
    _tag: 'CSidebarNavItem',
  name: ' Category Management ',
  to: '',
  icon: 'cil-moon',
  
},
 


]

export default _nav
