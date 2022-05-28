import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class CategoryEdit extends React.Component {
  constructor(props) {
    super(props);
    this.onChangeCategoryType = this.onChangeCategoryType.bind(this);
    this.onChangeCategoryName = this.onChangeCategoryName.bind(this);
    this.onChangeCategoryurl = this.onChangeCategoryurl.bind(this);
    this.onChangeCategoryImg = this.onChangeCategoryImg.bind(this);
    this.onChangeImagealt = this.onChangeImagealt.bind(this);
    this.onChangeVedio = this.onChangeVedio.bind(this);
    this.onChangeVedioalt = this.onChangeVedioalt.bind(this);
    this.onChangeMetatitle = this.onChangeMetatitle.bind(this);
    this.onChangeMetakeyword = this.onChangeMetakeyword.bind(this);
    this.onChangeMetadesc = this.onChangeMetadesc.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
        cat_type: '',
        category_name: '',
        url: '',
        cat_img: '',
        imagealt:'',
        vedio:'',
        vedioalt:'',
        metatitle:'',
        metakeyword:'',
        metadesc:'',
  }
  }

  componentDidMount() {
    axios.get('http://13.232.195.17:4000/category/'+this.props.match.params.id)
        .then(response => {
            this.setState({ 
              url: response.data.url, 
              category_name: response.data.category_name, 
              cat_type: response.data.cat_type, 
              cat_img: response.data.cat_img, 
              imagealt: response.data.imagealt, 
              vedio: response.data.vedio, 
              vedioalt: response.data.vedioalt, 
              metatitle: response.data.metatitle, 
              metakeyword: response.data.metakeyword, 
              metadesc: response.data.metadesc, 
             });
        })
        .catch(function (error) {
            console.log(error);
        })
  }


  onChangeCategoryType(e) {
    this.setState({
      cat_type: e.target.value,
    });
  }

  onChangeCategoryName(e) {
    this.setState({
      category_name: e.target.value,
    });
  }
  onChangeCategoryurl(e) {
    this.setState({
      url: e.target.value,
    });
  }
  onChangeCategoryImg(e) {
    this.setState({
        cat_img: e.target.files[0]
    });
  }
  onChangeImagealt(e) {
    this.setState({
        imagealt: e.target.value
    });
  }
  onChangeVedio(e) {
    this.setState({
        vedio: e.target.files[0]
    });
  }
  onChangeVedioalt(e) {
    this.setState({
        vedioalt: e.target.value
    });
  }
  onChangeMetatitle(e) {
    this.setState({
        metatitle: e.target.value
    });
  }
  onChangeMetakeyword(e) {
    this.setState({
        metakeyword: e.target.value
    });
  }
  onChangeMetadesc(e) {
    this.setState({
        metadesc: e.target.value
    });
  }
  onSubmit(e) {
    e.preventDefault();
    let formData = new FormData();
    formData.append('cat_img', this.state.cat_img)
    // formData.append('vedio', this.state.vedio)
    const obj = {
      url: this.state.url,
      category_name: this.state.category_name,
      cat_type: this.state.cat_type,
      imagealt: this.state.imagealt,
      vedioalt: this.state.vedioalt,
      metatitle: this.state.metatitle,
      metakeyword: this.state.metakeyword,
      metadesc: this.state.metadesc,
    };
    formData.append('url', obj.url)
    formData.append('category_name', obj.category_name)
    formData.append('cat_type', obj.cat_type)
    formData.append('imagealt', obj.imagealt)
    formData.append('vedioalt', obj.vedioalt)
    formData.append('metatitle', obj.metatitle)
    formData.append('metakeyword', obj.metakeyword)
    formData.append('metadesc', obj.metadesc)
    axios.patch('http://13.232.195.17:4000/category/'+ this.props.match.params.id, formData)
        .then(res => console.log(res.data));

  this.props.history.push('/categorylist')
    this.setState({
      url: '',
      category_name: '',
      cat_type: '',
      cat_img: '',
      imagealt:'',
      vedio:'',
      vedioalt:'',
      metatitle:'',
      metakeyword:'',
      metadesc:'',
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
                    <h3 class="box-title" style={{color:'#fe5e00',fontWeight:'500',marginTop:'10px'}}>Add Category</h3>
                    </div>
                    <div class="col-md-6">
                    <Link to="/categorylist">
                      <button type="button" class="btn btn-primary pull-right">
                        <i class="fa fa-plus"></i> &nbsp; Category List</button></Link>
                    </div>
                  </div>
                  {/* role="form" */}
                  <form onSubmit={this.onSubmit}> 
                    <div class="box-body">
                      <div class="col-md-4">
                        <div class="form-group">
                          <label>Category Type</label>
                          <select class="form-control select2 " onChange={this.onChangeCategoryType}> 
                            <option selected="selected" value={this.state.cat_type}>{this.state.cat_type}</option>
                            <option value="prescriptions">prescriptions</option>
                            <option value="non-prescriptions">non-prescriptions</option>
                            <option value="Others">Others</option>
                          </select>
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="form-group">
                          <label for="Categoryname">Category Name</label>
                          <input type="category" class="form-control" editable ={true} 
                          value={this.state.category_name}
                          onChange={this.onChangeCategoryName} 
                          placeholder="Category Name" autoComplete='off'/>
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="form-group">
                          <label for="Url">URL</label>
                          <input type="text" class="form-control"
                          value={this.state.url}
                          onChange={this.onChangeCategoryurl} 
                          placeholder="URL" />
                        </div>
                      </div>
                      <div class="col-md-4">
                          <div class="form-group">
                            <label class="labelheight">Category Image</label>
                            <img src="https://assets1.drugcarts.com/category/thumb/category16232529925952.webp" style={{width:'40px',height:'20px'}} alt="drugcarts"/>
                            {/* <img src={"https://my-drugcarts-bucket.s3.ap-south-1.amazonaws.com/"+this.state.product_img} alt="Drugcarts" class="img-box1"/> */}
                             <div class="input-group">
                              <div class="input-group-addon">
                              <i class="fa fa-image"></i>
                             </div>
                              <input type="file" class="form-control" name="cat_img"
                              onChange={this.onChangeCategoryImg}/>
                            </div>
                          </div>
                      </div>
                      <div class="col-md-4">
                        <div class="form-group">
                          <label for="Imagealt" class="labelheight">Image Alt Tag [EX:( Brand name,price,uses,side effects -Drugcarts)]</label>
                          <input type="text" class="form-control"
                          onChange={this.onChangeImagealt}
                          value={this.state.imagealt}
                          placeholder="Image Alt Tag" />
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="form-group">
                          <label class="labelheight">Video Upload</label><img src={"https://my-drugcarts-bucket.s3.ap-south-1.amazonaws.com/"+this.state.product_img} alt="Drugcarts" class="img-box1" style={{width:'40px',height:'20px'}}/>
                          <div class="input-group">
                            <div class="input-group-addon">
                            <i class="fa fa-image"></i>
                            </div>
                            <input type="file" class="form-control" 
                            onChange={this.onChangeVedio}/>
                          </div>
                        </div></div>
                      <div class="col-md-4">
                        <div class="form-group">
                          <label for="Videoalt" class="labelheight">Vedio Alt Tag [EX:( Brand name , price ,uses,side effects -Drugcarts)]</label>
                          <input type="text" class="form-control" 
                          value={this.state.vedioalt}
                          onChange={this.onChangeVedioalt} 
                          placeholder="Video alt" />
                        </div>
                      </div>
                      {/* <hr class="box box-primary" /> */}
                      <div class="col-md-12">
                    <h4 class="box-title" style={{color:'#fe5e00',fontWeight:'500'}}>SEO (Meta Title, Keyword & Description)</h4>
                    <hr/>
                  </div>
                      <div class="col-md-12">
                        <div class="form-group">
                          <label>Meta Title:(52 to 60) Character Only(Ex: Category name)</label>
                          <div class="input-group">
                            <div class="input-group-addon">
                              <i class="fa fa-text-width"></i>
                            </div>
                            <input type="text" class="form-control" maxlength="60" name="metatitle" 
                            value={this.state.metatitle}
                            onChange={this.onChangeMetatitle}/>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="form-group">
                          <label>Meta Keyword:(100 to 250)Character Only</label>
                          <div class="input-group">
                            <div class="input-group-addon">
                              <i class="fa fa-text-width"></i>
                            </div>
                            <input type="text" class="form-control" name="metakeyword" 
                            value={this.state.metakeyword}
                            onChange={this.onChangeMetakeyword}
                            maxlength="250" />
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
                            <textarea class="form-control" name="metadesc" 
                            value={this.state.metadesc}
                            onChange={this.onChangeMetadesc}
                            maxlength="155"></textarea>
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

export default CategoryEdit;
