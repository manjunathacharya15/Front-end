import React, { Children } from 'react'
import CIcon from '@coreui/icons-react'

const _nav =  [
  {
    _tag: 'CSidebarNavItem',
    name: 'ADMIN PANEL',
    to: '',
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
      _tag: 'CSidebarNavItem',
  name: 'PACKAGES',
    to: '/packages',
    icon: 'cil-storage',
 
    },
    {
      _tag: 'CSidebarNavDropdown',
  name: 'Program Management',
    to: '',
    icon: 'cil-layers',
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
          name: 'Videolisting',
          to: '/video',
         },
            {
            _tag: 'CSidebarNavItem',
            name: 'Subscribe without payment',
            to: '/addvideo',
          },
          {
            _tag: 'CSidebarNavItem',
            name: 'Liveclasses',
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
    _tag: 'CSidebarNavDropdown',
  name: ' Category Management ',
  to: '',
  icon: 'cil-graph',
  _children:[
    {
      _tag: 'CSidebarNavItem',
      name: 'Category ',
      to: '/Categorymanagement',
    },
    {
      _tag: 'CSidebarNavItem',
      name: 'Inst Excr Details',
      to: '',
    },
    {
      _tag: 'CSidebarNavItem',
      name: 'Cust Excr Details',
      to: '',
    },
  ]
  
},
{
  _tag: 'CSidebarNavItem',
name: ' Payment List ',
to: '/Lowerbody',
icon: 'cil-dollar',
},
{
  _tag: 'CSidebarNavItem',
name: ' Block Users ',
to: '',
icon: 'cil-lock-locked',
},
{
  _tag: 'CSidebarNavItem',
name: ' Span ',
to: '',
icon: 'cil-moon',
},
 


]

export default _nav
