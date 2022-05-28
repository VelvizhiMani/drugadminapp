import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
class ManufactuerEdit extends React.Component {
    constructor(props) {
        super(props);
        this.onChangeManufname = this.onChangeManufname.bind(this);
        this.onChangeManufurl = this.onChangeManufurl.bind(this);
        this.onChangeManufaddress = this.onChangeManufaddress.bind(this);
        this.onChangeMetatitle = this.onChangeMetatitle.bind(this);
        this.onChangeMetakeyword = this.onChangeMetakeyword.bind(this);
        this.onChangeMetadesc = this.onChangeMetadesc.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            manufactuername: '',
            manufactuerurl: '',
            manufactueraddress: '',
            metatitle:'',
            metakeyword:'',
            metadesc:'',
        }
      }
      componentDidMount() {
        axios.get('http://13.232.195.17:4000/manufactuer/'+this.props.match.params.id)
            .then(response => {
                this.setState({ 
                  manufactuername: response.data.manufactuername, 
                  manufactuerurl: response.data.manufactuerurl, 
                  manufactueraddress: response.data.manufactueraddress, 
                  metatitle: response.data.metatitle, 
                  metakeyword: response.data.metakeyword, 
                  metadesc: response.data.metadesc, 
                 });
            })
            .catch(function (error) {
                console.log(error);
            })
      }
      onChangeManufname(e) {this.setState({ manufactuername: e.target.value,});}
      onChangeManufurl(e) {this.setState({ manufactuerurl: e.target.value,});}
      onChangeManufaddress(e) {this.setState({ manufactueraddress: e.target.value,});}
      onChangeMetatitle(e) {this.setState({ metatitle: e.target.value,});}
      onChangeMetakeyword(e) {this.setState({ metakeyword: e.target.value,});}
      onChangeMetadesc(e) {this.setState({ metadesc: e.target.value,});}
      onSubmit(e) {
        e.preventDefault();
        const obj = {
          manufactuername: this.state.manufactuername,
          manufactuerurl: this.state.manufactuerurl,
          manufactueraddress: this.state.manufactueraddress,
          metatitle: this.state.metatitle,
          metakeyword: this.state.metakeyword,
          metadesc: this.state.metadesc,
        };
        axios.patch('http://13.232.195.17:4000/manufactuer/'+ this.props.match.params.id, obj)
            .then(res => console.log(res.data));
        
      // Redirect to Student List 
      this.props.history.push('/manufactuerlist')
    
        this.setState({
            manufactuername: '',
            manufactuerurl: '',
            manufactueraddress: '',
            metatitle:'',
            metakeyword:'',
            metadesc:'',
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
                                                Add Manufactuer Name</h3>
                                        </div>
                                        <div class="col-md-6">
                                            <Link to="/genericlist">
                                                <button type="button" class="btn btn-primary pull-right">
                                                    <i class="fa fa-plus"></i> &nbsp; Generic Name List</button></Link>
                                        </div>
                                    </div>
                                    {/* role="form" */}
                                    <form onSubmit={this.onSubmit}>
                                        <div class="box-body">
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label>Manufactuer Name</label>
                                                    <input type="category" name='manufactuername' class="form-control" 
                                                     onChange={this.onChangeManufname}
                                                     value={this.state.manufactuername}
                                                     id="manufactuername" placeholder="Manufactuer Name" />
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label>Manufactuer URL (Ex:natco-pharma)</label>
                                                    <input type="text" name='manufactuerurl' class="form-control" 
                                                    onChange={this.onChangeManufurl} value={this.state.manufactuerurl}
                                                    placeholder="Manufactuer URL" />
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <div class="form-group">
                                                    <label for="Categoryname">Manufactuer Address/Marketer Address</label>
                                                    <input type="text" name='manufactueraddress' class="form-control" 
                                                    onChange={this.onChangeManufaddress} value={this.state.manufactueraddress}
                                                    placeholder="Manufactuer Address/Marketer Addresss" />
                                                </div>
                                            </div>
                                            
                                            
                                            <div class="col-md-12">
                                                <h4 class="box-title" style={{ color: '#fe5e00', fontWeight: '500' }}>SEO (Meta Title, Keyword & Description)</h4>
                                                <hr />
                                            </div>
                                            <div class="col-md-12">
                                                <div class="form-group">
                                                <label>Meta Title:(52 to 60) Character Only<br/>
				(Ex: Hetero Healthcare Ltd Products List | Drugcarts<br/>
                 Ex: Order Hetero Healthcare Ltd Products Online | Drugcarts)</label>
                                                    <div class="input-group">
                                                        <div class="input-group-addon">
                                                            <i class="fa fa-text-width"></i>
                                                        </div>
                                                        <input type="text" class="form-control" maxlength="60" name="metatitle" 
                                                        onChange={this.onChangeMetatitle} value={this.state.metatitle}/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <div class="form-group">
                                                <label>Meta Keyword:(100 to 250)Character Only<br/>
				EX: Hetero Healthcare Ltd,Hetero Healthcare products,hetero Healthcare generic medicines,hetero Healthcare generics products,hetero healthcare brands,Hetero Healthcare Ltd online products,Hetero Healthcare products list</label>
                                                    <div class="input-group">
                                                        <div class="input-group-addon">
                                                            <i class="fa fa-text-width"></i>
                                                        </div>
                                                        <input type="text" class="form-control" name="metakeyword" maxlength="250" 
                                                        value={this.state.metakeyword}
                                                        onChange={this.onChangeMetakeyword}/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <div class="form-group">
                                                <label>Meta Description:(70 to 155) Character Only<br/>
				EX:Find the list of medicines manufactured by Hetero Healthcare Ltd for different Health problems @Drugcarts, Best medical store to order medicines online.<br/>
				Ex:Find the list of medicines manufactured by Hetero Healthcare Ltd for different Health problems @Drugcarts, pharmacy to order online medicines.
				</label>
                                                    <div class="input-group">
                                                        <div class="input-group-addon">
                                                            <i class="fa fa-text-width"></i>
                                                        </div>
                                                        <textarea class="form-control" name="metadesc" maxlength="155" rows="10"
                                                        value={this.state.metadesc}
                                                        onChange={this.onChangeMetadesc}>{this.state.metadesc}</textarea>
                                                    </div>
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

export default ManufactuerEdit;

