import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { GetContent, GetNews } from "../../actions/userAction";
function NewsCard({ props }) {
    const DarkMode = useSelector(state => state.user.darkmode);
    const [state, setState] = useState("none");
    const [color, setColor] = useState("white");
    const dispatch = useDispatch();
    const [data, setData] = useState("");
    let a = new Date(props.pubDate);
    function showclose() {
        if (state === "none") {
            const data = {
                link: props.link
            }
            setState("news-active");
            setColor("checked");
            dispatch(GetContent("", data))
                .then((res) => {
                    setData(res.payload.news);
                    console.log(res)

                    const speechMsg = new SpeechSynthesisUtterance();
                    speechMsg.text = a.getMonth() + "월" + a.getDate() + "일 뉴스" + props.title + "   " + res.payload.news.content;
                    window.speechSynthesis.speak(speechMsg)
                })

        }
        else {
            setState("none");
            setColor(null);
            window.speechSynthesis.cancel();
        }
    }

    return (
        <li>
            <div className="news-con"></div>
            <div onClick={showclose} dangerouslySetInnerHTML={{ __html: a.getMonth() + "/" + a.getDate() + " " + props.title }} className="news-title"></div>
            <div style={DarkMode ? { color: "#ffffff", background: "#1a1a1a" } : { color: "#292828", background: "#292828" }} className={"news-inDetail " + state}>
                <img src={data.img} />
                <pre>{data.content}</pre>
            </div>
        </li>
    )

}
export default NewsCard