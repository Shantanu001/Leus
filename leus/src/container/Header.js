import React,{Component} from 'react';

import ImageSearchBar from '../components/imageSearchBar';
import ImageSearchButton from '../components/ImageSearchButton';

import { Row, Col } from 'antd';
import AvatarComponent from '../components/avatarComponent';



class Header extends Component {

    constructor(props){
        super(props);
        this.state={
            txt_search:""
        }
    }

    updateSearchText = (val)=>{
        console.log("1",val);
        this.setState({txt_search:val})
        console.log("12345",this.state.txt_search);
      
    }
    

    render(){
        return (
            <div>
                 <Row>  
                    {/* <Col span={12}><AvatarComponent/></Col> */}
                    <Col span={24}> <ImageSearchBar callFun1={(e)=>this.props.callFun(e)}/></Col>
                </Row>

            </div>
        );
    }

}

export default Header;