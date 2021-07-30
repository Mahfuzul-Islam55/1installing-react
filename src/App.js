
import React, { Component,Fragment } from 'react';
//import logo from './logo.svg';
import './App.css';
import Cards from './components/Cards/Cards';
import Chart from './components/Chart/Chart';
import CountryPicker from './components/CountryPicker/CountryPicker';
import {fetchCountryData, fetchDailyData, fetchData} from './api/getUrl';



class App extends Component {

  constructor(props) {
    super(props);
    this.state={
      data:{},
      chartData:[],
      countryData:[],
      country:""
    }
  }
  
  async componentDidMount(){
     const fetchedData=await fetchData();
     const fetchDataDaily=await fetchDailyData();
     const fetchDataCountry=await fetchCountryData();
     this.setState({data:fetchedData});
     this.setState({chartData:fetchDataDaily})
     this.setState({countryData:fetchDataCountry})
  }
  handleChange=async(country)=>{
     const fetchedData=await fetchData(country);
     this.setState({data:fetchedData})
     this.setState({country:country})
  }
  
  render() {
    return (
     <Fragment>
       <Cards data={this.state.data}></Cards>
       <CountryPicker countryData={this.state.countryData} handleChange={this.handleChange}></CountryPicker>
      <Chart chartData={this.state.chartData} country={this.state.country} data={this.state.data}></Chart>
     </Fragment>
    );
  }
}

export default App;
