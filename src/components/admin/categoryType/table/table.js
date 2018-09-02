import React from 'react';
import { Table, thead, tbody, tr, td, Radio, Button } from 'react-bootstrap';

export const AppTypeTable = (props) => {
    return (
            <Table responsive striped bordered condensed hover>
                <thead>
                    <tr>
                        <th>Category Name</th>
                        <th>App Type Name</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {}
                    { 
                        Array.isArray(props.data) ? props.data.map((data) => {
                            return (

                                Array.isArray(data.appdetails) ? data.appdetails.map((rdata) => {
                                    return ( 
                                        data.appdetails.length > 0 ? (
                                               <tr key={data.id}>
                                                    <td key={data.id}>
                                                        <Radio name="radioGroup" id={ rdata.id } onChange={ (e) => { props.sending(e) } } >{rdata.categoryName}</Radio>        
                                                    </td>
                                                    <td>
                                                        <label>{data.appType}</label>
                                                    </td>
                                                    <td>
                                                        <Button onClick= { props.onUpdateItem } >Update</Button>
                                                    </td>
                                                    <td >
                                                        <Button onClick={ props.deleteItem } >Delete</Button>
                                                    </td>
                                                </tr>
                                        ) : ''
                                    ) 
                                
                                }) : ''

                            )
                         }) : "Loading...." 
                    }

                </tbody>
            </Table>
        )
    }