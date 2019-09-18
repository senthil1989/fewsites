import React from 'react';
import Imgfunction from '../common/images';
import CommonTitle from '../components/title';

const MessageCeo= ()=>{
    return(
        <>
            <div>
            <CommonTitle title={"MessagefromCEO"}/>
            </div>
            <div>
                <div>{Imgfunction('greetBanner')}</div>
                <div className="vertical-line">{Imgfunction('greetLine')}</div>
                <p>The valuable company that shares value with
                the employees, customers, and society based on trust</p>
                <p>Fewm has continued to make efforts to develop new products and satisfy consumers by making them the business policy of the highest priority until now since it was established. These efforts have resulted in a lot of certificates and patents. It has made efforts to satisfy customers’ needs having a responsibility through high and good quality by obtaining the certificates and patents and increasing the value of the company.</p>
                <p>And it has made efforts to increase the value of customers through more practical and safer products required for a society based on the experience and skills accumulated for many years.</p>
                <p>Now, the importance of ‘men’ in management has been emphasized to be no match for any sources. Especially, the importance has been more emphasized over time because it’s now the knowledge and customer economy.</p>
                <p>Individual values are very important. We will take the initiative in supporting the active colleagues who make efforts to have skills and make them happy by keeping a balance between the company and families in the period of time that a balance between Work and Life is emphasized.</p>
                <p>Please be with the company which makes efforts and developments in the future. And we will appreciate your help and encouragement.</p>
                <p>Fewm Co., Ltd. is taking a leap as the company which creates value and grows with customers.</p>
                <span>C.E.O   Jaeberm, Song</span>
            </div>
        </>
    )
}
export default MessageCeo;