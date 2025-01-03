import React, { useState ,useEffect} from 'react'
import './App.css'
import Routing from './Routing'
import { FaArrowUp } from "react-icons/fa";

const App = () => {
// let[scrollbtn,setScrollBtn] = useState(false)

//     let topScrollHandler = ()=>{
//       window.scrollTo(0,0)
//     }
//     document.addEventListener('scroll',()=>{
//       if(window.screenY>0){
//         setScrollBtn(scrollbtn)
//       }
//     })
const [scrollBtn, setScrollBtn] = useState(false);

  const topScrollHandler = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrollBtn(true);
      } else {
        setScrollBtn(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

  },[])
  
  return (
    <>
    {/*Navbar */}
    <Routing/>
<div className={`cursor-pointer position fixed bottom-0 right-0 p-3 text-2xl shadow-lg rounded-sm m-6 bg-white ${scrollBtn ? 'block':"hidden"}`} onClick={topScrollHandler}>
<FaArrowUp />
</div>

    </>
  ) 
}

export default App
