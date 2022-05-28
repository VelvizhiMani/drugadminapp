import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
class FormList extends React.Component {
  constructor(props) {
    super(props);
    this.deleteForm = this.deleteForm.bind(this);
    this.state = {
      formlist:[],
  }
  }
  componentDidMount() {
    axios.get('http://13.232.195.17:4000/form/')
        .then(response => {
            this.setState({
              formlist: response.data
            });
        })
        .catch(function (error) {
            console.log(error);
        })
}

deleteForm(id) {
  axios.delete('http://13.232.195.17:4000/form/' + id)
      .then((res) => {
          alert('Form successfully deleted!')
      }).catch((error) => {
          console.log(error)
      })
}
  render() {
    const {  formlist } = this.state;
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
                    <h3 class="box-title" style={{color:'#fe5e00',fontWeight:'500',marginTop:'10px'}}>Form List</h3>
                    </div>
                    <div class="col-md-6">
                    <Link to="/formadd">
                      <button type="button" class="btn btn-primary pull-right">
                        <i class="fa fa-plus"></i> &nbsp; Form Add</button></Link>
                    </div>
                </div>
                <div class="box-body">
                  <table id="example1" class="table table-bordered table-striped">
                    <thead>
                      <tr>
                        <th>S.no</th>
                        <th>Form Name</th>
                        <th>Form URL</th>
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                    {formlist &&
                      formlist.map((items, index) => (
                      <tr key={index}>
                        <td>{index+1}</td>
                        <td>{items.formname}</td>
                        <td>{items.formurl}</td>
                        <td>{items.status}</td>
                        <td style={{width:'10%' }}><button><Link to={"/formview/" + items._id}><i class="fa fa-eye text-green"></i></Link></button> &nbsp; 
                            <button><Link to={"/formedit/" + items._id}><i class="fa fa-edit (alias) text-blue"></i></Link></button> &nbsp;
                            <button onClick={ () => this.deleteForm(items._id)}><i class="fa fa-trash text-red"></i></button></td>
                      </tr>
                      ))}
                    </tbody>
                    <tfoot>
                    <tr>
                        <th>S.no</th>
                        <th>Form Name</th>
                        <th>Form URL</th>
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

export default FormList;
