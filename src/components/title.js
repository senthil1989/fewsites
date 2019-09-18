import React from 'react';
import Imgfunction from '../common/images';
import { useTranslation } from 'react-i18next';

const CommonTitle= ({title})=>{
    const {t} =useTranslation();
    return(
        <>
            <div>
                <span>{Imgfunction('redicon')}</span>
                <h1>{t(`${title}`)}</h1>
            </div>
        </>
    )
}
export default CommonTitle;