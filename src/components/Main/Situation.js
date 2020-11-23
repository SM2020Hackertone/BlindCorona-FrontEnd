import "./main.scss"
import SituationCard from "./SituationCard"
const data={
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
}
function Situation() {
    return(
        <div className="situation-contents">
            <ul className="situation-list">
                <SituationCard unit={data.incDec} dataType="확진자수"></SituationCard>
                <SituationCard unit={data.defCnt} dataType="격리해제 수"></SituationCard>
                <SituationCard unit={data.defCnt} dataType="검사진행 수"></SituationCard>
                <SituationCard unit={data.defCnt} dataType="사망자 수"></SituationCard>
                <SituationCard unit={data.defCnt} dataType="치료중인 환자수"></SituationCard> 
                <SituationCard unit={data.defCnt} dataType="결과 음성수"></SituationCard> 
                <SituationCard unit={data.defCnt} dataType="누적 검사 수"></SituationCard> 
                <SituationCard unit={data.defCnt} dataType="누적 확진률"></SituationCard>   
            </ul>
        </div>
    )
}
export default Situation;