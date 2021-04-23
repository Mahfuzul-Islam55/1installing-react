import { Container } from '@material-ui/core';
import React,{useState,useEffect} from 'react';
import { Fragment } from 'react';
import { Line } from 'react-chartjs-2';
import { fetchDailyData } from '../../api/getUrl';


const Chart = (props) => {
    const [dailyData,setDailyData]=useState([]);
    const dataDaily=props.chartData;
    
    useEffect(()=>{
        const fetchAPI=async()=>{
            setDailyData(await fetchDailyData());
        }
        
        fetchAPI();
        
      
    },[]);

    const lineChart=(
        dataDaily.length!=0
        ?(
            <Line
                data={{
                    labels:dataDaily.map(({date})=>date),
                    datasets:[
                        {
                            data:dataDaily.map(({confirmed})=>confirmed),
                            label:'Infected',
                            borderColor:'#3333ff',
                            fill:true,
                        },
                        {
                            data:dataDaily.map(({deaths})=>deaths),
                            label:'Deaths',
                            borderColor:'red',
                            backgroundColor:'rgba(250,0,0,.5)',
                            fill:true,
                        }
                    ]
                }}
            
            />):null
    )

   


    return (
        <Fragment className="mt-5">
            <Container className="marginTop-5 !important" style={{width:"70%"}}>
           {lineChart}
           </Container>
           </Fragment>
       
    );
};

export default Chart;