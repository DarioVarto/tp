import './Formulario.css'
import React from 'react';

const Formulario = () => {
    return(
            <div className='contenedor_form' id='Contacto'>
                    <h1 className='titulo_section'>Contacto</h1>
           
                    <form action="https://formspree.io/f/xvonkvda" method="POST">
                        
                            <div className='margin_contenido_form'>
                                <div>
                                    <div className='nombre_apellido'>
                                        <label >Nombre</label>
                                        <input type="text" name='Nombre' required/>
                                        <label htmlFor="">e-mail</label>
                                        <input type="email" name='email' required />
                                    </div>
                                    
                                    <div className='email_asunto'>
                                        <label>Apellido</label>
                                        <input type="text" name='Apellido' required/>
                                        <label htmlFor="">asunto</label>
                                        <input type="text" name='asunto' required />
                                    </div>
                                </div>

                                <div className='txt_area'>
                                    <label>Ingrese su mensaje (máximo 200 caracteres)</label>
                                    <textarea maxLength={200} placeholder='Ingrese su mensaje aquí' name='mensaje'/>
                                </div>

                                <label className='horario_contacto' >Seleccione un horario para contactarlo</label>
                                
                                    <div className='form_tercera_parte'>                     
                                        <label >De 8 hs a 12 hs</label>
                                        <input type="radio" name='Contactar por la maniana'/>
                                        <label >De 12 hs a 16 hs</label>
                                        <input type="radio" name='contactar por la tarde'/>
                                        <label >De 16 hs a 20 hs</label>
                                        <input type="radio" name='Contactar por la noche' />
                                    </div>
               
                                <input type="submit" className='input_submit'/>     
                            </div>
                    </form>
            </div>
    )
}




export { Formulario }