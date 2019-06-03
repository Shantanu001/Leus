import React,{Component} from 'react';

import { Input } from 'antd';
const Search = Input.Search;


class imageSearchBar extends Component {
    constructor(props){
        super(props);
    }

    handleSub(toSearch){
      //console.log(toSearch);
      this.props.callFun1(toSearch);
    }

    render(){
        return (
            <div>
                 <Search
      size="large" 
      placeholder="Search Images"
      onSearch={value => this.handleSub(value)}
      style={{ width: 400 }}
    />
             </div>
        );
    }

}

export default imageSearchBar;