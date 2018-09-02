import React from 'react';
import { Modal, FormControl, Button, FormGroup, ControlLabel } from 'react-bootstrap';

export const AppTypeModal = (props) => {
    return (
        <div className="static-modal">
            <Modal show={ props.showStatus } >
                <Modal.Header>
                    <Modal.Title>Enter Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FormGroup controlId="formControlsSelect">
                        <ControlLabel>Select</ControlLabel>
                        <FormControl componentClass="select" placeholder="select" onClick={ (e) => { props.addCategoryAppId(e.target.value) }} >
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
                    
                    <FormControl
                        type="text"
                        value={props.categoryValueToAdd}
                        placeholder="Enter category name ....."
                        onChange={props.categoryTypeValue}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={ props.closeModal } >Close</Button>
                    <Button bsStyle="primary" onClick={ props.addCategoryType } >Save changes</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}