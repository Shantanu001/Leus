import React , {Component} from 'react';

import { Row , Col } from 'antd';
import { Card } from 'antd';
const { Meta } = Card;

class Content extends Component {
    constructor(props){
        super(props)
    }


    render(){
        return(
            this.props.cards?
            <div  style={{ background: '#ECECEC', padding: '30px' ,align:'center' }}>    
                 <Row gutter={16}  justify='space-around'> 
                 {this.props.cards?this.props.cards.map(item=>(
                  <Col span={8}>
                  <Card  
                  hoverable ={true}
                  style={{ width: 420 , height: 320 , margin:10}}
                  bordered={false}
                  cover={<img alt="example" width='420' height='320'  src={item.largeImageURL}/>} />
                 </Col>
                )
                ):null}
               </Row>

            </div>
            :null
        );
    }
}

export default Content;