import React, { useState } from 'react';
import { useScaffoldContractWrite, useTransactor } from '~~/hooks/scaffold-eth';
import { getParsedEthersError } from '~~/components/scaffold-eth/Contract/utilsContract';
import { toast } from '~~/utils/scaffold-eth';

const TransferTokens: React.FC = () => {
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState('');
  const writeTxn = useTransactor();

  const { writeAsync, isLoading } = useScaffoldContractWrite(
    'YourContract',
    'transfer',
    [recipient, parseInt(amount)],
  );

  const handleTransfer = async () => {
    if (writeAsync && writeTxn) {
      try {
        await writeTxn(writeAsync());
        toast.success('Transfer successful');
      } catch (e: any) {
        const message = getParsedEthersError(e);
        toast.error(message);
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center max-w-xl mx-auto">
      <h1 className="text-4xl my-5">Transfer Tokens</h1>
      <div className="space-y-3 mt-4">
        <input
          type="text"
          className="input input-bordered"
          placeholder="Recipient address"
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
        />
        <input
          type="number"
          className="input input-bordered"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button
          className="btn btn-primary"
          disabled={isLoading}
          onClick={handleTransfer}
        >
          Transfer Tokens
        </button>
      </div>
    </div>
  );
};

export default TransferTokens;
