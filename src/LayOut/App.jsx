import { Outlet } from "react-router-dom"
import 'react-toastify/dist/ReactToastify.css';
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";




function App() {



  return (
    <>
      <div>
        <NavBar />
        <Outlet />
        <Footer />
      </div>

      

    </>
  )
}

export default App