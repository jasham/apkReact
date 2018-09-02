import React from 'react';
import { Modal, FormControl, FormGroup, ControlLabel, Button } from 'react-bootstrap';

export const UpdateModal = (props) => {
    return (
        <div className="static-modal">
            <Modal show={ props.showStatus } >
                <Modal.Header>
                    <Modal.Title>Enter Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FormGroup controlId="formControlsSelect">
                        <ControlLabel>Select App Type</ControlLabel>

                        <FormControl componentClass="select" placeholder="select" onClick={ (e) => { props.updateCategoryAppType(e.target.value) }} >
                            <option key={props.selectedAppTypeId} value={props.selectedAppTypeId} > { props.selectedAppTypeName } </option>
                            {
                                Array.isArray(props.appDetails) ? props.appDetails.map((data) => {
                                    return (
                                        <option key={data.id} value={data.id} > { data.appType } </option>
                                    )
                                }) : ''
                            }

                        </FormControl>
                    </FormGroup>

                    <FormGroup controlId="formControlsSelect">
                        <ControlLabel>Select Category Type</ControlLabel>

                        <FormControl componentClass="select" placeholder="select" onClick={ (e) => { props.updateCategoryAppType(e.target.value) }} >
                            <option key={props.selectedCategoryId} value={ props.selectedCategoryId } > { props.selectedCategoryName }</option>
                            {
                                Array.isArray(props.appDetails) ? props.appDetails.map((data) => {
                                    return (
                                        <option key={data.id} value={data.id}> </option>
                                    )
                                }) : ''
                            }

                        </FormControl>
                    </FormGroup>
                    
                    <FormGroup controlId="formControlsSelect">
                        
                        <ControlLabel>App Name</ControlLabel>

                        <FormControl
                            type="text"
                            value={props.apkName}
                            placeholder="Enter app name ....."
                            onChange={props.appTypeValue}
                        />
                    
                    </FormGroup>
                    
                    <FormGroup controlId="formControlsTextarea">
                        <ControlLabel>Description</ControlLabel>
                        <FormControl componentClass="textarea" placeholder="Description...." >
                            { props.description }
                        </FormControl>
                    </FormGroup>
                     
                    <FormGroup controlId="formControlsTextarea">
                        <ControlLabel>Select File To Upload</ControlLabel>
                        <FormControl 
                            id="formControlsFile"
                            type="file"
                            label="File"
                            help="Example block-level help text here."
                        />
                    </FormGroup>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={ props.closeModal } >Close</Button>
                    <Button bsStyle="primary" onClick={ props.updateAppType } >Save changes</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}