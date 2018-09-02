import React from 'react';
import { Modal, FormControl,FormGroup, ControlLabel, Button } from 'react-bootstrap';

export const UpdateModal = (props) => {
    return (
        <div className="static-modal">
            <Modal show={ props.showStatus } >
                <Modal.Header>
                    <Modal.Title>Enter Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FormGroup controlId="formControlsSelect">
                        <ControlLabel>Select</ControlLabel>

                        <FormControl componentClass="select" placeholder="select" onClick={ (e) => { props.updateCategoryAppType(e.target.value) }} >
                            <option></option>
                            {
                                Array.isArray(props.appDetails) ? props.appDetails.map((data) => {
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
                        placeholder="Enter app type name ....."
                        onChange={props.categoryTypeValue}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={ props.closeModal } >Close</Button>
                    <Button bsStyle="primary" onClick={ props.updateCategoryType } >Save changes</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}