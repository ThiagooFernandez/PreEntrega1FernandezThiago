const cotizarSeguro=()=>{
    let marca=document.querySelector("#marca").value;
    let year=document.querySelector("#year").value;
    let basico=document.querySelector("#basico").value;
    let completo=document.querySelector("#completo").value;

    let divResumen=document.querySelector("#resumen");
    let divResultado=document.querySelector("#resultado");
    divResultado.style.display="none"

    let plan="";

    if(basico.checked){
        plan="basico"
    }else if(completo.checked){
        plan="completo"
    }

    

    if(marca ==='' || 
        year==='' || 
        plan===''){
        mostrarError("#msj-error","FALTA SELECCIONAR LAS OPCIONES");
        return;
        }
        let cotizacion={marca,year, plan};
        document.querySelector("#mensaje").style.display="none";


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
                <li>Marca: ${mayuscula(marca)}</li>
                <li>Plan:  ${plan}</li> 
                <li>Año del auto:  ${year}</li> 
                  
            </ul>`

            let cotizacionFinal=cotizar(cotizacion);
        divResultado.style.display="block";
        divResultado.className="divResultado";
        divResultado.innerHTML=` <p class="textoCotizacion">$${cotizacionFinal}</p>`;
        }, 3000);
        
    }
const cotizar=(cotizacion)=>{
    const{marca, year, plan}=cotizacion;
    let resultado=2000;
    const diferenciaYear=diferencia(year)
    resultado-=((diferenciaYear*3)*resultado)/100;

    resultado=calcularMarca(marca)*resultado;
    const incrementoPlan=obtenerPlan(plan);
    resultado=parseFloat(incrementoPlan*resultado).toFixed(2);
    return resultado;
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
    divError=document.querySelector(elemento);
    divError.innerHTML=`<p class="alerta-error-danger error">${mensaje}</p>`;
    setTimeout(() => {
        divError.innerHTML==``;
    }, 2000);
}

    