import React from 'react';
import flag2 from './assets/images/flag2.png';
import flag1 from './assets/images/flag1.png';
import logo from './assets/images/logo.png';
import mainbg2 from './assets/images/mainbg2.png';
import ballon from './assets/images/ballon.png';
import greet from './assets/images/greet.png';
import his from './assets/images/his.png';
import redicon from './assets/images/red_icon.png';
import greetBanner from './assets/images/greetBanner.jpg';
import greetLine from './assets/images/greetLine.png';

import loc from './assets/images/loc.png';
import vector_1 from './assets/images/vector_1.png';
import vector_2 from './assets/images/vector_2.png';
import vector_3 from './assets/images/vector_3.png';
import vector_4 from './assets/images/vector_4.png';
import vector_5 from './assets/images/vector_5.png';
import shutter from './assets/images/shutter.png';
import recruitIcon from './assets/images/recruitIcon.png';
import notice from './assets/images/notice.png';
import catalogue from './assets/images/catalogue.png';
import prRoom from './assets/images/prRoom.png';
import recruit from './assets/images/recruit.jpg';

const images ={
   'flag2':<img src={flag2}  alt="us" />,
   'flag1':<img src={flag1}  alt="kor" />,
   'logo':<img src={logo}  alt="logo" />,
   'mainbg2':<img className="hlayer" src={mainbg2}  alt="mainbg2" />,
   'ballon':<img className="blayer" src={ballon}  alt="ballon" />,
   'greet':<img className="" src={greet}  alt="greet" />,
   'redicon':<img className="" src={redicon}  alt="redicon" />,
   'greetBanner':<img className="" src={greetBanner}  alt="greetBanner" />,
   'greetLine':<img className="" src={greetLine}  alt="greetLine" />,
   'his':<img className="" src={his}  alt="his" />,
   
   'loc':<img src={loc}  alt="loc" />,
   'vector_1':<img src={vector_1}  alt="vector_1" />,
   'vector_2':<img src={vector_2}  alt="vector_2" />,
   'vector_3':<img className="" src={vector_3}  alt="vector_3" />,
   'vector_4':<img className="" src={vector_4}  alt="vector_4" />,
   'vector_5':<img className="" src={vector_5}  alt="vector_5" />,
   'shutter':<img className="" src={shutter}  alt="shutter" />,
   'recruitIcon':<img className="" src={recruitIcon}  alt="recruitIcon" />,
   'notice':<img className="" src={notice}  alt="notice" />,
   'catalogue':<img className="" src={catalogue}  alt="catalogue" />,
   'prRoom':<img className="" src={prRoom}  alt="prRoom" />,
   'recruit':<img className="" src={recruit}  alt="recruit" />,
}
function Imgfunction(img) {
// const [imgData, setimgData]=useState(img);

//     useEffect(()=>setimgData(imgData))
//     console.log(imgData)
   return images[img];

}
// data:image/png;base64,
export default Imgfunction;