import { CircularProgress, TextField } from '@mui/material';
import { ChangeEvent, useState } from "react";
import { cartStore } from '../../Context/Index'
import Button from '../Button';
import { z, ZodError } from "zod";
import { toast } from 'react-toastify';
type FormData = z.infer<typeof Schema>;

const Schema = z.object({
    name: z.string().min(3, 'Nome muito curto para um nome proprio !'),
    email: z.string().email('Emai inválido'),
    address: z.string().min(5, 'Valor para endereço muito curto.'),
    city: z.string().min(1, 'Valor para cidade muito curto.'),
    state: z.string().min(1, 'Valor para estado muito curto.'),
    zip: z.string().min(5, 'Valor para código postal (CEP) muito curto.'),
    country: z.string().min(4, 'Valor para País muito curto.'),
    card: z.string().min(16, 'Cartão inválido, verifique novamente.'),
    date: z.string(),
    code: z.string().min(3, 'Código inválido, verifique novamente.'),
});
const CheckoutForm = () => {
    const cartContext = cartStore();
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [address, setAddress] = useState<string>('');
    const [city, setCity] = useState<string>('');
    const [state, setState] = useState<string>('');
    const [zip, setZip] = useState<string>('');
    const [country, setCountry] = useState<string>('');
    const [card, setCard] = useState<string>('');
    const [date, setDate] = useState<string>('');
    const [code, setCode] = useState<string>('');
    const [isLoading, setIsloading] = useState<boolean>(false)
    const handleChangeName = (event: ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value)
    }
    const handleChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value)
    }
    const handleChangeAddress = (event: ChangeEvent<HTMLInputElement>) => {
        setAddress(event.target.value)
    }
    const handleChangeCity = (event: ChangeEvent<HTMLInputElement>) => {
        setCity(event.target.value)
    }
    const handleChangeState = (event: ChangeEvent<HTMLInputElement>) => {
        setState(event.target.value)
    }
    const handleChangeZip = (event: ChangeEvent<HTMLInputElement>) => {
        setZip(event.target.value)
    }
    const handleChangeCountry = (event: ChangeEvent<HTMLInputElement>) => {
        setCountry(event.target.value)
    }
    const handleChangeCard = (event: ChangeEvent<HTMLInputElement>) => {
        setCard(event.target.value)
    }
    const handleChangeDate = (event: ChangeEvent<HTMLInputElement>) => {
        setDate(event.target.value)
    }
    const handleChangeCode = (event: ChangeEvent<HTMLInputElement>) => {
        setCode(event.target.value)
    }

    // Função de checkout
    const checkout = () => {
        try {
            setIsloading(true)
            // Tentar validar os dados com o esquema
            const formData: FormData = { name, email, address, city, state, zip, country, card, date, code };
            Schema.parse(formData);
            setTimeout(() => {
                setIsloading(false)
            }, 3000);
        } catch (error) {
            // Lidar com o erro de validação
            if (error instanceof ZodError) {
                error.errors.forEach(errorMessage => {
                    toast(errorMessage.message, { autoClose: 10000 });
                });
                setTimeout(() => {
                    setIsloading(false)
                }, 1000);
            }
        }
    }


    return (
        <div className='flex'>
            <div className='flex flex-col gap-4 p-10'>
                <h2 className='text-black font-medium text-1xl'>
                    SHIPPING & BILLING INFORMATION
                </h2>
                <TextField value={name} onChange={handleChangeName} className='w-96' id="outlined-name" label="Name" variant="outlined" />
                <TextField value={email} onChange={handleChangeEmail} className='w-96' id="outlined-email" label="Email" variant="outlined" />
                <TextField value={address} onChange={handleChangeAddress} className='w-96' id="outlined-address" label="Address" variant="outlined" />
                <TextField value={city} onChange={handleChangeCity} className='w-96' id="outlined-city" label="City" variant="outlined" />
                <TextField value={state} onChange={handleChangeState} className='w-96' id="outlined-state" label="State" variant="outlined" />
                <TextField value={zip} onChange={handleChangeZip} className='w-96' id="outlined-zip" label="Zip Code" variant="outlined" />
                <TextField value={country} onChange={handleChangeCountry} className='w-96' id="outlined-country" label="Country" variant="outlined" />
            </div>
            <div className='flex flex-col gap-4 p-10'>
                <h2 className='text-black font-medium text-1xl'>
                    PAYMENT INFORMATION
                </h2>
                <TextField onChange={handleChangeCard} value={card} className='w-96' id="outlined-card" label="Card" variant="outlined" />
                <TextField onChange={handleChangeDate} value={date} className='w-96' id="outlined-date" label="Date" variant="outlined" />
                <TextField onChange={handleChangeCode} value={code} className='w-96' id="outlined-code" label="Code" variant="outlined" />

                {!isLoading ?
                    <>
                        <Button
                            styles='bg-[#83968a] hover:bg-[#474b49] cursor-pointer p-3 text-white rounded text-1xl w-46 transition'
                            title='Visualizar carrinho' onClick={() => { cartContext.activePaymentStep(!cartContext.paymentStep) }} />
                        <Button
                            styles='bg-[#c14706] hover:bg-[#602404] cursor-pointer p-3 text-white rounded text-1xl w-46 transition'
                            title='Finalizar compra' onClick={() => { checkout() }} />
                    </>
                    :
                    <CircularProgress color="secondary" />
                }
            </div>
        </div>
    );

}
export default CheckoutForm; 
