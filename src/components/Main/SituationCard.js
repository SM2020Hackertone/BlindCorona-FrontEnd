import CountUp from 'react-countup';
function SituationCard({unit, dataType}){
    function clickEvent(){
        const speechMsg = new SpeechSynthesisUtterance();
        speechMsg.text=dataType + unit + "명";
        window.speechSynthesis.speak(speechMsg)
    }
    return(
        <li onClick={clickEvent}>
            <h3><CountUp duration={0.6} end={unit}></CountUp> / <b>명</b></h3>
            <p>{dataType}</p>
        </li>
    )
}
export default SituationCard;