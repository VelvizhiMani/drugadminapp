import React from 'react';
import { Link } from 'react-router-dom';

class StockStatus extends React.Component {
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
                                            Add Stock Status</h3>
                                        </div>
                                        <div class="col-md-6">
                                            <Link to="/stocklist">
                                                <button type="button" class="btn btn-primary pull-right">
                                                    <i class="fa fa-plus"></i> &nbsp; Stock List</button></Link>
                                        </div>
                                    </div>
                                    {/* role="form" */}
                                    <form enctype="multipart/form-data" >
                                        <div class="box-body">
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label>Available Stock Status</label>
                                                    <select class="form-control select2" name="stock">
				        								   <option selected value="In Stock">In Stock</option>
		                								   <option value="Out Of Stock">Out Of Stock</option>
		                								   <option value="Sold Out">Sold Out</option>
		                								   <option value="Banned">Banned</option>
		                								   <option value="Not For Sale">Not For Sale</option>
		                								   <option value="Discontinued">Discontinued</option>
		                								   <option value="Withdrawn">Withdrawn</option>
						                            </select>
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


export default StockStatus;

