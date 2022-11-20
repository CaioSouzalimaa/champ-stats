import Head from 'next/head'
import {Sidebar} from "../components/sidebar";
import {CardInfo} from "../components/card_info";
import React from "react";

export default function Home() {
  return (
    <>
      <Head>
        <title>Champstats</title>
      </Head>

      <div style={{height:'100vh', width:'100%', display:'flex', flexDirection:'row'}}>
        <Sidebar/>

        <div style={{backgroundColor:'#D9D9D9', height:'100vh', width:'100%', display:'flex',flexWrap:'wrap', overflow:'auto',flexDirection:'row', gap:'10rem', padding:'6rem'}}>
          {/*usar map para criar os cards*/}
          <CardInfo championship={true} link={'/campeonato'} name={'Major'} place={'Tupã'} capacity={'100 pessoas'} reward={'100 reais'} status={'Acontecendo'}/>
          <CardInfo championship={true} link={'/campeonato'} name={'Major'} place={'Tupã'} capacity={'100 pessoas'} reward={'100 reais'} status={'Acontecendo'}/>
          <CardInfo championship={true} link={'/campeonato'} name={'Major'} place={'Tupã'} capacity={'100 pessoas'} reward={'100 reais'} status={'Acontecendo'}/>
          <CardInfo championship={true} link={'/campeonato'} name={'Major'} place={'Tupã'} capacity={'100 pessoas'} reward={'100 reais'} status={'Acontecendo'}/>
          <CardInfo championship={true} link={'/campeonato'} name={'Major'} place={'Tupã'} capacity={'100 pessoas'} reward={'100 reais'} status={'Acontecendo'}/>
          <CardInfo championship={true} link={'/campeonato'} name={'Major'} place={'Tupã'} capacity={'100 pessoas'} reward={'100 reais'} status={'Acontecendo'}/>
          <CardInfo championship={true} link={'/campeonato'} name={'Major'} place={'Tupã'} capacity={'100 pessoas'} reward={'100 reais'} status={'Acontecendo'}/>
          <CardInfo championship={true} link={'/campeonato'} name={'Major'} place={'Tupã'} capacity={'100 pessoas'} reward={'100 reais'} status={'Acontecendo'}/>
          <CardInfo championship={true} link={'/campeonato'} name={'Major'} place={'Tupã'} capacity={'100 pessoas'} reward={'100 reais'} status={'Acontecendo'}/>
          <CardInfo championship={true} link={'/campeonato'} name={'Major'} place={'Tupã'} capacity={'100 pessoas'} reward={'100 reais'} status={'Acontecendo'}/>
        </div>

      </div>

    </>
  )
}
