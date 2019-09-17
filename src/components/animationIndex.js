import React from 'react'
import  '../common/assets/css/animationIndex.scss';
import Imgfunction from '../common/images';

 const CoverIndex =()=>{
    return(
        <div class="wrapper">
        	<div id="container1" class="wView">
        	    <ul id="scene" class="parallax-container">
                    <li class="layer" data-depth="0.2">{Imgfunction('mainbg2')}</li>
                    <li class="layer" data-depth="0.6">{Imgfunction('ballon')}</li>  
        	    </ul>
        	</div>
        </div>
    )
}
export default CoverIndex;