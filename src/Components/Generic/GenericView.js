import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class GenericView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        catnames: '',
            subname: '',
            url: '',
            generices:'',
            image:'',
            imagealt:'',
            vedio:'',
            vedioalt:'',
            description:'',
            usesofmeds:'',
            useofbenefits:'',
            indicat:'',
            mechanism:'',
            medicinework:'',
            contraindications:'',
            sideeffects:'',
            faqs:'',
            pregnancy:'',
            breastfeeding:'',
            kidneyproblem:'',
            liverdisease:'',
            asthma:'',
            takemedicine:'',
            adult:'',
            childrenmed:'',
            elderlymed:'',
            alcohol:'',
            heartdisease: '',
            driving:'',
            warnings:'',
            talkdoctor:'',
            instructions:'',
            druginteraction:'',
            drugfood:'',
            drugdiease:'',
            fooditems:'',
            overdose:'',
            misseddose:'',
            disposal:'',
            fasttag:'',
            refer:'',
            metatitle:'',
            metakeyword:'',
            metadesc:'',
            status:'',
  }
  }

  componentDidMount() {
    axios.get('http://13.232.195.17:4000/generic/'+this.props.match.params.id)
        .then(response => {
            this.setState({ 
                catnames: response.data.catnames, 
                subname: response.data.subname, 
                url: response.data.url, 
                generices:response.data.generices, 
                image:response.data.image, 
                imagealt:response.data.imagealt, 
                vedio:response.data.vedio, 
                vedioalt:response.data.vedioalt, 
                description:response.data.description, 
                usesofmeds:response.data.usesofmeds, 
                useofbenefits:response.data.useofbenefits, 
                indicat:response.data.indicat, 
                mechanism:response.data.mechanism, 
                medicinework:response.data.medicinework, 
                contraindications:response.data.contraindications, 
                sideeffects:response.data.sideeffects, 
                faqs:response.data.faqs, 
                pregnancy:response.data.pregnancy, 
                breastfeeding:response.data.breastfeeding, 
                kidneyproblem:response.data.kidneyproblem, 
                liverdisease:response.data.liverdisease,
                asthma:response.data.asthma, 
                takemedicine:response.data.takemedicine, 
                adult:response.data.adult, 
                childrenmed:response.data.childrenmed, 
                elderlymed:response.data.elderlymed, 
                alcohol:response.data.alcohol, 
                heartdisease:response.data.heartdisease, 
                driving:response.data.driving, 
                warnings:response.data.warnings, 
                talkdoctor:response.data.talkdoctor, 
                instructions:response.data.instructions, 
                druginteraction:response.data.druginteraction, 
                drugfood:response.data.drugfood, 
                drugdiease:response.data.drugdiease, 
                fooditems:response.data.fooditems, 
                overdose:response.data.overdose, 
                misseddose:response.data.misseddose, 
                disposal:response.data.disposal, 
                fasttag:response.data.fasttag, 
                refer:response.data.refer, 
                metatitle:response.data.metatitle, 
                metakeyword:response.data.metakeyword, 
                metadesc:response.data.metadesc, 
                status:response.data.status, 	
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
                    <h3 class="box-title" style={{color:'#fe5e00',fontWeight:'500',marginTop:'10px'}}>View Generic</h3>
                    </div>
                    <div class="col-md-6">
                    <Link to="/genericlist">
                      <button type="button" class="btn btn-primary pull-right">
                        <i class="fa fa-plus"></i> &nbsp; Generic List</button></Link>
                    </div>
                  </div>
                  <div class="box-body">
                  <table id="example1" class="table table-bordered table-striped">
                    <thead>
                      <tr>
                        <th class="bg-green text-center" colSpan={4}>View Generic</th>
                      </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th class="bg-gray">Category Name</th>
                            <td >{this.state.catnames}</td>
                            <th class="bg-gray">Sub Category Name</th>
                            <td>{this.state.subname}</td>
                        </tr>
                        <tr>
                            <th class="bg-gray">Generices</th>
                            <td>{this.state.generices}</td>
                            <th class="bg-gray">Category Image</th>
                            <td ><img src={"https://my-drugcarts-bucket.s3.ap-south-1.amazonaws.com/"+this.state.gen_img} alt="drugcarts"/></td>
                        </tr>
                        <tr>
                            <th class="bg-gray">URL</th>
                            <td >{this.state.url}</td>
                            <th class="bg-gray">Image Alt</th>
                            <td>{this.state.imagealt}</td>
                        </tr>
                        <tr>
                            <th class="bg-gray">Vedio Upload</th>
                            <td ><img src={"https://my-drugcarts-bucket.s3.ap-south-1.amazonaws.com/"+this.state.vedio} alt="drugcarts"/></td>
                            <th class="bg-gray">Vedio Alt</th>
                            <td>{this.state.vedioalt}</td>
                        </tr>
                        <tr>
                            <th class="bg-gray">Description</th>
                            <td >{this.state.description}</td>
                            <th class="bg-gray">Use of Medicine</th>
                            <td>{this.state.usesofmeds}</td>
                        </tr>
                        <tr>
                            <th class="bg-gray">Use of Benefits</th>
                            <td >{this.state.useofbenefits}</td>
                            <th class="bg-gray">Indication</th>
                            <td>{this.state.indicat}</td>
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

export default GenericView;
