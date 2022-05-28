import React from 'react';
import { Link } from 'react-router-dom';

class WrittenbyAdd extends React.Component {
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
                                            <h3 class="box-title" style={{ color: '#fe5e00', fontWeight: '500', marginTop: '10px' }}>
                                                Add Refer Website</h3>
                                        </div>
                                        <div class="col-md-6">
                                            <Link to="/referlist">
                                                <button type="button" class="btn btn-primary pull-right">
                                                    <i class="fa fa-plus"></i> &nbsp; Refer Website List</button></Link>
                                        </div>
                                    </div>
                                    {/* role="form" */}
                                    <form enctype="multipart/form-data" >
                                        <div class="box-body">
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label>Reference Name (Ex : Netmeds or 1mg)</label>
                                                    <input type="text" name='formname' class="form-control" id="formname" placeholder="Reference Name (Ex : Netmeds or 1mg)" />
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label>Url Name(Ex : Netmeds or 1mg)</label>
                                                    <input type="text" name='formurl' class="form-control" id="formurl" placeholder="Url Name(Ex : Netmeds or 1mg)" />
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

export default WrittenbyAdd;

