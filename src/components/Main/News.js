import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetNews } from "../../actions/userAction";
import NewsCard from "./NewsCard"
function News(){
    const DarkMode = useSelector(state => state.user.darkmode);
    const dispatch=useDispatch();
    const [data,setData] = useState(null);
    const [loading,setLoading] = useState(false);
    useEffect(()=>{
        setLoading(true);
        dispatch(GetNews("",""))
            .then((res)=>{
                setData(res.payload.news);
            })
        setLoading(false);
    },[])
    if(loading) return(<div>로딩중..</div>)
    if(!data) return(null);
    return(
        <div style={DarkMode?  {background:"black"} : {background: "#FF642A"}} className="news" >
            <div className="news-wrapper">
                <h3 className="news-header">뉴스</h3>
                <ul className="news-list">
                    {
                        data.map((i,index)=>{
                            return(
                                
                                <NewsCard key={index} props={i}></NewsCard>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}
export default News;