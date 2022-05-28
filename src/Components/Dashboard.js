import React from 'react';
import {Link} from 'react-router-dom';
class Dashboard extends React.Component {
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
            {/* <!-- Small boxes (Stat box) --> */}
            <div class="row">
              <div class="col-lg-3 col-xs-6">
                {/* <!-- small box --> */}
                <div class="small-box bg-aqua">
                  <div class="inner">
                    <h3>150</h3>

                    <p>New Orders</p>
                  </div>
                  <div class="icon">
                    <i class="ion ion-bag"></i>
                  </div>
                  <Link to="#" class="small-box-footer">More info <i class="fa fa-arrow-circle-right"></i></Link>
                </div>
              </div>
              {/* <!-- ./col --> */}
              <div class="col-lg-3 col-xs-6">
                {/* <!-- small box --> */}
                <div class="small-box bg-green">
                  <div class="inner">
                    <h3>235<sup style={{ fontSize: '20px' }}>%</sup></h3>
                    <p>Total Orders</p>
                  </div>
                  <div class="icon">
                    <i class="ion ion-stats-bars"></i>
                  </div>
                  <Link to="#" class="small-box-footer">More info <i class="fa fa-arrow-circle-right"></i></Link>
                </div>
              </div>
              {/* <!-- ./col --> */}
              <div class="col-lg-3 col-xs-6">
                {/* <!-- small box --> */}
                <div class="small-box bg-yellow">
                  <div class="inner">
                    <h3>56950</h3>

                    <p>Total Product</p>
                  </div>
                  <div class="icon">
                    <i class="ion ion-person-add"></i>
                  </div>
                  <Link to="#" class="small-box-footer">More info <i class="fa fa-arrow-circle-right"></i></Link>
                </div>
              </div>
              {/* <!-- ./col --> */}
              <div class="col-lg-3 col-xs-6">
                {/* <!-- small box --> */}
                <div class="small-box bg-red">
                  <div class="inner">
                    <h3>65</h3>

                    <p>Total User</p>
                  </div>
                  <div class="icon">
                    <i class="ion ion-pie-graph"></i>
                  </div>
                  <Link to="#" class="small-box-footer">More info <i class="fa fa-arrow-circle-right"></i></Link>
                </div>
              </div>
              {/* <!-- ./col --> */}
            </div>
            {/* <!-- /.row --> */}
            {/* <!-- Main row --> */}
            <div class="row">

              <div class="box">
                <div class="box-header">
                  <h3 class="box-title">User List</h3>
                </div>
                <div class="box-body">
                  <table id="example1" class="table table-bordered table-striped">
                    <thead>
                      <tr>
                        <th>S.no</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>User Type</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Velvizhi</td>
                        <td>Velvizhicheck@gmail.com</td>
                        <td>Vel@123</td>
                        <td>4</td>
                        <td>X</td>
                      </tr>

                    </tbody>
                    <tfoot>
                      <tr>
                        <th>Rendering engine</th>
                        <th>Browser</th>
                        <th>Platform(s)</th>
                        <th>Engine version</th>
                        <th>CSS grade</th>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
              {/* <!-- Left col --> */}
              {/* <section class="col-lg-7 connectedSortable">

        </section> */}
              {/* <!-- /.Left col --> */}
              {/* <!-- right col (We are only adding the ID to make the widgets sortable)--> */}
              {/* <section class="col-lg-5 connectedSortable">
          <div class="box box-solid bg-light-blue-gradient">
           
          </div>
        </section> */}
              {/* <!-- right col --> */}
            </div>
            {/* <!-- /.row (main row) --> */}

          </section>
          {/* <!-- /.content --> */}
        </div>
        {/* <!-- /.content-wrapper --> */}
      </>
    )
  }
}

export default Dashboard;
