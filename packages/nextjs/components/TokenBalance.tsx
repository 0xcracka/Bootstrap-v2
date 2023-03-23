import React, { useState } from 'react';
import { useScaffoldContractRead } from '~~/hooks/scaffold-eth';

const TokenBalance: React.FC = () => {
  const [address, setAddress] = useState('');

  const { data: balance, isLoading } = useScaffoldContractRead('YourContract', 'balanceOf', address ? { args: [address] } : undefined);

  return (
    <div className="flex flex-col items-center">
      <h2>Check Token Balance</h2>
      <input
        type="text"
        placeholder="Enter address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        className="border-2 border-gray-300 p-2 rounded"
      />
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <p>
          Balance: {balance ? balance.toString() : 'Enter a valid address'}
        </p>
      )}
    </div>
  );
};

export default TokenBalance;
