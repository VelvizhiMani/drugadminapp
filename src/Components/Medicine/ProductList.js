import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.deleteProduct = this.deleteProduct.bind(this);
    this.state = {
      productlist:[],
  }
  }
  componentDidMount() {
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
deleteProduct(id) {
  axios.delete('http://13.232.195.17:4000/product/' + id)
      .then((res) => {
          alert('Product successfully deleted!')
      }).catch((error) => {
          console.log(error)
      })
}
  render() {
    const {  productlist } = this.state;
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
                    <h3 class="box-title" style={{color:'#fe5e00',fontWeight:'500',marginTop:'10px'}}>Product List</h3>
                    </div>
                    <div class="col-md-6">
                    <Link to="/productadd">
                      <button type="button" class="btn btn-primary pull-right">
                        <i class="fa fa-plus"></i> &nbsp; Product Add</button></Link>
                    </div>
                </div>
                <div class="box-body">
                  <table id="example1" class="table table-bordered table-striped">
                    <thead>
                      <tr>
                        <th>S.no</th>
                        <th>Category</th>
                        <th>Subcat</th>
                        <th>Generic</th>
                        <th>Salt Composition</th>
                        <th>Product</th>
                        {/* <th>Code</th> */}
                        <th>Manufactuer</th>
                        <th>MRP</th>
                        <th>Image</th>
                        <th>Stock</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                    {productlist &&
                      productlist.map((items, index) => (
                        <tr key={index}>
                        <td>{index+1}</td>
                        <td>{items.cat_name}</td>
                        <td>{items.subcat_name}</td>
                        <td>{items.generices}</td>
                        <td>{items.genericname}</td>
                        <td>{items.product_name}</td>
                        {/* <td>DC-MA0056317</td> */}
                        <td>{items.manufactuer}</td>
                        <td>{items.price}</td>
                        <td><img src={"https://my-drugcarts-bucket.s3.ap-south-1.amazonaws.com/"+items.product_img} alt="Drugcarts" class="img-box1"/></td>
                        <td>{items.stock}</td>
                        <td style={{width:'10%' }}><button><Link to={"/productview/" + items._id}><i class="fa fa-eye text-green"></i></Link></button> &nbsp; 
                            <button><Link to={"/productedit/" + items._id}><i class="fa fa-edit (alias) text-blue"></i></Link></button> &nbsp;
                            <button onClick={ () => this.deleteProduct(items._id)}><i class="fa fa-trash text-red"></i></button></td>
                        </tr>
                        ))}
                    </tbody>
                    <tfoot>
                    <tr>
                        <th>S.no</th>
                        <th>Category</th>
                        <th>Subcat</th>
                        <th>Generic</th>
                        <th>Salt Composition</th>
                        <th>Product</th>
                        <th>Code</th>
                        <th>Manufactuer</th>
                        <th>MRP</th>
                        <th>Image</th>
                        <th>Stock</th>
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

export default ProductList;
