import { useEffect,useState } from "react"
import "./main.scss"
import { GetStatus } from "../../actions/userAction"
import SituationCard from "./SituationCard"
import axios from "axios"
import { useDispatch, useSelector } from "react-redux";
/*const data={
    createDt: "2020-11-23 09:33:42.564",
    deathCnt: 509,
    defCnt: 31004,
    gubun: "합계",
    gubunCn: "合计",
    gubunEn: "Total",
    incDec: 271,
    isolClearCnt: 26539,
    isolIngCnt: 3956,
    localOccCnt: 255,
    overFlowCnt: 16,
    qurRate: 59.80,
    seq: 5822,
    stdDay: "2020년 11월 23일 00시",
    updateDt: "null"
}*/
function Situation({props}) {
    const dispatch=useDispatch();
    const [data,setData] = useState(null);
    const [loading,setLoading] = useState(false);
    useEffect(()=>{
        setLoading(true);
        if(props.text){
            axios.get(`http://172.30.1.58:5000/corona-info?text=${props.text}`)
            .then((res)=>{
                setData(res.data.data);
                console.log(res.data.data);
                window.speechSynthesis.cancel();

                const speechMsg = new SpeechSynthesisUtterance();
                speechMsg.text=props.text+"에 대한 검색결과 입니다." + res.data.data.gubun + " " + 
                "신규 확진자수" + res.data.data.incDec + "명 " + 
                "사망자 수" + res.data.data.deathCnt + "명 " +
                "누적 확진률" + res.data.data.qurRate + "%";
                
                console.log('pass')
                console.log(window.speechSynthesis.speak(speechMsg));  
            })
            .catch((e)=>{
                const speechMsg = new SpeechSynthesisUtterance();
                speechMsg.text="결과를 찾을수 없습니다 다시 말해주세요."
                window.speechSynthesis.speak(speechMsg);
            })
        }else{

            dispatch(GetStatus("",""))
                .then((res)=>{
                    setData(res.payload);
                    console.log(res);
                })
        }
        setLoading(false);
    },[])
    if(loading) return(<div>로딩중..</div>)
    if(!data) return(null);
    
    return(
        <>
            <div>
                <h3 className="situation-title">{data.gubun}</h3>
            </div>
            <div className="situation-contents">
                <div className="situation-list">
                    <SituationCard unit={data.incDec} dataType="신규 확진자수"></SituationCard>
                    <SituationCard unit={data.isolClearCnt} dataType="격리해제 수"></SituationCard>
                    <SituationCard unit={data.isolIngCnt} dataType="검사진행 수"></SituationCard>
                    <SituationCard unit={data.deathCnt} dataType="사망자 수"></SituationCard>
                    <SituationCard unit={data.careCnt} dataType="치료중인 환자 수"></SituationCard>
                    <SituationCard unit={data.accExamCnt} dataType="누적 검사 수"></SituationCard>  
                    <SituationCard unit={data.resutlNegCnt} dataType="결과 음성 수"></SituationCard>
                    <SituationCard unit={data.qurRate} dataType="누적 확진률"></SituationCard>   
                </div>
            </div>
        </>
    )
}
export default Situation;