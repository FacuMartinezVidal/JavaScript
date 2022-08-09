// const traerProductos=async(id_producto)=>{
//     const result=await fetch("./data.json");
//     const data= await result.json()
//     console.log(data[0])
// 
//     let padre=document.getElementById('padre');
//     let li=document.createElement('li');
//     li.innerHTML=`<div class="div1" id=${id_producto}><img src="${(data[id_producto]).img} "> <div><h5>${(data[id_producto]).modelo}</h5> <p class="precio">${(data[id_producto]).precio}</p></div></div1>`;
//     li.className='dropdown-item';
//     padre.append(li);

// };
const agregarFav=async(id_producto)=>{
    const result=await fetch("./data.json");
    const autos_total=await result.json()
    console.log(autos_total[0])
    sessionStorage.setItem(id_producto, JSON.stringify(autos_total[Number(id_producto)]));
    let auto_fav=JSON.parse(sessionStorage.getItem(id_producto))
    console.log(auto_fav.modelo)
    let padre_fav=document.getElementById('padre_fav')
    let li=document.createElement('li')
    li.innerHTML=`<div class="div1" id=${id_producto}><img src="${auto_fav.img} "> <div><h5>${auto_fav.modelo}</h5> <p class="precio">${auto_fav.precio}</p></div></div1>`;
    li.className='dropdown-item';
    padre_fav.append(li)

}
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
        div.innerHTML=`<img src=${auto.img}> <h3>${auto.modelo}</h3> <p>$ ${auto.km} - ${auto.ubicacion} </p> <h2>${auto.precio}</h2> <div class="botones"> <button onclick="agregarFav("0")" id="bmw" type="button" class=" fav btn btn-primary btn-lg"><svg id="fav1" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-heart bi-heart-fill" viewBox="0 0 16 16"><path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/></svg></button><button type="button" id="uBmw" class="btn boton-comprar btn-primary btn-lg"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-heartbreak-fill" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8.931.586 7 3l1.5 4-2 3L8 15C22.534 5.396 13.757-2.21 8.931.586ZM7.358.77 5.5 3 7 7l-1.5 3 1.815 4.537C-6.533 4.96 2.685-2.467 7.358.77Z"/></svg></button></div>`;
        padre.append(div)
    }
}


crearCartas()
function funcionRandom(){
    alert("hola")

}
// let boton=document.getElementById('bmw');
// boton.addEventListener('onclick',()=>{
//     agregarFav('0')
// });
// let botonBmw=document.getElementById("bmw");
// botonBmw.addEventListener("mouseup", ()=>{
//     Swal.fire({
//         confirmButtonColor: '#e9183b',
//         title: 'Se añadio a tu carrito',
//         icon: 'success'
//     });
//     agregarFav("0")
//     viejoFav1=document.getElementById("fav1")
//     viejoFav1.remove()
//     let Fav1=document.createElement('div');
//     Fav1.innerHTML=`<svg id="nuevo1" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/></svg>`
//     botonBmw.append(Fav1)
    
// });
// let botonBmw2=document.getElementById('uBmw')
// botonBmw2.addEventListener("mouseup",()=>{
//     nuevoFav1=document.getElementById("nuevo1")
//     elemento=document.getElementById("0")
//     elemento.remove()
//     nuevoFav1.remove()
//     viejoFav1.innerHTML=` <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
//     <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/></svg> `
//     botonBmw.append(viejoFav1)
// });



// let botonFord=document.getElementById("ford");
// botonFord.addEventListener("mouseup", ()=>{
//     Swal.fire({
//         confirmButtonColor: '#e9183b',
//         title: 'Se añadio a tu carrito',
//         icon: 'success'
//     });
//     traerProductos(1)
//     viejoFav2=document.getElementById("fav2")
//     viejoFav2.remove()
//     let Fav2=document.createElement('div');
//     Fav2.innerHTML=`<svg id="nuevo2" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/></svg>`
//     botonFord.append(Fav2)
// });
// let botonFord2=document.getElementById('uFord')
// botonFord2.addEventListener("mouseup",()=>{
//     nuevoFav2=document.getElementById("nuevo2")
//     elemento=document.getElementById("1")
//     elemento.remove()
//     nuevoFav2.remove()
//     viejoFav2.innerHTML=` <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
//     <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/></svg> `
//     botonFord.append(viejoFav2)
// });



// let botonToyota=document.getElementById("toyota");
// botonToyota.addEventListener("mouseup", ()=>{
//     Swal.fire({
//         confirmButtonColor: '#e9183b',
//         title: 'Se añadio a tu carrito',
//         icon: 'success'
//     });
//     traerProductos(2)
//     viejoFav3=document.getElementById("fav3")
//     viejoFav3.remove()
//     let Fav3=document.createElement('div');
//     Fav3.innerHTML=`<svg id="nuevo3" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/></svg>`
//     botonToyota.append(Fav3)
// });
// let botonToyota2=document.getElementById('uToyota')
// botonToyota2.addEventListener("mouseup",()=>{
//     nuevoFav3=document.getElementById("nuevo3")
//     elemento=document.getElementById("2")
//     elemento.remove()
//     nuevoFav3.remove()
//     viejoFav3.innerHTML=` <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
//     <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/></svg> `
//     botonToyota.append(viejoFav3)
// });




// let botonFerrari=document.getElementById("ferrari");
// botonFerrari.addEventListener("mouseup", ()=>{
//     Swal.fire({
//         confirmButtonColor: '#e9183b',
//         title: 'Se añadio a tu carrito',
//         icon: 'success'
//     });
//     traerProductos(3)
//     viejoFav4=document.getElementById("fav4")
//     viejoFav4.remove()
//     let Fav4=document.createElement('div');
//     Fav4.innerHTML=`<svg id="nuevo4" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/></svg>`
//     botonFerrari.append(Fav4)
// });
// let botonFerrari2=document.getElementById('uFerrari')
// botonFerrari2.addEventListener("mouseup",()=>{
//     nuevoFav4=document.getElementById("nuevo4")
//     elemento=document.getElementById("3")
//     elemento.remove()
//     nuevoFav4.remove()
//     viejoFav4.innerHTML=` <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
//     <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/></svg> `
//     botonFerrari.append(viejoFav4)
// });


// let botonNissan=document.getElementById("nissan");
// botonNissan.addEventListener("mouseup", ()=>{
//     Swal.fire({
//         confirmButtonColor: '#e9183b',
//         title: 'Se añadio a tu carrito',
//         icon: 'success'
//     });
//     traerProductos(4)
//     viejoFav5=document.getElementById("fav5")
//     viejoFav5.remove()
//     let Fav5=document.createElement('div');
//     Fav5.innerHTML=`<svg id="nuevo5" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/></svg>`
//     botonNissan.append(Fav5)
// });
// let botonNissan2=document.getElementById('uNissan')
// botonNissan2.addEventListener("mouseup",()=>{
//     nuevoFav5=document.getElementById("nuevo5")
//     elemento=document.getElementById("4")
//     elemento.remove()
//     nuevoFav5.remove()
//     viejoFav5.innerHTML=` <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
//     <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/></svg> `
//     botonNissan.append(viejoFav5)
// });


// let botonAudi=document.getElementById("audi");
// botonAudi.addEventListener("mouseup", ()=>{
//     Swal.fire({
//         confirmButtonColor: '#e9183b',
//         title: 'Se añadio a tu carrito',
//         icon: 'success'
//     });
//     traerProductos(5)
//     viejoFav6=document.getElementById("fav6")
//     viejoFav6.remove()
//     let Fav6=document.createElement('div');
//     Fav6.innerHTML=`<svg id="nuevo6" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/></svg>`
//     botonAudi.append(Fav6)
// });
// let botonAudi2=document.getElementById('uAudi')
// botonAudi2.addEventListener("mouseup",()=>{
//     nuevoFav6=document.getElementById("nuevo6")
//     elemento=document.getElementById("5")
//     elemento.remove()
//     nuevoFav6.remove()
//     viejoFav6.innerHTML=` <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
//     <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/></svg> `
//     botonAudi.append(viejoFav6)
// });




// let botonCamaro=document.getElementById("camaro");
// botonCamaro.addEventListener("mouseup", ()=>{
//     Swal.fire({
//         confirmButtonColor: '#e9183b',
//         title: 'Se añadio a tu carrito',
//         icon: 'success'
//     });
//     traerProductos(6)
//     viejoFav7=document.getElementById("fav7")
//     viejoFav7.remove()
//     let Fav7=document.createElement('div');
//     Fav7.innerHTML=`<svg id="nuevo7" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/></svg>`
//     botonCamaro.append(Fav7)
// });
// let botonCamaro2=document.getElementById('uCamaro')
// botonCamaro2.addEventListener("mouseup",()=>{
//     nuevoFav7=document.getElementById("nuevo7")
//     elemento=document.getElementById("6")
//     elemento.remove()
//     nuevoFav7.remove()
//     viejoFav7.innerHTML=` <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
//     <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/></svg> `
//     botonCamaro.append(viejoFav7)
// });



// let botonMustang=document.getElementById("mustang");
// botonMustang.addEventListener("mouseup", ()=>{
//     Swal.fire({
//         confirmButtonColor: '#e9183b',
//         title: 'Se añadio a tu carrito',
//         icon: 'success'
//     });
//     traerProductos(7)
//     viejoFav8=document.getElementById("fav8")
//     viejoFav8.remove()
//     let Fav8=document.createElement('div');
//     Fav8.innerHTML=`<svg id="nuevo8" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/></svg>`
//     botonMustang.append(Fav8)
// });
// let botonMustang2=document.getElementById('uMustang')
// botonMustang2.addEventListener("mouseup",()=>{
//     nuevoFav8=document.getElementById("nuevo8")
//     elemento=document.getElementById("7")
//     elemento.remove()
//     nuevoFav8.remove()
//     viejoFav8.innerHTML=` <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
//     <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/></svg> `
//     botonMustang.append(viejoFav8)
// });