import React, { useState, useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
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

import usersData from './Filteringdata'

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
    currentPage !== newPage && history.push(`/Filtering?page=${newPage}`)
  }

  useEffect(() => {
    currentPage !== page && setPage(currentPage)
  }, [currentPage, page])

  return (
    <CRow style={{width:"1500px"}}>
      <CCol xl={10}>
        <CCard>
          <CCardHeader>
          <div style={{display:"flex"}}>
    <div style={{width:"80%"}}>Program Filtering</div>
    <div style={{width:"10%"},{}}></div>

    <div style={{width:"10%"},{}}></div>
</div>               
            <small className="text-muted"> </small>
          </CCardHeader>
          <CCardBody>
          <CDataTable 
            items={usersData}
            fields={[
              { key: 'Program_Category', _classes: 'font-weight-bold' },
              'FreeOrPaid','Instructor'
            ]}
            hover
            striped
            itemsPerPage={10}
            activePage={page}
            clickableRows
            onRowClick={(item) => history.push(`/Filtering/${item.Program_name}`)}
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
      </CCol>
    </CRow>
  )
}

export default Users
