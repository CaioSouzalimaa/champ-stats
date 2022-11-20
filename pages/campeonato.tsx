import Head from "next/head";
import {Sidebar} from "../components/sidebar";
import React from "react";
import {BigCardInfo} from "../components/bigCardInfo";
import {CardInfo} from "../components/card_info";

export default function Home2() {
  return (
    <>
      <Head>
        <title>Champstats</title>
      </Head>

      <div style={{height:'100vh', width:'100%', display:'flex', flexDirection:'row'}}>
        <Sidebar/>

        <div style={{backgroundColor:'#D9D9D9', height:'100vh', width:'100%', display:'flex',flexWrap:'wrap', overflow:'auto', justifyContent:'space-between',flexDirection:'row', gap:'1rem', padding:'0 6rem'}}>
         <div style={{ width:'100%'}}>
          <h1>Nome do Campeonato</h1>
          <BigCardInfo
          reward={'100 reais'}
          place={'Tupã'}
          capacity={'100 pessoas'}
          status={'Acontecendo'}
          winner={'Nome do vencedor'}
          mvp={'Nome do MVP'}
          dates={'Data de inicio e fim'}
          teams={'Times participantes'}
          />
         </div>

            <CardInfo championship={false} width={'15rem'} height={'12rem'} duration={'20 minutos'} winnerTeam={'Equipe 1'} score={'10 x 2'} match={'Partida X'}/>
            <CardInfo championship={false} width={'15rem'} height={'12rem'} duration={'20 minutos'} winnerTeam={'Equipe 1'} score={'10 x 2'} match={'Partida X'}/>
            <CardInfo championship={false} width={'15rem'} height={'12rem'} duration={'20 minutos'} winnerTeam={'Equipe 1'} score={'10 x 2'} match={'Partida X'}/>
            <CardInfo championship={false} width={'15rem'} height={'12rem'} duration={'20 minutos'} winnerTeam={'Equipe 1'} score={'10 x 2'} match={'Partida X'}/>
            <CardInfo championship={false} width={'15rem'} height={'12rem'} duration={'20 minutos'} winnerTeam={'Equipe 1'} score={'10 x 2'} match={'Partida X'}/>
            <CardInfo championship={false} width={'15rem'} height={'12rem'} duration={'20 minutos'} winnerTeam={'Equipe 1'} score={'10 x 2'} match={'Partida X'}/>
            <CardInfo championship={false} width={'15rem'} height={'12rem'} duration={'20 minutos'} winnerTeam={'Equipe 1'} score={'10 x 2'} match={'Partida X'}/>
            <CardInfo championship={false} width={'15rem'} height={'12rem'} duration={'20 minutos'} winnerTeam={'Equipe 1'} score={'10 x 2'} match={'Partida X'}/>
            <CardInfo championship={false} width={'15rem'} height={'12rem'} duration={'20 minutos'} winnerTeam={'Equipe 1'} score={'10 x 2'} match={'Partida X'}/>
            <CardInfo championship={false} width={'15rem'} height={'12rem'} duration={'20 minutos'} winnerTeam={'Equipe 1'} score={'10 x 2'} match={'Partida X'}/>
        </div>

      </div>
  </>
);
}
