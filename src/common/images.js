import React from 'react';
import flag2 from './assets/images/flag2.png';
import flag1 from './assets/images/flag1.png';
import logo from './assets/images/logo.png';
import mainbg2 from './assets/images/mainbg2.png';
import ballon from './assets/images/ballon.png';
import greet from './assets/images/greet.png';

const images ={
   'flag2':<img src={flag2}  alt="us" />,
   'flag1':<img src={flag1}  alt="kor" />,
   'logo':<img src={logo}  alt="logo" />,
   'mainbg2':<img class="hlayer" src={mainbg2}  alt="mainbg2" />,
   'ballon':<img class="blayer" src={ballon}  alt="ballon" />,
   'greet':<img class="" src={greet}  alt="greet" />
}
function Imgfunction(img) {
// const [imgData, setimgData]=useState(img);

//     useEffect(()=>setimgData(imgData))
//     console.log(imgData)
   return images[img];

}
// data:image/png;base64,
export default Imgfunction;