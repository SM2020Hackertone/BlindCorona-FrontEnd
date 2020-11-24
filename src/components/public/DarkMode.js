import { useEffect, useState } from "react"
import { ReactComponent as NormalSvg } from './icon_normalTheme.svg';
import { ReactComponent as HighSvg } from './icon_high-contrastTheme.svg'
import { DarkMode } from "../../actions/userAction"
import { useDispatch } from "react-redux";
function DarkModeC(){
    const [mode,setMode] = useState(true);
    const dispatch=useDispatch();
    useEffect(()=>{
      dispatch(DarkMode(mode));
    },[])
    function modeHandler(e){
      if(e.target.checked==false){
        document.body.style.backgroundColor="black";
        document.getElementsByClassName("situation-wrapper")[0].style.backgroundColor="black"
        dispatch(DarkMode(e.target.checked))
      }
      else{
        document.body.style.backgroundColor="white"
        document.getElementsByClassName("situation-wrapper")[0].style.backgroundColor="white"
        dispatch(DarkMode(e.target.checked))
      }
      setMode(e.target.checked);
    }
    return(
        <label className="high">
            <input checked={mode} onChange={modeHandler} type="checkbox"></input>
            <NormalSvg></NormalSvg>
            <HighSvg></HighSvg>
            
        </label>
    )
}
export default DarkModeC;