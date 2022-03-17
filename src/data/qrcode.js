import React, { Component } from 'react';
import { useEffect, useState } from 'react';
import QRCode from 'qrcode';


const QRcode = ({ text }) => {
  const [code, setCode] = useState('');

  useEffect(() => {
    QRCode.toDataURL(text).then(setCode);
  }, []);
  return (
    <div>
      <img style={{height: 120}} src={code} />
    </div>
  );
};

export default QRcode;