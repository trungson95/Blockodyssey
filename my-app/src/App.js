import './App.css';
import React,{Component} from 'react';
import ListComponent from './component/ListComponent';
import TitleSearchBox from './component/TitleSearchBox';

class App extends Component {
  render(){
    return (
      <div>
        <TitleSearchBox></TitleSearchBox>
        <ListComponent></ListComponent>
      </div>
    );
  }
}

export default App;
