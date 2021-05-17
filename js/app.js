import * as UI from './interfaz.js';
import API from './api.js'
UI.formularioBuscar.addEventListener('submit',buscarCancion);

function buscarCancion(e){
    e.preventDefault();
     //obtener datos del formulario

     const artista = document.querySelector('#artista').value;
     const cancion=document.querySelector('#cancion').value;

     if(artista==='' || cancion===''){
         UI.divMensaje.textContent='Error... Todos los campos son obligatorios';
         UI.divMensaje.classList.add('error');

         setTimeout(()=>{
             UI.divMensaje.textContent='';
             UI.divMensaje.classList.remove('error');
         },3000)

     }

     //consultar la API

    const busqueda= new API(artista,cancion);
      busqueda.consultarAPI();
    


}

let cad='hola,como,estas';
 function simularSplit( letra,separador){
     const aux=[];
     let aux2='';
     for(let i=0;i<letra.length;i++){

        if(letra[i]==separador){
           aux.push(aux2);
           aux2=''
        }
        else if(i==cad.length-1){
            aux.push(aux2);
             
         }
         else{
             aux2+=letra[i];
         }
     }
    
     
     console.log(aux)
    

 }

 simularSplit(cad,',');



 function simularSubstring( letra,inicio,fin){
    const aux=[];
    let aux2='';
    if(inicio<0){
        console.log('El dato de inicio es invalido')
        return;
    }
    else if(fin>letra.length-1){
        console.log(`el valor de fin tiene que ser maximo ${letra.length-1}`)
        return;
    }
    else if(inicio<fin){
        for(let i=inicio;i<=fin;i++){
            aux2+=letra[i];
         }
        
         console.log(aux2)
    }
    else{
        console.log('El inicio tiene que ser menor al valor de fin')
    }
   
    
   

}


simularSubstring('hola Mundo',0,3);




function simularReverse(dato){

    
    if(typeof(dato)=='object'){
        const aux2=[];
        for(let i=dato.length-1;i>=0;i--){
            aux2.push(dato[i]);
        }  
        
        return aux2
    }
    else if(typeof(dato)=='string'){
        let auxPalabra='';
        for(let i=dato.length-1;i>=0;i--){
            auxPalabra+=dato[i];
        }  

        return auxPalabra;
    }
}
var cars = [1,2,3];

console.log(simularReverse("hola"))