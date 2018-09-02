import React from 'react';
import { Link } from 'react-router-dom';
import { Table, thead, tbody, tr, td, Radio, Button , label} from 'react-bootstrap';

export const AppTypeTable = (props) => {
    console.log("Apptype = ", props.data)
    return (
            <Table responsive striped bordered condensed hover>
                <thead>
                    <tr>
                        <th>Apk Name</th>
                        <th>Apk Type</th>
                        <th>Apk Category</th>
                        <th>Apk Description</th>
                        <th>Apk Path</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    { 
                        Array.isArray(props.data.apkGetData) ? props.data.apkGetData.map((data) => {
                            return ( 
                            <tr key={data.id}>
                                    <td key={data.id}>
                                        <Radio name="radioGroup" id={data.id} onChange={ (e) => { props.sending(e.target.id) } } value={data.apkName}>{data.apkName}</Radio>
                                    </td>
                                    <td>
                                        <label>{ data.app_type.appType }</label>
                                    </td>
                                    <td>
                                        <label>{ data.category_type.categoryName }</label>
                                    </td>
                                    <td>
                                        <label>{ data.description }</label>
                                    </td>
                                    <td>
                                        <label><Link to={ data.upload_path }>Link</Link></label>
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