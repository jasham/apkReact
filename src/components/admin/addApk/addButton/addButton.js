import React, { Component }from 'react';
import { Button, Modal, FormControl } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as actions from '../../../../actions/index';

export const AddButton = (props) => {

    return (
        <div>
            <Button onClick = { props.addButton } >Add APK</Button>
        </div>
    )
}