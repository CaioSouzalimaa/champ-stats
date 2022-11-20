import {Card} from "@mui/material";
import {Column} from "./column";

interface cardChampionshipInterface {
  reward?: string;
  place?: string;
  capacity?: string;
  status?: string;
  winner?: string;
  mvp?: string;
  dates?: string;
  teams?: string;
}

export const BigCardInfo = ({reward, place, capacity, status, mvp, winner, teams, dates}: cardChampionshipInterface) => {
  const styleCampInfo = ({
    fontSize:'0.8rem'
  });

  const cardStyle = {
    display:'flex',
    flexDirection:'column',
    backgroundColor:'#252525',
    justifyContent:'center',
    width:'100%',
    height:'13rem',
    padding:'2rem',
    color: '#fff',
    borderRadius:'1%'
  }
  return (
    <Card sx={cardStyle}>
      <div style={{ display:'flex', justifyContent:'space-between'}}>

      <Column gap={'1rem'}>
        <div style={styleCampInfo}><b>Premiação:</b> {reward}</div>
        <div style={styleCampInfo}><b>Local:</b> {place}</div>
        <div style={styleCampInfo}><b>Lotação:</b> {capacity}</div>
        <div style={styleCampInfo}><b>Situação:</b> {status}</div>
      </Column>

      <Column>
        <div style={styleCampInfo}><b>Vencedor:</b> {winner}</div>
        <div style={styleCampInfo}><b>MVP:</b> {mvp}</div>
        <div style={styleCampInfo}><b>Datas:</b> {dates}</div>
      </Column>

      <Column>
        <div style={styleCampInfo}><b>Equipes:</b> {teams}</div>
      </Column>
      </div>
    </Card>
  );
}