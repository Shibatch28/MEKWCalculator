import React from 'react';

const CalcButtons = ({ value, onClick }) => {
  return (
    <button onClick={() => onClick(value)} style={{ width: 75, height: 75, fontSize: '20px' }}>
      {value}
    </button>
  );
};

export default CalcButtons;
