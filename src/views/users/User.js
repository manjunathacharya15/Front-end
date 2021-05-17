import React from 'react'
import { CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react'
import CIcon from '@coreui/icons-react'

import usersData from './UsersData'

const User = ({match}) => {
  const user = usersData.find( user => user._id.toString() === match.params._id)
  const userDetails = user ? Object.entries(user) : 
    [['_id', (<span><CIcon className="text-muted" name="cui-icon-ban" /> Not found</span>)]]

  return (
    <div class="container">



        <div class="row">
          <div class="col-sm-6">
    <CRow>
      <CCol sm={8}>
        <CCard>
          <CCardHeader>
            User _id: {match.params._id}
          </CCardHeader>
          <CCardBody>
              <table className="table table-striped table-hover">
                <tbody>
                  {
                    userDetails.map(([key, value], index) => {
                      return (
                        <tr key={index.toString()}>
                          <td>{`${key}:`}</td>
                          <td><strong>{value}</strong></td>
                        </tr>
                      )
                    })
                  }
                </tbody>
              </table>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
    </div>
    </div>
    </div>
  )
}

export default User
