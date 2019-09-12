  import React ,{useState,useEffect}from 'react';

  const image2base64 = require('image-to-base64');




function Imgfunction(img) {
const [dataUrl, setdataUrl] = useState(null);

    var imgs = `./assets/images/${img}.png`;
    console.log(imgs)
    useEffect(()=>{
    image2base64(imgs) // you can also to use url
      .then(
          (response) => {
            setdataUrl(response); //cGF0aC90by9maWxlLmpwZw==
          }
      )
      .catch(
          (error) => {
              console.log(error); //Exepection error....
          }
      )
        }
    )
      // let dataURL=getBase64Image(imgs);
    let imgURL= `data:image/png;base64,${dataUrl}`;
    console.log(imgURL)
    return imgURL
}
// data:image/png;base64,
export default Imgfunction;
