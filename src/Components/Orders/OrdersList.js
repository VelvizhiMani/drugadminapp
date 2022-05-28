import React from 'react';
import {Link} from 'react-router-dom';
class OrdersList extends React.Component {
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
                    <h3 class="box-title" style={{color:'#fe5e00',fontWeight:'500',marginTop:'10px'}}>All Orders List</h3>
                    </div>
                </div>
                <div class="box-body">
                  <table id="example1" class="table table-bordered table-striped">
                    <thead>
                      <tr>
                        <th>S.no</th>
                        <th>Order Id</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>Item</th>
                        <th>Shipping</th>
                        <th>Payment</th>
                        <th>Phone</th>
                        <th>Invoice</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>#03292</td>
                        <td>May 15, 2022</td>
                        <td>Pending</td>
                        <td>0 for 0 item</td>
                        <td>40</td>
                        <td>Cash on Delivery</td>
                        <td>+919083423340</td>
                        <td>Invoice</td>
                        <td style={{width:'8%' }}><Link to=""><i class="fa fa-eye text-green"></i></Link> | &nbsp; 
                        <Link to=""><i class="fa fa-edit (alias) text-blue"></i></Link> | &nbsp;
                        <Link to=""><i class="fa fa-trash text-red"></i></Link></td>
                      </tr>

                    </tbody>
                    <tfoot>
                    <tr>
                        <th>S.no</th>
                        <th>Order Id</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>Item</th>
                        <th>Shipping</th>
                        <th>Payment</th>
                        <th>Phone</th>
                        <th>Invoice</th>
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

export default OrdersList;
