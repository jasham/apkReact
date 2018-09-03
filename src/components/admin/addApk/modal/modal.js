import React from 'react';
import { Modal, FormControl, FormGroup, ControlLabel, Button } from 'react-bootstrap';

export const AppTypeModal = (props) => {
    return (
        <div className="static-modal">
            <Modal show={ props.showStatus } >
                <Modal.Header>
                    <Modal.Title>Enter Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FormGroup>
                        <ControlLabel>Select App Type</ControlLabel>

                        <FormControl componentClass="select" placeholder="select" onClick={ (e) => { props.addApkAppType(e.target.value) }} >
                            <option></option>
                            {
                                Array.isArray(props.appType) ? props.appType.map((data) => {
                                    return (
                                        <option key={data.id} value={data.id} > { data.appType } </option>
                                    )
                                }) : ''
                            }

                        </FormControl>
                    </FormGroup>

                    <FormGroup>
                        <ControlLabel>Select Category Type</ControlLabel>

                        <FormControl componentClass="select" placeholder="select" onClick={ (e) => { props.addCategoryType(e.target.value) }} >
                            <option></option>
                            {
                                Array.isArray(props.categoryData.categoryData) ? props.categoryData.categoryData.map((data) => {
                                    return (
                                        <option key={data.id} value={data.id}> { data.categoryName } </option>
                                    )
                                }) : ''
                            }

                        </FormControl>
                    </FormGroup>
                    
                    <FormGroup >
                        
                        <ControlLabel>App Name</ControlLabel>

                        <FormControl
                            type="text"
                            value={ props.apkName }
                            placeholder="Enter app name ....."
                            onChange={ props.appTypeValue }
                        />
                    
                    </FormGroup>
                    
                    <FormGroup >
                        <ControlLabel>Description</ControlLabel>
                        <FormControl componentClass="textarea" placeholder="Description...." value={ props.description } onChange= { props.apkDescription } >
                            { props.description }
                        </FormControl>
                    </FormGroup>
                     
                    <FormGroup >
                        <ControlLabel>Select File To Upload</ControlLabel>
                        <FormControl 
                            id="formControlsFile"
                            type="file"
                            label="File"
                            onChange= { props.uploadedFile }
                            help="Example block-level help text here."
                        />
                    </FormGroup>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={ props.closeModal } >Close</Button>
                    <Button bsStyle="primary" onClick={ props.addApkDetails } >Save changes</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}