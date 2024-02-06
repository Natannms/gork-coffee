interface ButtonProps {
    title: string
}
const Button = ({title}:ButtonProps) => {  

    return (
        <button className='bg-[#ec5938] hover:bg-[#f27d62] cursor-pointer p-3 text-white rounded text-1xl w-32 transition'>
             {title}
        </button>
    );  

}
export default Button; 
