import React ,{Component} from 'react';
import './app.less'
import {yibu} from './practice/yibu'
class App extends Component{
 componentDidMount(){
  yibu();
 }
  render(){
    return (
    <div className="App">
      <div className="div1"></div>
      <div className="div2">
         <div className='div4'>

         </div>
      </div>
      <div className="div3"></div>
    </div>)
  }
}
export default App;