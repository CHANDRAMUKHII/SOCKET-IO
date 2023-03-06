import React from "react";

import QRCode from "react-qr-code";

import { useNavigate } from "react-router-dom";

const Home = ({id,submit}) => {
  const navigate = useNavigate();
  
  if (submit) {
    navigate("/submit");
  }
  return (
    <div>
      <QRCode value={window.location.href + id} />
    </div>
  );
};

export default Home;
