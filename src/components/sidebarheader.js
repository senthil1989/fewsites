import React from 'react';
import Imgfunction from "../common/images";
 const SidebarHeader =(props) =>{
    const {value,list,match} = props;
    console.log(list)
   const rendersidebarheader=()=>{
       switch(match.url){
           case '/message':
               return(<>
                <h1>{list[0].sidebarName || value.sidebarName}</h1>
                    <div className="">{Imgfunction( `${list[0].icon}`||`${value.icon}`)}</div>
                    <p>{list[0].sideContent || value.sideContent}</p>
                </>);
            case '/history':
                return(
                    <>
                <h1>{list[1].sidebarName || value.sidebarName}</h1>
                    <div className="">{Imgfunction( `${list[1].icon}`||`${value.icon}`)}</div>
                    <p>{list[1].sideContent || value.sideContent}</p>
                </>
                );
                case '/location ':
               return(<>
                <h1>{list[2].sidebarName || value.sidebarName}</h1>
                    <div className="">{Imgfunction( `${list[2].icon}`||`${value.icon}`)}</div>
                    <p>{list[2].sideContent || value.sideContent}</p>
                </>);
            case '/gases':
                return(
                    <>
                <h1>{list[0].sidebarName || value.sidebarName}</h1>
                    <div className="">{Imgfunction( `${list[0].icon}`||`${value.icon}`)}</div>
                    <p>{list[0].sideContent || value.sideContent}</p>
                </>
                );
                case '/chemical':
               return(<>
                <h1>{list[1].sidebarName || value.sidebarName}</h1>
                    <div className="">{Imgfunction( `${list[1].icon}`||`${value.icon}`)}</div>
                    <p>{list[1].sideContent || value.sideContent}</p>
                </>);
            case '/gasket':
                return(
                    <>
                <h1>{list[2].sidebarName || value.sidebarName}</h1>
                    <div className="">{Imgfunction( `${list[2].icon}`||`${value.icon}`)}</div>
                    <p>{list[2].sideContent || value.sideContent}</p>
                </>
                );
                case '/bead':
               return(<>
                <h1>{list[3].sidebarName || value.sidebarName}</h1>
                    <div className="">{Imgfunction( `${list[3].icon}`||`${value.icon}`)}</div>
                    <p>{list[3].sideContent || value.sideContent}</p>
                </>);
            case '/fdt':
                return(
                    <>
                <h1>{list[4].sidebarName || value.sidebarName}</h1>
                    <div className="">{Imgfunction( `${list[4].icon}`||`${value.icon}`)}</div>
                    <p>{list[4].sideContent || value.sideContent}</p>
                </>
                );
                case '/shuttervalve':
               return(<>
                <h1>{list[5].sidebarName || value.sidebarName}</h1>
                    <div className="">{Imgfunction( `${list[5].icon}`||`${value.icon}`)}</div>
                    <p>{list[5].sideContent || value.sideContent}</p>
                </>);
            case '/employment':
                return(
                    <>
                <h1>{list[0].sidebarName || value.sidebarName}</h1>
                    <div className="">{Imgfunction( `${list[0].icon}`||`${value.icon}`)}</div>
                    <p>{list[0].sideContent || value.sideContent}</p>
                </>
                );
                case '/apply':
               return(<>
                <h1>{list[1].sidebarName || value.sidebarName}</h1>
                    <div className="">{Imgfunction( `${list[1].icon}`||`${value.icon}`)}</div>
                    <p>{list[1].sideContent || value.sideContent}</p>
                </>);
            case '/notice':
                return(
                    <>
                <h1>{list[0].sidebarName || value.sidebarName}</h1>
                    <div className="">{Imgfunction( `${list[0].icon}`||`${value.icon}`)}</div>
                    <p>{list[0].sideContent || value.sideContent}</p>
                </>
                );
                case '/catalogue':
               return(<>
                <h1>{list[1].sidebarName || value.sidebarName}</h1>
                    <div className="">{Imgfunction( `${list[1].icon}`||`${value.icon}`)}</div>
                    <p>{list[1].sideContent || value.sideContent}</p>
                </>);
            case '/msds':
                return(
                    <>
                <h1>{list[3].sidebarName || value.sidebarName}</h1>
                    <div className="">{Imgfunction( `${list[3].icon}`||`${value.icon}`)}</div>
                    <p>{list[3].sideContent || value.sideContent}</p>
                </>
                );
                case '/promotioncenter':
               return(<>
                <h1>{list[4].sidebarName || value.sidebarName}</h1>
                    <div className="">{Imgfunction( `${list[4].icon}`||`${value.icon}`)}</div>
                    <p>{list[4].sideContent || value.sideContent}</p>
                </>);
            case '/inquiry':
                return(
                    <>
                <h1>{list[5].sidebarName || value.sidebarName}</h1>
                    <div className="">{Imgfunction( `${list[5].icon}`||`${value.icon}`)}</div>
                    <p>{list[5].sideContent || value.sideContent}</p>
                </>
                );
                default:
                    return null
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
    } 
    return (
        <>
        {rendersidebarheader()}
        </>
    )
}
export default SidebarHeader;