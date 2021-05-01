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
  _tag: 'CSidebarNavDropdown',
  name: 'DASHBOARD',
  route: '/',
  icon: 'cil-puzzle',
  _children: [
    {
      _tag: 'CSidebarNavItem',
      name: 'Dashboard',
      to: '/Dashboards',
    },
  ]
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
        to:'/Subcatagory'

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
    
    
 
 


]

export default _nav
