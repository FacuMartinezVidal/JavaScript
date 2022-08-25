
let padre=document.createElement('section')
padre.className='grupo';
let main=document.getElementById('main')
main.append(padre)
const crearCartas=async()=>{
    const result=await fetch("./data.json");
    const autos_total=await result.json()
    for (const auto of autos_total){
        let div=document.createElement('div')
        div.className='item'
        div.innerHTML=`<img src=${auto.img}> <h3>${auto.modelo}</h3> <p>$ ${auto.km} - ${auto.ubicacion} </p> <h2>${auto.precio}</h2> <div class="botones"> <button onclick="agregarFav(${auto.id})" id="${auto.modelo}" type="button" class="fav btn btn-primary btn-lg"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/></svg></button><button onclick="unFav(${auto.id})" type="button" id="uBmw" class="btn boton-comprar btn-primary btn-lg"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-heartbreak-fill" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8.931.586 7 3l1.5 4-2 3L8 15C22.534 5.396 13.757-2.21 8.931.586ZM7.358.77 5.5 3 7 7l-1.5 3 1.815 4.537C-6.533 4.96 2.685-2.467 7.358.77Z"/></svg></button></div>`;
        padre.append(div)
    }
}
crearCartas()


const agregarFav=async(id_producto)=>{
    Swal.fire({
        confirmButtonColor: '#e9183b',
        title: 'Se añadio a tu carrito',
        icon: 'success'
    });
    const result=await fetch("./data.json");
    const autos_total=await result.json()
    localStorage.setItem(id_producto, JSON.stringify(autos_total[Number(id_producto)]));
    let auto=JSON.parse(localStorage.getItem(id_producto))
    let padre_fav=document.getElementById('padre_fav')
    let li=document.createElement('li')
    li.innerHTML=`<div class="div1" id=${auto.id}><img src="${auto.img} "> <div><h5>${auto.modelo}</h5> <p class="precio">${auto.precio}</p></div></div1>`;
    li.className='dropdown-item';
    padre_fav.append(li)
    let boton=document.getElementById(auto.modelo)
    boton.classList.remove('fav')
    boton.classList.add('unfav')
}

const unFav=async(id_producto)=>{
    const result=await fetch("./data.json");
    const autos_total=await result.json()
    let auto=JSON.parse(localStorage.getItem(id_producto))
    let boton=document.getElementById(auto.modelo)
    boton.classList.remove('unfav')
    boton.classList.add('fav')
    console.log(auto)
    localStorage.removeItem(id_producto, JSON.stringify(autos_total[Number(id_producto)]));
    fav=document.getElementById(id_producto)
    fav.remove()

}
const prueba=()=>{
    for (let index = 0; index < localStorage.length; index++) {
        let clave=localStorage.key(index)
        let auto=JSON.parse(localStorage.getItem(clave))
        let padre_fav=document.getElementById('padre_fav')
        let li=document.createElement('li')
        li.innerHTML=`<div class="div1" id=${auto.id}><img src="${auto.img} "> <div><h5>${auto.modelo}</h5> <p class="precio">${auto.precio}</p></div></div1>`;
        li.className='dropdown-item';
        padre_fav.append(li)
    }
}
prueba()



