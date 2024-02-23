
export function konzolraKiir(lista){
    for (let i = 0; i < lista.length; i++) {
        console.log(`név: ${lista[i].nev}, tel: ${lista[i].tel}`)
        
    }    


}

export function listaOsszeAllit(LISTA){
    let txt = "<ul>"
    for (let index = 0; index < LISTA.length; index++) {
         txt+= `<li>név: ${LISTA[index].nev}, tel: ${LISTA[index].tel}</li>`        
    }
    txt +="</ul"
    console.log(txt)
    return txt
}

export function kartyaOsszeallit(LISTA){
    let txt = ""
    for (let index = 0; index < LISTA.length; index++) {
         txt+= `<div class="kartya"><h3>név: ${LISTA[index].nev}</h3><p>suly: ${LISTA[index].suly}</p><p>tel: ${LISTA[index].tel}</p></div>`       
    }
    console.log(txt)
    return txt
}