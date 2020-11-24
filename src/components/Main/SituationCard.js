import CountUp from 'react-countup';
import { useSelector } from 'react-redux';

function SituationCard({ unit, dataType }) {
    function clickEvent() {
        const speechMsg = new SpeechSynthesisUtterance();
        speechMsg.text = dataType + unit + "명";

        window.speechSynthesis.speak(speechMsg)
    }
    const DarkMode = useSelector(state => state.user.darkmode);
    return (
        <div onClick={clickEvent}>
            <h3 id="Unit" style={DarkMode ? { color: "white" } : { color: "black" }}><CountUp duration={0.6} separator="," end={unit}></CountUp><b>{dataType == "누적 확진률" ? "%" : "명"}</b></h3>
            <p style={DarkMode ? { color: "white" } : { color: "black" }} id="dataType">{dataType}</p>
        </div>
    )
}
export default SituationCard;