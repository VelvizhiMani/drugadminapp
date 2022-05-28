import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
class GenericList extends React.Component {
  constructor(props) {
    super(props);
    this.deleteGeneric = this.deleteGeneric.bind(this);
    this.state = {
      genericlist:[],
  }
  }
  componentDidMount() {
    axios.get('http://13.232.195.17:4000/generic/')
        .then(response => {
            this.setState({
              genericlist: response.data
            });
        })
        .catch(function (error) {
            console.log(error);
        })
}

deleteGeneric(id) {
  axios.delete('http://13.232.195.17:4000/generic/' + id)
      .then((res) => {
          alert('Generic successfully deleted!')
      }).catch((error) => {
          console.log(error)
      })
}
  render() {
    const {genericlist} = this.state;
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
                    <h3 class="box-title" style={{color:'#fe5e00',fontWeight:'500',marginTop:'10px'}}>
                        Generic Name List</h3>
                    </div>
                    <div class="col-md-6">
                    <Link to="/genericadd">
                      <button type="button" class="btn btn-primary pull-right">
                        <i class="fa fa-plus"></i> &nbsp; Generic Name Add</button></Link>
                    </div>
                </div>
                <div class="box-body">
                  <table id="example1" class="table table-bordered table-striped">
                    <thead>
                      <tr>
                        <th>S.no</th>
                        <th>Category Name</th>
                        <th>Sub Category</th>
                        <th>Generic Name</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                    {genericlist &&
                      genericlist.map((items, index) => (
                      <tr key={index}>
                        <td>{index+1}</td>
                        <td>{items.catnames}</td>
                        <td>{items.subname}-c</td>
                        <td>{items.generices}</td>
                        <td style={{width:'10%' }} ><button><Link to={"/genericview/" + items._id}><i class="fa fa-eye text-green"></i></Link></button> &nbsp; 
                            <button><Link to={"/genericedit/" + items._id}><i class="fa fa-edit (alias) text-blue"></i></Link></button> &nbsp;
                            <button onClick={ () => this.deleteGeneric(items._id)}><i class="fa fa-trash text-red"></i></button></td>
                        </tr>
                    ))}
                    </tbody>
                    <tfoot>
                    <tr>
                        <th>S.no</th>
                        <th>Category Name</th>
                        <th>Sub Category</th>
                        <th>Generic Name</th>
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

export default GenericList;
