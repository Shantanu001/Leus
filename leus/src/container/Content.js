import React , {Component} from 'react';
import Lightbox from 'react-images';
import { Row , Col } from 'antd';
import { Card } from 'antd';
const { Meta } = Card;

class Content extends Component {
    constructor(props){
        super(props)

        this.state = {
            slideStatus : false,
            slideShow_card_list:[],
            LIGHTBOX_IMAGE_SET:[]

        }
    }

    openSlideShow = (url,tag)=>{
        var temp = this.state;
        temp['slideStatus'] =true;
        const LIGHTBOX_IMAGE_SET = [
            {
              caption: tag,
              srcSet: [url]
              ,
            }
          ];
        temp['LIGHTBOX_IMAGE_SET'] = LIGHTBOX_IMAGE_SET; 
        this.setState(temp);


    }
    closeLightbox = () =>{
        var temp = this.state;
        temp['slideStatus'] =false;
        this.setState(temp);

    }


    render(){
        return(
            this.props.cards?
            <div>
            <div  style={{ background: '#ECECEC', padding: '30px' ,align:'center' }}>    
                 <Row gutter={16}  justify='space-around'> 
                 {this.props.cards?this.props.cards.map(item=>(
                  <Col span={8}>
                  <Card  
                  onClick = {()=>this.openSlideShow(item.largeImageURL,item.tags)}
                  hoverable ={true}
                  style={{ width: 420 , height: 320 , margin:10}}
                  bordered={false}
                  cover={<img alt="example" width='420' height='320'  src={item.largeImageURL}/>} />
                 </Col>
                )
                ):null}
               </Row>

            </div>
            <div>
            <Lightbox
            images={this.state.LIGHTBOX_IMAGE_SET}
            isOpen={this.state.slideStatus}
            onClose={this.closeLightbox}
    
          />
          </div>
          </div>
            :null
        );
    }
}

export default Content;