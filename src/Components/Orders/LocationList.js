import React from 'react';
import {Link} from 'react-router-dom';
class LocationList extends React.Component {
  render() {
    return (
      <>
        {/* <!-- Content Wrapper. Contains page content --> */}
        <div class="content-wrapper">
          {/* <!-- Content Header (Page header) --> */}
          <section class="content-header">
            <h1>
              Dashboard
              <small>Control panel</small>
            </h1>
            <ol class="breadcrumb">
              <li><Link to="#"><i class="fa fa-dashboard"></i> Home</Link></li>
              <li class="active">Dashboard</li>
            </ol>
          </section>

          {/* <!-- Main content --> */}
          <section class="content">
            <div class="row">

              <div class="box">
                <div class="box-header">
                  <div class="col-md-6">
                    <h3 class="box-title" style={{color:'#fe5e00',fontWeight:'500',marginTop:'10px'}}>Delivery Product Location And Pincode List</h3>
                    </div>
                </div>
                <div class="box-body">
                  <table id="example1" class="table table-bordered table-striped">
                    <thead>
                      <tr>
                        <th>S.no</th>
                        <th>City</th>
                        <th>Location</th>
                        <th>Pincode</th>
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Chennai ,Tamil Nadu</td>
                        <td>Royapuram</td>
                        <td>600013</td>
                        <td>Active</td>
                        <td style={{width:'8%' }}><Link to=""><i class="fa fa-eye text-green"></i></Link> | &nbsp; 
                        <Link to=""><i class="fa fa-edit (alias) text-blue"></i></Link> | &nbsp;
                        <Link to=""><i class="fa fa-trash text-red"></i></Link></td>
                      </tr>

                    </tbody>
                    <tfoot>
                    <tr>
                        <th>S.no</th>
                        <th>City</th>
                        <th>Location</th>
                        <th>Pincode</th>
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
             
            </div>

          </section>
        </div>
      
      </>
    )
  }
}

export default LocationList;
