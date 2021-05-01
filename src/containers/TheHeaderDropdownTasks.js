import React from 'react'
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
    <CDropdown
      inNav
      className="c-header-nav-item mx-2"
    >
      <CDropdownToggle className="c-header-nav-link" caret={false}>
        <CIcon name="cil-library-add" />
        <CBadge shape="pill" color="warning"></CBadge>
      </CDropdownToggle>
      <CDropdownMenu placement="bottom-end" className="pt-0">
        <CDropdownItem
          header
          tag="div"
          className="text-center"
          color="light"
        >
         
        </CDropdownItem>
        <CDropdownItem className="d-block">
          <div className="small mb-1">Username: <span
            className="float-right"><strong></strong></span></div>
          <input type="text" value=""/>
        </CDropdownItem>
        <CDropdownItem className="d-block">
          <div className="small mb-1">Email: <span className="float-right"><strong></strong></span></div>
          <input type="email" value=""/>
        </CDropdownItem>
        <CDropdownItem className="d-block">
          <div className="small mb-1">PhoneNumber<span className="float-right"><strong></strong></span></div>
          <input type="number" value=""/>
        </CDropdownItem>
        <CDropdownItem className="d-block">
          <div className="small mb-1"><span className="float-right"><strong></strong></span></div>
          <input type="button" value="AddNewUser"/>
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  )
}

export default TheHeaderDropdownTasks