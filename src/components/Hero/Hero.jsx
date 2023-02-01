import './Hero.css'


const Hero = () => {
    return(
        <div>
            <div className='contenedorImagen'>

            </div>
            <div className='contenedoorTexto'>
                <span>Bienvenido. Yo soy</span>
                <h1>Darío Vartolo</h1>
                <h6>Diseñador web/Profesor de matemática</h6>
                <p>Profesor de matemática desde el año 2007 ejerciendo hasta la fecha.
                    Estudiante de licenciatura en folklore desde el año 2008 al 2016 en la universidad nacional del arte <span>UNA</span>.
                    Desarrollador web desde el año 2022/2023. Diplomatura en programación web Full Stack Developer. <span>UTN</span> </p>
                    <button>Contratar</button>
                    <button>Explorar</button>

            </div>

        </div>
    )
}

export { Hero }