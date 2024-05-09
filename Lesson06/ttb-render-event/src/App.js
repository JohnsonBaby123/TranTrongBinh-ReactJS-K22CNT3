import React, { Component } from 'react';
import TtbProductList from './components/TtbProductList';
import TtbProductAdd from './components/TtbProductAdd';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      products : [
        { title: 'Tran Trong Binh', id: 2210900004 },
        { title: 'Cabbage', id: 1,status:1 },
        { title: 'Garlic', id: 2,status:0 },
        { title: 'Apple', id: 3,status:1 },
        { title: 'LucHa', id: 4,status:0 },
      ]
    }
  }
  TtbHandleSubmit = (param)=>{
    console.log("App",param);
    //them vao mang du lieu product
    let {products} = this.state;
    products.push(param);
    this.setState({
      products:products
      
    })
  }
  render() {
    return (
      <div className='container  border mt-5'>
        <h1>Tran Trong Binh - Render Data - Event Form</h1>
        <hr/>
        <TtbProductList renderProducts={this.state.products}/>
        <hr/>
        <TtbProductAdd onSummit = {this.TtbHandleSubmit}
 />
      </div>
    );
  }
}
export default App;
