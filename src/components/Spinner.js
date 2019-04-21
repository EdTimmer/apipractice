import React from 'react';
import { PulseLoader, DotLoader } from 'react-spinners';

const Spinner = () => {
  return (
  <div className="spinner">
    <DotLoader color={'#1eaedb'} size={160} margin={'6px'} />
  </div>
  )
}

export default Spinner;