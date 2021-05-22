import axios from 'axios';

const apiUrl='https://covid19.mathdro.id/api';


export const fetchData=async(country)=>{
    var changeableUrl=apiUrl;
    if(country){
        changeableUrl=`${apiUrl}/countries/${country}`;
    }
    try { 
        const{data:{confirmed,recovered,deaths,lastUpdate}}=await axios.get(changeableUrl);
        const modifiedData={confirmed,recovered,deaths,lastUpdate};
        return modifiedData;
        
    } catch (error) {
        
    }
}

export const fetchDailyData=async()=>{
    try{
        let arr={};
        arr=await axios.get(`${apiUrl}/daily`);
        let dailyData=arr.data;
        const modifiedDailyData=dailyData.map((dailyData)=>({
                confirmed:dailyData.confirmed.total,
                deaths:dailyData.deaths.total,
                date:dailyData.reportDate,
            })); 
        
        return modifiedDailyData;

    } catch(error){

    }
}

export const fetchCountryData=async()=>{
    try {
        const {data:{countries}}=await axios.get(`${apiUrl}/countries`)
        const modifiedCountryData=countries.map((country)=>country.name);
       
        return modifiedCountryData;
    } catch (error) {
        
    }
}

