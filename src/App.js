import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import CategoryAdd from './Components/Category/CategoryAdd';
import CategoryList from './Components/Category/CategoryList';
import CategoryEdit from './Components/Category/CategoryEdit';
import CategoryView from './Components/Category/CategoryView';
import AyushList from './Components/Category/AyushList';
import HealthStoreList from './Components/Category/HealthStoreList';
import HealthCareList from './Components/Category/HealthCareList';
import SubcategoryAdd from './Components/Category/SubcategoryAdd';
import SubcategoryList from './Components/Category/SubcategoryList';
import SubcategoryEdit from './Components/Category/SubcategoryEdit';
import SubcategoryView from './Components/Category/SubcategoryView';
import Header from './Includes/Header';
import Footer from './Includes/Footer';
import GenericAdd from './Components/Generic/GenericAdd';
import GenericList from './Components/Generic/GenericList';
import MedicinecatList from './Components/Medicine/MedicinecatList';
import ProductAdd from './Components/Medicine/ProductAdd';
import ProductList from './Components/Medicine/ProductList';
import ManufactuerAdd from './Components/Medicine/ManufactuerAdd';
import ManufactuerList from './Components/Medicine/ManufactuerList';
import StorageAdd from './Components/Medicine/StorageAdd';
import StorageList from './Components/Medicine/StorageList';
import FormAdd from './Components/Medicine/FormAdd';
import FormList from './Components/Medicine/FormList';
import PackAdd from './Components/Medicine/PackAdd';
import PackList from './Components/Medicine/PackList';
import OrginList from './Components/Orgin/OrginList';
import OrginAdd from './Components/Orgin/OrginAdd';
import OrginEdit from './Components/Orgin/OrginEdit';
import ReferwebAdd from './Components/ReferWebsite/ReferwebAdd';
import ReferwebList from './Components/ReferWebsite/ReferwebList';
import ReferwebEdit from './Components/ReferWebsite/ReferwebEdit';
import WrittenAdd from './Components/Author/WrittenbyAdd';
import WrittenList from './Components/Author/WrittenbyList';
import WrittenEdit from './Components/Author/WrittenbyEdit';
import ReviewedAdd from './Components/Author/ReviewedAdd';
import ReviewedList from './Components/Author/ReviewedList';
import ReviewedEdit from './Components/Author/ReviewedEdit';
import DiseasesAdd from './Components/Awareness/DiseasesAdd';
import DiseasesList from './Components/Awareness/DiseasesList';
import KnowBodyAdd from './Components/Awareness/KnowBodyAdd';
import KnowBodyList from './Components/Awareness/KnowBodyList';
import HealthVideoAdd from './Components/Awareness/HealthVideoAdd';
import HealthVideoList from './Components/Awareness/HealthVideoList';
import ArticlesAdd from './Components/Awareness/ArticlesAdd';
import ArticlesList from './Components/Awareness/ArticlesList';
import BlogAdd from './Components/Awareness/BlogAdd';
import BlogList from './Components/Awareness/BlogList';
import HerbsAdd from './Components/Awareness/HerbsAdd';
import HerbsList from './Components/Awareness/HerbsList';
import HealthTipsAdd from './Components/Awareness/HealthTipsAdd';
import HealthTipsList from './Components/Awareness/HealthTipsList';
import HealthNewsAdd from './Components/Awareness/HealthNewsAdd';
import HealthNewsList from './Components/Awareness/HealthNewsList';
import GraphicsAdd from './Components/Awareness/GraphicsAdd';
import GraphicsList from './Components/Awareness/GraphicsList';
import StockAdd from './Components/Stock/StockAdd';
import StockList from './Components/Stock/StockList';
import StockStatus from './Components/Stock/StockStatus';
import AccountsAdd from './Components/Accounts/AccountsAdd';
import AccountsList from './Components/Accounts/AccountsList';
import OrdersList from './Components/Orders/OrdersList';
import CustomerList from './Components/Orders/CustomerList';
import LocationAdd from './Components/Orders/LocationAdd';
import LocationList from './Components/Orders/LocationList';
import FormEdit from './Components/Medicine/FormEdit';
import FormView from './Components/Medicine/FormView';
import ManufactuerEdit from './Components/Medicine/ManufactuerEdit';
import ManufactuerView from './Components/Medicine/ManufactuerView';
import PackEdit from './Components/Medicine/PackEdit';
import StorageEdit from './Components/Medicine/StorageEdit';
import GenericView from './Components/Generic/GenericView';
import GenericEdit from './Components/Generic/GenericEdit';
import ProductEdit from './Components/Medicine/ProductEdit';
import ProductView from './Components/Medicine/ProductView';

class App extends React.Component {
  render() {
    return (
      <>
        <Header/>
        <Switch>
        <Route path="/categoryadd" component={CategoryAdd} />
        <Route path="/categorylist" component={CategoryList} />
        <Route path="/categoryedit/:id" component={CategoryEdit} />
        <Route path="/categoryview/:id" component={CategoryView} />
        <Route path="/subcategoryadd" component={SubcategoryAdd} />
        <Route path="/subcategorylist" component={SubcategoryList} />
        <Route path="/subcategoryedit/:id" component={SubcategoryEdit} />
        <Route path="/subcategoryview/:id" component={SubcategoryView} />
        <Route path="/ayushlist" component={AyushList} />
        <Route path="/healthstorelist" component={HealthStoreList} />
        <Route path="/healthcarelist" component={HealthCareList} />
        <Route path="/genericadd" component={GenericAdd} />
        <Route path="/genericlist" component={GenericList} />
        <Route path="/genericedit/:id" component={GenericEdit} />
        <Route path="/genericview/:id" component={GenericView} />
        <Route path="/medicinecatlist" component={MedicinecatList} />
        <Route path="/productadd" component={ProductAdd} />
        <Route path="/productlist" component={ProductList} />
        <Route path="/productedit/:id" component={ProductEdit} />
        <Route path="/productview/:id" component={ProductView} />
        <Route path="/manufactueradd" component={ManufactuerAdd} />
        <Route path="/manufactuerlist" component={ManufactuerList} />
        <Route path="/manufactueredit/:id" component={ManufactuerEdit} />
        <Route path="/manufactuerview/:id" component={ManufactuerView} />
        <Route path="/storageadd" component={StorageAdd} />
        <Route path="/storagelist" component={StorageList} />
        <Route path="/storageedit/:id" component={StorageEdit} />
        <Route path="/formadd" component={FormAdd} />
        <Route path="/formlist" component={FormList} />
        <Route path="/formedit/:id" component={FormEdit} />
        <Route path="/formview/:id" component={FormView} />
        <Route path="/packadd" component={PackAdd} />
        <Route path="/packlist" component={PackList} />
        <Route path="/packedit/:id" component={PackEdit} />
        <Route path="/orginadd" component={OrginAdd} />
        <Route path="/orginlist" component={OrginList} />
        <Route path="/orginedit/:id" component={OrginEdit} />
        <Route path="/referwebadd" component={ReferwebAdd} />
        <Route path="/referweblist" component={ReferwebList} />
        <Route path="/referwebedit/:id" component={ReferwebEdit} />
        <Route path="/writtenadd" component={WrittenAdd} />
        <Route path="/writtenlist" component={WrittenList} />
        <Route path="/writtenedit/:id" component={WrittenEdit} />
        <Route path="/reviewedadd" component={ReviewedAdd} />
        <Route path="/reviewedlist" component={ReviewedList} />
        <Route path="/reviewededit/:id" component={ReviewedEdit} />
        <Route path="/diseasesadd" component={DiseasesAdd} />
        <Route path="/diseaseslist" component={DiseasesList} />
        <Route path="/knowbodyadd" component={KnowBodyAdd} />
        <Route path="/knowbodylist" component={KnowBodyList} />
        <Route path="/healthvideoadd" component={HealthVideoAdd} />
        <Route path="/healthvideolist" component={HealthVideoList} />
        <Route path="/articlesadd" component={ArticlesAdd} />
        <Route path="/articleslist" component={ArticlesList} />
        <Route path="/blogadd" component={BlogAdd} />
        <Route path="/bloglist" component={BlogList} />
        <Route path="/bloglist" component={BlogList} />
        <Route path="/herbsadd" component={HerbsAdd} />
        <Route path="/herbslist" component={HerbsList} />
        <Route path="/healthtipsadd" component={HealthTipsAdd} />
        <Route path="/healthtipslist" component={HealthTipsList} />
        <Route path="/healthnewsadd" component={HealthNewsAdd} />
        <Route path="/healthnewslist" component={HealthNewsList} />
        <Route path="/graphicsadd" component={GraphicsAdd} />
        <Route path="/graphicslist" component={GraphicsList} />
        <Route path="/stockadd" component={StockAdd} />
        <Route path="/stocklist" component={StockList} />
        <Route path="/stockstatus" component={StockStatus} />
        <Route path="/accountsadd" component={AccountsAdd} />
        <Route path="/accountslist" component={AccountsList} />
        <Route path="/orderslist" component={OrdersList} />
        <Route path="/customerlist" component={CustomerList} />
        <Route path="/locationadd" component={LocationAdd} />
        <Route path="/locationlist" component={LocationList} />
        <Route path="/" component={Dashboard} />
        </Switch>
        <Footer/>
      </>
    )
  }
}

export default App;
