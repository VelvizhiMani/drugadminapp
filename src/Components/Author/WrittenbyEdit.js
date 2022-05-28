import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
class WrittenbyEdit extends React.Component {
    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeQualification = this.onChangeQualification.bind(this);
        this.onChangeImage = this.onChangeImage.bind(this);
        this.onChangeImagealt = this.onChangeImagealt.bind(this);
        this.onChangeExperience = this.onChangeExperience.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            name: '',
            qualification: '',
            picture: '',
            imagealt: '',
            experience: '',
        }
      }
      componentDidMount() {
        axios.get('http://13.232.195.17:4000/writtenby/'+this.props.match.params.id)
            .then(response => {
                this.setState({ 
                    name: response.data.name, 
                    qualification: response.data.qualification, 
                    picture: response.data.picture, 
                    imagealt: response.data.imagealt, 
                    experience: response.data.experience, 
                    status: response.data.status, 
                 });
            })
            .catch(function (error) {
                console.log(error);
            })
      }
      onChangeName(e) {this.setState({ name: e.target.value,});}
      onChangeQualification(e) {this.setState({ qualification: e.target.value,});}
      onChangeImage(e) {this.setState({ picture: e.target.files[0],});}
      onChangeImagealt(e) {this.setState({ imagealt: e.target.value,});}
      onChangeExperience(e) {this.setState({ experience: e.target.value,});}
      onSubmit(e) {
        e.preventDefault();
        let formData = new FormData();
        formData.append('picture', this.state.picture)
        const obj = {
            name: this.state.name,
            qualification: this.state.qualification,
            imagealt: this.state.imagealt,
            experience: this.state.experience,
        };
        formData.append('name', obj.name)
        formData.append('qualification', obj.qualification)
        formData.append('imagealt', obj.imagealt)
        formData.append('experience', obj.experience)

        axios.patch('http://13.232.195.17:4000/writtenby/'+ this.props.match.params.id, formData)
            .then(res => console.log(res.data));
        
      // Redirect to Student List 
      this.props.history.push('/writtenlist')
    
        this.setState({
            name: '',
            qualification: '',
            picture: '',
            imagealt: '',
            experience: '',
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
                                                Add Written By</h3>
                                        </div>
                                        <div class="col-md-6">
                                            <Link to="/writtenlist">
                                                <button type="button" class="btn btn-primary pull-right">
                                                    <i class="fa fa-plus"></i> &nbsp; Written By List</button></Link>
                                        </div>
                                    </div>
                                    {/* role="form" */}
                                    <form onSubmit={this.onSubmit}>
                                        <div class="box-body">
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label>Name</label>
                                                    <input type="text" name='name' class="form-control" id="name" 
                                                     onChange={this.onChangeName} value={this.state.name}
                                                    placeholder="Name" />
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label>Qualification</label>
                                                    <input type="text" name='qualification' class="form-control" 
                                                     onChange={this.onChangeQualification} value={this.state.qualification}
                                                    id="qualification" placeholder="Qualification" />
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label>Image</label>
                                                    <img src={"https://my-drugcarts-bucket.s3.ap-south-1.amazonaws.com/"+this.state.picture} alt="Drugcarts" />
                                                    <input type="file" name='picture' class="form-control" 
                                                     onChange={this.onChangeImage}
                                                    id="picture" placeholder="Image" />
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label>Image Alt Tag</label>
                                                    <input type="text" name='imagealt' class="form-control" 
                                                     onChange={this.onChangeImagealt} value={this.state.imagealt}
                                                    id="imagealt" placeholder="Image Alt Tag" />
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label>Experience</label>
                                                    <input type="text" name='experience' class="form-control" 
                                                     onChange={this.onChangeExperience} value={this.state.experience}
                                                    id="experience" placeholder="Experience" />
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

export default WrittenbyEdit;

