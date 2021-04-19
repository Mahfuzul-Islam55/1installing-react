
import React, { Component,Fragment } from 'react';
//import logo from './logo.svg';
import './App.css';
import Cards from './components/Cards/Cards';
import Chart from './components/Chart/Chart';
import CountryPicker from './components/CountryPicker/CountryPicker';
import HooksCounter from './components/HooksCounter';
import {fetchData} from './api/getUrl';



class App extends Component {

  constructor(props) {
    super(props);
    this.state={
      data:{}
    }
  }
  
  async componentDidMount(){
     const fetchedData=await fetchData();

     this.setState({data:fetchedData});
     console.log(fetchedData)
  }
  render() {

    return (
     <Fragment>
       <Cards data={this.state.data}></Cards>
      <Chart></Chart>
      <CountryPicker></CountryPicker>
     </Fragment>
    );
  }
}

export default App;
