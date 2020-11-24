import { useEffect,useState } from "react"
import "./main.scss"
import { GetStatus } from "../../actions/userAction"
import SituationCard from "./SituationCard"
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
function Situation() {
    const dispatch=useDispatch();
    const [data,setData] = useState(null);
    const [loading,setLoading] = useState(false);
    useEffect(()=>{
        setLoading(true);
        dispatch(GetStatus("",""))
            .then((res)=>{
                setData(res.payload);
                console.log(res);
            })
        setLoading(false);
    },[])
    if(loading) return(<div>로딩중..</div>)
    if(!data) return(null);
    return(
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
    )
}
export default Situation;