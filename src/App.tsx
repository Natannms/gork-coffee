import AboveTheFold from "./Components/AboveTheFold"
import FeaturedProduct from "./Components/FeaturedProduct"
import Header from "./Components/Header"
import Products from "./Components/Products"

function App() {

  return (
    <div  className="text-white">
       <Header />
       <AboveTheFold />
       {/* <FeaturedProduct /> */}
       <Products />
    </div>
  )
}

export default App
