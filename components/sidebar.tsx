import {Card} from "@mui/material";
import {Column} from "./column";
import Link from "next/link";
import React, {useEffect} from "react";
import {CardInfo} from "./card_info";


export const Sidebar = () => {
  const [jogos, setJogos] = React.useState([]);

  const [campeonatoslista, setCampeonatoslista] = React.useState([]);
  

  useEffect(() => {
    fetch(
      'https://champstats.purpleglacier-6a593a11.eastus.azurecontainerapps.io/jogos/', {method: 'GET', mode: 'cors'}
    )
      .then((response) => response.json())
      .then((data) => setJogos(data));
  }, []);

  const StyleGamesName = ({
    color: '#fff',
    fontSize: '1rem',
    cursor: 'pointer',
  });

  return (
    <>
      <Card sx={{display:'flex', flexDirection:'column', backgroundColor:'#252525', width:'20rem', alignItems:'center'}}>
          <Link href={'/'}><p style={{color:'#fff', fontSize:'2rem'}}>Jogos</p></Link>
        <Column padding={'1rem'}>
          {jogos.map(({_id, nome}, index) => (
            <div onClick={
              () => {fetch(
                `https://champstats.purpleglacier-6a593a11.eastus.azurecontainerapps.io/jogos/${_id? _id : '1'}/campeonatos/`, {method: 'GET', mode: 'cors'}
              )
                .then((response) => response.json())
                .then((data) => setCampeonatoslista(data))

              ;}} key={index} style={StyleGamesName}>{nome}</div>
          ))}
        </Column>
      </Card>

      <div style={{height:'100vh', width:'100%', display:'flex', flexDirection:'row'}}>
        <div style={{backgroundColor:'#D9D9D9', height:'100vh', width:'100%', display:'flex',flexWrap:'wrap', overflow:'auto',flexDirection:'row', gap:'10rem', padding:'6rem'}}>
          {/*usar map para criar os cards*/}
          {campeonatoslista.map(({nome, premiacao, local, lotacao, situacao},index) => (
            <CardInfo championship={true} key={index} link={'/campeonato'} name={nome} place={local} capacity={lotacao} reward={premiacao} status={situacao}/>
          ))}

        </div>
      </div>
    </>

  );
}