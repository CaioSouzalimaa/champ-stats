import {Card} from "@mui/material";
import {Column} from "./column";

export const Sidebar = () => {
  const StyleGamesName = ({
    color: '#fff',
    fontSize: '1rem',
  });
  return (
    <Card sx={{display:'flex', flexDirection:'column', backgroundColor:'#252525', width:'20rem', alignItems:'center'}}>
        <p style={{color:'#fff', fontSize:'2rem'}}>Jogos</p>

      <Column padding={'1rem'}>
        <p style={StyleGamesName}>League of Legends</p>
        <p style={StyleGamesName}>Valorant</p>
        <p style={StyleGamesName}>CS:GO</p>
      </Column>
    </Card>
  );
}