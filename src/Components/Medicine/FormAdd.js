import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
class FormAdd extends React.Component {
    constructor(props) {
        super(props);
        this.onChangeFormname = this.onChangeFormname.bind(this);
        this.onChangeFormurl = this.onChangeFormurl.bind(this);
        this.onChangePicture = this.onChangePicture.bind(this);
        this.onChangeImagealt = this.onChangeImagealt.bind(this);
        this.onChangeMetatitle = this.onChangeMetatitle.bind(this);
        this.onChangeMetakeyword = this.onChangeMetakeyword.bind(this);
        this.onChangeMetadesc = this.onChangeMetadesc.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            formname: '',
            formurl: '',
            picture: '',
            alt: '',
            metatitle:'',
            metakeyword:'',
            metadesc:'',
        }
      }
      onChangeFormname(e) {this.setState({ formname: e.target.value,});}
      onChangeFormurl(e) {this.setState({ formurl: e.target.value,});}
      onChangePicture(e) {this.setState({ picture: e.target.files[0],});}
      onChangeImagealt(e) {this.setState({ alt: e.target.value,});}
      onChangeMetatitle(e) {this.setState({ metatitle: e.target.value,});}
      onChangeMetakeyword(e) {this.setState({ metakeyword: e.target.value,});}
      onChangeMetadesc(e) {this.setState({ metadesc: e.target.value,});}
      onSubmit(e) {
        e.preventDefault();
        let formData = new FormData();
        formData.append('picture', this.state.picture)
        const obj = {
            formname: this.state.formname,
            formurl: this.state.formurl,
            alt: this.state.alt,
            metatitle: this.state.metatitle,
            metakeyword: this.state.metakeyword,
            metadesc: this.state.metadesc,
        };
        formData.append('formname', obj.formname)
        formData.append('formurl', obj.formurl)
        formData.append('alt', obj.alt)
        formData.append('metatitle', obj.metatitle)
        formData.append('metakeyword', obj.metakeyword)
        formData.append('metadesc', obj.metadesc)

        axios.post('http://13.232.195.17:4000/form', formData)
            .then(res => console.log(res.data));
        
      // Redirect to Student List 
      this.props.history.push('/formlist')
    
        this.setState({
            formname: '',
            formurl: '',
            picture: '',
            alt: '',
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
                                                Add Form Name</h3>
                                        </div>
                                        <div class="col-md-6">
                                            <Link to="/formlist">
                                                <button type="button" class="btn btn-primary pull-right">
                                                    <i class="fa fa-plus"></i> &nbsp; Form List</button></Link>
                                        </div>
                                    </div>
                                    {/* role="form" */}
                                    <form onSubmit={this.onSubmit}>
                                        <div class="box-body">
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label>Form Name (Ex : Gel or caps)</label>
                                                    <input type="text" name='formname' class="form-control" 
                                                    onChange={this.onChangeFormname}
                                                    id="formname" placeholder="Form Name (Ex : Gel or caps)" />
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label>Url Name(Ex : gel or caps)</label>
                                                    <input type="text" name='formurl' class="form-control" 
                                                    onChange={this.onChangeFormurl}
                                                    id="formurl" placeholder="Url Name(Ex : gel or caps)" />
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label for="Categoryname">Image</label>
                                                    <input type="file" name='image' class="form-control" 
                                                    onChange={this.onChangePicture}
                                                    id="image" />
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label for="Categoryname">Image Alt</label>
                                                    <input type="text" name='imagealt' class="form-control" 
                                                    onChange={this.onChangeImagealt}
                                                    id="imagealt" placeholder="Image Alt" />
                                                </div>
                                            </div>
                                            
                                            
                                            <div class="col-md-12">
                                                <h4 class="box-title" style={{ color: '#fe5e00', fontWeight: '500' }}>SEO (Meta Title, Keyword & Description)</h4>
                                                <hr />
                                            </div>
                                            <div class="col-md-12">
                                                <div class="form-group">
                                                <label>Meta Title:(52 to 60) Character Only(Ex: Product Form name | Drugcarts)</label>
                                                    <div class="input-group">
                                                        <div class="input-group-addon">
                                                            <i class="fa fa-text-width"></i>
                                                        </div>
                                                        <input type="text" class="form-control" maxlength="60" 
                                                        onChange={this.onChangeMetatitle}
                                                        name="metatitle" placeholder='Meta title' />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <div class="form-group">
                                                <label>Meta Keyword:(100 to 250)Character Only </label>
                                                    <div class="input-group">
                                                        <div class="input-group-addon">
                                                            <i class="fa fa-text-width"></i>
                                                        </div>
                                                        <input type="text" class="form-control" 
                                                        onChange={this.onChangeMetakeyword}
                                                        name="metakeyword" maxlength="250" placeholder='Meta Keyword'/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <div class="form-group">
                                                <label>Meta Description:(70 to 155) Character Only</label>
                                                    <div class="input-group">
                                                        <div class="input-group-addon">
                                                            <i class="fa fa-text-width"></i>
                                                        </div>
                                                        <textarea class="form-control"  onChange={this.onChangeMetadesc}
                                                        name="metadesc" maxlength="155" rows="10"></textarea>
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

export default FormAdd;

