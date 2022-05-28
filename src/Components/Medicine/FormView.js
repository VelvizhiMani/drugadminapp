import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class FormView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        formname: '',
            formurl: '',
            picture: '',
            alt: '',
            metatitle:'',
            metakeyword:'',
            metadesc:'',
  }
  }

  componentDidMount() {
    axios.get('http://13.232.195.17:4000/form/'+this.props.match.params.id)
        .then(response => {
            this.setState({ 
                formname: response.data.formname, 
                formurl: response.data.formurl, 
                picture: response.data.picture, 
                alt: response.data.alt, 
              metatitle: response.data.metatitle, 
              metakeyword: response.data.metakeyword, 
              metadesc: response.data.metadesc, 	
              status: response.data.status, 	
              timestamp: response.data.timestamp, 	
             });
        })
        .catch(function (error) {
            console.log(error);
        })
  }

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
              <div class="col-md-12">
                <div class="box box-primary">
                  <div class="box-header with-border">
                    <div class="col-md-6">
                    <h3 class="box-title" style={{color:'#fe5e00',fontWeight:'500',marginTop:'10px'}}>View Form</h3>
                    </div>
                    <div class="col-md-6">
                    <Link to="/categorylist">
                      <button type="button" class="btn btn-primary pull-right">
                        <i class="fa fa-plus"></i> &nbsp; Form View</button></Link>
                    </div>
                  </div>
                  <div class="box-body">
                  <table id="example1" class="table table-bordered table-striped">
                    <thead>
                      <tr>
                        <th class="bg-green text-center" colSpan={4}>View Form</th>
                      </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th class="bg-gray">Form Name</th>
                            <td >{this.state.formname}</td>
                            <th class="bg-gray">Form Url</th>
                            <td>{this.state.formurl}</td>
                        </tr>
                        <tr>
                            <th class="bg-gray">Image</th>
                            <td ><img src={"https://my-drugcarts-bucket.s3.ap-south-1.amazonaws.com/"+this.state.picture} alt="drugcarts"/></td>
                            <th class="bg-gray">Image Alt Tag</th>
                            <td>{this.state.alt}</td>
                        </tr>
                        <tr>
                            <th class="bg-gray">Meta Title</th>
                            <td colSpan={3}>{this.state.metatitle}</td>
                        </tr>
                        <tr>
                            <th class="bg-gray">Meta Keyword</th>
                            <td colSpan={3}>{this.state.metakeyword}</td>
                        </tr>
                        <tr>
                            <th class="bg-gray">Meta Description</th>
                            <td colSpan={3}>{this.state.metadesc}</td>
                        </tr>
                        <tr>
                            <th class="bg-gray">Timestamp</th>
                            <td colSpan={3}>{this.state.timestamp}</td>
                        </tr>
                      </tbody>
                    <tfoot>
                    </tfoot>
                  </table>
                </div>
                   
                </div>
              </div>

            </div>

          </section>
        </div>
      </>
    )
  }
}

export default FormView;
