import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../../actions/index';
import requireAuth from '../../../requireAuth';
import { Radio, Button, Table, tr, th, thead, tbody, Grid, Row, Col } from 'react-bootstrap';
import { AddButton} from '../addButton/addButton';
import { AppTypeTable } from '../table/table';
import { AppTypeModal } from '../modal/modal';
import { UpdateModal } from '../modal/updateModal';
import Header from '../../../../components/commonComponents/header/header';

class AppType extends Component {

    componentDidMount(){
        this.props.categoryGetData()
        this.props.appType()
    }
    
    state = {
        modalStatus : false,
        appTypeName : '',
        categoryValueToAdd : '',
        dataLength : '',
        selectedCategoryType : '',
        temporaryCategoryTypevalue : '',
        selectedCategoryTypeId : '',
        updateModalStatus : false,
        updateCategoryAppTypeValue : '',
        categoryId : '',
        appId : ''
    }
    
    clickAdd = () => {
        this.setState({ modalStatus : true});
        this.modal
    }

    modal = () => {
        return (
            <AppTypeModal 
                showStatus={this.state.modalStatus}
                closeModal={ this.closeModal }
                appType={this.props.appTypeDetails}
                categoryValueToAdd={this.state.categoryValueToAdd}
                categoryTypeValue={this.categoryTypeValue}
                addCategoryType={this.addCategoryType}
                addCategoryAppId={this.addCategoryAppId}
            />
        )
    }

    updateModal = () => {
        return (
            <UpdateModal
                showStatus={this.state.updateModalStatus}
                closeModal={ this.closeModal }
                categoryValueToAdd={this.state.categoryValueToAdd}
                categoryTypeValue={this.categoryTypeValue}
                updateCategoryType={ this.updateCategoryType }
                appDetails = { this.props.appTypeDetails }
                updateCategoryAppType = { this.updateCategoryAppType }
            />
        )
    }

    updateCategoryAppType = (e) => {
        this.setState({ updateCategoryAppTypeValue : e})
    }

    updateCategoryType = () => {
        const updateCategory = {
            categoryId : this.state.categoryId,
            appType : this.state.updateCategoryAppTypeValue,
            categoryName : this.state.categoryValueToAdd
        }
        this.props.updateCategoryTypeData(updateCategory);
        this.setState({updateModalStatus: false})
    }

    addCategoryAppId = (e) => {
        this.setState({ appId : e })
    }

    addCategoryType = () => {
        const addData = {
            appType : this.state.appId,
            categoryName : this.state.categoryValueToAdd
        }
        this.props.addCategory(addData);
        this.setState({modalStatus: false})
    }

    sending = (e) => {
        this.setState({ categoryId : e.target.id })
    }

    deleteItem = () => {
        const appId = {
          id : this.state.categoryId
        }
        this.props.deleteCategory(appId);
    }
    
    onUpdateItem = () => {
        this.setState({ updateModalStatus : true});
    }
    

    categoryTypeValue = (event) => {
        this.setState({ categoryValueToAdd : event.target.value })
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
                <Header />
                <Grid>
                    <Row className="show-grid">
                       <Col className="col-lg-10 col-md-10">
                            <br/>
                            <h1>Manage Category Type</h1>
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
                            data={ this.props.data } 
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
        data : state.categoryGetData.categoryGetData,
        appTypeStatus : state.appTypeStatus.status,
        appTypeDetails : state.auth.appTypedata

    }
}

export default connect(mapStateToProps,actions)(requireAuth(AppType));