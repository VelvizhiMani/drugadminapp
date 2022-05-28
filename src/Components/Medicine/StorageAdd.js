import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import slugify from 'slugify'
class StorageAdd extends React.Component {
    constructor(props) {
        super(props);
        this.onChangeStorageName = this.onChangeStorageName.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            storagename: '',
        }
      }
      onChangeStorageName(e) {this.setState({ storagename: e.target.value,});}
      onSubmit(e) {
        e.preventDefault();
        const obj = {
            storagename: this.state.storagename,
            storageurl: slugify(this.state.storagename,{
                lower:true
              }),
        };

        axios.post('http://13.232.195.17:4000/storage/', obj)
            .then(res => console.log(res.data));
        
      // Redirect to Student List 
      this.props.history.push('/storagelist')
    
        this.setState({
            storagename: '',
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
                                                Add Storage Name</h3>
                                        </div>
                                        <div class="col-md-6">
                                            <Link to="/storagelist">
                                                <button type="button" class="btn btn-primary pull-right">
                                                    <i class="fa fa-plus"></i> &nbsp; Storage List</button></Link>
                                        </div>
                                    </div>
                                    {/* role="form" */}
                                    <form onSubmit={this.onSubmit}>
                                        <div class="box-body">
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label>Storage Name</label>
                                                    <input type="text" name='storagename' class="form-control" 
                                                    onChange={this.onChangeStorageName} id="storagename" placeholder="Storage Name" />

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

export default StorageAdd;

