import React from 'react';
import {Link} from 'react-router-dom';
class Subcategory extends React.Component {
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
                    <Link to="https://drugcarts.com/admin/category">
                      <button type="button" class="btn btn-primary pull-right">
                        <i class="fa fa-plus"></i> &nbsp; Category List</button></Link>
                    </div>
                  </div>
                  <form role="form" method="post" enctype="multipart/form-data" action="/categoryinsert">
                    <div class="box-body">
                      <div class="col-md-4">
                        <div class="form-group">
                          <label class="labelheight">Category Type</label>
                          <select class="form-control select2 selectlist">
                            <option selected="selected">Select Option</option>
                            <option>prescriptions</option>
                            <option>non-prescriptions</option>
                            <option>Others</option>
                          </select>
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="form-group">
                          <label for="Categoryname" class="labelheight">Category Name</label>
                          <input type="category" name='cat_name' class="form-control" id="cat_name" placeholder="Category Name" />
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="form-group">
                          <label for="Url" class="labelheight">URL</label>
                          <input type="password" class="form-control" name='caturl' id="caturl" placeholder="URL" />
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="form-group">
                          <label class="labelheight">Category Image</label>
                          <div class="input-group">
                            <div class="input-group-addon">
                              <i class="fa fa-image"></i>
                            </div>
                            <input type="file" class="form-control" name="picture" />
                          </div>
                        </div></div>
                      <div class="col-md-4">
                        <div class="form-group">
                          <label for="Imagealt" class="labelheight">Image Alt Tag [EX:( Brand name,price,uses,side effects -Drugcarts)]</label>
                          <input type="password" class="form-control" name='imagealt' id="imagealt" placeholder="Image Alt Tag" />
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="form-group">
                          <label class="labelheight">Video Upload</label>
                          <div class="input-group">
                            <div class="input-group-addon">
                              <i class="fa fa-image"></i>
                            </div>
                            <input type="file" class="form-control" name='vedio' />
                          </div>
                        </div></div>
                      <div class="col-md-4">
                        <div class="form-group">
                          <label for="Videoalt" class="labelheight">Vedio Alt Tag [EX:( Brand name , price ,uses,side effects -Drugcarts)]</label>
                          <input type="password" name="vedioalt" class="form-control" id="Video-alt" placeholder="Password" />
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
                            <input type="text" class="form-control" maxlength="60" name="metatitle" />
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
                            <input type="text" class="form-control" name="metakeyword" maxlength="250" />
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
                            <textarea class="form-control" name="metadesc" maxlength="155"></textarea>
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

export default Subcategory;