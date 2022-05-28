import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class CategoryTable extends Component {
  constructor(props) {
    super(props);
    this.deleteStudent = this.deleteStudent.bind(this);
    this.state = {
        i:1,
    }
}

deleteStudent() {
    axios.delete('http://localhost:4000/category/' + this.props.obj._id)
        .then((res) => {
            console.log('Awards Name successfully deleted!')
        }).catch((error) => {
            console.log(error)
        })
}

  render() {
    return (
      <tr>
          <td>
          {this.props.sno}
        </td>
        <td>
          {this.props.obj.category_name}
        </td>
        <td>
          {this.props.obj.cat_type}
        </td>
        <td>
        <td style={{width:'8%' }}>
          <Link to=""><i class="fa fa-eye text-green"></i></Link> | &nbsp; 
          <Link to={"/awardsedit/" + this.props.obj._id}><i class="fa fa-edit (alias) text-blue"></i></Link> | &nbsp;
          <Link to="" onClick={this.deleteStudent} ><i class="fa fa-trash text-red"></i></Link></td>
          {/* <Link to={"/awardsedit/" + this.props.obj._id} className="btn btn-primary">Edit</Link> */}
        </td>
      </tr>
    );
  }
}

export default CategoryTable;