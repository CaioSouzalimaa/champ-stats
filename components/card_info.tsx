import {Card} from "@mui/material";
import {Column} from "./column";
import Link from 'next/link';

interface cardInfoInterface {
  //campeonato
  reward?: string;
  place?: string;
  name?: string;
  capacity?: string;
  status?: string;

  //partida
  match?: string;
  duration?: string;
  winnerTeam?: string;
  score?: string;

  //verifica se para campeonato ou partida
  championship?: boolean;

  width?: string;
  height?: string;
  link?: string;
}

export const CardInfo = ({reward, name, place, capacity, status, score, winnerTeam, duration, championship, height, width, match, link}: cardInfoInterface) => {
  const styleCampInfo = ({
    fontSize:'0.8rem'
  });

  const cardStyle = {
    display:'flex',
    flexDirection:'column',
    backgroundColor:'#252525',
    width:width ? width : '23rem',
    height: height? height : '15rem',
    padding:'2rem',
    gap:'1rem',
    color: '#fff',
    borderRadius:'3%'
  }
  return (
    <Link href={championship? link? link : '/' : ''}>
    <Card sx={cardStyle} >
      <div style={{ fontSize:'1rem', width:'100%', display:'flex', justifyContent:'center', fontWeight:'bold'}}>{championship? name : match}</div>

      {championship ?
        <Column gap={'1rem'}>
        <div style={styleCampInfo}><b>Premiação:</b> {reward}</div>
        <div style={styleCampInfo}><b>Local:</b> {place}</div>
        <div style={styleCampInfo}><b>Lotação:</b> {capacity}</div>
        <div style={styleCampInfo}><b>Situação:</b> {status}</div>
      </Column>
      :
        <Column gap={'1rem'}>
          <div style={styleCampInfo}><b>Duração:</b> {duration}</div>
          <div style={styleCampInfo}><b>Equipe vencedora:</b> {winnerTeam}</div>
          <div style={styleCampInfo}><b>Placar:</b> {score}</div>
        </Column>
      }
    </Card>
    </Link>
  );
}