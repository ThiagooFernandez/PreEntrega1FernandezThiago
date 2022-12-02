var contador = 0;
        let elemento = document.getElementById("valor");
        let botones = document.querySelectorAll(".boton");
        for(let i=0;i<botones.length;i++){
            botones[i].addEventListener('click', function(e) {
            const estilos = e.currentTarget.classList;
            if(estilos.contains('sumar')) {
            contador++;
            }
            else if(estilos.contains('restar')) {
            contador--;
            }
            else {
            contador = 0;
            }
            elemento.textContent = contador;
            if(contador > 0) {
                elemento.style.color = 'green';
            }
            if(contador < 0) {
                elemento.style.color = 'red';
            }
        })
        }