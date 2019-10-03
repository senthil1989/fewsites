import React from "react";
import Imgfunction from "../common/images";
const SidebarHeader = props => {
  console.log(props);
  const { value, list, match } = props;
  console.log(list);
  const rendersidebarheader = () => {
    switch (match.url) {
      case "/message":
        return (
          <>
            <h1>{list[0].sidebarName || value.sidebarName}</h1>
            <div className="">
              {Imgfunction(`${list[0].icon}` || `${value.icon}`)}
            </div>
            <p>{list[0].sideContent || value.sideContent}</p>
          </>
        );
      case "/history":
        return (
          <>
            <h1>{list[1].sidebarName || value.sidebarName}</h1>
            <div className="">
              {Imgfunction(`${list[1].icon}` || `${value.icon}`)}
            </div>
            <p>{list[1].sideContent || value.sideContent}</p>
          </>
        );
      case "/location":
        return (
          <>
            <h1>{list[2].sidebarName || value.sidebarName}</h1>
            <div className="">
              {Imgfunction(`${list[2].icon}` || `${value.icon}`)}
            </div>
            <p>{list[2].sideContent || value.sideContent}</p>
          </>
        );
      case "/gases/Si₂H₆":
        return (
          <>
            <h1>{list[0].sidebarName || value.sidebarName}</h1>
            <div className="">
              {Imgfunction(`${list[0].icon}` || `${value.icon}`)}
            </div>
            <p>{list[0].sideContent || value.sideContent}</p>
          </>
        );
      case "/gases/GeH₄":
        return (
          <>
            <h1>{list[0].sidebarName || value.sidebarName}</h1>
            <div className="">
              {Imgfunction(`${list[0].icon}` || `${value.icon}`)}
            </div>
            <p>{list[0].sideContent || value.sideContent}</p>
          </>
        );
      case "/gases/C₃H₆":
        return (
          <>
            <h1>{list[0].sidebarName || value.sidebarName}</h1>
            <div className="">
              {Imgfunction(`${list[0].icon}` || `${value.icon}`)}
            </div>
            <p>{list[0].sideContent || value.sideContent}</p>
          </>
        );
      case "/gases/C₄F₆":
        return (
          <>
            <h1>{list[0].sidebarName || value.sidebarName}</h1>
            <div className="">
              {Imgfunction(`${list[0].icon}` || `${value.icon}`)}
            </div>
            <p>{list[0].sideContent || value.sideContent}</p>
          </>
        );
      case "/gases/C₃F₈":
        return (
          <>
            <h1>{list[0].sidebarName || value.sidebarName}</h1>
            <div className="">
              {Imgfunction(`${list[0].icon}` || `${value.icon}`)}
            </div>
            <p>{list[0].sideContent || value.sideContent}</p>
          </>
        );
      case "/chemical/H₃PO₄":
        return (
          <>
            <h1>{list[1].sidebarName || value.sidebarName}</h1>
            <div className="">
              {Imgfunction(`${list[1].icon}` || `${value.icon}`)}
            </div>
            <p>{list[1].sideContent || value.sideContent}</p>
          </>
        );
      case "/chemical/HF":
        return (
          <>
            <h1>{list[1].sidebarName || value.sidebarName}</h1>
            <div className="">
              {Imgfunction(`${list[1].icon}` || `${value.icon}`)}
            </div>
            <p>{list[1].sideContent || value.sideContent}</p>
          </>
        );
      case "/chemical/Anti-rust-coating":
        return (
          <>
            <h1>{list[1].sidebarName || value.sidebarName}</h1>
            <div className="">
              {Imgfunction(`${list[1].icon}` || `${value.icon}`)}
            </div>
            <p>{list[1].sideContent || value.sideContent}</p>
          </>
        );
      case "/gasket/Flex/DX/EX+Localized-Gasket-Parts":
        return (
          <>
            <h1>{list[2].sidebarName || value.sidebarName}</h1>
            <div className="">
              {Imgfunction(`${list[2].icon}` || `${value.icon}`)}
            </div>
            <p>{list[2].sideContent || value.sideContent}</p>
          </>
        );
      case "/bead/RF-Series":
        return (
          <>
            <h1>{list[3].sidebarName || value.sidebarName}</h1>
            <div className="">
              {Imgfunction(`${list[3].icon}` || `${value.icon}`)}
            </div>
            <p>{list[3].sideContent || value.sideContent}</p>
          </>
        );
      case "/bead/FEsphere-P-Series":
        return (
          <>
            <h1>{list[3].sidebarName || value.sidebarName}</h1>
            <div className="">
              {Imgfunction(`${list[3].icon}` || `${value.icon}`)}
            </div>
            <p>{list[3].sideContent || value.sideContent}</p>
          </>
        );
      case "/bead/FEsphere-SS":
        return (
          <>
            <h1>{list[3].sidebarName || value.sidebarName}</h1>
            <div className="">
              {Imgfunction(`${list[3].icon}` || `${value.icon}`)}
            </div>
            <p>{list[3].sideContent || value.sideContent}</p>
          </>
        );
      case "/bead/Pigment-Powder":
        return (
          <>
            <h1>{list[3].sidebarName || value.sidebarName}</h1>
            <div className="">
              {Imgfunction(`${list[3].icon}` || `${value.icon}`)}
            </div>
            <p>{list[3].sideContent || value.sideContent}</p>
          </>
        );
      case "/bead/Coated-Powders":
        return (
          <>
            <h1>{list[3].sidebarName || value.sidebarName}</h1>
            <div className="">
              {Imgfunction(`${list[3].icon}` || `${value.icon}`)}
            </div>
            <p>{list[3].sideContent || value.sideContent}</p>
          </>
        );
      case "/fdt/NOVEC-1230-Manual-fire-extinguisher":
        return (
          <>
            <h1>{list[4].sidebarName || value.sidebarName}</h1>
            <div className="">
              {Imgfunction(`${list[4].icon}` || `${value.icon}`)}
            </div>
            <p>{list[4].sideContent || value.sideContent}</p>
          </>
        );
      case "/fdt/NOVEC-1230-Automatic-fire-extinguisher":
        return (
          <>
            <h1>{list[4].sidebarName || value.sidebarName}</h1>
            <div className="">
              {Imgfunction(`${list[4].icon}` || `${value.icon}`)}
            </div>
            <p>{list[4].sideContent || value.sideContent}</p>
          </>
        );
      case "/shuttervalve/AVS-50":
        return (
          <>
            <h1>{list[5].sidebarName || value.sidebarName}</h1>
            <div className="">
              {Imgfunction(`${list[5].icon}` || `${value.icon}`)}
            </div>
            <p>{list[5].sideContent || value.sideContent}</p>
          </>
        );
      case "/employment":
        return (
          <>
            <h1>{list[0].sidebarName || value.sidebarName}</h1>
            <div className="">
              {Imgfunction(`${list[0].icon}` || `${value.icon}`)}
            </div>
            <p>{list[0].sideContent || value.sideContent}</p>
          </>
        );
      case "/apply":
        return (
          <>
            <h1>{list[1].sidebarName || value.sidebarName}</h1>
            <div className="">
              {Imgfunction(`${list[1].icon}` || `${value.icon}`)}
            </div>
            <p>{list[1].sideContent || value.sideContent}</p>
          </>
        );
      case "/notice":
        return (
          <>
            <h1>{list[0].sidebarName || value.sidebarName}</h1>
            <div className="">
              {Imgfunction(`${list[0].icon}` || `${value.icon}`)}
            </div>
            <p>{list[0].sideContent || value.sideContent}</p>
          </>
        );
      case "/catalogue":
        return (
          <>
            <h1>{list[1].sidebarName || value.sidebarName}</h1>
            <div className="">
              {Imgfunction(`${list[1].icon}` || `${value.icon}`)}
            </div>
            <p>{list[1].sideContent || value.sideContent}</p>
          </>
        );
      case "/msds":
        return (
          <>
            <h1>{list[2].sidebarName || value.sidebarName}</h1>
            <div className="">
              {Imgfunction(`${list[2].icon}` || `${value.icon}`)}
            </div>
            <p>{list[2].sideContent || value.sideContent}</p>
          </>
        );
      case "/promotioncenter":
        return (
          <>
            <h1>{list[3].sidebarName || value.sidebarName}</h1>
            <div className="">
              {Imgfunction(`${list[3].icon}` || `${value.icon}`)}
            </div>
            <p>{list[3].sideContent || value.sideContent}</p>
          </>
        );
      case "/inquiry":
        return (
          <>
            <h1>{list[4].sidebarName || value.sidebarName}</h1>
            <div className="">
              {Imgfunction(`${list[4].icon}` || `${value.icon}`)}
            </div>
            <p>{list[4].sideContent || value.sideContent}</p>
          </>
        );
      default:
        return null;
    }
    // if(match.url === "/message"){
    //     return(
    //         <>
    //         <h1>{list.sidebarName || value.sidebarName}</h1>
    //             <div className="">{Imgfunction( `${list[0].icon}`||`${value.icon}`)}</div>
    //             <p>{list.sideContent || value.sideContent}</p>
    //         </>
    //     )
    // }
    // else if(match.url === "/history"){
    //     return(
    //         <>
    //         <h1>{list[1].sidebarName || value.sidebarName}</h1>
    //             <div className="">{Imgfunction( `${list[1].icon}`||`${value.icon}`)}</div>
    //             <p>{list[1].sideContent || value.sideContent}</p>
    //         </>
    //     )
    // }
    // else if{
    //     return(
    //         <>
    //         <h1>{list[2].sidebarName || value.sidebarName}</h1>
    //             <div className="">{Imgfunction( `${list[2].icon}`||`${value.icon}`)}</div>
    //             <p>{list[2].sideContent || value.sideContent}</p>
    //         </>
    //     )
    // }
    // if(match.url === "/message"){
    //     return(
    //         <>
    //         <h1>{list.sidebarName || value.sidebarName}</h1>
    //             <div className="">{Imgfunction( `${list[0].icon}`||`${value.icon}`)}</div>
    //             <p>{list.sideContent || value.sideContent}</p>
    //         </>
    //     )
    // }
    // else if(match.url === "/history"){
    //     return(
    //         <>
    //         <h1>{list[1].sidebarName || value.sidebarName}</h1>
    //             <div className="">{Imgfunction( `${list[1].icon}`||`${value.icon}`)}</div>
    //             <p>{list[1].sideContent || value.sideContent}</p>
    //         </>
    //     )
    // }
    // else if{
    //     return(
    //         <>
    //         <h1>{list[2].sidebarName || value.sidebarName}</h1>
    //             <div className="">{Imgfunction( `${list[2].icon}`||`${value.icon}`)}</div>
    //             <p>{list[2].sideContent || value.sideContent}</p>
    //         </>
    //     )
    // }
  };
  return <>{rendersidebarheader()}</>;
};
export default SidebarHeader;
