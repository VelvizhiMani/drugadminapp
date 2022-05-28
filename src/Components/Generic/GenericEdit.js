import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
class GenericEdit extends React.Component {
    constructor(props) {
        super(props);
        this.onChangeCategoryName = this.onChangeCategoryName.bind(this);
        this.onChangeSubCategoryName = this.onChangeSubCategoryName.bind(this);
        this.onChangeUrl = this.onChangeUrl.bind(this);
        this.onChangeGenericName = this.onChangeGenericName.bind(this);
        this.onChangeImage = this.onChangeImage.bind(this);
        this.onChangeImagealt = this.onChangeImagealt.bind(this);
        this.onChangeVedio = this.onChangeVedio.bind(this);
        this.onChangeVedioalt = this.onChangeVedioalt.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
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
        this.onChangeAsthma = this.onChangeAsthma.bind(this);
        this.onChangeTakemedicine = this.onChangeTakemedicine.bind(this);
        this.onChangeAdult = this.onChangeAdult.bind(this);
        this.onChangeChildrenmed = this.onChangeChildrenmed.bind(this);
        this.onChangeElderlymed = this.onChangeElderlymed.bind(this);
        this.onChangeAlcohol = this.onChangeAlcohol.bind(this);
        this.onChangeHeartdisease = this.onChangeHeartdisease.bind(this);
        this.onChangeDriving = this.onChangeDriving.bind(this);
        this.onChangeWarnings = this.onChangeWarnings.bind(this);
        this.onChangeTalkdoctor = this.onChangeTalkdoctor.bind(this);
        this.onChangeInstructions = this.onChangeInstructions.bind(this);
        this.onChangeDruginteraction = this.onChangeDruginteraction.bind(this);
        this.onChangeDrugfood = this.onChangeDrugfood.bind(this);
        this.onChangeDrugdiease = this.onChangeDrugdiease.bind(this);
        this.onChangeFooditems = this.onChangeFooditems.bind(this);
        this.onChangeOverdose = this.onChangeOverdose.bind(this);
        this.onChangeMissesdose = this.onChangeMissesdose.bind(this);
        this.onChangeDisposal = this.onChangeDisposal.bind(this);
        this.onChangeFasttag = this.onChangeFasttag.bind(this);
        this.onChangeReferences = this.onChangeReferences.bind(this);
        this.onChangeMetatitle = this.onChangeMetatitle.bind(this);
        this.onChangeMetakeyword = this.onChangeMetakeyword.bind(this);
        this.onChangeMetadesc = this.onChangeMetadesc.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            catnames: '',
            subname: '',
            url: '',
            generices:'',
            image:'',
            imagealt:'',
            vedio:'',
            vedioalt:'',
            description:'',
            usesofmeds:'',
            useofbenefits:'',
            indicat:'',
            mechanism:'',
            medicinework:'',
            contraindications:'',
            sideeffects:'',
            faqs:'',
            pregnancy:'',
            breastfeeding:'',
            kidneyproblem:'',
            liverdisease:'',
            asthma:'',
            takemedicine:'',
            adult:'',
            childrenmed:'',
            elderlymed:'',
            alcohol:'',
            heartdisease: '',
            driving:'',
            warnings:'',
            talkdoctor:'',
            instructions:'',
            druginteraction:'',
            drugfood:'',
            drugdiease:'',
            fooditems:'',
            overdose:'',
            misseddose:'',
            disposal:'',
            fasttag:'',
            refer:'',
            metatitle:'',
            metakeyword:'',
            metadesc:'',
            status:'',
            categorylist:[],
            subcategorylist:[],
        }
      }
      onChangeCategoryName(e) {this.setState({ catnames: e.target.value,});}
      onChangeSubCategoryName(e) {this.setState({ subname: e.target.value,});}
      onChangeUrl(e) {this.setState({ url: e.target.value,});}
      onChangeGenericName(e) {this.setState({ generices: e.target.value,});}
      onChangeImage(e) {this.setState({ image: e.target.files[0]});}
      onChangeImagealt(e) {this.setState({ imagealt: e.target.value,});}
      onChangeVedio(e) {this.setState({ vedio: e.target.files[0]});}
      onChangeVedioalt(e) {this.setState({ vedioalt: e.target.value,});}
      onChangeDescription(e) {this.setState({ description: e.target.value,});}
      onChangeUseofmeds(e) {this.setState({ usesofmeds: e.target.value,});}
      onChangeUseofbenefits(e) {this.setState({ useofbenefits: e.target.value,});}
      onChangeIndicat(e) {this.setState({ indicat: e.target.value,});}
      onChangeMechanism(e) {this.setState({ mechanism: e.target.value,});}
      onChangeMedicinework(e) {this.setState({ medicinework: e.target.value,});}
      onChangeContraindications(e) {this.setState({ contraindications: e.target.value,});}
      onChangeSideeffects(e) {this.setState({ sideeffects: e.target.value,});}
      onChangeFaqs(e) {this.setState({ faqs: e.target.value,});}
      onChangePregnancy(e) {this.setState({ pregnancy: e.target.value,});}
      onChangeBreastfeeding(e) {this.setState({ breastfeeding: e.target.value,});}
      onChangeKidneyproblem(e) {this.setState({ kidneyproblem: e.target.value,});}
      onChangeLiverdisease(e) {this.setState({ liverdisease: e.target.value,});}
      onChangeAsthma(e) {this.setState({ asthma: e.target.value,});}
      onChangeTakemedicine(e) {this.setState({ takemedicine: e.target.value,});}
      onChangeAdult(e) {this.setState({ adult: e.target.value,});}
      onChangeChildrenmed(e) {this.setState({ childrenmed: e.target.value,});}
      onChangeElderlymed(e) {this.setState({ elderlymed: e.target.value,});}
      onChangeAlcohol(e) {this.setState({ alcohol: e.target.value,});}
      onChangeHeartdisease(e) {this.setState({ heartdisease: e.target.value,});}
      onChangeDriving(e) {this.setState({ driving: e.target.value,});}
      onChangeWarnings(e) {this.setState({ warnings: e.target.value,});}
      onChangeTalkdoctor(e) {this.setState({ talkdoctor: e.target.value,});}
      onChangeInstructions(e) {this.setState({ instructions: e.target.value,});}
      onChangeDruginteraction(e) {this.setState({ druginteraction: e.target.value,});}
      onChangeDrugfood(e) {this.setState({ drugfood: e.target.value,});}
      onChangeDrugdiease(e) {this.setState({ drugdiease: e.target.value,});}
      onChangeFooditems(e) {this.setState({ fooditems: e.target.value,});}
      onChangeOverdose(e) {this.setState({ overdose: e.target.value,});}
      onChangeMissesdose(e) {this.setState({ misseddose: e.target.value,});}
      onChangeDisposal(e) {this.setState({ disposal: e.target.value,});}
      onChangeFasttag(e) {this.setState({ fasttag: e.target.value,});}
      onChangeReferences(e) {this.setState({ refer: e.target.value,});}
      onChangeMetatitle(e) {this.setState({ metatitle: e.target.value,});}
      onChangeMetakeyword(e) {this.setState({ metakeyword: e.target.value,});}
      onChangeMetadesc(e) {this.setState({ metadesc: e.target.value,});}

      onSubmit(e) {
        e.preventDefault();
        let formData = new FormData();
        formData.append('image', this.state.image)
        formData.append('vedio', this.state.vedio)
        
        const obj = {
            catnames: this.state.catnames,
            subname: this.state.subname,
            url: this.state.url,
            generices:this.state.generices,
            imagealt:this.state.imagealt,
            vedioalt:this.state.vedioalt,
            description:this.state.description,
            usesofmeds:this.state.usesofmeds,
            useofbenefits:this.state.useofbenefits,
            indicat:this.state.indicat,
            mechanism:this.state.mechanism,
            medicinework:this.state.medicinework,
            contraindications:this.state.contraindications,
            sideeffects:this.state.sideeffects,
            faqs:this.state.faqs,
            pregnancy:this.state.pregnancy,
            breastfeeding:this.state.breastfeeding,
            kidneyproblem:this.state.kidneyproblem,
            liverdisease:this.state.liverdisease,
            asthma:this.state.asthma,
            takemedicine:this.state.takemedicine,
            adult:this.state.adult,
            childrenmed:this.state.childrenmed,
            elderlymed:this.state.elderlymed,
            alcohol:this.state.alcohol,
            heartdisease: this.state.heartdisease,
            driving:this.state.driving,
            warnings:this.state.warnings,
            talkdoctor:this.state.talkdoctor,
            instructions:this.state.instructions,
            druginteraction:this.state.druginteraction,
            drugfood:this.state.drugfood,
            drugdiease:this.state.drugdiease,
            fooditems:this.state.fooditems,
            overdose:this.state.overdose,
            misseddose:this.state.misseddose,
            disposal:this.state.disposal,
            fasttag:this.state.fasttag,
            refer:this.state.refer,
            metatitle:this.state.metatitle,
            metakeyword:this.state.metakeyword,
            metadesc:this.state.metadesc,
        };
        formData.append('catnames', obj.catnames)
        formData.append('subname', obj.subname)
        formData.append('url', obj.url)
        formData.append('generices', obj.generices)
        formData.append('imagealt', obj.imagealt)
        formData.append('vedioalt', obj.vedioalt)
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
        formData.append('metatitle', obj.metatitle)
        formData.append('metakeyword', obj.metakeyword)
        formData.append('metadesc', obj.metadesc)
        
        axios.patch('http://13.232.195.17:4000/generic/'+ this.props.match.params.id, formData)
            .then(res => console.log(res.data));
        
      // Redirect to Student List 
      this.props.history.push('/genericlist')
    
        // this.setState({
        // })
      }
      componentDidMount() {
        axios.get('http://13.232.195.17:4000/generic/'+this.props.match.params.id)
        .then(response => {
            this.setState({ 
                catnames: response.data.catnames, 
                subname: response.data.subname, 
                url: response.data.url, 
                generices:response.data.generices, 
                image:response.data.image, 
                imagealt:response.data.imagealt, 
                vedio:response.data.vedio, 
                vedioalt:response.data.vedioalt, 
                description:response.data.description, 
                usesofmeds:response.data.usesofmeds, 
                useofbenefits:response.data.useofbenefits, 
                indicat:response.data.indicat, 
                mechanism:response.data.mechanism, 
                medicinework:response.data.medicinework, 
                contraindications:response.data.contraindications, 
                sideeffects:response.data.sideeffects, 
                faqs:response.data.faqs, 
                pregnancy:response.data.pregnancy, 
                breastfeeding:response.data.breastfeeding, 
                kidneyproblem:response.data.kidneyproblem, 
                liverdisease:response.data.liverdisease,
                asthma:response.data.asthma, 
                takemedicine:response.data.takemedicine, 
                adult:response.data.adult, 
                childrenmed:response.data.childrenmed, 
                elderlymed:response.data.elderlymed, 
                alcohol:response.data.alcohol, 
                heartdisease:response.data.heartdisease, 
                driving:response.data.driving, 
                warnings:response.data.warnings, 
                talkdoctor:response.data.talkdoctor, 
                instructions:response.data.instructions, 
                druginteraction:response.data.druginteraction, 
                drugfood:response.data.drugfood, 
                drugdiease:response.data.drugdiease, 
                fooditems:response.data.fooditems, 
                overdose:response.data.overdose, 
                misseddose:response.data.misseddose, 
                disposal:response.data.disposal, 
                fasttag:response.data.fasttag, 
                refer:response.data.refer, 
                metatitle:response.data.metatitle, 
                metakeyword:response.data.metakeyword, 
                metadesc:response.data.metadesc, 
                status:response.data.status,
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
          axios.get('http://localhost:4000/subcategory/')
          .then(response => {
            this.setState({
              subcategorylist: response.data
            });
          })
          .catch(function (error) {
            console.log(error);
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
                                                Add Generic Name</h3>
                                        </div>
                                        <div class="col-md-6">
                                            <Link to="/genericlist">
                                                <button type="button" class="btn btn-primary pull-right">
                                                    <i class="fa fa-plus"></i> &nbsp; Generic Name List</button></Link>
                                        </div>
                                    </div>
                                    {/* role="form" */}
                                    <form onSubmit={this.onSubmit}>
                                        <div class="box-body">
                                            <div class="col-md-4">
                                                <div class="form-group">
                                                    <label>Category Name</label>
                                                    <select class="form-control select2 " onChange={this.onChangeCategoryName}> 
                                                    <option selected="selected" value={this.state.catnames}>{this.state.catnames}</option>
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
                                                    <select class="form-control select2 " onChange={this.onChangeSubCategoryName}>
                                                       <option selected="selected" value={this.state.subname}>{this.state.subname}</option>
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
                                                    <label for="Genericname">Generic Name</label>
                                                    <input type="Generic" class="form-control" value={this.state.generices}
                                                    placeholder="Generic Name" onChange={this.onChangeGenericName}/>
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="form-group">
                                                    <label for="Url">URL</label>
                                                    <input type="text" class="form-control" placeholder="URL" value={this.state.url}
                                                    onChange={this.onChangeUrl}/>
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="form-group">
                                                    <label class="Url">Image</label>
                                                    <img src={"https://my-drugcarts-bucket.s3.ap-south-1.amazonaws.com/"+this.state.gen_img} alt="Drugcarts"/>
                                                    <div class="input-group">
                                                        <div class="input-group-addon">
                                                            <i class="fa fa-image"></i>
                                                        </div>
                                                        <input type="file" class="form-control" onChange={this.onChangeImage}/>
                                                    </div>
                                                </div></div>
                                            <div class="col-md-4">
                                                <div class="form-group">
                                                    <label for="Imagealt">Image Alt Tag [EX:( Sub Category name -Drugcarts)]</label>
                                                    <input type="text" class="form-control" placeholder="Image Alt Tag" 
                                                    value={this.state.imagealt}
                                                    onChange={this.onChangeImagealt}/>
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="form-group">
                                                    <label class="video">Video Upload</label>
                                                    <img src={"https://my-drugcarts-bucket.s3.ap-south-1.amazonaws.com/"+this.state.vedio} alt="Drugcarts"/>
                                                    <div class="input-group">
                                                        <div class="input-group-addon">
                                                            <i class="fa fa-image"></i>
                                                        </div>
                                                        <input type="file" class="form-control" name='vedio' onChange={this.onChangeVedio}/>
                                                    </div>
                                                </div></div>
                                            <div class="col-md-4">
                                                <div class="form-group">
                                                    <label for="Videoalt">Vedio Alt Tag [EX:( Sub Category name -Drugcarts)]</label>
                                                    <input type="text" class="form-control" placeholder="Vedio Alt" 
                                                    value={this.state.vedioalt}
                                                    onChange={this.onChangeVedioalt}/>
                                                </div>
                                            </div>
                                            
                                            <div class="col-md-12">
                                                <div class="form-group">
                                                    <label>Medical Description of Medicine :</label><br></br>
                                                    <textarea id="editor1" name="description" rows="10" cols="80" 
                                                    value={this.state.description}
                                                    onChange={this.onChangeDescription}>{this.state.description}</textarea>
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <div class="form-group">
                                                    <label>Uses of Medicine :</label><br></br>
                                                    <textarea id="editor2" name="usesofmeds" rows="10" cols="80" 
                                                    value={this.state.usesofmeds}
                                                    onChange={this.onChangeUseofmeds}>{this.state.usesofmeds}</textarea>
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <div class="form-group">
                                                    <label>Uses and Benefits of Medicine :</label><br></br>
                                                    <textarea id="editor3" name="useofbenefits" rows="10" cols="80" 
                                                    value={this.state.useofbenefits}
                                                    onChange={this.onChangeUseofbenefits}>{this.state.useofbenefits}</textarea>
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <div class="form-group">
                                                    <label>Medicine Prescribed for Follow Indication :</label><br></br>
                                                    <textarea id="editor4" name="indication" rows="10" cols="80" 
                                                    value={this.state.indicat}
                                                    onChange={this.onChangeIndicat}>{this.state.indicat}</textarea>
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <div class="form-group">
                                                    <label>Mechanism of action of Medicine:</label><br></br>
                                                    <textarea id="editor5" name="mechansim" rows="10" cols="80" 
                                                    value={this.state.mechanism}
                                                    onChange={this.onChangeMechanism}>{this.state.mechanism}</textarea>
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <div class="form-group">
                                                    <label>How Medicine works :</label><br></br>
                                                    <textarea id="editor6" name="work" rows="10" cols="80" 
                                                    value={this.state.medicinework}
                                                    onChange={this.onChangeMedicinework}>{this.state.medicinework}</textarea>
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <div class="form-group">
                                                    <label>Contraindications of Medicine :</label><br></br>
                                                    <textarea id="editor7" name="contraindications" rows="10" cols="80" 
                                                    value={this.state.contraindications}
                                                    onChange={this.onChangeContraindications}>{this.state.contraindications}</textarea>
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <div class="form-group">
                                                    <label>Side effects of Medicine :</label><br></br>
                                                    <textarea id="editor8" name="sideeffects" rows="10" cols="80"
                                                     value={this.state.sideeffects}
                                                     onChange={this.onChangeSideeffects}>{this.state.sideeffects}</textarea>
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <div class="form-group">
                                                    <label>FAQs for Medicine :</label><br></br>
                                                    <textarea id="editor9" name="faqs" rows="10" cols="80" 
                                                    value={this.state.faqs}
                                                    onChange={this.onChangeFaqs}>{this.state.faqs}</textarea>
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <h4 class="box-title" style={{ color: '#fe5e00', fontWeight: '500' }}>
                                                Precautions and general warning of Medicine</h4>
                                                <hr />
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label>Pregnancy :</label><br></br>
                                                    <textarea id="editor10" name="pregnancy" rows="10" cols="80" 
                                                    value={this.state.pregnancy}
                                                    onChange={this.onChangePregnancy}>{this.state.pregnancy}</textarea>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label>Breast Feeding :</label><br></br>
                                                    <textarea id="editor11" name="breastfeeding" rows="10" cols="80" 
                                                    value={this.state.breastfeeding}
                                                    onChange={this.onChangeBreastfeeding}>{this.state.breastfeeding}</textarea>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label>Kidney Problem :</label><br></br>
                                                    <textarea id="editor12" name="kidneyproblem" rows="10" cols="80" 
                                                    value={this.state.kidneyproblem}
                                                    onChange={this.onChangeKidneyproblem}>{this.state.kidneyproblem}</textarea>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label>Liver Disease :</label><br></br>
                                                    <textarea id="editor13" name="liverdisease" rows="10" cols="80" 
                                                    value={this.state.liverdisease}
                                                    onChange={this.onChangeLiverdisease}>{this.state.liverdisease}</textarea>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label>Heart Disease :</label><br></br>
                                                    <textarea id="editor14" name="heartdisease" rows="10" cols="80" 
                                                    value={this.state.heartdisease}
                                                    onChange={this.onChangeHeartdisease}>{this.state.heartdisease}</textarea>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label>Asthma :</label><br></br>
                                                    <textarea id="editor15" name="asthma" rows="10" cols="80" 
                                                    value={this.state.asthma}
                                                    onChange={this.onChangeAsthma}>{this.state.asthma}</textarea>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label>How to Take Medicine :</label><br></br>
                                                    <textarea id="editor16" name="takemedicine" rows="10" cols="80"
                                                    value={this.state.takemedicine}
                                                     onChange={this.onChangeTakemedicine}>{this.state.takemedicine}</textarea>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label>Use of Medicine in Adult :</label><br></br>
                                                    <textarea id="editor17" name="adult" rows="10" cols="80" 
                                                    value={this.state.adult}
                                                    onChange={this.onChangeAdult}>{this.state.adult}</textarea>
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <div class="form-group">
                                                    <label>Use of Medicine in children :</label><br></br>
                                                    <textarea id="editor18" name="usechildren" rows="10" cols="80" 
                                                    value={this.state.childrenmed}
                                                    onChange={this.onChangeChildrenmed}>{this.state.childrenmed}</textarea>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                            <div class="form-group">
                                                <label>Use of Medicine in Elderly Patients:</label>
                                                <textarea id="editor19" name="usepatient" rows="10" cols="80" 
                                                value={this.state.elderlymed}
                                                onChange={this.onChangeElderlymed}></textarea>
                                            </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label>Alcohol :</label><br></br>
                                                    <textarea id="editor20" name="alcohol" rows="10" cols="80" 
                                                    value={this.state.alcohol}
                                                    onChange={this.onChangeAlcohol}>{this.state.alcohol}</textarea>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label>Driving or operating machinery :</label><br></br>
                                                    <textarea id="editor21" name="operatingmach" rows="10" cols="80" 
                                                    value={this.state.driving}
                                                    onChange={this.onChangeDriving}>{this.state.driving}</textarea>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label>Other general warnings :</label><br></br>
                                                    <textarea id="editor22" name="generalwarning" rows="10" cols="80" 
                                                    value={this.state.warnings}
                                                    onChange={this.onChangeWarnings}>{this.state.warnings}</textarea>
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <div class="form-group">
                                                    <label>Talk to your doctor if :</label><br></br>
                                                    <textarea id="editor23" name="talkdoctor" rows="10" cols="80" 
                                                    value={this.state.talkdoctor}
                                                    onChange={this.onChangeTalkdoctor}>{this.state.talkdoctor}</textarea>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label>General instructions :</label><br></br>
                                                    <textarea id="editor24" name="generalins" rows="10" cols="80" 
                                                    value={this.state.instructions}
                                                    onChange={this.onChangeInstructions}>{this.state.instructions}</textarea>
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                            <h3 class="box-title">Drug Interaction of Medicine :</h3>
                                            </div>
                                            <div class="col-md-12">
                                                <div class="form-group">
                                                    <label>Drug-Drug interaction of Medicine :</label><br></br>
                                                    <textarea id="editor25" name="interaction" rows="10" cols="80" 
                                                    value={this.state.druginteraction}
                                                    onChange={this.onChangeDruginteraction}>{this.state.druginteraction}</textarea>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label>Drug-Food interaction of Medicine:</label><br></br>
                                                    <textarea id="editor26" name="drugfood" rows="10" cols="80" 
                                                    value={this.state.drugfood}
                                                    onChange={this.onChangeDrugfood}>{this.state.drugfood}</textarea>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label>Drug-Disease interaction of Medicine :</label><br></br>
                                                    <textarea id="editor27" name="drugdiease" rows="10" cols="80" 
                                                    value={this.state.drugdiease}
                                                    onChange={this.onChangeDrugdiease}>{this.state.drugdiease}</textarea>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label>Interaction with food items :</label><br></br>
                                                    <textarea id="editor28" name="fooditems" rows="10" cols="80" 
                                                    value={this.state.fooditems}
                                                    onChange={this.onChangeFooditems}>{this.state.fooditems}</textarea>
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                            <h3 class="box-title">Dosage of Medicine</h3>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label>Over Dose :</label><br></br>
                                                    <textarea id="editor29" name="overdose" rows="10" cols="80"
                                                    value={this.state.overdose}
                                                     onChange={this.onChangeOverdose}>{this.state.overdose}</textarea>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label>Missed Dose :</label><br></br>
                                                    <textarea id="editor30" name="missesdose" rows="10" cols="80" 
                                                    value={this.state.misseddose}
                                                    onChange={this.onChangeMissesdose}>{this.state.misseddose}</textarea>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label>Storage and disposal :</label><br></br>
                                                    <textarea id="editor31" name="disposal" rows="10" cols="80" 
                                                    value={this.state.disposal}
                                                    onChange={this.onChangeDisposal}>{this.state.disposal}</textarea>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label>Fast tag :</label><br></br>
                                                    <textarea id="editor32" name="fasttag" rows="10" cols="80" 
                                                    value={this.state.fasttag}
                                                    onChange={this.onChangeFasttag}>{this.state.fasttag}</textarea>
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <div class="form-group">
                                                    <label>References :</label><br></br>
                                                    <textarea id="editor33" name="references" rows="10" cols="80" 
                                                    value={this.state.refer}
                                                    onChange={this.onChangeReferences}>{this.state.refer}</textarea>
                                                </div>
                                            </div>
                                            
                                            <div class="col-md-12">
                                                <h4 class="box-title" style={{ color: '#fe5e00', fontWeight: '500' }}>SEO (Meta Title, Keyword & Description)</h4>
                                                <hr />
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
                                                        <input type="text" class="form-control" name="metakeyword" maxlength="250" 
                                                        value={this.state.metakeyword}
                                                        onChange={this.onChangeMetakeyword}/>
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
                                                        value={this.state.metadesc}
                                                        onChange={this.onChangeMetadesc}></textarea>
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

export default GenericEdit;

