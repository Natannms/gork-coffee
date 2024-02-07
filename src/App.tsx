import AboveTheFold from "./Components/AboveTheFold"
import Header from "./Components/Header"
import CartResume from "./Components/Modal/CartResume"
import Products from "./Components/Products"
import { cartStore } from './Context/Index'
import { ToastContainer } from 'react-toastify';

function App() {
  const cartContext = cartStore();

  return (
    <div className="text-white">
      <ToastContainer />
      <Header />
      {cartContext.isModalVisible &&
        <CartResume />
      }
      <AboveTheFold />
       <Products />
    </div>
  )
}

export default App
