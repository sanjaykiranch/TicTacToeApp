import React,{useState} from "react";
import Icon from "./Components/Icon";

import { ToastContainer , toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
 
import { Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./style.css";
 
const myArray = new Array(9).fill("");
const App=()=>{
    let [isCross,setIsCross] = useState(true)
    let [winMessage,setWinMessage]=useState("")

    const playAgain=()=>{
        setIsCross(true)
        setWinMessage("")
        myArray.fill("")
    }

    const findWinner=()=>{
        if(myArray[0]===myArray[1] && myArray[1]===myArray[2]){
            setWinMessage("winner");
        }
        if(myArray[3]===myArray[4] && myArray[4]===myArray[5]){
            setWinMessage("winner");
        }
        if(myArray[6]===myArray[7] && myArray[7]===myArray[8]){
            setWinMessage("winner");
        }
        if(myArray[0]===myArray[4] && myArray[4]===myArray[8]){
            setWinMessage("winner");
        }
        if(myArray[2]===myArray[4] && myArray[4]===myArray[6]){
            setWinMessage("winner");
        }
        if(myArray[0]===myArray[3] && myArray[3]===myArray[6]){
            setWinMessage("winner");
        }
        if(myArray[1]===myArray[4] && myArray[4]===myArray[7]){
            setWinMessage("winner");
        }
        if(myArray[2]===myArray[5] && myArray[5]===myArray[8]){
            setWinMessage("winner");
        }
        if(myArray[2]===myArray[5] && myArray[5]===myArray[8]){
            setWinMessage("winner");
        }
    }


    return(
        <div>
            <Icon choice=""/>
        </div>
    )
}

export default App