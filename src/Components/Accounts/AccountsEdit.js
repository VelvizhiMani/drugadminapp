import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
class AccountsEdit extends React.Component {
    constructor(props) {
        super(props);
        this.onChangeCategory = this.onChangeCategory.bind(this);
        this.onChangeSubCategory = this.onChangeSubCategory.bind(this);
        this.onChangeProduct = this.onChangeProduct.bind(this);
        this.onChangeManufactuer = this.onChangeManufactuer.bind(this);
        this.onChangeBatch = this.onChangeBatch.bind(this);
        this.onChangeQuantity = this.onChangeQuantity.bind(this);
        this.onChangeExpiry = this.onChangeExpiry.bind(this);
        this.onChangeHsn = this.onChangeHsn.bind(this);
        this.onChangeGst = this.onChangeGst.bind(this);
        this.onChangeMrp = this.onChangeMrp.bind(this);
        this.onChangeDiscount = this.onChangeDiscount.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            category: '',
            subcategory: '',
            product: '',
            manufactuer: '',
            batch: '',
            qtys: '',
            expiry: '',
            hsn: '',
            gst: '',
            mrp: '',
            discount: '',
            date: '',
            categorylist:[],
            subcategorylist:[],
            productlist:[],
        }
      }
      componentDidMount() {
        axios.get('http://13.232.195.17:4000/accounts/'+this.props.match.params.id)
            .then(response => {
                this.setState({ 
                    orginname: response.data.orginname, 
                    category: response.data.category,
                    subcategory: response.data.subcategory,
                    product: response.data.product,
                    manufactuer: response.data.manufactuer,
                    batch: response.data.batch,
                    qtys: response.data.qtys,
                    expiry: response.data.expiry,
                    hsn: response.data.hsn,
                    gst: response.data.gst,
                    mrp: response.data.mrp,
                    discount: response.data.discount,
                    date: response.data.date,
                 });
            })
            .catch(function (error) {
                console.log(error);
            })
      }
      onChangeCategory(e) {this.setState({ category: e.target.value,});}
      onChangeSubCategory(e) {this.setState({ subcategory: e.target.value,});}
      onChangeProduct(e) {this.setState({ product: e.target.value,});}
      onChangeManufactuer(e) {this.setState({ manufactuer: e.target.value,});}
      onChangeBatch(e) {this.setState({ batch: e.target.value,});}
      onChangeQuantity(e) {this.setState({ qtys: e.target.value,});}
      onChangeExpiry(e) {this.setState({ expiry: e.target.value,});}
      onChangeHsn(e) {this.setState({ hsn: e.target.value,});}
      onChangeGst(e) {this.setState({ gst: e.target.value,});}
      onChangeMrp(e) {this.setState({ mrp: e.target.value,});}
      onChangeDiscount(e) {this.setState({ discount: e.target.value,});}
      onChangeDate(e) {this.setState({ date: e.target.value,});}
      onSubmit(e) {
        e.preventDefault();
        const obj = {
            category: this.state.category,
            subcategory: this.state.subcategory,
            product: this.state.product,
            manufactuer: this.state.manufactuer,
            batch: this.state.batch,
            qtys: this.state.qtys,
            expiry: this.state.expiry,
            hsn: this.state.hsn_1,
            gst: this.state.gst,
            mrp: this.state.mrp,
            discount: this.state.discount,
            date: this.state.date,
        };

        axios.post('http://13.232.195.17:4000/accounts', obj)
            .then(res => console.log(res.data));
        
      // Redirect to Student List 
      this.props.history.push('/accountslist')
    
        this.setState({
            orginname: '',
        })
      }
      componentDidMount() {
        axios.get('http://13.232.195.17:4000/category/')
          .then(response => {
            this.setState({
              categorylist: response.data
            });
          })
          .catch(function (error) {
            console.log(error);
          })
          axios.get('http://13.232.195.17:4000/subcategory/')
          .then(response => {
            this.setState({
              subcategorylist: response.data
            });
          })
          .catch(function (error) {
            console.log(error);
          })
          axios.get('http://13.232.195.17:4000/product/')
          .then(response => {
            this.setState({
              productlist: response.data
            });
          })
          .catch(function (error) {
            console.log(error);
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
                                                Add Product Accounts</h3>
                                        </div>
                                        <div class="col-md-6">
                                            <Link to="/accountslist">
                                                <button type="button" class="btn btn-primary pull-right">
                                                    <i class="fa fa-plus"></i> &nbsp; Product Accounts List</button></Link>
                                        </div>
                                    </div>
                                    {/* role="form" */}
                                    <form onSubmit={this.onSubmit}>
                                        <div class="box-body">
                                        <div class="col-md-4">
                                                <div class="form-group">
                                                    <label>Category Name</label>
                                                    <select class="form-control select2 " onChange={this.onChangeCategory}> {/* selectlist */}
                                                        <option selected="selected" value={this.state.category}>{this.state.category}</option>
                                                        {
                                                        this.state.categorylist.map((items, i) => {
                                                            return (
                                                            <option value={items.category_name}>{items.category_name}</option>
                                                            )
                                                        })}
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="form-group">
                                                    <label>Sub Category Name</label>
                                                    <select class="form-control select2 " onChange={this.onChangeSubCategory}> {/* selectlist */}
                                                        <option selected="selected" value={this.state.subcategory}>{this.state.subcategory}</option>
                                                        {
                                                        this.state.subcategorylist.map((items, i) => {
                                                            return (
                                                            <option value={items.subcat_name}>{items.subcat_name}</option>
                                                            )
                                                        })}
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="form-group">
                                                    <label>Product Name</label>
                                                    <select class="form-control select2 " onChange={this.onChangeProduct}> {/* selectlist */}
                                                        <option selected="selected" value={this.state.product}>{this.state.product}</option>
                                                        {
                                                        this.state.productlist.map((items, i) => {
                                                            return (
                                                            <option value={items.product_name}>{items.product_name}</option>
                                                            )
                                                        })}
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="form-group">
                                                    <label>Manufactuer</label>
                                                    <input type="text" name='manufactuer' class="form-control"
                                                    value={this.state.manufactuer}
                                                     id="manufactuer" placeholder="Manufactuer"  onChange={this.onChangeManufactuer} />
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="form-group">
                                                    <label>MRP : (Ex:123)</label>
                                                    <input type="text" name='mrp' class="form-control" 
                                                     onChange={this.onChangeMrp} value={this.state.mrp}
                                                    id="mrp" placeholder="MRP : (Ex:123)" />
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="form-group">
                                                    <label for="Categoryname">Discount(5%)</label>
                                                    <input type="text" name='discount' class="form-control"  
                                                    value={this.state.discount} onChange={this.onChangeDiscount}
                                                    id="discount" placeholder="Discount(5%)" />
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="form-group">
                                                    <label for="Categoryname">HSN</label>
                                                    <input type="text" name='hsn' class="form-control"  
                                                    value={this.state.hsn} onChange={this.onChangeHsn}
                                                    id="hsn" placeholder="HSN" />
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="form-group">
                                                    <label for="Categoryname">GST</label>
                                                    <input type="text" name='gst' class="form-control"  
                                                    value={this.state.gst} onChange={this.onChangeGst}
                                                    id="gst" placeholder="GST" />
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="form-group">
                                                    <label for="Categoryname">Batch</label>
                                                    <input type="text" name='batch' class="form-control"  
                                                    value={this.state.batch} onChange={this.onChangeBatch}
                                                    id="batch" placeholder="Batch" />
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="form-group">
                                                    <label for="Categoryname">Expiry</label>
                                                    <input type="text" name='expiry' class="form-control" 
                                                    value={this.state.expiry} onChange={this.onChangeExpiry}
                                                     id="expiry" placeholder="Expiry" />
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="form-group">
                                                    <label for="Categoryname">Quantity</label>
                                                    <input type="text" name='quantity' class="form-control" 
                                                    value={this.state.qtys} onChange={this.onChangeQuantity}
                                                    id="quantity" placeholder="Quantity" />
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="form-group">
                                                    <label for="Categoryname">Date</label>
                                                    <input type="date" name='date' class="form-control" 
                                                    value={this.state.date} onChange={this.onChangeDate}
                                                    id="eate" placeholder="Date" />
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

export default AccountsEdit;

