import './assets/css/style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import { useState } from 'react'


export default function App() {
    let [star, setStar] = useState("3")





    function Score1() {
        setStar(star = 1)  
    }
    function Score2() {
        setStar(star = 2)  
    }
    function Score3() {
        setStar(star = 3)  
    }
    function Score4() {
        setStar(star = 4)  
    }
    function Score5() {
        setStar(star = 5)  
    }
  
    return (
        <>

            <span className='box-star'>
                <span onClick={Score1} style={{ color: 1>=star ? "gold" : "black"}} className="material-symbols-outlined icon-star">star</span>
                <span onClick={Score2} style={{ color: 2>=star ? "gold" : "black" }} className="material-symbols-outlined icon-star">star</span>
                <span onClick={Score3} style={{ color: 3>=star ? "gold" : "black" }} className="material-symbols-outlined icon-star">star</span>
                <span onClick={Score4} style={{ color: 4>=star ? "gold" : "black" }} className="material-symbols-outlined icon-star">star</span>
                <span onClick={Score5} style={{ color: 5>=star ? "gold" : "black" }} className="material-symbols-outlined icon-star">star</span>
            </span>
        </>
    )
}

