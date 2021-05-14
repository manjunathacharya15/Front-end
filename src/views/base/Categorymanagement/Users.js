import React, { useState, useEffect } from 'react'
import { Link,useHistory, useLocation } from 'react-router-dom'
import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
  CPagination
} from '@coreui/react'

import usersData from './CategorymanagementData'

const getBadge = status => {
  switch (status) {
    case 'Active': return 'success'
    case 'Inactive': return 'secondary'
    case 'Pending': return 'warning'
    case 'Banned': return 'danger'
    default: return 'primary'
  }
}

const Users = () => {
  const history = useHistory()
  const queryPage = useLocation().search.match(/page=([0-9]+)/, '')
  const currentPage = Number(queryPage && queryPage[1] ? queryPage[1] : 1)
  const [page, setPage] = useState(currentPage)

  const pageChange = newPage => {
    currentPage !== newPage && history.push(`/Categorymanagement?page=${newPage}`)
  }

  useEffect(() => {
    currentPage !== page && setPage(currentPage)
  }, [currentPage, page])

  return (
    <div class="container">



    <div class="row">
      <div class="col-md">
        <CCard>
          <CCardHeader>
          <div style={{display:"flex"}}>
    <div style={{width:"80%"}}>Category Management</div>
    
    <div style={{width:"15%"}}> <Link to="/newcategory" className="nav-link"><button type="submit" value="AddNewUser" >NewCategory+</button></Link></div>
    <div style={{width:"20%"}}> <Link to="/updatecategory" className="nav-link"><button type="submit" value="AddNewUser" >UpdateCategory+</button></Link></div>
    <div style={{width:"35%"}}> <Link to="/activate" className="nav-link"><button type="submit" value="AddNewUser" >Activate/DeActivate   +</button></Link></div>
</div> 

            <small className="text-muted"> </small>
          </CCardHeader>
          <CCardBody>
          <CDataTable
            items={usersData}
            fields={[
              { key: 'Sr.no', _classes: 'font-weight-bold' },
              
            ]}
            hover
            striped
            itemsPerPage={5}
            activePage={page}
            clickableRows
            onRowClick={(item) => history.push(`/Categorymanagement/${item.id}`)}
            scopedSlots = {{
              'status':
                (item)=>(
                  <td>
                    <CBadge color={getBadge(item.status)}>
                      {item.status}
                    </CBadge>
                  </td>
                )
            }}
          />
          <CPagination
            activePage={page}
            onActivePageChange={pageChange}
            pages={5}
            doubleArrows={false} 
            align="center"
          />
          </CCardBody>
        </CCard>
     </div>
     </div>
     </div>
  )
}

export default Users
