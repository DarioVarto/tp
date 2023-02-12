import './Portfolio.css'
import billeteraPortfolio from '../../assets/imagenes/img_1_portfolio.jpg'
import heroPortfolio from '../../assets/imagenes/img_2_portfolio.jpg'
import classRoomPortfolio from '../../assets/imagenes/img_3_portfolio.jpg'
import React from 'react';


const Portfolio = () => {
    return(
        <div className='contenedor_portfolio' id='Portfolio'>
             <h1 className='titulo_section'>Portfolio</h1>
            <div className='contenedor_imagenes'>
                <img className='img_portfolio img_1' src={billeteraPortfolio} alt="" />
                <img className='img_portfolio img_2' src={heroPortfolio} alt="imagen hero" />
                <img className='img_portfolio img_3' src={classRoomPortfolio} alt="imagen classroom" />
            </div>


        </div>
    )
}

export { Portfolio }
