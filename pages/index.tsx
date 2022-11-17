import Head from 'next/head'
import {css} from '@emotion/react'
import {Sidebar} from "../components/sidebar";
import {CardCampeonato} from "../components/card_campeonato";
import {GridCampeonatos} from "../components/gridCampeonatos";

export default function Home() {
  return (
    <>
      <Head>
        <title>Champstats</title>
      </Head>

      <div style={{height:'100%', width:'100%', display:'flex', flexDirection:'row'}}>
        <Sidebar/>

        <GridCampeonatos/>

      </div>

    </>
  )
}
