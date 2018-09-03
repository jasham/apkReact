import React , { Component }from 'react'
import {Layout} from '../Layout/layout';
import {Header} from '../common/header';

class Front extends Component {
    render(){
        return (
            <div>
                <Header/>
            <Layout/>
            </div>
            
        )
    }
}

export default Front;