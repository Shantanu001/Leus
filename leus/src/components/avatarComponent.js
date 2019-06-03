import React,{Component} from 'react';

import {Avatar } from 'antd';

class AvatarComponent extends Component {

    render(){
        return (
            <div>
               <Avatar style= {{backgroundColor:"black"}} shape="square" size="large">Leus</Avatar>
            </div>
        );
    }

}

export default AvatarComponent;