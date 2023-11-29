import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Line} from 'react-chartjs-2'
import {Chart as ChartJS,LineElement,CategoryScale,LinearScale,PointElement,Legend,Tooltip,Title} from 'chart.js'

ChartJS.register(
  LineElement,CategoryScale,LinearScale,PointElement,Legend,Tooltip,Title
)

const Linechart = ({fetchstate,setFetchstate}) => {
  const [chart, setChart] = useState([]);
  const [apidata,setApidata] = useState() 
  const getdata = async () => {
    const { data } = await axios.get('http://localhost:3000/api/timestampdata')
    const length = data?.variable.length;
    setApidata(data?.variable[length - 1]);
  }
  console.log(apidata)
  useEffect(()=>{
    getdata();
  },[fetchstate])
  useEffect(()=>{

    setChart({
    labels:["1pm","2pm","3pm","4pm","5pm","6pm","7pm","8pm","9pm","10pm"],
    datasets:[
      {

        label:"Variable",
        data: apidata?.variables?.map((variable) => variable),
        backgroundColor:"aqua",
        borderColor:'black',
        pointBorderColor:'aqua',
      }
    ]
  })
  },[apidata])
        const options = {
          plugins:{
            legend:{
              position:"top"
            }
            ,
            title:{
              display:true,
              text:''
            }

          }
        } 
  return (
    <>
<div className="chart">

    {chart.datasets && 
      <Line
      data ={chart}
      options={options}
      ></Line>
}
</div>
    </>
  )
}

export default Linechart