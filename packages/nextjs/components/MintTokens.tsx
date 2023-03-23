import type { NextPage } from "next";
import { useState } from "react";
import {
  useScaffoldContractRead,
  useScaffoldContractWrite,
  useTransactor,
} from "~~/hooks/scaffold-eth";

const MintTokens: NextPage = () => {
  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState("");

  const writeTxn = useTransactor();

  const { writeAsync } = useScaffoldContractWrite("YourContract", "mint", [
    recipient,
    amount,
  ]);

  const handleMint = async () => {
    if (recipient && amount && writeAsync && writeTxn) {
      try {
        await writeTxn(writeAsync());
      } catch (e: any) {
        console.error("Error minting tokens:", e);
      }
    }
  };

  return (
  
      <div className="flex flex-col items-center justify-center max-w-xl mx-auto">
      <h1 className="text-4xl my-5">Mint Tokens</h1>
      <div className="space-y-3 mt-4"></div>
      
      <div>
        <input
          type="text"
          className="input input-bordered"
          placeholder="Recipient Address"
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          className="input input-bordered"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <button onClick={handleMint}
      className="btn btn-primary"
      >Mint Tokens
      
      </button>
    </div>
  );
};

export default MintTokens;
