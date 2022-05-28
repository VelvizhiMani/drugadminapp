import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
class SubcategoryEdit extends React.Component {
  constructor(props) {
    super(props);
    this.onChangeCategoryName = this.onChangeCategoryName.bind(this);
    this.onChangeSubcategoryName = this.onChangeSubcategoryName.bind(this);
    this.onChangeUrl = this.onChangeUrl.bind(this);
    this.onChangeImage = this.onChangeImage.bind(this);
    this.onChangeImagealt = this.onChangeImagealt.bind(this);
    this.onChangeVedioupload = this.onChangeVedioupload.bind(this);
    this.onChangeVedioalt = this.onChangeVedioalt.bind(this);
    this.onChangeBanner = this.onChangeBanner.bind(this);
    this.onChangeMetatitle = this.onChangeMetatitle.bind(this);
    this.onChangeMetakeyword = this.onChangeMetakeyword.bind(this);
    this.onChangeMetadesc = this.onChangeMetadesc.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      cat_name: '',
      subcat_name: '',
      url: '',
      cat_img: '',
      imagealt: '',
      vedio: '',
      vedioalt: '',
      banner: '',
      metatitle: '',
      metakeyword: '',
      metadesc: '',
      categorylist: [],

    }
  }
  onChangeCategoryName(e) { this.setState({ cat_name: e.target.value, }); }
  onChangeSubcategoryName(e) { this.setState({ subcat_name: e.target.value, }); }
  onChangeUrl(e) { this.setState({ url: e.target.value, }); }
  onChangeImage(e) { this.setState({ cat_img: e.target.files[0] }); }
  onChangeImagealt(e) { this.setState({ imagealt: e.target.value }); }
  onChangeVedioupload(e) { this.setState({ vedio: e.target.files[0] }); }
  onChangeVedioalt(e) { this.setState({ vedioalt: e.target.value }); }
  onChangeBanner(e) { this.setState({ banner: e.target.files[0] }); }
  onChangeMetatitle(e) { this.setState({ metatitle: e.target.value }); }
  onChangeMetakeyword(e) { this.setState({ metakeyword: e.target.value }); }
  onChangeMetadesc(e) { this.setState({ metadesc: e.target.value }); }
  
  componentDidMount() {
    axios.get('http://13.232.195.17:4000/subcategory/'+this.props.match.params.id)
        .then(response => {
            this.setState({ 
              url: response.data.url, 
              cat_name: response.data.cat_name, 
              subcat_name: response.data.subcat_name, 
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

        axios.get('http://localhost:4000/category/')
        .then(response => {
          this.setState({
            categorylist: response.data
          });
        })
        .catch(function (error) {
          console.log(error);
        })
  }


  onSubmit(e) {
    e.preventDefault();
    let formData = new FormData();
    formData.append('cat_img', this.state.cat_img)
    formData.append('vedio', this.state.vedio)
    formData.append('banner', this.state.banner)

    const obj = {
      cat_name: this.state.cat_name,
      subcat_name: this.state.subcat_name,
      url: this.state.url,
      imagealt: this.state.imagealt,
      vedioalt: this.state.vedioalt,
      metatitle: this.state.metatitle,
      metakeyword: this.state.metakeyword,
      metadesc: this.state.metadesc,
      // url: slugify(this.state.category_name,{
      //   lower:true
      // }),
    };
    formData.append('cat_name', obj.cat_name)
    formData.append('subcat_name', obj.subcat_name)
    formData.append('url', obj.url)
    formData.append('imagealt', obj.imagealt)
    formData.append('vedioalt', obj.vedioalt)
    formData.append('metatitle', obj.metatitle)
    formData.append('metakeyword', obj.metakeyword)
    formData.append('metadesc', obj.metadesc)
    axios.patch('http://13.232.195.17:4000/subcategory/'+ this.props.match.params.id, formData)
      .then(res => console.log(res.data));

    // Redirect to Student List 
    this.props.history.push('/subcategorylist')

    this.setState({
      cat_name: '',
      subcat_name: '',
      url: '',
      cat_img: '',
      imagealt: '',
      vedio: '',
      vedioalt: '',
      banner: '',
      metatitle: '',
      metakeyword: '',
      metadesc: '',
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
                    <h3 class="box-title" style={{color:'#fe5e00',fontWeight:'500',marginTop:'10px'}}>Add Category</h3>
                    </div>
                    <div class="col-md-6">
                    <a href="https://drugcarts.com/admin/category">
                      <button type="button" class="btn btn-primary pull-right">
                        <i class="fa fa-plus"></i> &nbsp; Category List</button></a>
                    </div>
                  </div>
                  <form onSubmit={this.onSubmit}>
                    <div class="box-body">
                      <div class="col-md-4">
                        <div class="form-group">
                          <label class="labelheight">Category Name</label>
                          <select class="form-control select2 selectlist" onChange={this.onChangeCategoryName}>
                            <option selected="selected" value={this.state.cat_name}>{this.state.cat_name}</option>
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
                          <label for="Categoryname" class="labelheight">Sub Category Name</label>
                          <input type="category" name='cat_name' class="form-control"
                           value={this.state.subcat_name} onChange={this.onChangeSubcategoryName}
                           id="cat_name" placeholder="Category Name" />
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="form-group">
                          <label for="Url" class="labelheight">URL</label>
                          <input type="text" class="form-control" 
                          value={this.state.url} onChange={this.onChangeUrl}
                           placeholder="URL" />
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="form-group">
                          <label class="labelheight">Subcategory Image</label><img src="" alt="drugcarts"/>
                          <div class="input-group">
                            <div class="input-group-addon">
                              <i class="fa fa-image"></i>
                            </div>
                            <input type="file" class="form-control" name="image" onChange={this.onChangeImage}/>
                          </div>
                        </div></div>
                      <div class="col-md-4">
                        <div class="form-group">
                          <label for="Imagealt" class="labelheight">Image Alt Tag [EX:( Brand name,price,uses,side effects -Drugcarts)]</label>
                          <input type="text" class="form-control" name='imagealt' onChange={this.onChangeImagealt}
                          value={this.state.imagealt}
                           placeholder="Image Alt Tag" />
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="form-group">
                          <label class="labelheight">Video Upload</label><img src="" alt="drugcarts" />
                          <div class="input-group">
                            <div class="input-group-addon">
                              <i class="fa fa-image"></i>
                            </div>
                            <input type="file" class="form-control" name='vedio' onChange={this.onChangeVedioupload} />
                          </div>
                        </div></div>
                      <div class="col-md-4">
                        <div class="form-group">
                          <label for="Videoalt" class="labelheight">Vedio Alt Tag [EX:( Brand name , price ,uses,side effects -Drugcarts)]</label>
                          <input type="text" name="vedioalt" class="form-control" 
                          value={this.state.vedioalt}  onChange={this.onChangeVedioalt}
                           placeholder="Vedio Alt Tag" />
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="form-group">
                          <label>Page Banner Image</label><img src="" alt="drugcarts"/>
                          <div class="input-group">
                            <div class="input-group-addon">
                              <i class="fa fa-text-width" aria-hidden="true"></i>
                            </div>
                            <input type="file" name='banner' class="form-control" 
                            onChange={this.onChangeBanner} />
                          </div>
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
                            onChange={this.onChangeMetatitle}
                            value={this.state.metatitle}/>
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
                             maxlength="250" onChange={this.onChangeMetakeyword}
                             value={this.state.metakeyword}/>
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
                            <textarea class="form-control" name="metadesc" maxlength="155" 
                            onChange={this.onChangeMetadesc}
                            value={this.state.metadesc}>{this.state.metadesc}
                            </textarea>
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

export default SubcategoryEdit;
