import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import slugify from 'slugify'
class PackAdd extends React.Component {
    constructor(props) {
        super(props);
        this.onChangePackageName = this.onChangePackageName.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            packagename: '',
        }
      }
      onChangePackageName(e) {this.setState({ packagename: e.target.value,});}

      onSubmit(e) {
        e.preventDefault();
        const obj = {
            packagename: this.state.packagename,
            packageurl: slugify(this.state.packagename,{
              lower:true
            }),
        };

        axios.post('http://13.232.195.17:4000/package/', obj)
            .then(res => console.log(res.data));
        
      // Redirect to Student List 
      this.props.history.push('/packlist')
    
        this.setState({
            packagename: '',
        })
      }

    render() {
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
                            <div class="col-md-12">
                                <div class="box box-primary">
                                    <div class="box-header with-border">
                                        <div class="col-md-6">
                                            <h3 class="box-title" style={{ color: '#fe5e00', fontWeight: '500', marginTop: '10px' }}>
                                                Add Package Name</h3>
                                        </div>
                                        <div class="col-md-6">
                                            <Link to="/packagelist">
                                                <button type="button" class="btn btn-primary pull-right">
                                                    <i class="fa fa-plus"></i> &nbsp; Package List</button></Link>
                                        </div>
                                    </div>
                                    {/* role="form" */}
                                    <form onSubmit={this.onSubmit}>
                                        <div class="box-body">
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label>Package Name</label>
                                                    <input type="text" name='packagename' class="form-control" 
                                                    onChange={this.onChangePackageName}
                                                    id="packagename" placeholder="Package Name" />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="box-footer">
                                            <button type="submit" style={{ float: 'right' }} class="btn btn-primary">Submit</button>
                                        </div>
                                    </form>
                                </div>
                            </div>

                        </div>

                    </section>
                </div>

            </>
        )
    }
}

export default PackAdd;

