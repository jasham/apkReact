import React, { Component }from 'react';
import { Button, Modal, FormControl } from 'react-bootstrap';
import { connect } from 'react-redux';

export const AddButton = (props) => {

    return (
        <div>
            <Button onClick = { props.addButton } >Add Category Type</Button>
        </div>
    )
}