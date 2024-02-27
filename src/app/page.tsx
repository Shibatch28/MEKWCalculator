"use client";

import React, { useState } from 'react';
import CalcButtons from './components/CalcButtons';

const Calculator = () => {
  // 電卓の状態を管理するためのステート
  const [input, setInput] = useState('');

  // ボタンがクリックされたときの処理
  const handleButtonClick = (value) => {
    console.log(value); // ここで計算処理などを追加
    setInput(prev => prev + value);
  };

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px' }}>
      <h1>MEKW Calculator</h1>
      <div style={{ gridColumn: 'span 4' }}>{input}</div>
      {/* 数字と演算子のボタンを表示 */}
      {['7', '8', '9', '+', '4', '5', '6', '-', '1', '2', '3', '*', '0', '.', '=', '/'].map((value) => (
        <CalcButtons key={value} value={value} onClick={handleButtonClick} />
      ))}
      {/* 現在の入力を表示 */}
    </div>
  );
};

export default Calculator;