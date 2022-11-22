import Head from 'next/head'
import {Sidebar} from "../components/sidebar";
import React, {useEffect} from "react";

interface homeProps {
  id: string;
}

export default function Home({id}: homeProps) {
  const [campeonatos, setCampeonatos] = React.useState([]);

  useEffect(() => {
    fetch(
      `https://champstats.purpleglacier-6a593a11.eastus.azurecontainerapps.io/jogos/${id}`, {method: 'GET', mode: 'cors'}
    )
      .then((response) => response.json())
      .then((data) => setCampeonatos(data));
  });

  () => console.log(campeonatos);
  return (
    <>
      <Head>
        <title>Champstats</title>
      </Head>

      <div style={{height:'100vh', width:'100%', display:'flex', flexDirection:'row'}}>
        <Sidebar/>

      </div>

    </>
  )
}