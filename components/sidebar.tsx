import {Card} from "@mui/material";
import {Column} from "./column";
import Link from "next/link";


export const Sidebar = () => {
  const StyleGamesName = ({
    color: '#fff',
    fontSize: '1rem',
  });
  return (
    <Card sx={{display:'flex', flexDirection:'column', backgroundColor:'#252525', width:'20rem', alignItems:'center'}}>
        <Link href={'/'}><p style={{color:'#fff', fontSize:'2rem'}}>Jogos</p></Link>
      <Column padding={'1rem'}>
        <Link href={'/campeonato'}><div style={StyleGamesName}>League of Legends</div></Link>
        <Link href={'/campeonato'}><div style={StyleGamesName}>Cs:Go</div></Link>
        <Link href={'/campeonato'}><div style={StyleGamesName}>Dota</div></Link>
        <Link href={'/campeonato'}><div style={StyleGamesName}>Dota 2</div></Link>
        <Link href={'/campeonato'}><div style={StyleGamesName}>Valorant</div></Link>
      </Column>
    </Card>
  );
}