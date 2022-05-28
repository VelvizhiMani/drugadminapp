import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
class ReviewedList extends React.Component {
  constructor(props) {
    super(props);
    this.deleteReviewedby = this.deleteReviewedby.bind(this);
    this.state = {
      reviewedbylist:[],
  }
  }
  componentDidMount() {
    axios.get('http://13.232.195.17:4000/reviewedby')
        .then(response => {
            this.setState({
              reviewedbylist: response.data
            });
        })
        .catch(function (error) {
            console.log(error);
        })
}

deleteReviewedby(id) {
  axios.delete('http://13.232.195.17:4000/reviewedby/' + id)
      .then((res) => {
          alert('Reviewed By successfully deleted!')
      }).catch((error) => {
          console.log(error)
      })
}
  render() {
    const {  reviewedbylist } = this.state;
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
                    <h3 class="box-title" style={{color:'#fe5e00',fontWeight:'500',marginTop:'10px'}}>Reviewed By List</h3>
                    </div>
                    <div class="col-md-6">
                    <Link to="/reviewedadd">
                      <button type="button" class="btn btn-primary pull-right">
                        <i class="fa fa-plus"></i> &nbsp;Reviewed By Add</button></Link>
                    </div>
                </div>
                <div class="box-body">
                  <table id="example1" class="table table-bordered table-striped">
                    <thead>
                      <tr>
                        <th>S.no</th>
                        <th>Reviewed Name</th>
                        <th>Qualification</th>
                        <th>Experience</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                    {reviewedbylist &&
                      reviewedbylist.map((items, index) => (
                      <tr key={index}>
                        <td>{index+1}</td>
                        <td>{items.name}</td>
                        <td>{items.qualification}</td>
                        <td>{items.experience}</td>
                        <td style={{width:'10%' }}>
                          <button><Link to={"/reviewededit/" + items._id}><i class="fa fa-edit (alias) text-blue"></i></Link></button> &nbsp;
                          <button onClick={ () => this.deleteReviewedby(items._id)}><i class="fa fa-trash text-red"></i></button></td>
                      </tr>
                      ))}
                    </tbody>
                    <tfoot>
                    <tr>
                        <th>S.no</th>
                        <th>Reviewed Name</th>
                        <th>Qualification</th>
                        <th>Experience</th>
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

export default ReviewedList;
