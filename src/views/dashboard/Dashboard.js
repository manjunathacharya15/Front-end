import React, { lazy } from 'react'
import {
  CBadge,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CCallout
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

import MainChartExample from '../charts/MainChartExample.js'

const WidgetsDropdown = lazy(() => import('../widgets/WidgetsDropdown.js'))
const WidgetsBrand = lazy(() => import('../widgets/WidgetsBrand.js'))

const Dashboard = () => {
  return (
    <>
      <WidgetsDropdown />
      <div class="container">



        <div class="row">
          <div class="col-sm-6">

         
      <CCard >
        <CCardBody>
          
          <CRow>
          
            <CCol sm="5">
              <h4 id="traffic" className="card-title mb-0">Number Of Users</h4>
              <div className="small text-muted">May 2021</div>
            </CCol>
            <CCol sm="7" className="d-none d-md-block">
              <CButton color="primary" className="float-right">
                <CIcon name="cil-cloud-download"/>
              </CButton>
              <CButtonGroup className="float-right mr-3">
                {
                  ['Day', 'Month', 'Year'].map(value => (
                    <CButton
                      color="outline-secondary"
                      key={value}
                      className="mx-0"
                      active={value === 'Month'}
                    >
                      {value}
                    </CButton>
                  ))
                }
              </CButtonGroup>
            </CCol>
          </CRow>
          <MainChartExample style={{height: '300px', marginTop: '40px'}}/>
        </CCardBody>
        <CCardFooter>
          <CRow className="text-center">
            <CCol md sm="12" className="mb-sm-2 mb-0">
              <div className="text-muted">Visits</div>
              <strong>29.703 Users (40%)</strong>
              <CProgress
                className="progress-xs mt-2"
                precision={1}
                color="success"
                value={40}
              />
            </CCol>
            <CCol md sm="12" className="mb-sm-2 mb-0 d-md-down-none">
              <div className="text-muted">Unique</div>
              <strong>24.093 Users (20%)</strong>
              <CProgress
                className="progress-xs mt-2"
                precision={1}
                color="info"
                value={40}
              />
            </CCol>
            <CCol md sm="12" className="mb-sm-2 mb-0">
              <div className="text-muted">Pageviews</div>
              <strong>78.706 Views (60%)</strong>
              <CProgress
                className="progress-xs mt-2"
                precision={1}
                color="warning"
                value={40}
              />
            </CCol>
            <CCol md sm="12" className="mb-sm-2 mb-0">
              <div className="text-muted">New Users</div>
              <strong>22.123 Users (80%)</strong>
              <CProgress
                className="progress-xs mt-2"
                precision={1}
                color="danger"
                value={40}
              />
            </CCol>
            <CCol md sm="12" className="mb-sm-2 mb-0 d-md-down-none">
              <div className="text-muted">Bounce Rate</div>
              <strong>Average Rate (40.15%)</strong>
              <CProgress
                className="progress-xs mt-2"
                precision={1}
                value={40}
              />
            </CCol>
          </CRow>
        </CCardFooter>
      </CCard>
      </div>
        
       
          <div class="col-sm-6">
        
      <CCard>
        <CCardBody>
          <CRow>
            <CCol sm="5">
              <h4 id="traffic" className="card-title mb-0">Number Of Trainers</h4>
              <div className="small text-muted">May 2021</div>
            </CCol>
            <CCol sm="7" className="d-none d-md-block">
              <CButton color="primary" className="float-right">
                <CIcon name="cil-cloud-download"/>
              </CButton>
              <CButtonGroup className="float-right mr-3">
                {
                  ['Day', 'Month', 'Year'].map(value => (
                    <CButton
                      color="outline-secondary"
                      key={value}
                      className="mx-0"
                      active={value === 'Month'}
                    >
                      {value}
                    </CButton>
                  ))
                }
              </CButtonGroup>
            </CCol>
          </CRow>
          <MainChartExample style={{height: '300px', marginTop: '40px'}}/>
        </CCardBody>
        <CCardFooter>
          <CRow className="text-center">
            <CCol md sm="12" className="mb-sm-2 mb-0">
              <div className="text-muted">Visits</div>
              <strong>29.703 Users (40%)</strong>
              <CProgress
                className="progress-xs mt-2"
                precision={1}
                color="success"
                value={40}
              />
            </CCol>
            <CCol md sm="12" className="mb-sm-2 mb-0 d-md-down-none">
              <div className="text-muted">Unique</div>
              <strong>24.093 Users (20%)</strong>
              <CProgress
                className="progress-xs mt-2"
                precision={1}
                color="info"
                value={40}
              />
            </CCol>
            <CCol md sm="12" className="mb-sm-2 mb-0">
              <div className="text-muted">Pageviews</div>
              <strong>78.706 Views (60%)</strong>
              <CProgress
                className="progress-xs mt-2"
                precision={1}
                color="warning"
                value={40}
              />
            </CCol>
            <CCol md sm="12" className="mb-sm-2 mb-0">
              <div className="text-muted">New Users</div>
              <strong>22.123 Users (80%)</strong>
              <CProgress
                className="progress-xs mt-2"
                precision={1}
                color="danger"
                value={40}
              />
            </CCol>
            <CCol md sm="12" className="mb-sm-2 mb-0 d-md-down-none">
              <div className="text-muted">Bounce Rate</div>
              <strong>Average Rate (40.15%)</strong>
              <CProgress
                className="progress-xs mt-2"
                precision={1}
                value={40}
              />
            </CCol>
          </CRow>
        </CCardFooter>
      </CCard>
      </div>
     <div class="w-100"></div>
     <div class="col-sm-6">
      <CCard>
        <CCardBody>
          <CRow>
            <CCol sm="5">
              <h4 id="traffic" className="card-title mb-0">Number Of Videos</h4>
              <div className="small text-muted">May 2021</div>
            </CCol>
            <CCol sm="7" className="d-none d-md-block">
              <CButton color="primary" className="float-right">
                <CIcon name="cil-cloud-download"/>
              </CButton>
              <CButtonGroup className="float-right mr-3">
                {
                  ['Day', 'Month', 'Year'].map(value => (
                    <CButton
                      color="outline-secondary"
                      key={value}
                      className="mx-0"
                      active={value === 'Month'}
                    >
                      {value}
                    </CButton>
                  ))
                }
              </CButtonGroup>
            </CCol>
          </CRow>
          <MainChartExample style={{height: '300px', marginTop: '40px'}}/>
        </CCardBody>
        <CCardFooter>
          <CRow className="text-center">
            <CCol md sm="12" className="mb-sm-2 mb-0">
              <div className="text-muted">Visits</div>
              <strong>29.703 Users (40%)</strong>
              <CProgress
                className="progress-xs mt-2"
                precision={1}
                color="success"
                value={40}
              />
            </CCol>
            <CCol md sm="12" className="mb-sm-2 mb-0 d-md-down-none">
              <div className="text-muted">Unique</div>
              <strong>24.093 Users (20%)</strong>
              <CProgress
                className="progress-xs mt-2"
                precision={1}
                color="info"
                value={40}
              />
            </CCol>
            <CCol md sm="12" className="mb-sm-2 mb-0">
              <div className="text-muted">Pageviews</div>
              <strong>78.706 Views (60%)</strong>
              <CProgress
                className="progress-xs mt-2"
                precision={1}
                color="warning"
                value={40}
              />
            </CCol>
            <CCol md sm="12" className="mb-sm-2 mb-0">
              <div className="text-muted">New Users</div>
              <strong>22.123 Users (80%)</strong>
              <CProgress
                className="progress-xs mt-2"
                precision={1}
                color="danger"
                value={40}
              />
            </CCol>
            <CCol md sm="12" className="mb-sm-2 mb-0 d-md-down-none">
              <div className="text-muted">Bounce Rate</div>
              <strong>Average Rate (40.15%)</strong>
              <CProgress
                className="progress-xs mt-2"
                precision={1}
                value={40}
              />
            </CCol>
          </CRow>
        </CCardFooter>
      </CCard>
      </div>
      <div class="col-sm-6">
      <CCard>
        <CCardBody>
          <CRow>
            <CCol sm="5">
              <h4 id="traffic" className="card-title mb-0">Number Of New Registrations</h4>
              <div className="small text-muted">May 2021</div>
            </CCol>
            <CCol sm="7" className="d-none d-md-block">
              <CButton color="primary" className="float-right">
                <CIcon name="cil-cloud-download"/>
              </CButton>
              <CButtonGroup className="float-right mr-3">
                {
                  ['Day', 'Month', 'Year'].map(value => (
                    <CButton
                      color="outline-secondary"
                      key={value}
                      className="mx-0"
                      active={value === 'Month'}
                    >
                      {value}
                    </CButton>
                  ))
                }
              </CButtonGroup>
            </CCol>
          </CRow>
          <MainChartExample style={{height: '300px', marginTop: '40px'}}/>
        </CCardBody>
        <CCardFooter>
          <CRow className="text-center">
            <CCol md sm="12" className="mb-sm-2 mb-0">
              <div className="text-muted">Visits</div>
              <strong>29.703 Users (40%)</strong>
              <CProgress
                className="progress-xs mt-2"
                precision={1}
                color="success"
                value={40}
              />
            </CCol>
            <CCol md sm="12" className="mb-sm-2 mb-0 d-md-down-none">
              <div className="text-muted">Unique</div>
              <strong>24.093 Users (20%)</strong>
              <CProgress
                className="progress-xs mt-2"
                precision={1}
                color="info"
                value={40}
              />
            </CCol>
            <CCol md sm="12" className="mb-sm-2 mb-0">
              <div className="text-muted">Pageviews</div>
              <strong>78.706 Views (60%)</strong>
              <CProgress
                className="progress-xs mt-2"
                precision={1}
                color="warning"
                value={40}
              />
            </CCol>
            <CCol md sm="12" className="mb-sm-2 mb-0">
              <div className="text-muted">New Users</div>
              <strong>22.123 Users (80%)</strong>
              <CProgress
                className="progress-xs mt-2"
                precision={1}
                color="danger"
                value={40}
              />
            </CCol>
            <CCol md sm="12" className="mb-sm-2 mb-0 d-md-down-none">
              <div className="text-muted">Bounce Rate</div>
              <strong>Average Rate (40.15%)</strong>
              <CProgress
                className="progress-xs mt-2"
                precision={1}
                value={40}
              />
            </CCol>
          </CRow>
        </CCardFooter>
      </CCard>
      </div>
     </div>
      </div>

      <WidgetsBrand withCharts/>

      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
              Traffic {' & '} Sales
            </CCardHeader>
            <CCardBody>
              <CRow>
                <CCol xs="12" md="6" xl="6">

                  <CRow>
                    <CCol sm="6">
                      <CCallout color="info">
                        <small className="text-muted">Top Customers</small>
                        <br />
                        <strong className="h4">9,123</strong>
                      </CCallout>
                    </CCol>
                    <CCol sm="6">
                      <CCallout color="danger">
                        <small className="text-muted">Top Trainers</small>
                        <br />
                        <strong className="h4">22,643</strong>
                      </CCallout>
                    </CCol>
                  </CRow>

                  <hr className="mt-0" />

                  <div className="progress-group mb-4">
                    <div className="progress-group-prepend">
                      <span className="progress-group-text">
                        Monday
                      </span>
                    </div>
                    <div className="progress-group-bars">
                      <CProgress className="progress-xs" color="info" value="34" />
                      <CProgress className="progress-xs" color="danger" value="78" />
                    </div>
                  </div>
                  <div className="progress-group mb-4">
                    <div className="progress-group-prepend">
                      <span className="progress-group-text">
                      Tuesday
                      </span>
                    </div>
                    <div className="progress-group-bars">
                      <CProgress className="progress-xs" color="info" value="56" />
                      <CProgress className="progress-xs" color="danger" value="94" />
                    </div>
                  </div>
                  <div className="progress-group mb-4">
                    <div className="progress-group-prepend">
                      <span className="progress-group-text">
                      Wednesday
                      </span>
                    </div>
                    <div className="progress-group-bars">
                      <CProgress className="progress-xs" color="info" value="12" />
                      <CProgress className="progress-xs" color="danger" value="67" />
                    </div>
                  </div>
                  <div className="progress-group mb-4">
                    <div className="progress-group-prepend">
                      <span className="progress-group-text">
                      Thursday
                      </span>
                    </div>
                    <div className="progress-group-bars">
                      <CProgress className="progress-xs" color="info" value="43" />
                      <CProgress className="progress-xs" color="danger" value="91" />
                    </div>
                  </div>
                  <div className="progress-group mb-4">
                    <div className="progress-group-prepend">
                      <span className="progress-group-text">
                      Friday
                      </span>
                    </div>
                    <div className="progress-group-bars">
                      <CProgress className="progress-xs" color="info" value="22" />
                      <CProgress className="progress-xs" color="danger" value="73" />
                    </div>
                  </div>
                  <div className="progress-group mb-4">
                    <div className="progress-group-prepend">
                      <span className="progress-group-text">
                      Saturday
                      </span>
                    </div>
                    <div className="progress-group-bars">
                      <CProgress className="progress-xs" color="info" value="53" />
                      <CProgress className="progress-xs" color="danger" value="82" />
                    </div>
                  </div>
                  <div className="progress-group mb-4">
                    <div className="progress-group-prepend">
                      <span className="progress-group-text">
                      Sunday
                      </span>
                    </div>
                    <div className="progress-group-bars">
                      <CProgress className="progress-xs" color="info" value="9" />
                      <CProgress className="progress-xs" color="danger" value="69" />
                    </div>
                  </div>
                  <div className="legend text-center">
                    <small>
                      <sup className="px-1"><CBadge shape="pill" color="info">&nbsp;</CBadge></sup>
                      Top Customers
                      &nbsp;
                      <sup className="px-1"><CBadge shape="pill" color="danger">&nbsp;</CBadge></sup>
                      Top Trainers
                    </small>
                  </div>
                </CCol>

                <CCol xs="12" md="6" xl="6">

                  <CRow>
                    <CCol sm="6">
                      <CCallout color="warning">
                        <small className="text-muted">Pageviews</small>
                        <br />
                        <strong className="h4">78,623</strong>
                      </CCallout>
                    </CCol>
                    <CCol sm="6">
                      <CCallout color="success">
                        <small className="text-muted">Marketing</small>
                        <br />
                        <strong className="h4">49,123</strong>
                      </CCallout>
                    </CCol>
                  </CRow>

                  <hr className="mt-0" />

                  <div className="progress-group mb-4">
                    <div className="progress-group-header">
                      <CIcon className="progress-group-icon" name="cil-user" />
                      <span className="title">Male</span>
                      <span className="ml-auto font-weight-bold">43%</span>
                    </div>
                    <div className="progress-group-bars">
                      <CProgress className="progress-xs" color="warning" value="43" />
                    </div>
                  </div>
                  <div className="progress-group mb-5">
                    <div className="progress-group-header">
                      <CIcon className="progress-group-icon" name="cil-user-female" />
                      <span className="title">Female</span>
                      <span className="ml-auto font-weight-bold">37%</span>
                    </div>
                    <div className="progress-group-bars">
                      <CProgress className="progress-xs" color="warning" value="37" />
                    </div>
                  </div>
                  <div className="progress-group">
                    <div className="progress-group-header">
                      <CIcon className="progress-group-icon" name="cil-globe-alt" />
                      <span className="title">Organic Search</span>
                      <span className="ml-auto font-weight-bold">191,235 <span className="text-muted small">(56%)</span></span>
                    </div>
                    <div className="progress-group-bars">
                      <CProgress className="progress-xs" color="success" value="56" />
                    </div>
                  </div>


                  <div className="progress-group">
                    <div className="progress-group-header">
                      <CIcon name="cib-facebook" className="progress-group-icon" />
                      <span className="title">Facebook</span>
                      <span className="ml-auto font-weight-bold">51,223 <span className="text-muted small">(15%)</span></span>
                    </div>
                    <div className="progress-group-bars">
                      <CProgress className="progress-xs" color="success" value="15" />
                    </div>
                  </div>
                  <div className="progress-group">
                    <div className="progress-group-header">
                      <CIcon name="cib-twitter" className="progress-group-icon" />
                      <span className="title">Twitter</span>
                      <span className="ml-auto font-weight-bold">37,564 <span className="text-muted small">(11%)</span></span>
                    </div>
                    <div className="progress-group-bars">
                      <CProgress className="progress-xs" color="success" value="11" />
                    </div>
                  </div>
                  <div className="progress-group">
                    <div className="progress-group-header">
                      <CIcon name="cib-linkedin" className="progress-group-icon" />
                      <span className="title">LinkedIn</span>
                      <span className="ml-auto font-weight-bold">27,319 <span className="text-muted small">(8%)</span></span>
                    </div>
                    <div className="progress-group-bars">
                      <CProgress className="progress-xs" color="success" value="8" />
                    </div>
                  </div>
                  <div className="divider text-center">
                    <CButton color="link" size="sm" className="text-muted">
                      <CIcon name="cil-options" />
                    </CButton>
                  </div>

                </CCol>
              </CRow>

              <br />

              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                    <th className="text-center"><CIcon name="cil-people" /></th>
                    <th> New Customers Registered</th>
                    <th className="text-center"></th>
                    <th></th>
                    <th className="text-center"></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-center">
                      <div className="c-avatar">
                        <span>1</span>
                        <span className=""></span>
                      </div>
                    </td>
                    <td>
                      <div>Manjunath R</div>
                      <div className="small text-muted">
                        <span>New</span> | Registered: may 01, 2021
                      </div>
                    </td>
                    <td className="text-center">
                      <CIcon height={25} name="" title="us" id="" />
                    </td>
                    <td>
                      <div className="clearfix">
                        <div className="float-left">
                          <strong></strong>
                        </div>
                        <div className="float-right">
                          <small className="text-muted"></small>
                        </div>
                      </div>
                      
                    </td>
                    <td className="text-center">
                      <CIcon height={25} name="" />
                    </td>
                    <td>
                      <div className="small text-muted">Last login</div>
                      <strong>10 sec ago</strong>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      <div className="c-avatar">
                        <span>2</span>
                        <span className=""></span>
                      </div>
                    </td>
                    <td>
                      <div>Raja</div>
                      <div className="small text-muted">

                        <span>New</span> | Registered: May 2, 2021
                      </div>
                    </td>
                    <td className="text-center">
                      <CIcon height={25} name="" title="br" id="br" />
                    </td>
                    <td>
                      <div className="clearfix">
                        <div className="float-left">
                          <strong></strong>
                        </div>
                        <div className="float-right">
                          <small className="text-muted"></small>
                        </div>
                      </div>
                      
                    </td>
                    <td className="text-center">
                      <CIcon height={25} name="" />
                    </td>
                    <td>
                      <div className="small text-muted">Last login</div>
                      <strong>5 minutes ago</strong>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      <div className="c-avatar">
                   <span>3</span>
                        <span className=""></span>
                      </div>
                    </td>
                    <td>
                      <div>Kushal</div>
                      <div className="small text-muted">
                        <span>New</span> | Registered: May 1, 2021
                      </div>
                    </td>
                    <td className="text-center">
                      <CIcon height={25} name="" title="in" id="in" />
                    </td>
                    <td>
                      <div className="clearfix">
                        <div className="float-left">
                          <strong></strong>
                        </div>
                        <div className="float-right">
                          <small className="text-muted"></small>
                        </div>
                      </div>
                      
                    </td>
                    <td className="text-center">
                      <CIcon height={25} name="" />
                    </td>
                    <td>
                      <div className="small text-muted">Last login</div>
                      <strong>1 hour ago</strong>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      <div className="c-avatar">
                        <span>4</span>
                        <span className=""></span>
                      </div>
                    </td>
                    <td>
                      <div>Priyanka</div>
                      <div className="small text-muted">
                        <span>New</span> | Registered: May 2, 2021
                      </div>
                    </td>
                    <td className="text-center">
                      <CIcon height={25} name="" title="fr" id="fr" />
                    </td>
                    <td>
                      <div className="clearfix">
                        <div className="float-left">
                          <strong></strong>
                        </div>
                        <div className="float-right">
                          <small className="text-muted"></small>
                        </div>
                      </div>
                      
                    </td>
                    <td className="text-center">
                      <CIcon height={25} name="" />
                    </td>
                    <td>
                      <div className="small text-muted">Last login</div>
                      <strong>1 hours ago</strong>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      <div className="c-avatar">
                       <span>5</span>
                        <span className=""></span>
                      </div>
                    </td>
                    <td>
                      <div>Adithya</div>
                      <div className="small text-muted">
                        <span>New</span> | Registered: April 28, 2021
                      </div>
                    </td>
                    <td className="text-center">
                      <CIcon height={25} name="" title="es" id="es" />
                    </td>
                    <td>
                      <div className="clearfix">
                        <div className="float-left">
                          <strong></strong>
                        </div>
                        <div className="float-right">
                          <small className="text-muted"></small>
                        </div>
                      </div>
                      
                    </td>
                    <td className="text-center">
                      <CIcon height={25} name=""/>
                    </td>
                    <td>
                      <div className="small text-muted">Last login</div>
                      <strong>2 days ago</strong>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      <div className="c-avatar">
                       <span>6</span>
                        <span className=""></span>
                      </div>
                    </td>
                    <td>
                      <div>Monisha</div>
                      <div className="small text-muted">
                        <span>New</span> | Registered: Apirl 14, 2021
                      </div>
                    </td>
                    <td className="text-center">
                      <CIcon height={25} name="" title="pl" id="pl" />
                    </td>
                    <td>
                      <div className="clearfix">
                        <div className="float-left">
                          <strong></strong>
                        </div>
                        <div className="float-right">
                          <small className="text-muted"></small>
                        </div>
                      </div>
                 
                    </td>
                    <td className="text-center">
                      <CIcon height={25} name="" />
                    </td>
                    <td>
                      <div className="small text-muted">Last login</div>
                      <strong>Yesterday</strong>
                    </td>
                   
                  </tr>
                </tbody>
              </table>
              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                    <th className="text-center"><CIcon name="cil-people" /></th>
                    <th> New Trainers Registered</th>
                    <th className="text-center"></th>
                    <th></th>
                    <th className="text-center"></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-center">
                      <div className="c-avatar">
                        <span>1</span>
                        <span className=""></span>
                      </div>
                    </td>
                    <td>
                      <div>Ranga</div>
                      <div className="small text-muted">
                        <span>New</span> | Registered: Apirl 2, 2021
                      </div>
                    </td>
                    <td className="text-center">
                      <CIcon height={25} name="" title="us" id="" />
                    </td>
                    <td>
                      <div className="clearfix">
                        <div className="float-left">
                          <strong></strong>
                        </div>
                        <div className="float-right">
                          <small className="text-muted"></small>
                        </div>
                      </div>
                      
                    </td>
                    <td className="text-center">
                      <CIcon height={25} name="" />
                    </td>
                    <td>
                      <div className="small text-muted">Last login</div>
                      <strong>30 sec ago</strong>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      <div className="c-avatar">
                        <span>2</span>
                        <span className=""></span>
                      </div>
                    </td>
                    <td>
                      <div>Loki</div>
                      <div className="small text-muted">

                        <span>New</span> | Registered: Apirl 22, 2021
                      </div>
                    </td>
                    <td className="text-center">
                      <CIcon height={25} name="" title="br" id="br" />
                    </td>
                    <td>
                      <div className="clearfix">
                        <div className="float-left">
                          <strong></strong>
                        </div>
                        <div className="float-right">
                          <small className="text-muted"></small>
                        </div>
                      </div>
                      
                    </td>
                    <td className="text-center">
                      <CIcon height={25} name="" />
                    </td>
                    <td>
                      <div className="small text-muted">Last login</div>
                      <strong>45 minutes ago</strong>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      <div className="c-avatar">
                   <span>3</span>
                        <span className=""></span>
                      </div>
                    </td>
                    <td>
                      <div>Ravi</div>
                      <div className="small text-muted">
                        <span>New</span> | Registered: Apirl 1, 2021
                      </div>
                    </td>
                    <td className="text-center">
                      <CIcon height={25} name="" title="in" id="in" />
                    </td>
                    <td>
                      <div className="clearfix">
                        <div className="float-left">
                          <strong></strong>
                        </div>
                        <div className="float-right">
                          <small className="text-muted"></small>
                        </div>
                      </div>
                      
                    </td>
                    <td className="text-center">
                      <CIcon height={25} name="" />
                    </td>
                    <td>
                      <div className="small text-muted">Last login</div>
                      <strong>1 hour ago</strong>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      <div className="c-avatar">
                        <span>4</span>
                        <span className=""></span>
                      </div>
                    </td>
                    <td>
                      <div>Edwin</div>
                      <div className="small text-muted">
                        <span>New</span> | Registered: Apirl 29 , 2021
                      </div>
                    </td>
                    <td className="text-center">
                      <CIcon height={25} name="" title="fr" id="fr" />
                    </td>
                    <td>
                      <div className="clearfix">
                        <div className="float-left">
                          <strong></strong>
                        </div>
                        <div className="float-right">
                          <small className="text-muted"></small>
                        </div>
                      </div>
                      
                    </td>
                    <td className="text-center">
                      <CIcon height={25} name="" />
                    </td>
                    <td>
                      <div className="small text-muted">Last login</div>
                      <strong>5 hours ago</strong>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      <div className="c-avatar">
                       <span>5</span>
                        <span className=""></span>
                      </div>
                    </td>
                    <td>
                      <div>Manoj</div>
                      <div className="small text-muted">
                        <span>New</span> | Registered: April 30, 2021
                      </div>
                    </td>
                    <td className="text-center">
                      <CIcon height={25} name="" title="es" id="es" />
                    </td>
                    <td>
                      <div className="clearfix">
                        <div className="float-left">
                          <strong></strong>
                        </div>
                        <div className="float-right">
                          <small className="text-muted"></small>
                        </div>
                      </div>
                      
                    </td>
                    <td className="text-center">
                      <CIcon height={25} name=""/>
                    </td>
                    <td>
                      <div className="small text-muted">Last login</div>
                      <strong>23 Hours ago</strong>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      <div className="c-avatar">
                       <span>6</span>
                        <span className=""></span>
                      </div>
                    </td>
                    <td>
                      <div>Aryan</div>
                      <div className="small text-muted">
                        <span>New</span> | Registered: May 1, 2021
                      </div>
                    </td>
                    <td className="text-center">
                      <CIcon height={25} name="" title="pl" id="pl" />
                    </td>
                    <td>
                      <div className="clearfix">
                        <div className="float-left">
                          <strong></strong>
                        </div>
                        <div className="float-right">
                          <small className="text-muted"></small>
                        </div>
                      </div>
                 
                    </td>
                    <td className="text-center">
                      <CIcon height={25} name="" />
                    </td>
                    <td>
                      <div className="small text-muted">Last login</div>
                      <strong>Yesterday</strong>
                    </td>
                    
                  </tr>
                </tbody>
              </table>


            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Dashboard
