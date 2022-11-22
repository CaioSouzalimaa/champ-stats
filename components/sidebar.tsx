import {Card} from "@mui/material";
import {Column} from "./column";
import Link from "next/link";
import React, {useEffect} from "react";
import GridHome from "./gridHome";


export const Sidebar = () => {
  const [jogos, setJogos] = React.useState([]);
  const [jogoId, setJogoId] = React.useState('');

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
          <div onClick={() => setJogoId(_id)} key={index} style={StyleGamesName}>{nome}</div>
        ))}
      </Column>
    </Card>

      <GridHome id={jogoId}/>
    </>

  );
}