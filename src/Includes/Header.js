import React from 'react';
import {Link} from 'react-router-dom';
class Header extends React.Component {
  render() {
    return (
      <>
       
  <header class="main-header">
    {/* <!-- Logo --> */}
    <Link to="index2.html" class="logo">
      {/* <!-- mini logo for sidebar mini 50x50 pixels --> */}
      <span class="logo-mini"><b>D</b>rug</span>
      {/* <!-- logo for regular state and mobile devices --> */}
      <span class="logo-lg"><b>Drug</b>CARTS</span>
    </Link>
    {/* <!-- Header Navbar: style can be found in header.less --> */}
    <nav class="navbar navbar-static-top">
      {/* <!-- Sidebar toggle button--> */}
      <Link to="#" class="sidebar-toggle" data-toggle="push-menu" role="button">
        <span class="sr-only">Toggle navigation</span>
      </Link>

      <div class="navbar-custom-menu">
        <ul class="nav navbar-nav">
          {/* <!-- Messages: style can be found in dropdown.less--> */}
          <li class="dropdown messages-menu">
            <Link to="#" class="dropdown-toggle" data-toggle="dropdown">
              <i class="fa fa-envelope-o"></i>
              <span class="label label-success">4</span>
            </Link>
            <ul class="dropdown-menu">
              <li class="header">You have 4 messages</li>
              <li>
                {/* <!-- inner menu: contains the actual data --> */}
                <ul class="menu">
                  <li>
                      {/* <!-- start message --> */}
                    <Link to="#">
                      <div class="pull-left">
                        <img src="https://assets3.drugcarts.com/static/image/logodrugnew.jpg" class="img-circle" alt="Drugcarts"/>
                      </div>
                      <h4>
                        Support Team
                        <small><i class="fa fa-clock-o"></i> 5 mins</small>
                      </h4>
                      <p>Why not buy a new awesome theme?</p>
                    </Link>
                  </li>
                </ul>
              </li>
              <li class="footer"><Link to="#">See All Messages</Link></li>
            </ul>
          </li>
          {/* <!-- Notifications: style can be found in dropdown.less --> */}
          <li class="dropdown notifications-menu">
            <Link to="#" class="dropdown-toggle" data-toggle="dropdown">
              <i class="fa fa-bell-o"></i>
              <span class="label label-warning">10</span>
            </Link>
            <ul class="dropdown-menu">
              <li class="header">You have 10 notifications</li>
              <li>
                {/* <!-- inner menu: contains the actual data --> */}
                <ul class="menu">
                  <li>
                    <Link to="#">
                      <i class="fa fa-users text-aqua"></i> 5 new members joined today
                    </Link>
                  </li>
                </ul>
              </li>
              <li class="footer"><Link to="#">View all</Link></li>
            </ul>
          </li>
          {/* <!-- Tasks: style can be found in dropdown.less --> */}
          
          {/* <!-- User Account: style can be found in dropdown.less --> */}
          <li class="dropdown user user-menu">
            <Link to="#" class="dropdown-toggle" data-toggle="dropdown">
              <img src="https://assets3.drugcarts.com/static/image/logodrugnew.jpg" class="user-image" alt="Drugcarts"/>
              <span class="hidden-xs">Velvizhi Mani</span>
            </Link>
            <ul class="dropdown-menu">
              {/* <!-- User image --> */}
              <li class="user-header">
                <img src="https://assets3.drugcarts.com/static/image/logodrugnew.jpg" class="img-circle" alt="Drugcarts"/>

                <p>
                  Velvizhi Mani - Web Developer
                  <small>Member since Nov. 2017</small>
                </p>
              </li>
              {/* <!-- Menu Body --> */}
              <li class="user-body">
                <div class="row">
                  <div class="col-xs-4 text-center">
                    <Link to="#">Mobile :</Link>
                  </div>
                  <div class="col-xs-8 text-center">
                    <Link to="#">+918056800773</Link>
                  </div>
                </div>
              </li>
              {/* <!-- Menu Footer--> */}
              <li class="user-footer">
                <div class="pull-left">
                  <Link to="#" class="btn btn-default btn-flat">Profile</Link>
                </div>
                <div class="pull-right">
                  <Link to="#" class="btn btn-default btn-flat">Sign out</Link>
                </div>
              </li>
            </ul>
          </li>
          {/* <!-- Control Sidebar Toggle Button --> */}
          
        </ul>
      </div>
    </nav>
  </header>
  {/* <!-- Left side column. contains the logo and sidebar --> */}
  <aside class="main-sidebar">
    {/* <!-- sidebar: style can be found in sidebar.less --> */}
    <section class="sidebar">
      {/* <!-- Sidebar user panel --> */}
      <div class="user-panel">
        <div class="pull-left image">
          <img src="https://assets3.drugcarts.com/static/image/logodrugnew.jpg" class="img-circle" alt="Drugcarts"/>
        </div>
        <div class="pull-left info">
          <p>Velvizhi Mani</p>
          <Link to="#"><i class="fa fa-circle text-success"></i> Online</Link>
        </div>
      </div>
      {/* <!-- search form --> */}
     
      {/* <!-- /.search form --> */}
      {/* <!-- sidebar menu: : style can be found in sidebar.less --> */}
      <ul class="sidebar-menu" data-widget="tree">
        <li class="header">MAIN NAVIGATION</li>
        <li class="active"><Link to="#"><i class="fa fa-dashboard text-lightblue"></i> <span>Dashboard</span></Link></li>
        <li><Link to="/categorylist"><i class="fa fa-list-alt"></i> <span>Category</span></Link></li>
        <li><Link to="/subcategorylist"><i class="fa fa-list-alt"></i> <span>Subcategory</span></Link></li>
        <li><Link to="/genericlist"><i class="fa fa-user-md"></i> <span>Generic Name</span></Link></li>
        <li class="treeview">
          <Link to="#">
            <i class="fa fa-dashboard"></i> <span>Medicine</span>
            <span class="pull-right-container">
              <i class="fa fa-angle-left  pull-right"></i>
            </span>
          </Link>
          <ul class="treeview-menu">
            <li class="active">
                <Link to="/productlist"><i class="fa fa-circle-o text-red"></i> Product List</Link></li>
            <li><Link to="/manufactuerlist"><i class="fa fa-circle-o text-green"></i> Manufactuer List</Link></li>
            <li><Link to="/formlist"><i class="fa fa-circle-o text-orange"></i> Form List</Link></li>
            <li><Link to="/storagelist"><i class="fa fa-circle-o text-pink"></i> Storage List</Link></li>
            <li><Link to="/packlist"><i class="fa fa-circle-o text-purple"></i> Pack List</Link></li>
            {/* <li class="active">
                <Link to="/medicinecatlist"><i class="fa fa-circle-o text-red"></i> Medicine List</Link></li> */}
          </ul>
        </li>
        <li><Link to="/orginlist"><i class="fa fa-user-md"></i> <span>Product Country of Orgin</span></Link></li>
        <li><Link to="/referweblist"><i class="fa fa-user-md"></i> <span>Reference Website List</span></Link></li>
        <li class="treeview">
          <Link to="#"><i class="fa fa-list"></i> <span>Product Author Details</span>
            <span class="pull-right-container"><i class="fa fa-angle-left  pull-right"></i></span>
          </Link>
          <ul class="treeview-menu">
            <li class="active">
                <Link to="/writtenlist"><i class="fa fa-circle-o text-red"></i> Written By List</Link></li>
            <li><Link to="/reviewedlist"><i class="fa fa-circle-o text-green"></i> Reviewed By List</Link></li>
          </ul>
        </li>
        <li class="treeview">
          <Link to="#"><i class="fa fa-list"></i> <span>Awareness</span>
            <span class="pull-right-container"><i class="fa fa-angle-left  pull-right"></i></span>
          </Link>
          <ul class="treeview-menu">
            <li class="active">
                <Link to="/diseaseslist"><i class="fa fa-circle-o text-red"></i> Know about diseases</Link></li>
            <li><Link to="/knowbody"><i class="fa fa-circle-o text-green"></i> Know Your Body</Link></li>
            <li><Link to="/healthvideo"><i class="fa fa-circle-o text-orange"></i> Health Video</Link></li>
            <li><Link to="/articles"><i class="fa fa-circle-o text-pink"></i> Health Articles</Link></li>
            <li><Link to="/blog"><i class="fa fa-circle-o text-blue"></i> Blog</Link></li>
            <li><Link to="/herbs"><i class="fa fa-circle-o text-purple"></i> Know about Herbs</Link></li>
            <li><Link to="/healthtips"><i class="fa fa-circle-o text-yellow"></i> Daily Health Tips</Link></li>
            <li><Link to="/healthnews"><i class="fa fa-circle-o text-green"></i> Health News</Link></li>
            <li><Link to="/graphics"><i class="fa fa-circle-o text-grey"></i> Info Graphics</Link></li>
          </ul>
        </li>
        <li><Link to="/ayushlist"><i class="fa fa-snowflake-o"></i> <span>Ayush List</span></Link></li>
        <li><Link to="/healthstorelist"><i class="fa fa-user-md"></i> <span>Health Store</span></Link></li>
        <li><Link to="/healthcarelist"><i class="fa fa-stethoscope"></i> <span>Health Care Device</span></Link></li>
        <li><Link to="/stockstatus"><i class="fa fa-heart"></i> <span>All Stock Status</span></Link></li>
        <li><Link to="/stocklist"><i class="fa fa-user-md"></i> <span>Add Stack Status</span></Link></li>
        <li><Link to="/accounts"><i class="fa fa-stethoscope"></i> <span>Accounts</span></Link></li>
        <li><Link to="/orderslist"><i class="fa fa-heartbeat"></i> <span>Orders</span></Link></li>
        <li><Link to="/customerlist"><i class="fa fa-user-md"></i> <span>Customer</span></Link></li>
        <li><Link to="/locationlist"><i class="fa fa-ambulance"></i> <span>Delivery Location</span></Link></li>
        <li class="treeview">
          <Link to="#"><i class="fa fa-list"></i> <span>Banners</span>
            <span class="pull-right-container"><i class="fa fa-angle-left  pull-right"></i></span>
          </Link>
          <ul class="treeview-menu">
            <li class="active">
                <Link to="/sliderlist"><i class="fa fa-circle-o text-red"></i> Main Slider List</Link></li>
            <li><Link to="/promotionlist"><i class="fa fa-circle-o text-green"></i> Promotion List</Link></li>
            <li><Link to="/pagebannerlist"><i class="fa fa-circle-o text-green"></i> Page Banner List</Link></li>
          </ul>
        </li>
        <li class="treeview">
          <Link to="#"><i class="fa fa-list"></i> <span>Country Code</span>
            <span class="pull-right-container"><i class="fa fa-angle-left  pull-right"></i></span>
          </Link>
          <ul class="treeview-menu">
            <li class="active">
                <Link to="index.html"><i class="fa fa-circle-o text-red"></i> Add Country Code</Link></li>
            <li><Link to="index2.html"><i class="fa fa-circle-o text-green"></i> List of Country code</Link></li>
          </ul>
        </li>
        <li class="treeview">
          <Link to="#"><i class="fa fa-list"></i> <span>Location</span>
            <span class="pull-right-container"><i class="fa fa-angle-left  pull-right"></i></span>
          </Link>
          <ul class="treeview-menu">
            <li class="active">
                <Link to="index.html"><i class="fa fa-circle-o text-red"></i>State</Link></li>
            <li><Link to="index2.html"><i class="fa fa-circle-o text-green"></i> District</Link></li>
            <li><Link to="index2.html"><i class="fa fa-circle-o text-green"></i> Area</Link></li>
          </ul>
        </li>
        <li><Link to="#"><i class="fa fa-circle-o text-red"></i> <span>Page Meta Tag</span></Link></li>
        <li><Link to="#"><i class="fa fa-circle-o text-green"></i> <span>Pages Banner</span></Link></li>
        <li><Link to="#"><i class="fa fa-circle-o text-orange"></i> <span>Page H1 Tag</span></Link></li>
        <li class="treeview">
          <Link to="#"><i class="fa fa-list"></i> <span>Doctor Profile</span>
            <span class="pull-right-container"><i class="fa fa-angle-left  pull-right"></i></span>
          </Link>
          <ul class="treeview-menu">
            <li class="active">
                <Link to="index.html"><i class="fa fa-circle-o text-red"></i>Doctor Specialty</Link></li>
            <li><Link to="index2.html"><i class="fa fa-circle-o text-green"></i> List of Doctor Profile</Link></li>
            <li><Link to="index2.html"><i class="fa fa-circle-o text-green"></i> List of Call Doctor</Link></li>
            <li><Link to="index2.html"><i class="fa fa-circle-o text-green"></i> List of consult Online</Link></li>
            <li><Link to="index2.html"><i class="fa fa-circle-o text-green"></i> List of Book Appointment</Link></li>
          </ul>
        </li>
        <li class="treeview">
          <Link to="#"><i class="fa fa-list"></i> <span>Lab Packages</span>
            <span class="pull-right-container"><i class="fa fa-angle-left  pull-right"></i></span>
          </Link>
          <ul class="treeview-menu">
            <li class="active">
                <Link to="index.html"><i class="fa fa-circle-o text-red"></i>Add Test Package</Link></li>
            <li><Link to="index2.html"><i class="fa fa-circle-o text-green"></i> Lab Details - (Lab Name)</Link></li>
            <li><Link to="index2.html"><i class="fa fa-circle-o text-green"></i> Add Test Details</Link></li>
          </ul>
        </li>
        <li class="treeview">
          <Link to="#"><i class="fa fa-list"></i> <span>Settings</span>
            <span class="pull-right-container"><i class="fa fa-angle-left  pull-right"></i></span>
          </Link>
          <ul class="treeview-menu">
            <li class="active">
                <Link to="index.html"><i class="fa fa-circle-o text-red"></i>Main Slider</Link></li>
            <li><Link to="index2.html"><i class="fa fa-circle-o text-green"></i> Drug Carts Services</Link></li>
          </ul>
        </li>
        <li class="treeview">
          <Link to="#"><i class="fa fa-list"></i> <span>Drug Carts Services</span>
            <span class="pull-right-container"><i class="fa fa-angle-left  pull-right"></i></span>
          </Link>
          <ul class="treeview-menu">
            <li class="active">
                <Link to="index.html"><i class="fa fa-circle-o text-red"></i>Drug Carts Services Category</Link></li>
          </ul>
        </li>
        <li class="treeview">
          <Link to="#"><i class="fa fa-list"></i> <span>Clinic</span>
            <span class="pull-right-container"><i class="fa fa-angle-left  pull-right"></i></span>
          </Link>
          <ul class="treeview-menu">
            <li class="active">
                <Link to="index.html"><i class="fa fa-circle-o text-red"></i> Clinic Category</Link></li>
            <li><Link to="index2.html"><i class="fa fa-circle-o text-green"></i> Add Clinic</Link></li>
            <li><Link to="index2.html"><i class="fa fa-circle-o text-orange"></i> List of Clinic</Link></li>
            <li><Link to="index2.html"><i class="fa fa-circle-o text-pink"></i> Clinic Booking List</Link></li>
          </ul>
        </li>
        <li><Link to="#"><i class="fa fa-circle-o text-red"></i> <span>Press List</span></Link></li>
        <li><Link to="#"><i class="fa fa-circle-o text-green"></i> <span>Product Enquiry</span></Link></li>
        <li><Link to="#"><i class="fa fa-circle-o text-orange"></i> <span>Feedback</span></Link></li>
        <li><Link to="#"><i class="fa fa-circle-o text-pink"></i> <span>Newsletters</span></Link></li>
        <li><Link to="#"><i class="fa fa-circle-o text-purple"></i> <span>Promotion</span></Link></li>
        <li><Link to="#"><i class="fa fa-circle-o text-yellow"></i> <span>Offers Code</span></Link></li>
        <li><Link to="#"><i class="fa fa-circle-o text-green"></i> <span>Product Sitemap List</span></Link></li>
        <li class="treeview">
          <Link to="#">
            <i class="fa fa-dashboard"></i> <span>HR</span>
            <span class="pull-right-container">
              <i class="fa fa-angle-left  pull-right"></i>
            </span>
          </Link>
          <ul class="treeview-menu">
            <li class="active">
                <Link to="index.html"><i class="fa fa-circle-o"></i> Employee Details</Link></li>
            <li><Link to="index2.html"><i class="fa fa-circle-o"></i> Employee Attadance</Link></li>
            <li><Link to="index2.html"><i class="fa fa-circle-o"></i> Employee Attadance List</Link></li>
          </ul>
        </li>
        <li><Link to="#"><i class="fa fa-circle-o text-red"></i> <span>Contract User</span></Link></li>
        <li><Link to="#"><i class="fa fa-circle-o text-green"></i> <span>Contract User List</span></Link></li>
      </ul>
    </section>
    {/* <!-- /.sidebar --> */}
  </aside>
      </>
    )
  }
}

export default Header;
