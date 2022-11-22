import Head from 'next/head'
import {Sidebar} from "../components/sidebar";
import React from "react";

export default function Home() {

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