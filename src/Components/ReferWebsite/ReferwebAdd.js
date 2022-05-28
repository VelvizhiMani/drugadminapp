import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
class ReferwebAdd extends React.Component {
    constructor(props) {
        super(props);
        this.onChangeWebsiteName = this.onChangeWebsiteName.bind(this);
        this.onChangeWebsiteUrl = this.onChangeWebsiteUrl.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            websitename: '',
            url: '',
        }
      }
      onChangeWebsiteName(e) {this.setState({ websitename: e.target.value,});}
      onChangeWebsiteUrl(e) {this.setState({ url: e.target.value,});}
      onSubmit(e) {
        e.preventDefault();
        const obj = {
            websitename: this.state.websitename,
            url: this.state.url,
        };

        axios.post('http://localhost:4000/referweb', obj)
            .then(res => console.log(res.data));
        
      // Redirect to Student List 
      this.props.history.push('/referweblist')
    
        this.setState({
            websitename: '',
            url: '',
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
                                                Add Product Country Orgin Name</h3>
                                        </div>
                                        <div class="col-md-6">
                                            <Link to="/storagelist">
                                                <button type="button" class="btn btn-primary pull-right">
                                                    <i class="fa fa-plus"></i> &nbsp; Country of Orgin List</button></Link>
                                        </div>
                                    </div>
                                    {/* role="form" */}
                                    <form onSubmit={this.onSubmit}>
                                        <div class="box-body">
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label>Reference Name (Ex : Netmeds or 1mg)</label>
                                                    <input type="text" name='orginname' class="form-control" id="orginname"
                                                    onChange={this.onChangeWebsiteName}
                                                     placeholder="Reference Name (Ex : Netmeds or 1mg)" />
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label>Url Name(Ex : Netmeds or 1mg)</label>
                                                    <input type="text" name='orginname' class="form-control" id="orginname"
                                                    onChange={this.onChangeWebsiteUrl}
                                                     placeholder="Url Name(Ex : Netmeds or 1mg)" />
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

export default ReferwebAdd;

