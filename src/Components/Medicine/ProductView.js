import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class ProductView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        cat_name: '',
        subcat_name: '',
        generices: '',
        product_name: '',
        url: '',
        genericname: '',
        brand: '',
        manufactuer: '',
        manufactueraddress: '',
        tabscount: '',
        strength: '',
        package: '',
        price: '',
        packing: '',
        product_img: '',
        description: '',
        disclaimer: '',
        stock: '',
        saleprice: '',
        percentage: '',
        rexrequired: '',
        orgin: '',
        storage: '',
        status: '',
        timestamp: '',
        writebyid: '',
        reviewbyid: '',
        // faqs : '',
        reference: '',
        metatitle: '',
        metakeyword: '',
        metadesc: '',
        varient: '',
        imagealt: '',
        vedio: '',
        vedioalt: '',
        userupdate: '',
        updatetiemstamp: '',
        userid: '',
        date: '',
        referwebsite: '',
        expires: '',
        useofmeds: '',
        useofbenefits: '',
        indicat: '',
        mechanism: '',
        medicinework: '',
        contraindications: '',
        sideeffects: '',
        faqs: '',
        pregnancy: '',
        breastfeeding: '',
        kidneyproblem: '',
        liverdisease: '',
        asthma: '',
        takemedicine: '',
        adult: '',
        childrenmed: '',
        elderlymed: '',
        alcohol: '',
        heartdisease: '',
        driving: '',
        warnings: '',
        talkdoctor: '',
        instructions: '',
        druginteraction: '',
        drugfood: '',
        drugdiease: '',
        fooditems: '',
        overdose: '',
        misseddose: '',
        disposal: '',
        fasttag: '',
        refer: '',
  }
  }

  componentDidMount() {
    axios.get('http://13.232.195.17:4000/product/'+this.props.match.params.id)
        .then(response => {
            this.setState({ 
                cat_name: response.data.cat_name,
                subcat_name: response.data.subcat_name,
                generices: response.data.generices,
                product_name: response.data.product_name,
                url: response.data.url,
                genericname: response.data.genericname,
                brand: response.data.brand,
                manufactuer: response.data.manufactuer,
                manufactueraddress: response.data.manufactueraddress,
                tabscount: response.data.tabscount,
                strength: response.data.strength,
                package: response.data.package,
                price: response.data.price,
                packing: response.data.packing,
                product_img: response.data.product_img,
                description: response.data.description,
                // disclaimer: response.data.disclaimer,
                stock: response.data.stock,
                saleprice: response.data.saleprice,
                percentage: response.data.percentage,
                rexrequired: response.data.rexrequired,
                orgin: response.data.orgin,
                storage: response.data.storage,
                status: response.data.status,
                timestamp: response.data.timestamp,
                writebyid: response.data.writebyid,
                reviewbyid: response.data.reviewbyid,
                // faqs : response.data.url,
                reference: response.data.reference,
                metatitle: response.data.metatitle,
                metakeyword: response.data.metakeyword,
                metadesc: response.data.metadesc,
                varient: response.data.varient,
                imagealt: response.data.imagealt,
                vedio: response.data.vedio,
                vedioalt: response.data.vedioalt,
                userupdate: response.data.userupdate,
                updatetiemstamp: response.data.updatetiemstamp,
                userid: response.data.userid,
                date: response.data.date,
                referwebsite: response.data.referwebsite,
                expires: response.data.expires,
                useofmeds: response.data.useofmeds,
                useofbenefits: response.data.useofbenefits,
                indicat: response.data.indicat,
                mechanism: response.data.mechanism,
                medicinework: response.data.medicinework,
                contraindications: response.data.contraindications,
                sideeffects: response.data.sideeffects,
                faqs: response.data.faqs,
                pregnancy: response.data.pregnancy,
                breastfeeding: response.data.breastfeeding,
                kidneyproblem: response.data.kidneyproblem,
                liverdisease: response.data.liverdisease,
                asthma: response.data.asthma,
                takemedicine: response.data.takemedicine,
                adult: response.data.adult,
                childrenmed: response.data.childrenmed,
                elderlymed: response.data.elderlymed,
                alcohol: response.data.alcohol,
                heartdisease: response.data.heartdisease,
                driving: response.data.driving,
                warnings: response.data.warnings,
                talkdoctor: response.data.talkdoctor,
                instructions: response.data.instructions,
                druginteraction: response.data.druginteraction,
                drugfood: response.data.drugfood,
                drugdiease: response.data.drugdiease,
                fooditems: response.data.fooditems,
                overdose: response.data.overdose,
                misseddose: response.data.misseddose,
                disposal: response.data.disposal,
                fasttag: response.data.fasttag,
                refer: response.data.refer, 
                paymenttype: this.state.paymenttype,
                retunpolicy: this.state.retunpolicy,
                gst: this.state.gst,
                hsn: this.state.hsn,	
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
                    <h3 class="box-title" style={{color:'#fe5e00',fontWeight:'500',marginTop:'10px'}}>View Category</h3>
                    </div>
                    <div class="col-md-6">
                    <Link to="/productlist">
                      <button type="button" class="btn btn-primary pull-right">
                        <i class="fa fa-plus"></i> &nbsp; Product List</button></Link>
                    </div>
                  </div>
                  <div class="box-body">
                  <table id="example1" class="table table-bordered table-striped">
                    <thead>
                      <tr>
                        <th class="bg-green text-center" colSpan={4}>View Product</th>
                      </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th class="bg-gray">Category Name</th>
                            <td >{this.state.cat_name}</td>
                            <th class="bg-gray">Sub Category Name</th>
                            <td>{this.state.subcat_name}</td>
                        </tr>
                        <tr>
                            <th class="bg-gray">Generices</th>
                            <td >{this.state.generices}</td>
                            <th class="bg-gray">Product Name</th>
                            <td>{this.state.product_name}</td>
                        </tr>
                        <tr>
                            <th class="bg-gray">Product Image</th>
                            <td ><img src={"https://my-drugcarts-bucket.s3.ap-south-1.amazonaws.com/"+this.state.product_img} alt="drugcarts" /></td>
                            <th class="bg-gray">Url</th>
                            <td>{this.state.url}</td>
                        </tr>
                        <tr>
                            <th class="bg-gray">Generic Name</th>
                            <td >{this.state.genericname}</td>
                            <th class="bg-gray">Brand Name</th>
                            <td>{this.state.brand}</td>
                        </tr>
                        <tr>
                            <th class="bg-gray">Manufactuer</th>
                            <td >{this.state.manufactuer}</td>
                            <th class="bg-gray">Manufactuer Address</th>
                            <td>{this.state.manufactueraddress}</td>
                        </tr>
                        <tr>
                            <th class="bg-gray">Tabs Count</th>
                            <td >{this.state.tabscount}</td>
                            <th class="bg-gray">Strength</th>
                            <td>{this.state.strength}</td>
                        </tr>
                        <tr>
                            <th class="bg-gray">Package</th>
                            <td >{this.state.package}</td>
                            <th class="bg-gray">Price</th>
                            <td>{this.state.price}</td>
                        </tr>
                        <tr>
                            <th class="bg-gray">Stock</th>
                            <td >{this.state.stock}</td>
                            <th class="bg-gray">Sale Price</th>
                            <td>{this.state.saleprice}</td>
                        </tr>
                        <tr>
                            <th class="bg-gray">Description</th>
                            <td colSpan={3}>{this.state.description}</td>
                        </tr>
                        <tr>
                            <th class="bg-gray">Percentage</th>
                            <td >{this.state.percentage}</td>
                            <th class="bg-gray">Rex Required</th>
                            <td>{this.state.rexrequired}</td>
                        </tr>
                        <tr>
                            <th class="bg-gray">Origin</th>
                            <td >{this.state.orgin}</td>
                            <th class="bg-gray">Storage</th>
                            <td>{this.state.storage}</td>
                        </tr>
                        <tr>
                            <th class="bg-gray">Status</th>
                            <td >{this.state.status}</td>
                            <th class="bg-gray">Timestamp</th>
                            <td>{this.state.timestamp}</td>
                        </tr>
                        <tr>
                            <th class="bg-gray">Writen By </th>
                            <td >{this.state.writebyid}</td>
                            <th class="bg-gray">Reviewd By</th>
                            <td>{this.state.reviewbyid}</td>
                        </tr>
                        <tr>
                            <th class="bg-gray">FAQs</th>
                            <td >{this.state.faqs}</td>
                            <th class="bg-gray">Reference</th>
                            <td>{this.state.reference}</td>
                        </tr>
                        <tr>
                            <th class="bg-gray">Varient</th>
                            <td >{this.state.varient}</td>
                            <th class="bg-gray">Image Alt</th>
                            <td>{this.state.imagealt}</td>
                        </tr>
                        <tr>
                            <th class="bg-gray">Vedio</th>
                            <td >{this.state.vedio}</td>
                            <th class="bg-gray">Vedio Alt</th>
                            <td>{this.state.vedioalt}</td>
                        </tr>
                        <tr>
                            <th class="bg-gray">User Update</th>
                            <td >{this.state.userupdate}</td>
                            <th class="bg-gray">Update Timestamp</th>
                            <td>{this.state.updatetiemstamp}</td>
                        </tr>
                        <tr>
                            <th class="bg-gray">User ID</th>
                            <td >{this.state.userid}</td>
                            <th class="bg-gray">Indication</th>
                            <td>{this.state.indicat}</td>
                        </tr>
                        <tr>
                            <th class="bg-gray">Refer Website</th>
                            <td >{this.state.referwebsite}</td>
                            <th class="bg-gray">Expires</th>
                            <td>{this.state.expires}</td>
                        </tr>
                        <tr>
                            <th class="bg-gray">Use of Medicine</th>
                            <td >{this.state.useofmeds}</td>
                            <th class="bg-gray">Use of Benefits</th>
                            <td>{this.state.useofbenefits}</td>
                        </tr>
                        <tr>
                            <th class="bg-gray">Mechanism</th>
                            <td >{this.state.mechanism}</td>
                            <th class="bg-gray">Medicine Work</th>
                            <td>{this.state.medicinework}</td>
                        </tr>
                        <tr>
                            <th class="bg-gray">Contraindications</th>
                            <td >{this.state.contraindications}</td>
                            <th class="bg-gray">Side Effects</th>
                            <td>{this.state.sideeffects}</td>
                        </tr>
                        <tr>
                            <th class="bg-gray">Faqs</th>
                            <td >{this.state.faqs}</td>
                            <th class="bg-gray">Pregnancy</th>
                            <td>{this.state.pregnancy}</td>
                        </tr>
                        <tr>
                            <th class="bg-gray">Breast Feeding</th>
                            <td >{this.state.breastfeeding}</td>
                            <th class="bg-gray">Kidney Problem</th>
                            <td>{this.state.kidneyproblem}</td>
                        </tr>
                        <tr>
                            <th class="bg-gray">Liver Disease</th>
                            <td >{this.state.liverdisease}</td>
                            <th class="bg-gray">Heart Disease</th>
                            <td>{this.state.heartdisease}</td>
                        </tr>
                        <tr>
                            <th class="bg-gray">Asthma</th>
                            <td >{this.state.asthma}</td>
                            <th class="bg-gray">Take Medicine</th>
                            <td>{this.state.takemedicine}</td>
                        </tr>
                        <tr>
                            <th class="bg-gray">Adult</th>
                            <td >{this.state.adult}</td>
                            <th class="bg-gray">Children Medicine</th>
                            <td>{this.state.childrenmed}</td>
                        </tr>
                        <tr>
                            <th class="bg-gray">Elderly Medicine</th>
                            <td >{this.state.elderlymed}</td>
                            <th class="bg-gray">Alcohol</th>
                            <td>{this.state.alcohol}</td>
                        </tr>
                        <tr>
                            <th class="bg-gray">Driving</th>
                            <td >{this.state.driving}</td>
                            <th class="bg-gray">Warnings</th>
                            <td>{this.state.warnings}</td>
                        </tr>
                        <tr>
                            <th class="bg-gray">Talk Doctor</th>
                            <td >{this.state.talkdoctor}</td>
                            <th class="bg-gray">Instructions</th>
                            <td>{this.state.instructions}</td>
                        </tr>
                        <tr>
                            <th class="bg-gray">Drug Interaction</th>
                            <td >{this.state.druginteraction}</td>
                            <th class="bg-gray">Drug Food</th>
                            <td>{this.state.drugfood}</td>
                        </tr>
                        <tr>
                            <th class="bg-gray">Drug Disease</th>
                            <td >{this.state.drugdiease}</td>
                            <th class="bg-gray">Food Items</th>
                            <td>{this.state.fooditems}</td>
                        </tr>
                        <tr>
                            <th class="bg-gray">Over Dose</th>
                            <td >{this.state.overdose}</td>
                            <th class="bg-gray">Missed Dose</th>
                            <td>{this.state.misseddose}</td>
                        </tr>
                        <tr>
                            <th class="bg-gray">Disposal</th>
                            <td >{this.state.disposal}</td>
                            <th class="bg-gray">Fast Tag</th>
                            <td>{this.state.fasttag}</td>
                        </tr>
                        <tr>
                            <th class="bg-gray">Reference</th>
                            <td >{this.state.refer}</td>
                            <th class="bg-gray">Status</th>
                            <td>{this.state.status}</td>
                        </tr>
                        <tr>
                            <th class="bg-gray">Payment Type</th>
                            <td >{this.state.paymenttype}</td>
                            <th class="bg-gray">Return Policy</th>
                            <td>{this.state.retunpolicy}</td>
                        </tr>
                        <tr>
                            <th class="bg-gray">HSN</th>
                            <td >{this.state.hsn}</td>
                            <th class="bg-gray">GST</th>
                            <td>{this.state.gst}</td>
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

export default ProductView;
