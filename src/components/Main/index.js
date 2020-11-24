import Situation from "./Situation"
import News from "./News"
import Header from "./Header"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux";

function Test({ match }) {
    const news = useSelector(state => state.user.news);
    function mouseWheel(e) {
        console.log(e.nativeEvent.wheelDelta);
        if (e.nativeEvent.wheelDelta <= 0) {
            document.getElementById("main").style.transform = "translate(0, -100vh)";
            const speechMsg = new SpeechSynthesisUtterance();
            console.log(news);
            news.news.map((i, index) => {
                speechMsg.text += "\n\n" + (index + 1) + i.title;
            })
            console.log(speechMsg);
            if (document.getElementsByClassName("news-list")[0].scrollTop== 0) { 
                window.speechSynthesis.cancel();   
                window.speechSynthesis.speak(speechMsg)
                document.getElementsByClassName("news-list")[0].scrollTop=1;
            }
        }
        else {
            if (document.getElementsByClassName("news-list")[0].scrollTop == 0) {
                window.speechSynthesis.cancel();
                document.getElementById("main").style.transform = "translate(0, 0)";
            }
        }
    }
    return (
        <>
            <div id="main" onWheel={mouseWheel}>
                <div style={{
                    height: '100vh',
                }}>
                    <Header></Header>
                    <div className="situation">
                        <div className="situation-wrapper">
                            <div className="background-div">

                            </div>
                            <Situation props={match.params}></Situation>
                        </div>
                    </div>
                </div>
                <News></News>
            </div>
        </>
    )
}
export default Test;