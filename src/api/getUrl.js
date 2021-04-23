import axios from 'axios';

const apiUrl='https://covid19.mathdro.id/api';
const apiUrlDaily='https://covid19.mathdro.id/api/daily';

export const fetchData=async()=>{
    try { 
        const{data:{confirmed,recovered,deaths,lastUpdate}}=await axios.get(apiUrl);
        const modifiedData={confirmed,recovered,deaths,lastUpdate};
        return modifiedData;
        
    } catch (error) {
        
    }
}

export const fetchDailyData=async()=>{
    try{
        let arr={};
        arr=await axios.get(apiUrlDaily);
        let dailyData=arr.data;
        const modifiedDailyData=dailyData.map((dailyData)=>({
                confirmed:dailyData.confirmed.total,
                deaths:dailyData.deaths.total,
                date:dailyData.reportDate,
            })); 
        console.log(modifiedDailyData)
        return modifiedDailyData;

    } catch(error){

    }
}