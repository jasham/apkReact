import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../../actions';
import requireAuth from '../../../requireAuth';
import { Radio, Button, Table, tr, th, thead, tbody, Grid, Row, Col } from 'react-bootstrap';
import { AddButton} from '../addButton/addButton';
import { AppTypeTable } from '../table/table';
import { AppTypeModal } from '../modal/modal';
import { UpdateModal } from '../modal/updateModal';
import Header from '../../../../components/commonComponents/header/header';


class AddApk extends Component {

    componentDidMount(){
        this.props.appType()
        this.props.getAllApkData()
        this.props.categoryGetData()
        this.props.getCategory()
    }
    
    state = {
        modalStatus : false,
        appValueToAdd : '',
        updateModalStatus : false,
        
        selectedApkId : '',
        selectedAppTypeId : '',
        selectedAppTypeName : '',
        selectedCategoryId : '',
        selectedCategoryName : '',
        apkName : '',
        description : '',
        apkUploadPath : '',
        upload_path: '',
        fileToUpload : null
    }
    
    clickAdd = () => {
        this.setState({ modalStatus : true});
        this.modal
    }

    addApkAppType = (typeId) => {
        this.setState({ selectedAppTypeId : typeId })
    }

    addCategoryType = (typeId) => {
        this.setState({ selectedCategoryId : typeId })
    }

    addApkDetails = () => {

        const data = new FormData();
        data.append('upload_path', this.state.fileToUpload, this.state.fileToUpload.name);
        data.append('apkName',this.state.apkName)
        data.append('description',this.state.description)
        data.append('app_type',this.state.selectedAppTypeId)
        data.append('category_type', this.state.selectedCategoryId)

        this.props.addAPK(data)
        this.setState({ modalStatus : false })
    }
    modal = () => {
        return (
            <AppTypeModal 
                showStatus={this.state.modalStatus}
                closeModal={ this.closeModal }
                appTypeValue={this.appTypeValue}
                appType = { this.props.data }
                addApkAppType = { this.addApkAppType }
                categoryData = { this.props.categoryData }
                addCategoryType = { this.addCategoryType }
                apkName = { this.state.apkName }
                appTypeValue = { this.appTypeValue }
                description = { this.state.description }
                apkDescription = { this.apkDescription }
                addApkDetails = { this.addApkDetails }
                uploadedFile = { this.uploadedFile }
            />
        )
    }

    updateModal = () => {
        return (
            <UpdateModal
                showStatus={this.state.updateModalStatus}
                closeModal={ this.closeModal }
                appType = { this.props.data }
                specificapkGetData = { this.props.specificapkGetData }
                selectedApkId = { this.state.selectedApkId }
                apkName = { this.state.apkName }
                selectedAppTypeId = { this.state.selectedAppTypeId }
                selectedAppTypeName = { this.state.selectedAppTypeName }
                selectedCategoryId = { this.state.selectedCategoryId }
                selectedCategoryName = { this.state.selectedCategoryName }
                description = { this.state.description }
                apkUploadPath = { this.state.apkUploadPath }
                updateApkAppType={ this.updateApkAppType }
                categoryData = { this.props.categoryData }
                updateCategoryAppType = { this.updateCategoryAppType }
                appTypeValue={this.appTypeValue}
                apkDescription = { this.apkDescription }
                uploadedFile = { this.uploadedFile }
                updateApkDetails = { this.updateApkDetails }
                uploadedFile = { this.uploadedFile }
            />
        )
    }

    apkDescription = (event) => {
        this.setState({ description : event.target.value })
    }
    updateApkAppType = (id) => {
        this.setState({ selectedAppTypeId : id})
    }

    uploadDocumentRequest = ( file, name ) => {  
        const data = new FormData();
        data.append('file', this.state.fileToUpload);
        data.append('name', name);
      
        return data
    }

    updateApkDetails = () => {
        const data = new FormData();
        data.append('upload_path', this.state.fileToUpload, this.state.fileToUpload.name);
        data.append('apkName',this.state.apkName)
        data.append('description',this.state.description)
        data.append('app_type',this.state.selectedAppTypeId)
        data.append('category_type', this.state.selectedCategoryId)

        this.props.updateSpecificApkData(data,this.state.selectedApkId) 
        this.setState({ updateModalStatus : false })       
    }

    sending = (e) => {
        this.setState({ selectedApkId : e},() => { this.props.getSpecificApkData(this.state.selectedApkId) })


        
       // this.setState({ temporaryAppTypevalue : e.target.value })
       // this.setState({ selectedAppTypeId : e.target.id })
    }

    uploadedFile = (event) => {
        this.setState({ fileToUpload : event.target.files[0] })
    }

    deleteItem = () => {
        const appId = {
          id : this.state.selectedAppTypeId
        }
        this.props.deleteApkType(appId);
    }
    
    onUpdateItem = () => {
        this.setState({ updateModalStatus : true});
        this.setState({ selectedApkId : this.props.specificapkGetData.id })
        this.setState({ apkName : this.props.specificapkGetData.apkName })
        this.setState({ selectedAppTypeId : this.props.specificapkGetData.app_type.id })
        this.setState({ selectedAppTypeName : this.props.specificapkGetData.app_type.appType })
        this.setState({ selectedCategoryId : this.props.specificapkGetData.category_type.id })
        this.setState({ selectedCategoryName : this.props.specificapkGetData.category_type.categoryName })
        this.setState({ description : this.props.specificapkGetData.description })
        this.setState({ upload_path : this.props.specificapkGetData.upload_path })
    }
    
    updateCategoryAppType = (id) => {
        this.setState({ selectedCategoryId : id })
    }

    appTypeValue = (event) => {
        this.setState({ apkName : event.target.value })
    }

    addAppType = () => {
        this.props.addAppTypeData({ appType : this.state.appValueToAdd })
        this.setState({ modalStatus : false })
    }

    closeModal = () => {
        this.setState({ modalStatus : false })
        this.setState({ updateModalStatus : false })
    }

    render() {
        return(
            <div className="container">
                <Header/>
                <Grid>
                    <Row className="show-grid">
                       <Col className="col-lg-10 col-md-10">
                            <br/>
                            <h1>Manage All APK</h1>
                            <br/>
                       </Col>
                       <Col className="col-lg-2 col-md-2 pullRight">
                            <br/>
                            <br/>
                            <AddButton addButton={ this.clickAdd } />
                            { this.modal() }
                            <br/>
                       </Col> 
                    </Row>
                    <Row className="show-grid">
                        <AppTypeTable 
                            data={ this.props.apkData } 
                            sending={ this.sending } 
                            deleteItem={ this.deleteItem }
                            onUpdateItem= { this.onUpdateItem }
                        />
                        { this.updateModal() }
                   </Row>
                </Grid>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        data : state.auth.appTypedata,
        appTypeStatus : state.appTypeStatus.status,
        apkData : state.allApkdata,
        specificapkGetData : state.specificapkGetData.specificapkGetData,
        categoryData : state.categoryData

    }
}

export default connect(mapStateToProps,actions)(requireAuth(AddApk));