import { useEffect, useState } from "react"
import { ReactComponent as NormalSvg } from './icon_normalTheme.svg';
import { ReactComponent as HighSvg } from './icon_high-contrastTheme.svg'
import { DarkMode } from "../../actions/userAction"
import { useDispatch } from "react-redux";
import Toggle from 'react-toggle';

import "react-toggle/style.css" // for ES6 modules

function DarkModeC() {
  const [mode, setMode] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    document.body.style.backgroundColor = "#292828";
    // document.getElementsByClassName('news')[0].style.backgroundColor = '#212020';
    // document.getElementsByClassName('news')[0].style.color = '#ffffff';
    document.getElementsByClassName("situation-wrapper")[0].style.backgroundColor = "transparent"
    dispatch(DarkMode(mode))
  }, [])

  function modeHandler(e) {
    if (e.target.checked == true) {
      document.body.style.backgroundColor = "#292828";
      // document.getElementsByClassName('news')[0].style.backgroundColor = '#212020';
      // document.getElementsByClassName('news')[0].style.color = '#ffffff';
      document.getElementsByClassName("situation-wrapper")[0].style.backgroundColor = "transparent"
      dispatch(DarkMode(e.target.checked))
    }
    else {
      document.body.style.backgroundColor = "white"
      // document.getElementsByClassName('news')[0].style.backgroundColor = '#ffffff';
      // document.getElementsByClassName('news')[0].style.color = '#000000';
      document.getElementsByClassName("situation-wrapper")[0].style.backgroundColor = "transparent"
      dispatch(DarkMode(e.target.checked))
    }
    setMode(e.target.checked);
  }

  return (
    <div className='toggle'>
      <Toggle
        className='high'
        defaultChecked={mode}
        onChange={modeHandler} />
    </div>
  )
}
export default DarkModeC;