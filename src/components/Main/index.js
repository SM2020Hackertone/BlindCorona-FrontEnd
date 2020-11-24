import Situation from "./Situation"
import News from "./News"
import Header from "./Header"
import { useEffect, useState } from "react"

function Test({match}){
    const [page, setPage]=useState(0);
    function mouseWheel(e){
        console.log(e.nativeEvent.wheelDelta);
        if(e.nativeEvent.wheelDelta<=0){
            
            document.getElementById("main").style.transform="translate(0, -100vh)";
        }
        else{
            if(document.getElementsByClassName("news-list")[0].scrollTop==0)
                document.getElementById("main").style.transform="translate(0, 0)";
        }
    }
    return(
        <>
            <div id="main"onWheel={mouseWheel}>
                <Header></Header>
                <div className="situation">
                    <div className="situation-wrapper">
                        <div className="background-div">

                        </div>
                        <Situation props={match.params}></Situation>
                    </div>
                </div>
                <News></News>
            </div>
        </>
    )
}
export default Test;