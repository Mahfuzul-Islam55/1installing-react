
import React, { Component,Fragment } from 'react';
//import logo from './logo.svg';
import './App.css';
import Cards from './components/Cards/Cards';
import Chart from './components/Chart/Chart';
import CountryPicker from './components/CountryPicker/CountryPicker';
import HooksCounter from './components/HooksCounter';
import {fetchData} from './api/getUrl';



class App extends Component {

  async componentDidMount(){
     const data=await fetchData();
     console.log(data)
  }
  render() {
    return (
     <Fragment>
       <Cards></Cards>
      <Chart></Chart>
      <CountryPicker></CountryPicker>
     </Fragment>
    );
  }
}

export default App;
