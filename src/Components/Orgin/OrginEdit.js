import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
class OriginAdd extends React.Component {
    constructor(props) {
        super(props);
        this.onChangeOrginname = this.onChangeOrginname.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            orginname: '',
        }
      }
      componentDidMount() {
        axios.get('http://13.232.195.17:4000/orgin/'+this.props.match.params.id)
            .then(response => {
                this.setState({ 
                    orginname: response.data.orginname, 
                    status: response.data.status, 
                 });
            })
            .catch(function (error) {
                console.log(error);
            })
      }
      onChangeOrginname(e) {this.setState({ orginname: e.target.value,});}
      onSubmit(e) {
        e.preventDefault();
        const obj = {
            orginname: this.state.orginname,
        };

        axios.patch('http://13.232.195.17:4000/orgin/'+ this.props.match.params.id, obj)
            .then(res => console.log(res.data));
        
      // Redirect to Student List 
      this.props.history.push('/orginlist')
    
        this.setState({
            orginname: '',
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
                                                Add Product Country Orgin Name</h3>
                                        </div>
                                        <div class="col-md-6">
                                            <Link to="/storagelist">
                                                <button type="button" class="btn btn-primary pull-right">
                                                    <i class="fa fa-plus"></i> &nbsp; Product Country Orgin List</button></Link>
                                        </div>
                                    </div>
                                    {/* role="form" */}
                                    <form onSubmit={this.onSubmit}>
                                        <div class="box-body">
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label>Country of Orgin name: EX:India</label>
                                                    <input type="text" name='orginname' class="form-control" id="orginname"
                                                    onChange={this.onChangeOrginname}
                                                    value={this.state.orginname}
                                                     placeholder="Country of Orgin name: EX:India" />
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

export default OriginAdd;

