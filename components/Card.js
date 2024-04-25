// import React from 'react'

import Image from "next/image";

const Card = ({ thumbnail }) => {
  return <Image className="card" src={thumbnail.url} width={198} height={198} alt={thumbnail.title} />;
};

export default Card;
