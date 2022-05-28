import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
class AccountsList extends React.Component {
  constructor(props) {
    super(props);
    this.deleteAccounts = this.deleteAccounts.bind(this);
    this.state = {
      accountslist:[],
  }
  }
  componentDidMount() {
    axios.get('http://13.232.195.17:4000/accounts')
        .then(response => {
            this.setState({
              accountslist: response.data
            });
        })
        .catch(function (error) {
            console.log(error);
        })
}

deleteAccounts(id) {
  axios.delete('http://13.232.195.17:4000/accounts/' + id)
      .then((res) => {
          alert('Accounts successfully deleted!')
      }).catch((error) => {
          console.log(error)
      })
}
  render() {
    const {  accountslist } = this.state;
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
                    <h3 class="box-title" style={{color:'#fe5e00',fontWeight:'500',marginTop:'10px'}}>Accounts Product List</h3>
                    </div>
                    <div class="col-md-6">
                    <Link to="/accountsadd">
                      <button type="button" class="btn btn-primary pull-right">
                        <i class="fa fa-plus"></i> &nbsp;Accounts Product Add</button></Link>
                    </div>
                </div>
                <div class="box-body">
                  <table id="example1" class="table table-bordered table-striped">
                    <thead>
                      <tr>
                        <th>S.no</th>
                        {/* <th>Category</th>
                        <th>Subcat</th>
                        <th>Product</th> */}
                        <th>Batch</th>
                        <th>Expiry Date</th>
                        <th>Avl Qty</th>
                        <th>HSN</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                    {accountslist &&
                      accountslist.map((items, index) => (
                      <tr key={index}>
                        <td>{index+1}</td>
                        <td>{items.batch}</td>
                        <td>{items.expiry}</td>
                        <td>{items.qtys}</td>
                        <td>{items.hsn_1}</td>
                        <td style={{width:'10%' }}>
                          <button><Link to={"/accountsedit/" + items._id}><i class="fa fa-edit (alias) text-blue"></i></Link></button> &nbsp;
                          <button onClick={ () => this.deleteAccounts(items._id)}><i class="fa fa-trash text-red"></i></button></td>
                      </tr>
                      ))}

                    </tbody>
                    <tfoot>
                    <tr>
                        <th>S.no</th>
                        {/* <th>Category</th>
                        <th>Subcat</th>
                        <th>Product</th> */}
                        <th>Batch</th>
                        <th>Expiry Date</th>
                        <th>Avl Qty</th>
                        <th>HSN</th>
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

export default AccountsList;
