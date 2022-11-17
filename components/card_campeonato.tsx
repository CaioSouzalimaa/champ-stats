import {Card} from "@mui/material";
import {Column} from "./column";

interface cardCampeonatoInterface {
  reward?: string;
  place?: string;
  name?: string;
  capacity?: string;
  status?: string;
}

export const CardCampeonato = ({reward, name, place, capacity, status}: cardCampeonatoInterface) => {
  const styleCampInfo = ({
    fontSize:'0.8rem'
  });

  const cardStyle = {
    display:'flex',
    flexDirection:'column',
    backgroundColor:'#252525',
    width:'23rem',
    height:'15rem',
    padding:'2rem',
    gap:'1rem',
    color: '#fff',
    borderRadius:'3%'
  }
  return (
    <Card sx={cardStyle}>
      <div style={{ fontSize:'1rem', width:'100%', display:'flex', justifyContent:'center', fontWeight:'bold'}}>{name}</div>

      <Column gap={'1rem'}>
        <div style={styleCampInfo}><b>Premiação:</b> {reward}</div>
        <div style={styleCampInfo}><b>Local:</b> {place}</div>
        <div style={styleCampInfo}><b>Lotação:</b> {capacity}</div>
        <div style={styleCampInfo}><b>Situação:</b> {status}</div>
      </Column>
    </Card>
  );
}