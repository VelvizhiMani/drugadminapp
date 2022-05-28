import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class ProductAdd extends React.Component {
    constructor(props) {
        super(props);
        this.onChangeCategoryName = this.onChangeCategoryName.bind(this);
        this.onChangeSubCategoryName = this.onChangeSubCategoryName.bind(this);
        this.onChangeGenerices = this.onChangeGenerices.bind(this);
        this.onChangeProductName = this.onChangeProductName.bind(this);
        this.onChangeUrl = this.onChangeUrl.bind(this);
        this.onChangeGenericName = this.onChangeGenericName.bind(this);
        this.onChangeBrandname = this.onChangeBrandname.bind(this);
        this.onChangeManufAddr = this.onChangeManufAddr.bind(this);
        this.onChangeMarketerAddr = this.onChangeMarketerAddr.bind(this);
        this.onChangeProductImage = this.onChangeProductImage.bind(this);
        this.onChangeStrength = this.onChangeStrength.bind(this);
        this.onChangePackage = this.onChangePackage.bind(this);
        this.onChangeMrp = this.onChangeMrp.bind(this);
        // this.onChangePaking = this.onChangePaking.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeAvailStock = this.onChangeAvailStock.bind(this);
        this.onChangePercentage = this.onChangePercentage.bind(this);
        this.onChangeRexrequired = this.onChangeRexrequired.bind(this);
        this.onChangeForm = this.onChangeForm.bind(this);
        this.onChangeOrigin = this.onChangeOrigin.bind(this);
        this.onChangeStorage = this.onChangeStorage.bind(this);
        this.onChangeStatus = this.onChangeStatus.bind(this);
        this.onChangeWritenby = this.onChangeWritenby.bind(this);
        this.onChangeReviewby = this.onChangeReviewby.bind(this);
        // this.onChangeFaq = this.onChangeFaq.bind(this);
        this.onChangeReferwebsite = this.onChangeReferwebsite.bind(this);
        this.onChangeMetatitle = this.onChangeMetatitle.bind(this);
        this.onChangeMetakeyword = this.onChangeMetakeyword.bind(this);
        this.onChangeMetadesc = this.onChangeMetadesc.bind(this);
        this.onChangeVarient = this.onChangeVarient.bind(this);
        this.onChangeImagealt = this.onChangeImagealt.bind(this);
        // this.onChangeTabscount = this.onChangeTabscount.bind(this);
        this.onChangeVedioupload = this.onChangeVedioupload.bind(this);
        this.onChangeVedioalt = this.onChangeVedioalt.bind(this);
        // this.onChangeFaqs = this.onChangeFaqs.bind(this);
        this.onChangeExpires = this.onChangeExpires.bind(this);
        this.onChangeTalkdoctor = this.onChangeTalkdoctor.bind(this);
        this.onChangeInstrucations = this.onChangeInstrucations.bind(this);
        this.onChangeMissedose = this.onChangeMissedose.bind(this);
        // this.onChangeDisclaimer = this.onChangeDisclaimer.bind(this);
        this.onChangeUseofmeds = this.onChangeUseofmeds.bind(this);
        this.onChangeUseofbenefits = this.onChangeUseofbenefits.bind(this);
        this.onChangeIndicat = this.onChangeIndicat.bind(this);
        this.onChangeMechanism = this.onChangeMechanism.bind(this);
        this.onChangeMedicinework = this.onChangeMedicinework.bind(this);
        this.onChangeContraindications = this.onChangeContraindications.bind(this);
        this.onChangeSideeffects = this.onChangeSideeffects.bind(this);
        this.onChangeFaqs = this.onChangeFaqs.bind(this);
        this.onChangePregnancy = this.onChangePregnancy.bind(this);
        this.onChangeBreastfeeding = this.onChangeBreastfeeding.bind(this);
        this.onChangeKidneyproblem = this.onChangeKidneyproblem.bind(this);
        this.onChangeLiverdisease = this.onChangeLiverdisease.bind(this);
        this.onChangeHeartdisease = this.onChangeHeartdisease.bind(this);
        this.onChangeAsthma = this.onChangeAsthma.bind(this);
        this.onChangeTakemedicine = this.onChangeTakemedicine.bind(this);
        this.onChangeAdult = this.onChangeAdult.bind(this);
        this.onChangeChildrenmed = this.onChangeChildrenmed.bind(this);
        this.onChangeElderlymed = this.onChangeElderlymed.bind(this);
        this.onChangeAlcohol = this.onChangeAlcohol.bind(this);
        this.onChangeDriving = this.onChangeDriving.bind(this);
        this.onChangeWarnings = this.onChangeWarnings.bind(this);
        this.onChangeTalkdoctor = this.onChangeTalkdoctor.bind(this);
        this.onChangeInstructions = this.onChangeInstructions.bind(this);
        this.onChangeDruginteraction = this.onChangeDruginteraction.bind(this);
        this.onChangeDrugfood = this.onChangeDrugfood.bind(this);
        this.onChangeDrugdiease = this.onChangeDrugdiease.bind(this);
        this.onChangeFooditems = this.onChangeFooditems.bind(this);
        this.onChangeOverdose = this.onChangeOverdose.bind(this);
        this.onChangeMissedose = this.onChangeMissedose.bind(this);
        this.onChangeDisposal = this.onChangeDisposal.bind(this);
        this.onChangeFasttag = this.onChangeFasttag.bind(this);
        this.onChangeReferences = this.onChangeReferences.bind(this);
        this.onChangePaymentType = this.onChangePaymentType.bind(this);
        this.onChangeReturnpolicy = this.onChangeReturnpolicy.bind(this);
        this.onChangeHsn = this.onChangeHsn.bind(this);
        this.onChangeGst = this.onChangeGst.bind(this);

        // this.onChangeReviewby = this.onChangeReviewby.bind(this);
        // this.onChangeWritenby = this.onChangeWritenby.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            cat_name: '',
            subcat_name: '',
            generices: '',
            product_name: '',
            url: '',
            genericname: '',
            brand: '',
            manufactuer: '',
            manufactueraddress: '',
            tabscount: '',
            strength: '',
            package: '',
            price: '',
            packing: '',
            product_img: '',
            description: '',
            disclaimer: '',
            stock: '',
            saleprice: '',
            percentage: '',
            rexrequired: '',
            orgin: '',
            storage: '',
            status: '',
            timestamp: '',
            writebyid: '',
            reviewbyid: '',
            // faqs : '',
            reference: '',
            metatitle: '',
            metakeyword: '',
            metadesc: '',
            varient: '',
            imagealt: '',
            vedio: '',
            vedioalt: '',
            userupdate: '',
            updatetiemstamp: '',
            userid: '',
            date: '',
            referwebsite: '',
            expires: '',
            useofmeds: '',
            useofbenefits: '',
            indicat: '',
            mechanism: '',
            medicinework: '',
            contraindications: '',
            sideeffects: '',
            faqs: '',
            pregnancy: '',
            breastfeeding: '',
            kidneyproblem: '',
            liverdisease: '',
            asthma: '',
            takemedicine: '',
            adult: '',
            childrenmed: '',
            elderlymed: '',
            alcohol: '',
            heartdisease: '',
            driving: '',
            warnings: '',
            talkdoctor: '',
            instructions: '',
            druginteraction: '',
            drugfood: '',
            drugdiease: '',
            fooditems: '',
            overdose: '',
            misseddose: '',
            disposal: '',
            fasttag: '',
            refer: '',
            categorylist:[],
            subcategorylist:[],
            genericlist:[],
            formlist:[],
            storagelist:[],
            packagelist:[],
            manufactuerlist:[],
            referweblist:[],
            orginlist:[],
            writtenlist:[],
            reviewedlist:[]
        }
    }

    onChangeCategoryName(e) { this.setState({ cat_name: e.target.value, }); }
    onChangeSubCategoryName(e) { this.setState({ subcat_name: e.target.value, }); }
    onChangeGenerices(e) { this.setState({ generices: e.target.value, }); }
    onChangeUrl(e) { this.setState({ url: e.target.value, }); }
    onChangeGenericName(e) { this.setState({ genericname: e.target.value, }); }
    onChangeProductName(e) { this.setState({ product_name: e.target.value, }); }
    onChangeBrandname(e) { this.setState({ brand: e.target.value, }); }
    onChangeManufAddr(e) { this.setState({ manufactuer: e.target.value, }); }
    onChangeMarketerAddr(e) { this.setState({ manufactueraddress: e.target.value, }); }
    onChangeForm(e) { this.setState({ tabscount: e.target.value, }); }
    onChangeStrength(e) { this.setState({ strength: e.target.value, }); }
    onChangePackage(e) { this.setState({ package: e.target.value, }); }
    onChangeMrp(e) { this.setState({ price: e.target.value, }); }
    onChangeProductImage(e) { this.setState({ product_img: e.target.files[0] }); }
    onChangeTakedoctor(e) { this.setState({ talkdoctor: e.target.value, }); }
    onChangeInstrucations(e) { this.setState({ instructions: e.target.value, }); }
    // onChangedrugdiease(e) {this.setState({ takedoctor : e.target.value,});}
    // onChangeMissedose(e) {this.setState({ takedoctor : e.target.value,});}
    // onChangeDisclaimer(e) {this.setState({ disclaimer: e.target.value,});}
    onChangeAvailStock(e) { this.setState({ stock: e.target.value, }); }
    onChangePercentage(e) { this.setState({ percentage: e.target.value, }); }
    onChangeRexrequired(e) { this.setState({ rexrequired: e.target.value, }); }
    onChangeOrigin(e) { this.setState({ orgin: e.target.value, }); }
    onChangeStorage(e) { this.setState({ storage: e.target.value, }); }
    onChangeStatus(e) { this.setState({ status: e.target.value, }); }
    onChangeWritenby(e) { this.setState({ writebyid: e.target.value, }); }
    onChangeReviewby(e) { this.setState({ reviewbyid: e.target.value, }); }
    // onChangeFaqs(e) {this.setState({ faqs: e.target.value,});}
    // onChangeReferences(e) {this.setState({ reference: e.target.value,});}
    onChangeMetatitle(e) { this.setState({ metatitle: e.target.value, }); }
    onChangeMetakeyword(e) { this.setState({ metakeyword: e.target.value, }); }
    onChangeMetadesc(e) { this.setState({ metadesc: e.target.value, }); }
    onChangeVarient(e) { this.setState({ varient: e.target.value, }); }
    onChangeImagealt(e) { this.setState({ imagealt: e.target.value, }); }
    onChangeVedioupload(e) { this.setState({ vedio: e.target.files[0], }); }
    onChangeVedioalt(e) { this.setState({ vedioalt: e.target.value, }); }
    onChangeReferwebsite(e) { this.setState({ referwebsite: e.target.value, }); }
    // onChangeKeybenefits(e) {this.setState({ keybenefits: e.target.value,});}
    // onChangeKeyingredients(e) {this.setState({ keyingredients: e.target.value,});}
    onChangeExpires(e) { this.setState({ expires: e.target.value, }); }
    onChangePaymentType(e) { this.setState({ paymenttype: e.target.value, }); }
    onChangeReturnpolicy(e) { this.setState({ retunpolicy: e.target.value, }); }
    onChangeHsn(e) { this.setState({ hsn: e.target.value, }); }
    onChangeGst(e) { this.setState({ gst: e.target.value, }); }
    onChangeDescription(e) { this.setState({ description: e.target.value, }); }
    onChangeUseofmeds(e) { this.setState({ usesofmeds: e.target.value, }); }
    onChangeUseofbenefits(e) { this.setState({ useofbenefits: e.target.value, }); }
    onChangeIndicat(e) { this.setState({ indicat: e.target.value, }); }
    onChangeMechanism(e) { this.setState({ mechanism: e.target.value, }); }
    onChangeMedicinework(e) { this.setState({ medicinework: e.target.value, }); }
    onChangeContraindications(e) { this.setState({ contraindications: e.target.value, }); }
    onChangeSideeffects(e) { this.setState({ sideeffects: e.target.value, }); }
    onChangeFaqs(e) { this.setState({ faqs: e.target.value, }); }
    onChangePregnancy(e) { this.setState({ pregnancy: e.target.value, }); }
    onChangeBreastfeeding(e) { this.setState({ breastfeeding: e.target.value, }); }
    onChangeKidneyproblem(e) { this.setState({ kidneyproblem: e.target.value, }); }
    onChangeLiverdisease(e) { this.setState({ liverdisease: e.target.value, }); }
    onChangeAsthma(e) { this.setState({ asthma: e.target.value, }); }
    onChangeTakemedicine(e) { this.setState({ takemedicine: e.target.value, }); }
    onChangeAdult(e) { this.setState({ adult: e.target.value, }); }
    onChangeChildrenmed(e) { this.setState({ childrenmed: e.target.value, }); }
    onChangeElderlymed(e) { this.setState({ elderlymed: e.target.value, }); }
    onChangeAlcohol(e) { this.setState({ alcohol: e.target.value, }); }
    onChangeHeartdisease(e) { this.setState({ heartdisease: e.target.value, }); }
    onChangeDriving(e) { this.setState({ driving: e.target.value, }); }
    onChangeWarnings(e) { this.setState({ warnings: e.target.value, }); }
    onChangeTalkdoctor(e) { this.setState({ talkdoctor: e.target.value, }); }
    onChangeInstructions(e) { this.setState({ instructions: e.target.value, }); }
    onChangeDruginteraction(e) { this.setState({ druginteraction: e.target.value, }); }
    onChangeDrugfood(e) { this.setState({ drugfood: e.target.value, }); }
    onChangeDrugdiease(e) { this.setState({ drugdiease: e.target.value, }); }
    onChangeFooditems(e) { this.setState({ fooditems: e.target.value, }); }
    onChangeOverdose(e) { this.setState({ overdose: e.target.value, }); }
    onChangeMissedose(e) { this.setState({ misseddose: e.target.value, }); }
    onChangeDisposal(e) { this.setState({ disposal: e.target.value, }); }
    onChangeFasttag(e) { this.setState({ fasttag: e.target.value, }); }
    onChangeReferences(e) { this.setState({ refer: e.target.value, }); }


    onSubmit(e) {
        e.preventDefault();
        let formData = new FormData();
        formData.append('product_img', this.state.product_img)
        formData.append('vedio', this.state.vedio)
        const obj = {
            cat_name: this.state.cat_name,
            subcat_name: this.state.subcat_name,
            generices: this.state.generices,
            product_name: this.state.product_name,
            url: this.state.url,
            genericname: this.state.genericname,
            brand: this.state.brand,
            manufactuer: this.state.manufactuer,
            manufactueraddress: this.state.manufactueraddress,
            tabscount: this.state.tabscount,
            strength: this.state.strength,
            package: this.state.package,
            price: this.state.price,
            // packing: this.state.packing,
            description: this.state.description,
            // disclaimer:this.state.disclaimer,
            stock: this.state.stock,
            percentage: this.state.percentage,
            rexrequired: this.state.rexrequired,
            orgin: this.state.orgin,
            storage: this.state.storage,
            status: this.state.status,
            writebyid: this.state.writebyid,
            reviewbyid: this.state.reviewbyid,
            // faq: this.state.faq,
            reference: this.state.reference,
            metatitle: this.state.metatitle,
            metakeyword: this.state.metakeyword,
            metadesc: this.state.metadesc,
            varient: this.state.varient,
            imagealt: this.state.imagealt,
            vedioalt: this.state.vedioalt,
            userupdate: this.state.userupdate,
            updatetiemstamp: this.state.updatetiemstamp,
            userid: this.state.userid,
            date: this.state.date,
            referwebsite: this.state.referwebsite,
            // keybenefits: this.state.keybenefits,
            // keyingredients: this.state.keyingredients,
            expires: this.state.expires,
            usesofmeds: this.state.usesofmeds,
            useofbenefits: this.state.useofbenefits,
            indicat: this.state.indicat,
            mechanism: this.state.mechanism,
            medicinework: this.state.medicinework,
            contraindications: this.state.contraindications,
            sideeffects: this.state.sideeffects,
            faqs: this.state.faqs,
            pregnancy: this.state.pregnancy,
            breastfeeding: this.state.breastfeeding,
            kidneyproblem: this.state.kidneyproblem,
            liverdisease: this.state.liverdisease,
            heartdisease: this.state.heartdisease,
            asthma: this.state.asthma,
            takemedicine: this.state.takemedicine,
            adult: this.state.adult,
            childrenmed: this.state.childrenmed,
            elderlymed: this.state.elderlymed,
            alcohol: this.state.alcohol,
            driving: this.state.driving,
            warnings: this.state.warnings,
            talkdoctor: this.state.talkdoctor,
            instructions: this.state.instructions,
            druginteraction: this.state.druginteraction,
            drugfood: this.state.drugfood,
            drugdiease: this.state.drugdiease,
            fooditems: this.state.fooditems,
            overdose: this.state.overdose,
            misseddose: this.state.misseddose,
            disposal: this.state.disposal,
            fasttag: this.state.fasttag,
            refer: this.state.refer,
            paymenttype: this.state.paymenttype,
            retunpolicy: this.state.retunpolicy,
            gst: this.state.gst,
            hsn: this.state.hsn,

            // url: slugify(this.state.actorname,{
            //   lower:true
            // }),
        };
        formData.append('cat_name', obj.cat_name)
        formData.append('subcat_name', obj.subcat_name)
        formData.append('generices', obj.generices)
        formData.append('product_name', obj.product_name)
        formData.append('url', obj.url)
        formData.append('genericname', obj.genericname)
        formData.append('brand', obj.brand)
        formData.append('manufactuer', obj.manufactuer)
        formData.append('manufactueraddress', obj.manufactueraddress)
        formData.append('tabscount', obj.tabscount)
        formData.append('strength', obj.strength)
        formData.append('package', obj.package)
        formData.append('price', obj.price)
        // formData.append('disclaimer', obj.disclaimer)
        formData.append('stock', obj.stock)
        formData.append('percentage', obj.percentage)
        formData.append('rexrequired', obj.rexrequired)
        formData.append('orgin', obj.orgin)
        formData.append('storage', obj.storage)
        formData.append('status', obj.status)
        formData.append('writebyid', obj.writebyid)
        formData.append('reviewbyid', obj.reviewbyid)
        // formData.append('faqs', obj.faqs)
        formData.append('reference', obj.reference)
        formData.append('metatitle', obj.metatitle)
        formData.append('metakeyword', obj.metakeyword)
        formData.append('metadesc', obj.metadesc)
        formData.append('varient', obj.varient)
        formData.append('referwebsite', obj.referwebsite)
        // formData.append('keybenefits', obj.keybenefits)
        // formData.append('keyingredients', obj.keyingredients)
        formData.append('expires', obj.expires)
        formData.append('description', obj.description)
        formData.append('usesofmeds', obj.usesofmeds)
        formData.append('useofbenefits', obj.useofbenefits)
        formData.append('indicat', obj.indicat)
        formData.append('mechanism', obj.mechanism)
        formData.append('medicinework', obj.medicinework)
        formData.append('contraindications', obj.contraindications)
        formData.append('sideeffects', obj.sideeffects)
        formData.append('faqs', obj.faqs)
        formData.append('pregnancy', obj.pregnancy)
        formData.append('breastfeeding', obj.breastfeeding)
        formData.append('kidneyproblem', obj.kidneyproblem)
        formData.append('liverdisease', obj.liverdisease)
        formData.append('asthma', obj.asthma)
        formData.append('takemedicine', obj.takemedicine)
        formData.append('adult', obj.adult)
        formData.append('childrenmed', obj.childrenmed)
        formData.append('elderlymed', obj.elderlymed)
        formData.append('alcohol', obj.alcohol)
        formData.append('heartdisease', obj.heartdisease)
        formData.append('driving', obj.driving)
        formData.append('warnings', obj.warnings)
        formData.append('talkdoctor', obj.talkdoctor)
        formData.append('instructions', obj.instructions)
        formData.append('druginteraction', obj.druginteraction)
        formData.append('drugfood', obj.drugfood)
        formData.append('drugdiease', obj.drugdiease)
        formData.append('fooditems', obj.fooditems)
        formData.append('overdose', obj.overdose)
        formData.append('misseddose', obj.misseddose)
        formData.append('disposal', obj.disposal)
        formData.append('fasttag', obj.fasttag)
        formData.append('refer', obj.refer)
        formData.append('paymenttype', obj.paymenttype)
        formData.append('retunpolicy', obj.retunpolicy)
        formData.append('gst', obj.gst)
        formData.append('hsn', obj.hsn)

        axios.post('http://13.232.195.17:4000/product', formData)
            .then(res => console.log(res.data));

        this.setState({
        })
        this.props.history.push('/productlist');

    }
    componentDidMount() {
        axios.get('http://13.232.195.17:4000/category/')
          .then(response => {
            this.setState({
              categorylist: response.data
            });
          })
          .catch(function (error) {
            console.log(error);
          })
          axios.get('http://13.232.195.17:4000/subcategory/')
          .then(response => {
            this.setState({
              subcategorylist: response.data
            });
          })
          .catch(function (error) {
            console.log(error);
          })
          axios.get('http://13.232.195.17:4000/form/')
          .then(response => {
            this.setState({
              formlist: response.data
            });
          })
          .catch(function (error) {
            console.log(error);
          })
          axios.get('http://13.232.195.17:4000/storage/')
          .then(response => {
            this.setState({
              storagelist: response.data
            });
          })
          .catch(function (error) {
            console.log(error);
          })
          axios.get('http://13.232.195.17:4000/generic/')
          .then(response => {
            this.setState({
              genericlist: response.data
            });
          })
          .catch(function (error) {
            console.log(error);
          })
          axios.get('http://13.232.195.17:4000/package/')
          .then(response => {
            this.setState({
                packagelist: response.data
            });
          })
          .catch(function (error) {
            console.log(error);
          })
          axios.get('http://13.232.195.17:4000/manufactuer/')
          .then(response => {
            this.setState({
                manufactuerlist: response.data
            });
          })
          .catch(function (error) {
            console.log(error);
          })
          axios.get('http://13.232.195.17:4000/referweb/')
          .then(response => {
            this.setState({
                referweblist: response.data
            });
          })
          .catch(function (error) {
            console.log(error);
          })
          axios.get('http://13.232.195.17:4000/orgin/')
          .then(response => {
            this.setState({
                orginlist: response.data
            });
          })
          .catch(function (error) {
            console.log(error);
          })
          axios.get('http://13.232.195.17:4000/writtenby/')
          .then(response => {
            this.setState({
                writtenlist: response.data
            });
          })
          .catch(function (error) {
            console.log(error);
          })
          axios.get('http://13.232.195.17:4000/reviewedby/')
          .then(response => {
            this.setState({
                reviewedlist: response.data
            });
          })
          .catch(function (error) {
            console.log(error);
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
                                            <h3 class="box-title" style={{ color: '#fe5e00', fontWeight: '500', marginTop: '10px' }}>Add Product</h3>
                                        </div>
                                        <div class="col-md-6">
                                            <Link to="/productlist">
                                                <button type="button" class="btn btn-primary pull-right">
                                                    <i class="fa fa-plus"></i> &nbsp; Product List</button></Link>
                                        </div>
                                    </div>
                                    {/* role="form" */}
                                    <form onSubmit={this.onSubmit}>
                                        <div class="box-body">
                                            <div class="col-md-4">
                                                <div class="form-group">
                                                    <label>Category Name</label>
                                                    <select class="form-control select2 " onChange={this.onChangeCategoryName}> {/* selectlist */}
                                                        <option selected="selected">Select Option</option>
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
                                                    <label>Sub Category Name</label>
                                                    <select class="form-control select2 " onChange={this.onChangeSubCategoryName}> {/* selectlist */}
                                                        <option selected="selected">Select Option</option>
                                                        {
                                                        this.state.subcategorylist.map((items, i) => {
                                                            return (
                                                            <option value={items.subcat_name}>{items.subcat_name}</option>
                                                            )
                                                        })}
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="form-group">
                                                    <label>Generic Name</label>
                                                    <select class="form-control select2 " onChange={this.onChangeGenerices}> {/* selectlist */}
                                                        <option selected="selected">Select Option</option>
                                                        {
                                                        this.state.genericlist.map((items, i) => {
                                                            return (
                                                            <option value={items.generices}>{items.generices}</option>
                                                            )
                                                        })}
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label for="Url">Brand Name (website Product title) EX:Veenat 100mg Tablet</label>
                                                    <input type="text" class="form-control" name='brandname'
                                                        onChange={this.onChangeBrandname} placeholder="Brand Name" />
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label class="Url">URL (EX:veenat-100mg-tablet) [ all small letters only ]</label>
                                                    <div class="input-group">
                                                        <div class="input-group-addon">
                                                            <i class="fa fa-image"></i>
                                                        </div>
                                                        <input type="text" class="form-control" name="url"
                                                            onChange={this.onChangeUrl} />
                                                    </div>
                                                </div></div>
                                            <div class="col-md-4">
                                                <div class="form-group">
                                                    <label class="labelheight">Other varient Product Name Select</label>
                                                    <div class="input-group">
                                                        <div class="input-group-addon">
                                                            <i class="fa fa-image"></i>
                                                        </div>
                                                        <input type="text" class="form-control" name='productname'
                                                            onChange={this.onChangeProductName} />
                                                    </div>
                                                </div></div>
                                            <div class="col-md-4">
                                                <div class="form-group">
                                                    <label class="labelheight">Product Image(EX:jpg and jpeg images only upload)</label>
                                                    <div class="input-group">
                                                        <div class="input-group-addon">
                                                            <i class="fa fa-image"></i>
                                                        </div>
                                                        <input type="file" class="form-control" name='productimg'
                                                            onChange={this.onChangeProductImage} />
                                                    </div>
                                                </div></div>
                                            <div class="col-md-4">
                                                <div class="form-group">
                                                    <label class="labelheight">Video upload</label>
                                                    <div class="input-group">
                                                        <div class="input-group-addon">
                                                            <i class="fa fa-image"></i>
                                                        </div>
                                                        <input type="file" class="form-control" name='vedioupload'
                                                            onChange={this.onChangeVedioupload} />
                                                    </div>
                                                </div></div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label class="labelheight">Image alt tag :
                                                        (Brand name,Generic name, price, uses, side Effects - Drugcarts )
                                                        Eg : Veenat 100mg tablet,imatinib 100mg,price,uses,side Effects - Drugcarts</label>
                                                    <div class="input-group">
                                                        <div class="input-group-addon">
                                                            <i class="fa fa-image"></i>
                                                        </div>
                                                        <input type="text" class="form-control" name='imagealt'
                                                            onChange={this.onChangeImagealt} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label class="labelheight">Video alt tag :
                                                        (Brand name,Generic name, price, uses, side Effects - Drugcarts )
                                                        Eg : Veenat 100mg tablet,imatinib 100mg,price,uses,side Effects - Drugcarts</label>
                                                    <div class="input-group">
                                                        <div class="input-group-addon">
                                                            <i class="fa fa-image"></i>
                                                        </div>
                                                        <input type="text" class="form-control" name='vedioalt'
                                                            onChange={this.onChangeVedioalt} />
                                                    </div>
                                                </div></div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label for="Imagealt" class="Salt">Salt Composition(Generic Name with Strength) EX:Veenat (100mg)</label>
                                                    <input type="text" class="form-control" name='genericname' id="genericname"
                                                        onChange={this.onChangeGenericName}
                                                        placeholder="Salt Composition(Generic Name with Strength)" />
                                                </div>
                                            </div>

                                            <div class="col-md-3">
                                                <div class="form-group">
                                                    <label for="Videoalt" class="Form">Form : (Ex : Gel or caps)</label>
                                                    <select class="form-control select2 " onChange={this.onChangeForm}>
                                                        <option selected="selected">Select Option</option>
                                                        {
                                                        this.state.formlist.map((items, i) => {
                                                            return (
                                                            <option value={items.formname}>{items.formname}</option>
                                                            )
                                                        })}
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="col-md-3">
                                                <div class="form-group">
                                                    <label for="Videoalt" class="Country">Country of Origin</label>
                                                    <select class="form-control select2 " onChange={this.onChangeOrigin}>
                                                        <option selected="selected">Select Option</option>
                                                        {
                                                        this.state.orginlist.map((items, i) => {
                                                            return (
                                                            <option value={items.orginname}>{items.orginname}</option>
                                                            )
                                                        })}
                                                     </select>
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="form-group">
                                                    <label for="Videoalt" class="Country">Storage</label>
                                                    <select class="form-control select2 " onChange={this.onChangeStorage}>
                                                        <option selected="selected">Select Option</option>
                                                        {
                                                        this.state.storagelist.map((items, i) => {
                                                            return (
                                                            <option value={items.storagename}>{items.storagename}</option>
                                                            )
                                                        })}
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="form-group">
                                                    <label for="Videoalt" class="Country">Strength Eg : 100mg</label>
                                                    <input type="text" class="form-control" maxlength="60" name="strength"
                                                        onChange={this.onChangeStrength} />
                                                </div>
                                            </div>

                                            <div class="col-md-4">
                                                <div class="form-group">
                                                    <label for="Videoalt" class="Country">Pack</label>
                                                    <select class="form-control select2 " onChange={this.onChangePackage}>
                                                        <option selected="selected">Select Option</option>
                                                        {
                                                        this.state.packagelist.map((items, i) => {
                                                            return (
                                                            <option value={items.packagename}>{items.packagename}</option>
                                                            )
                                                        })}
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <div class="form-group">
                                                    <label for="Videoalt" class="Country">Manufactuer Address</label>
                                                    <select class="form-control select2 " onChange={this.onChangeManufAddr}>
                                                        <option selected="selected">Select Option</option>
                                                        {
                                                        this.state.manufactuerlist.map((items, i) => {
                                                            return (
                                                            <option value={items.manufactueraddress}>{items.manufactueraddress}</option>
                                                            )
                                                        })}
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <div class="form-group">
                                                    <label for="Videoalt" class="Country">Marketer Address</label>
                                                    <select class="form-control select2 " onChange={this.onChangeMarketerAddr}>
                                                        <option selected="selected">Select Option</option>
                                                        {
                                                        this.state.manufactuerlist.map((items, i) => {
                                                            return (
                                                            <option value={items.manufactueraddress}>{items.manufactueraddress}</option>
                                                            )
                                                        })}
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="form-group">
                                                    <label for="Videoalt" class="Country">Rex Required (Ex:Rx Required)</label>
                                                    <select class="form-control select2 " onChange={this.onChangeRexrequired}>
                                                        <option selected="selected">Select Option</option>
                                                        <option value="yes">Yes</option>
                                                        <option value="no">No</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="form-group">
                                                    <label for="Videoalt" class="Country">MRP : Ex:123.00</label>
                                                    <input type="text" class="form-control" maxlength="60" name="mrp"
                                                        onChange={this.onChangeMrp} />
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="form-group">
                                                    <label for="Videoalt" class="Country">Available Stock</label>
                                                    <select class="form-control select2 " onChange={this.onChangeAvailStock}>
                                                        <option selected="selected">Select Option</option>
                                                        <option value="In Stock">In Stock</option>
                                                        <option value="Out Of Stock">Out Of Stock</option>
                                                        <option value="Sold Out">Sold Out</option>
                                                        <option value="Banned">Banned</option>
                                                        <option value="Not For Sale">Not For Sale</option>
                                                        <option value="Discontinued">Discontinued</option>
                                                        <option value="Withdrawn">Withdrawn</option>
                                                        <option value="Banned For Sale">Banned For Sale</option>
										            </select>
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="form-group">
                                                    <label for="Videoalt" class="Country">Percentage DISCOUNT:(Ex:2)only type number.</label>
                                                    <input type="text" class="form-control" maxlength="60" name="discount"
                                                        onChange={this.onChangePercentage} />
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="form-group">
                                                    <label for="Videoalt" class="Country">Product reference(ex :Netmeds)</label>
                                                    <select class="form-control select2 " onChange={this.onChangeReferwebsite}>
                                                        <option selected="selected">Select References</option>
                                                        {
                                                        this.state.referweblist.map((items, i) => {
                                                            return (
                                                            <option value={items.websitename}>{items.websitename}</option>
                                                            )
                                                        })}
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="form-group">
                                                    <label for="Videoalt" class="Country">Product Status</label>
                                                    <select class="form-control select2 " onChange={this.onChangeStatus}>
                                                        <option selected="selected">Select Option</option>
                                                        <option value="Active">Active</option>
                                                        <option value="InActive">InActive</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="form-group">
                                                    <label for="Videoalt" class="Country">Expires on or after: (Ex:June,2021)</label>
                                                    <input type="text" class="form-control" maxlength="60" name="metatitle"
                                                        onChange={this.onChangeExpires} />
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="form-group">
                                                    <label for="Videoalt" class="Country">Payment Type</label>
                                                    <select class="form-control select2 " onChange={this.onChangePaymentType}>
                                                        <option selected="selected">Select Option</option>
                                                        <option value="Online Payment Only">Online Payment Only</option>
                                                        <option value="Cash on Delivery">Cash on Delivery</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="form-group">
                                                    <label for="Videoalt" class="Country">Return Policy</label>
                                                    <select class="form-control select2 " onChange={this.onChangeReturnpolicy}>
                                                        <option selected="selected">Select Option</option>
                                                        <option value="Non Returnable">Non Returnable</option>
                                                        <option value="Return within 7 days">Return within 7 days</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="form-group">
                                                    <label for="Videoalt" class="Country">HSN</label>
                                                    <input type="text" class="form-control" maxlength="60" name="hsn"
                                                        onChange={this.onChangeHsn} />
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="form-group">
                                                    <label for="Videoalt" class="Country">GST(%)</label>
                                                    <select class="form-control select2 " onChange={this.onChangeGst}>
                                                        <option selected="selected">Select Option</option>
                                                        <option value="5">5%</option>
                                                        <option value="12" selected="">12%</option>
                                                        <option value="18">18%</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <h4 class="box-title" style={{ color: '#fe5e00', fontWeight: '500' }}>SEO (Meta Title, Keyword & Description)</h4>
                                                <hr />
                                            </div>
                                            <div class="col-md-12">
                                                <div class="form-group">
                                                    <label>Meta Title:(52 to 60) Character Only : ( Choose Below Any one Example )<br />
                                                        EX : Veenat 100mg tablet | view,uses,Side Effects | Drugcarts<br />
                                                        EX : Veenat 100mg tablet | Price,uses,Side Effects | Drugcarts<br />
                                                        EX : Veenat 100mg tablet | Imatinib | Drugcarts<br />
                                                        EX : Buy Veenat 100mg tablet Online | Drugcarts<br />
                                                    </label>
                                                    <div class="input-group">
                                                        <div class="input-group-addon">
                                                            <i class="fa fa-text-width"></i>
                                                        </div>
                                                        <input type="text" class="form-control" name="metatitle" maxlength="60" onChange={this.onChangeMetatitle} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <div class="form-group">
                                                    <label>Meta Keyword:(100 to 250) Character Only <br />(Ex : Veenat 100mg tablet,Veenat 100mg tablet price,Veenat 100mg price in india,Veenat 100mg tablet uses,veenat 100mg tablet side effects,Imatinib 100mg,veenat 100mg tablet substitute,veenat 100mg composition,veenat 100mg benefits,veenat 100mg dosage)</label>
                                                    <div class="input-group">
                                                        <div class="input-group-addon">
                                                            <i class="fa fa-text-width"></i>
                                                        </div>
                                                        <input type="text" class="form-control" name="metakeyword" maxlength="250" onChange={this.onChangeMetakeyword} />
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-md-12">
                                                <div class="form-group">
                                                    <label>Meta Description:(70 to 155) Character Only (EX1 + EX2) <br />
                                                        (Ex1 : Veenat 100mg Tablet belongs to the class of medicines known as tyrosine kinase inhibitors. It is used in the treatment of blood cancer (chronic myeloid leukaemia and Acute lymphocytic leukemia) and gastrointestinal stromal tumor.)
                                                        <br />
                                                        (EX2 : Choose Below Any one Example )<br />
                                                        EX2 : Buy Veenat 100mg tablet online with latest offers and discounts at Drugcarts.<br />
                                                        EX2 : Buy Veenat 100mg tablet with the best offers at Drugcarts.<br />
                                                        EX2 : Buy Veenat 100mg tablet online Upto 25% FLAT OFF at Drugcarts.<br />
                                                        EX2 : Buy Veenat 100mg tablet at the best price @Drugcarts.<br />
                                                        EX2 : Buy Veenat 100mg tablet at @Drugcarts.<br />
                                                    </label>
                                                    <div class="input-group">
                                                        <div class="input-group-addon">
                                                            <i class="fa fa-text-width"></i>
                                                        </div>
                                                        <textarea class="form-control" name="metadesc" maxlength="155" onChange={this.onChangeMetadesc}></textarea>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <hr class="box box-primary" /> */}
                                            <div class="col-md-12">
                                                <h4 class="box-title" style={{ color: '#fe5e00', fontWeight: '500' }}>Author Details</h4>
                                                <hr />
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label>Reviewd By : </label>
                                                    <div class="input-group">
                                                        <div class="input-group-addon">
                                                            <i class="fa fa-text-width"></i>
                                                        </div>
                                                        <select class="form-control select2" onChange={this.onChangeReviewby}
                                                            name="reviewbyid" style={{ width: '100%' }}>
                                                            <option value="">Select Option</option>
                                                            {
                                                        this.state.reviewedlist.map((items, i) => {
                                                            return (
                                                            <option value={items.name}>{items.name}</option>
                                                            )
                                                        })}
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label>Written By : </label>
                                                    <div class="input-group">
                                                        <div class="input-group-addon">
                                                            <i class="fa fa-text-width"></i>
                                                        </div>
                                                        <select class="form-control select2" name="writenby" style={{ width: '100%' }} onChange={this.onChangeWritenby}>
                                                            <option selected="selected">Select Option</option>
                                                            {
                                                        this.state.writtenlist.map((items, i) => {
                                                            return (
                                                            <option value={items.name}>{items.name}</option>
                                                            )
                                                        })}
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-md-12">
                                                <div class="form-group">
                                                    <label>Medical Description of Medicine :</label>
                                                    <textarea id="editor1" name="description" rows="10" cols="80" onChange={this.onChangeDescription}></textarea>

                                                </div>
                                            </div>

                                            <div class="col-md-12">
                                                <div class="form-group">
                                                    <label>Uses of Medicine :</label>
                                                    <textarea id="editor2" name="usesofmeds" rows="10" cols="80" onChange={this.onChangeUseofmeds}></textarea>
                                                </div>
                                            </div>

                                            <div class="col-md-12">
                                                <div class="form-group">
                                                    <label>Uses and Benefits of Medicine :</label>
                                                    <textarea id="editor3" name="useofbenefits" rows="10" cols="80" onChange={this.onChangeUseofbenefits}></textarea>
                                                </div>
                                            </div>

                                            <div class="col-md-12">
                                                <div class="form-group">
                                                    <label>Medicine Prescribed for Follow Indication :</label>
                                                    <textarea id="editor4" name="indication" rows="10" cols="80" onChange={this.onChangeIndicat}></textarea>
                                                </div>
                                            </div>

                                            <div class="col-md-12">
                                                <div class="form-group">
                                                    <label>Mechanism of action of Medicine:</label>
                                                    <textarea id="editor5" name="mechansim" rows="10" cols="80" onChange={this.onChangeMechanism}></textarea>
                                                </div>
                                            </div>

                                            <div class="col-md-12">
                                                <div class="form-group">
                                                    <label>How Medicine works:</label>
                                                    <textarea id="editor6" name="work" rows="10" cols="80" onChange={this.onChangeMedicinework}></textarea>
                                                </div>
                                            </div>

                                            <div class="col-md-12">
                                                <div class="form-group">
                                                    <label>Contraindications of Medicine:</label>
                                                    <textarea id="editor7" name="contraindications" rows="10" cols="80" onChange={this.onChangeContraindications}></textarea>
                                                </div>
                                            </div>

                                            <div class="col-md-12">
                                                <div class="form-group">
                                                    <label>Side effects of Medicine:</label>
                                                    <textarea id="editor8" name="sideeffects" rows="10" cols="80" onChange={this.onChangeSideeffects}></textarea>
                                                </div>
                                            </div>

                                            <div class="col-md-12">
                                                <div class="form-group">
                                                    <label>FAQs for Medicine:</label>
                                                    <textarea id="editor9" name="faqs" rows="10" cols="80" onChange={this.onChangeFaqs}></textarea>
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <h4 class="box-title" style={{ color: '#fe5e00', fontWeight: '500' }}>Precautions and general warning of Medicine</h4>
                                                <hr />
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label>Alcohol:</label>
                                                    <textarea id="editor18" name="alcohol" rows="10" cols="80" onChange={this.onChangeAlcohol}></textarea>
                                                </div>
                                            </div>

                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label>Driving or operating machinery:</label>
                                                    <textarea id="editor19" name="operatingmach" rows="10" cols="80" onChange={this.onChangeDriving}></textarea>
                                                </div>
                                            </div>

                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label>Pregnancy:</label>
                                                    <textarea id="editor10" name="pregnancy" rows="10" cols="80" onChange={this.onChangePregnancy}></textarea>
                                                </div>
                                            </div>

                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label>Breast Feeding:</label>
                                                    <textarea id="editor11" name="breastfeeding" rows="10" cols="80" onChange={this.onChangeBreastfeeding}></textarea>
                                                </div>
                                            </div>

                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label>Kidney:</label>
                                                    <textarea id="editor12" name="kidneyproblem" rows="10" cols="80" onChange={this.onChangeKidneyproblem}></textarea>
                                                </div>
                                            </div>

                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label>Liver:</label>
                                                    <textarea id="editor13" name="liverdisease" rows="10" cols="80" onChange={this.onChangeLiverdisease}></textarea>
                                                </div>
                                            </div>

                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label>How to Take Medicine:</label>
                                                    <textarea id="editor16" name="takemedicine" rows="10" cols="80" onChange={this.onChangeTakemedicine}></textarea>
                                                </div>
                                            </div>

                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label>Use of Medicine in Adult:</label>
                                                    <textarea id="editor16A" name="adult" rows="10" cols="80" onChange={this.onChangeAdult}></textarea>
                                                </div>
                                            </div>

                                            <div class="col-md-12">
                                                <div class="form-group">
                                                    <label>Use of Medicine in children:</label>
                                                    <textarea id="editor16B" name="usechildren" rows="10" cols="80" onChange={this.onChangeChildrenmed}></textarea>
                                                </div>
                                            </div>

                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label>Use of Medicine in Elderly Patients:</label>
                                                    <textarea id="editor17" name="usepatient" rows="10" cols="80" onChange={this.onChangeElderlymed}></textarea>
                                                </div>
                                            </div>



                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label>Other general warnings:</label>
                                                    <textarea id="editor20" name="generalwarning" rows="10" cols="80" onChange={this.onChangeWarnings}></textarea>
                                                </div>
                                            </div>

                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label>Talk to your doctor if:</label>
                                                    <textarea id="editor21" name="yourdoctor" rows="10" cols="80" onChange={this.onChangeTalkdoctor}></textarea>
                                                </div>
                                            </div>

                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label>General instructions:</label>
                                                    <textarea id="editor22" name="generalins" rows="10" cols="80" onChange={this.onChangeInstrucations}></textarea>
                                                </div>
                                            </div>

                                            <div class="col-md-12">
                                                <h4 class="box-title" style={{ color: '#fe5e00', fontWeight: '500' }}>Drug Interaction of Medicine:</h4>
                                                <hr />
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label>Drug-Drug interaction of Medicine:</label>
                                                    <textarea id="editor23" name="interaction" rows="10" cols="80" onChange={this.onChangeDruginteraction}></textarea>
                                                </div>
                                            </div>

                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label>Drug-Food interaction of Medicine:</label>
                                                    <textarea id="editor23A" name="drugfood" rows="10" cols="80" onChange={this.onChangeDrugfood}></textarea>
                                                </div>
                                            </div>

                                            <div class="col-md-12">
                                                <div class="form-group">
                                                    <label>Drug-Disease interaction of Medicine:</label>
                                                    <textarea id="editor23B" name="drugdiease" rows="10" cols="80" onChange={this.onChangeDrugdiease}></textarea>
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <h4 class="box-title" style={{ color: '#fe5e00', fontWeight: '500' }}>Dosage of Medicine :</h4>
                                                <hr />
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label>Over Dose:</label>
                                                    <textarea id="editor25" name="overdose" rows="10" cols="80" onChange={this.onChangeOverdose}></textarea>
                                                </div>
                                            </div>

                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label>Missed Dose:</label>
                                                    <textarea id="editor26" name="missesdose" rows="10" cols="80" onChange={this.onChangeMissedose}></textarea>
                                                </div>
                                            </div>

                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label>Storage and disposal:</label>
                                                    <textarea id="editor27" name="disposal" rows="10" cols="80" onChange={this.onChangeDisposal}></textarea>
                                                </div>
                                            </div>

                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label>Fast tag:</label>
                                                    <textarea id="editor28" name="fasttag" rows="10" cols="80" onChange={this.onChangeFasttag}></textarea>
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <div class="form-group">
                                                    <label>References:</label>
                                                    <textarea id="editor29" name="references" rows="10" cols="80" onChange={this.onChangeReferences}></textarea>
                                                </div>
                                            </div>




                                            <div class="col-md-12">
                                                <div class="form-group">
                                                    <label>Meta Title:(52 to 60) Character Only(Ex: Category name)</label>
                                                    <div class="input-group">
                                                        <div class="input-group-addon">
                                                            <i class="fa fa-text-width"></i>
                                                        </div>
                                                        <input type="text" class="form-control" maxlength="60" name="metatitle"
                                                            onChange={this.onChangeMetatitle} />
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

export default ProductAdd;