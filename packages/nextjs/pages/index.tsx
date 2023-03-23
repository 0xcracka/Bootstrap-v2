import type { NextPage } from "next";
import Head from "next/head";
import { BugAntIcon, SparklesIcon } from "@heroicons/react/24/outline";
import React from "react";
import MintTokens from "../components/MintTokens";
import TransferTokens from "../components/TransferTokens";
import Tokenbalance from "../components/Tokenbalance";




const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>CRACKA's 🐂💩</title>
        <meta name="description" content="Created with 🏗 scaffold-eth" />
      </Head>
    
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="px-5">
          <h1 className="text-center mb-8">
            <span className="block text-2xl mb-2">Welcome to</span>
            <span className="block text-4xl font-bold">Token Dashboard ✨ by Cracka</span>
          </h1>
      
        </div>
        <Tokenbalance></Tokenbalance>

        <div className="flex-grow bg-base-300 w-full mt-16 px-8 py-12">
          <div className="flex justify-center items-center gap-12 flex-col sm:flex-row">
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
              <BugAntIcon className="h-8 w-8 fill-secondary" />
             <TransferTokens></TransferTokens>
            </div>
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
              <SparklesIcon className="h-8 w-8 fill-secondary" />
             <MintTokens></MintTokens>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
