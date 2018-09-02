import React from 'react';
import { Modal, FormControl, Button } from 'react-bootstrap';

export const AppTypeModal = (props) => {
    return (
        <div className="static-modal">
            <Modal show={ props.showStatus } >
                <Modal.Header>
                    <Modal.Title>Enter Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FormControl
                        type="text"
                        value={props.appValueToAdd}
                        placeholder="Enter app type name ....."
                        onChange={props.appTypeValue}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={ props.closeModal } >Close</Button>
                    <Button bsStyle="primary" onClick={ props.addAppType } >Save changes</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}