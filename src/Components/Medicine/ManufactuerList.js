import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
class ManufactuerList extends React.Component {
  constructor(props) {
    super(props);
    this.deleteManufactuer = this.deleteManufactuer.bind(this);
    this.state = {
      manufactuerlist:[],
  }
  }
  componentDidMount() {
    axios.get('http://13.232.195.17:4000/manufactuer/')
        .then(response => {
            this.setState({
              manufactuerlist: response.data
            });
        })
        .catch(function (error) {
            console.log(error);
        })
}

deleteManufactuer(id) {
  axios.delete('http://13.232.195.17:4000/manufactuer/' + id)
      .then((res) => {
          alert('Manufactuer successfully deleted!')
      }).catch((error) => {
          console.log(error)
      })
}

  render() {
    const {  manufactuerlist } = this.state;
    return (
      <>
        <div class="content-wrapper">
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
                    <h3 class="box-title" style={{color:'#fe5e00',fontWeight:'500',marginTop:'10px'}}>Manufactuer List</h3>
                    </div>
                    <div class="col-md-6">
                    <Link to="/Manufactueradd">
                      <button type="button" class="btn btn-primary pull-right">
                        <i class="fa fa-plus"></i> &nbsp; Manufactuer Add</button></Link>
                    </div>
                </div>
                <div class="box-body">
                  <table id="example1" class="table table-bordered table-striped">
                    <thead>
                      <tr>
                        <th>S.no</th>
                        <th>Manufactuer Name</th>
                        <th>Manufactuer URL</th>
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                    {manufactuerlist &&
                      manufactuerlist.map((items, index) => (
                      <tr key={index}>
                        <td>{index+1}</td>
                        <td>{items.manufactuername}</td>
                        <td>{items.manufactuerurl}</td>
                        <td>{items.status}</td>
                        <td><button><Link to={"/manufactuerview/" + items._id}><i class="fa fa-eye text-green"></i></Link></button> &nbsp; 
                            <button><Link to={"/manufactueredit/" + items._id}><i class="fa fa-edit (alias) text-blue"></i></Link></button> &nbsp;
                            <button onClick={ () => this.deleteManufactuer(items._id)}><i class="fa fa-trash text-red"></i></button></td>
                      </tr>
                      ))}
                    </tbody>
                    <tfoot>
                    <tr>
                        <th>S.no</th>
                        <th>Manufactuer Name</th>
                        <th>Manufactuer URL</th>
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

export default ManufactuerList;
