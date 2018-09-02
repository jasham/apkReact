import React from 'react';
import { Table, thead, tbody, tr, td, Radio, Button } from 'react-bootstrap';

export const AppTypeTable = (props) => {
    console.log("Apptype = ", props.data)
    return (
            <Table responsive striped bordered condensed hover>
                <thead>
                    <tr>
                        <th>Select App Name</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    { 
                        props.data != null ? props.data.map((data) => {
                            return ( 
                            <tr key={data.id}>
                                    <td key={data.id}>
                                        <Radio name="radioGroup" id={data.id} onChange={ (e) => { props.sending(e) } } value={data.appType}>{data.appType}</Radio>
                                    </td>
                                    <td>
                                        <Button onClick= { props.onUpdateItem } >Update</Button>
                                    </td>
                                    <td >
                                        <Button onClick={ props.deleteItem } >Delete</Button>
                                    </td>
                                </tr>
                            )
                        }) : "Loading...." 
                    }
                </tbody>
            </Table>
        )
    }