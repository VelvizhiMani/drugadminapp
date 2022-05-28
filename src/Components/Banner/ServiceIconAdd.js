import React from 'react';
import { Link } from 'react-router-dom';

class ServiceIconAdd extends React.Component {
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
                                                Add Product Accounts</h3>
                                        </div>
                                        <div class="col-md-6">
                                            <Link to="/accountslist">
                                                <button type="button" class="btn btn-primary pull-right">
                                                    <i class="fa fa-plus"></i> &nbsp; Product Accounts List</button></Link>
                                        </div>
                                    </div>
                                    {/* role="form" */}
                                    <form enctype="multipart/form-data" >
                                        <div class="box-body">
                                        <div class="col-md-4">
                                                <div class="form-group">
                                                    <label>Category Name</label>
                                                    <select class="form-control select2 " onChange={this.onChangeCategoryType}> {/* selectlist */}
                                                        <option value={this.state.categorytype} selected="selected">Select Option</option>
                                                        <option>prescriptions</option>
                                                        <option>non-prescriptions</option>
                                                        <option>Others</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="form-group">
                                                    <label>Sub Category Name</label>
                                                    <select class="form-control select2 " onChange={this.onChangeCategoryType}> {/* selectlist */}
                                                        <option value={this.state.categorytype} selected="selected">Select Option</option>
                                                        <option>prescriptions</option>
                                                        <option>non-prescriptions</option>
                                                        <option>Others</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="form-group">
                                                    <label>Product Name</label>
                                                    <select class="form-control select2 " onChange={this.onChangeCategoryType}> {/* selectlist */}
                                                        <option value={this.state.categorytype} selected="selected">Select Option</option>
                                                        <option>prescriptions</option>
                                                        <option>non-prescriptions</option>
                                                        <option>Others</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label>Manufactuer</label>
                                                    <input type="text" name='manufactuer' class="form-control" id="manufactuer" placeholder="Manufactuer" />
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="form-group">
                                                    <label>MRP : (Ex:123)</label>
                                                    <input type="text" name='mrp' class="form-control" id="mrp" placeholder="MRP : (Ex:123)" />
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="form-group">
                                                    <label for="Categoryname">Discount(5%)</label>
                                                    <input type="file" name='discount' class="form-control" id="discount" placeholder="Discount(5%)" />
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="form-group">
                                                    <label for="Categoryname">HSN</label>
                                                    <input type="text" name='hsn' class="form-control" id="hsn" placeholder="HSN" />
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="form-group">
                                                    <label for="Categoryname">GST</label>
                                                    <input type="text" name='gst' class="form-control" id="gst" placeholder="GST" />
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="form-group">
                                                    <label for="Categoryname">Batch</label>
                                                    <input type="text" name='batch' class="form-control" id="batch" placeholder="Batch" />
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="form-group">
                                                    <label for="Categoryname">Expiry</label>
                                                    <input type="text" name='expiry' class="form-control" id="expiry" placeholder="Expiry" />
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="form-group">
                                                    <label for="Categoryname">Quantity</label>
                                                    <input type="text" name='quantity' class="form-control" id="quantity" placeholder="Quantity" />
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="form-group">
                                                    <label for="Categoryname">Date</label>
                                                    <input type="date" name='date' class="form-control" id="eate" placeholder="Date" />
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

export default ServiceIconAdd;

