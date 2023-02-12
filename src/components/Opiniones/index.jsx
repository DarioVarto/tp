import './Opiniones.css'
import { useState } from 'react';
import Img1 from '../../assets/imagenes/img_1_portfolio.jpg';
import Img2 from '../../assets/imagenes/img_2_portfolio.jpg';
import Img3 from '../../assets/imagenes/img_3_portfolio.jpg';

import React from 'react';


const Opiniones = () => {
  
    const imagenes = [Img1,Img2,Img3];
    const [selectIndex,setSelectIndex]= useState(0);
    const[selectImg,setSelectImg]= useState (imagenes[0]);
  
    const selecionarImagen = (index,imagenes,next=true)=>{
    const condition = next? selectIndex < imagenes.length-1:selectIndex > 0;
    const nextIndex = next? (condition? selectIndex + 1 : 0):(condition? selectIndex - 1 : imagenes.length -1);
    setSelectImg(imagenes[nextIndex]);
    setSelectIndex(nextIndex);
    };
  
   const previus = ()=>{
    selecionarImagen(selectIndex,imagenes,false)
   };
   const next = ()=>{
    selecionarImagen(selectIndex,imagenes)
   };

    return(
       <>
        <div className='contenedor_opiniones' id='Opiniones'>
            <h1 className='titulo_section'>Opiniones</h1>
       
        <div className='Contenedor_opiniones_carrousel'>
            <img src={selectImg} alt="Opiniones" className='Img_Opiniones'/>
            <div className='contenedor_btn_carrousel'>
            <button onClick={previus} className='btn_carrousel'>{'<'}</button>
            <button onClick={next} className='btn_carrousel'>{'>'}</button>
            </div>
        </div>
        </div>
          
        </>
    )
}

export { Opiniones }