
import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

const Spinner = ({ loading }) => {
  return (
    <ClipLoader color='#3B82F6' loading={loading} size={250} />
  );
};

export default Spinner;