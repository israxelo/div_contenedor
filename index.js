const div = document.getElementById("contenedor");
const boton1 = document.getElementById("boton1");
const boton2 = document.getElementById("boton2");

const lista = ['{"nombre":"isra","apellidos":"Jaramillo"}',
 '{"nombre":"juan","apellidos":"Pérez"}', 
'{"nombre":"Jorge","apellidos":"Lopez"}'];

boton1.addEventListener("click",()=>{
    const listaux = lista.map((el,id)=>{
        el = JSON.parse(el);
        if(document.getElementById(id)==null){ 
        const elemento = document.createElement('h1');
        el = {...el,
        id: id+1};
         elemento.textContent = `nombre: ${el.nombre},
                                 apellidos: ${el.apellidos},
                                 id: ${id+1}`;
         elemento.id = id;
         div.appendChild(elemento);
         return JSON.stringify(el);
        }
        else{
            return JSON.stringify({...el,id: id+1});
        }
       });
      localStorage.setItem('guardado',listaux);
});
boton2.addEventListener("click",()=>{
    const array = [1,2];
    array.map((el)=>{
        const aux = document.getElementById(el);
        if(aux!==null){
            div.removeChild(aux);
        }
    })
   const listadelistas = Array.from(document.getElementsByTagName('h1'));
   if(listadelistas.length!==0){
   const aux= listadelistas.map((el)=>{
        el = JSON.stringify((el.textContent.replace(/\s+/g, ' ').trim()).split(','));
        return el;
    });
    localStorage.setItem('guardado',aux);
   }
});