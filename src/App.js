import { Alchemy, Network } from 'alchemy-sdk';
import { useEffect, useState } from 'react';
import { useDebounce } from "use-debounce";

import Home from './pages/Home';
import './App.css';
import useAsyncEffect from "use-async-effect";

// Refer to the README doc for more information about using API
// keys in client-side code. You should never do this in production
// level code.
const settings = {
  apiKey: process.env.REACT_APP_ALCHEMY_API_KEY,
  network: Network.ETH_MAINNET,
};


// In this week's lessons we used ethers.js. Here we are using the
// Alchemy SDK is an umbrella library with several different packages.
//
// You can read more about the packages here:
//   https://docs.alchemy.com/reference/alchemy-sdk-api-surface-overview#api-surface
const alchemy = new Alchemy(settings);

const App = () => {
  const [currentBlockNumber, setCurrentBlockNumber] = useState();
  const [blockNumber, setBlockNumber] = useState();
  const [debouncedBlockNumber] = useDebounce(blockNumber, 1000); // Debounce block number to prevent spamming API
  const [block, setBlock] = useState();

  const getBlock = async (_blockNumber) => {
    setBlockNumber(_blockNumber);
  }

  useAsyncEffect(async () => {
    setBlock(await alchemy.core.getBlockWithTransactions(debouncedBlockNumber));
  }, [debouncedBlockNumber]);

  // Set current block number on page load
  useAsyncEffect(async () => {
    setCurrentBlockNumber(await alchemy.core.getBlockNumber());
  }, []);

  useEffect(() => {
    // Update block number when new block is mined
    alchemy.ws.on("block", (blockNumber) => {
      setCurrentBlockNumber(blockNumber);
    });
  }, []);


  return <div className="App">
    <Home block={ block }
          getBlock={ getBlock }
          blockNumber={ blockNumber }
          setBlockNumber={ setBlockNumber }
          currentBlockNumber={ currentBlockNumber }
    />
  </div>;
}

export default App;
