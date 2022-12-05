var mensaje = document.querySelector("#mensaje");
mensaje.style.display = 'none';
const cotizarSeguro=()=>{
    let marca=document.getElementById("marca").value;
    let year=document.querySelector("#year").value;
    let basico=document.getElementById("plan").value;

    let divResumen=document.querySelector("#resumen");
    let divResultado=document.querySelector("#resultado");
    divResultado.style.display="none"

    if(marca ==='' || 
        year==='' || basico === ''){
        mostrarError("msj-error","FALTA SELECCIONAR LAS OPCIONES");
        return;
        }else{
            let cotizacion={marca,year, basico};
            mensaje.style.display='block';
    
    
            divResumen.style.backgroundColor="#FFF";
            divResumen.style.display="block";
    
            divResumen.innerHTML=`<div style="text-aling-center">
                                    <img src="cargando.gif" width=300 height=300>
                                  </div>`;
            
            setTimeout(() => {
                divResumen.style.backgroundColor="#00838F";
                divResumen.innerHTML=`
                <h2>Resumen de Cotizacion</h2>
                <ul>
                    <li>Marca: ${mayuscula(marca)}</li>
                    <li>Año del auto: ${mayuscula(year)}</li>
                    <li>Plan:  ${basico}</li> 
                    <li>Total:  ${parseInt(marca) + parseInt(year) + parseInt(basico)}</li> 
                      
                </ul>`
    
            }, 4000);
        }
        
    }

const obtenerPlan=plan=>{
    return (plan ==='basico')?1.20:1.50;
}
const calcularMarca=marca=>{
    let incremento;

    switch(marca){
        case 'Audi': incremento =1.30;break;
        case 'BMW': incremento =1.50;break;
        case 'Fiat': incremento =1.15;break;
        case 'Chevrolet': incremento =1.00;break;
        default:break;
    }
    return incremento;
}
const diferencia=(year)=>{
    return new Date().getFullYear()-year;
}

const mayuscula=(palabra)=>{
    return palabra.charAt(0).toUpperCase()+palabra.slice(1);
}

const mostrarError=(elemento,mensaje)=>{
    divError=document.getElementById(elemento);
    console.log("soy div",divError)
    divError.innerHTML="<p class='alerta-error-danger error' id='borrar'>FALTA SELECCIONAR LAS OPCIONES</p>";
    eliminado=document.getElementById('borrar');

    setTimeout(() => {
        divError.removeChild(eliminado);
    }, 2000);
}

    