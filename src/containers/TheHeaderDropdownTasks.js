import React from 'react'
import {Link} from 'react-router-dom'
import {
  CBadge,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CProgress
} from '@coreui/react'

import CIcon from '@coreui/icons-react'

const TheHeaderDropdownTasks = () => {
  const itemsCount = 5
  return (
  <Link Link to="/welcome" className="nav-link" ><span><CIcon name="cil-Library-Add"/></span>  </Link>
  )
}

export default TheHeaderDropdownTasks