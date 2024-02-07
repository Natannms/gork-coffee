import React from "react";
import Button from "../Button";
import banner from '../../assets/imgs/banners/banner2.jpg';

const AboveTheFold: React.FC = () => {
  const sectionStyle: React.CSSProperties = {
    backgroundImage: `url(${banner})`,
    backgroundSize: 'cover',
    backgroundPosition:'center'
  };

  return (
    <section className="text-black md:px-40 px-8 py-60 flex flex-col gap-20" style={sectionStyle}>
      <h1 className="text-6xl font-bold text-white">
        Get your dream coffee now
      </h1>
      <p className="text-gray-100 text-2xl flex">
        Having a especial coffe is everyone's dream. <br />
        Have you owned your dream coffe?
      </p>
      <Button title="Products" onClick={()=>{alert('PRODUTOS')}}/>
    </section>
  );
};

export default AboveTheFold;
