import React, { useState, useEffect } from 'react'
import {Link, useHistory, useLocation } from 'react-router-dom'
import FilterListRoundedIcon from '@material-ui/icons/FilterListRounded';
import Search from '@material-ui/icons/SearchRounded';
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

import usersData from './CatagoryData'

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
    currentPage !== newPage && history.push(`/catagory?page=${newPage}`)
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
    <div style={{width:"82%"}}>Category</div>
    

    <div style={{width:"22%"}}><Link to="" className="nav-link"><button ><Search/>Search</button></Link></div>
    <div  style={{width:"18%"}}><Link to="" className="nav-link"><button ><FilterListRoundedIcon/>Filter</button></Link></div>

   

                
</div>               
            <small className="text-muted"> </small>
          </CCardHeader>
          <CCardBody>
          <CDataTable
            items={usersData}
            fields={[
              { key: 'SR.no.', _classes: 'font-weight-bold' },
              'Catagory Name', 'Subcatagory', 'Videos', 'Package','Actions'
            ]}
            hover
            striped
            itemsPerPage={5}
            activePage={page}
            clickableRows
            onRowClick={(item) => history.push(`/catagory/${item.id}`)}
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
