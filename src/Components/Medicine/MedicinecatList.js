import React from 'react';
import { Link } from 'react-router-dom';
class MedicinecatList extends React.Component {
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
                                            <h3 class="box-title">Generic Name Search</h3>
                                            <div id="search0" class="search input-group form-group">
                                                <input class="form-control" type="text" value="" size="50" autocomplete="off" id="searchsalt" placeholder="Search Your Salt Composition Name..." name="search1" />
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <h3 class="box-title">Brand Name Search (Product name)</h3>
                                            <div id="search0" class="input-group form-group text-right">
                                                <input class="form-control" type="text" value="" size="50" autocomplete="off" id="searchadmin" placeholder="Search Your Medicine..." name="search1" />
                                             </div>
                                        </div>
                                    </div><br/>
                                    {/* role="form" */}
                                    <form method="post" enctype="multipart/form-data" action="/categoryinsert">
                                        <div class="box-body">
                                            <div class="col-md-4">
                                                <div class="info-box" style={{ background: '#fff', padding: '30px', boxShadow: '0px 1px 6px 0px rgb(0 0 0 / 20%)', border: '1px solid #e5e5e5', borderRadius: '3px' }}>
                                                    <center><a style={{ color: '#000', fontWeight: 'bold', fontSize: '18px', textTransform: 'capitalize' }}
                                                        href="https://drugcarts.com/admin/medicinesubcategory/adhd"><span class="card-title"></span>ADHD</a></center>
                                                </div>
                                            </div>

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
export default MedicinecatList;
