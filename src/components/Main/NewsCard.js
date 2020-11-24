import {useEffect, useState} from "react"
import { useDispatch, useSelector } from "react-redux";
import { GetContent, GetNews } from "../../actions/userAction";
function NewsCard({props}){
    const DarkMode = useSelector(state => state.user.success);
    const [state,setState]=useState("none");
    const [color,setColor]=useState("white");
    const dispatch=useDispatch();
    const [data,setData] = useState(null);
    const [loading,setLoading] = useState(false);
    let a=new Date(props.pubDate);
    function showclose(){
        if(state==="none"){
            setState("news-active");
            setColor("checked");
            const speechMsg = new SpeechSynthesisUtterance();
            speechMsg.text=a.getMonth() + "월" +a.getDate() + "일 뉴스" + props.title + "   " + data.content;
            window.speechSynthesis.speak(speechMsg)
        }
        else{
            setState("none");
            setColor(null);
            window.speechSynthesis.cancel();
        }  
    } 
    useEffect(()=>{
        setLoading(true);
        const data={
            link : props.link
        }
        dispatch(GetContent("",data))
            .then((res)=>{
                setData(res.payload.news);
                console.log(res)
            })
        setLoading(false);
    },[])
    if(loading) return(<div>로딩중..</div>)
    if(!data) return(null);
    
    return(
        <li>
            <div className="news-con"></div>          
            <div onClick={showclose} className="news-title">{a.getMonth() + "/" +a.getDate()} | {props.title}</div>
            <div style={DarkMode? {color:"#333", background: "white"} : {color: "white" , background: "black"}} className={"news-inDetail " + state}>
                {data.content}
            </div>
        </li>
    )
    
}
export default NewsCard