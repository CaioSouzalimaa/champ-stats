import {CardInfo} from "../components/card_info";
import React from "react";

interface homeProps {
  id: string;
}

export default function GridHome({id}: homeProps) {
  const [campeonatos, setCampeonatos] = React.useState([]);


    fetch(
      `https://champstats.purpleglacier-6a593a11.eastus.azurecontainerapps.io/jogos/${id? id : '1'}/campeonatos/`, {method: 'GET', mode: 'cors'}
    )
      .then((response) => response.json())
      .then((data) => setCampeonatos(data));


  () => console.log(campeonatos);
  return (
    <>
      <div style={{height:'100vh', width:'100%', display:'flex', flexDirection:'row'}}>
        <div style={{backgroundColor:'#D9D9D9', height:'100vh', width:'100%', display:'flex',flexWrap:'wrap', overflow:'auto',flexDirection:'row', gap:'10rem', padding:'6rem'}}>
          {/*usar map para criar os cards*/}
          {campeonatos.map(({nome},index) => (
            <CardInfo championship={true} key={index} link={'/campeonato'} name={nome} place={'Tupã'} capacity={'100 pessoas'} reward={'100 reais'} status={'Acontecendo'}/>
          ))}

        </div>

      </div>

    </>
  )
}