interface ButtonProps {
    title: string
    onClick: () => void
    styles?: string
}
const Button = ({ title, onClick, styles }: ButtonProps) => {

    return (
        <button onClick={onClick} className={styles ?
            styles
            : 'bg-[#ec5938] hover:bg-[#f27d62] cursor-pointer p-3 text-white rounded text-1xl w-32 transition'}>
            {title}
        </button>
    );

}
export default Button; 
