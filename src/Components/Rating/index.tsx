import React from "react";
import { GoStarFill } from "react-icons/go";
import { IRating } from "../../types/Rating";

const Rating = ({ rate }: IRating) => {
  // Arredonde o valor da rate
  const roundedRate = Math.round(rate);

  // Crie um array com a quantidade de estrelas a serem renderizadas
  const stars = Array.from({ length: roundedRate }, (_, index) => (
    <GoStarFill color="#EB9F00"  key={index} />
  ));

  return <div className="flex gap-2">{stars}</div>;
};

export default Rating;
