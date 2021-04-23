
import React, { Component,Fragment } from 'react';
//import logo from './logo.svg';
import './App.css';
import Cards from './components/Cards/Cards';
import Chart from './components/Chart/Chart';
import CountryPicker from './components/CountryPicker/CountryPicker';
import {fetchDailyData, fetchData} from './api/getUrl';



class App extends Component {

  constructor(props) {
    super(props);
    this.state={
      data:{},
      chartData:[]
    }
  }
  
  async componentDidMount(){
     const fetchedData=await fetchData();
     const fetchDataDaily=await fetchDailyData();
     this.setState({data:fetchedData});
     this.setState({chartData:fetchDataDaily})
    
  }
  render() {

    return (
     <Fragment>
       <Cards data={this.state.data}></Cards>
       <CountryPicker></CountryPicker>
      <Chart chartData={this.state.chartData}></Chart>
     </Fragment>
    );
  }
}

export default App;
