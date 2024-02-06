const Navigation = () => {  

    return (
        <nav className=" w-full flex items-center justify-center">
          <ul className="flex gap-20  w-full items-center justify-center">
            <li className="hover:text-orange-500 text-black text-[20px] font-normal cursor-pointer">Home</li>
            <li className="hover:text-orange-500 text-black text-[20px] font-normal cursor-pointer">Produtos</li>
            <li className="hover:text-orange-500 text-black text-[20px] font-normal cursor-pointer">Contato</li>
          </ul>
       </nav>
    );  

}
export default Navigation; 
