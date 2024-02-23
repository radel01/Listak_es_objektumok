import { SZEMELYLISTA } from "./adat.js";
import { konzolraKiir } from "./fuggvenyek.js";
import { listaOsszeAllit } from "./fuggvenyek.js";
import { kartyaOsszeallit } from "./fuggvenyek.js";

konzolraKiir(SZEMELYLISTA)

//meg kell fogni azt a HTML elemet, 

//const FELSELEM = document.getElementById("felsorolas")
const FELSELEM = document.querySelector("#felsorolas")
FELSELEM.innerHTML="<h1>Ügyesek vagytok!</h1>"
FELSELEM.innerHTML+= listaOsszeAllit(SZEMELYLISTA)

const KARTYAELEM = document.querySelector("#kartyaContainer")
KARTYAELEM.innerHTML+= kartyaOsszeallit(SZEMELYLISTA)




//console.log(SZEMELYLISTA)

const a=2
//a= 3 -hibaüzenet

const LISTA = ["Géza", "Jenő", 12, true];

//LISTA = [12, 34, 56, 312] hibaüzenet
//console.log(LISTA[1])

LISTA[10]="Béla"

LISTA.push("Jakab")//lista végére
LISTA.pop()//elveszi a lista utolsó elemét


//console.log(LISTA)

//console.log(LISTA[5])
//ismerőseim nyilvántartása
//objektum - összetett adatszerkezet, amelyben az összetartozó adatokat együtt tudjuk kezelni
// = kulcsértékpárok

const SZEMÉLY1= {
    nev: "Géza",
    tel:"06-20-5362415",
    suly: 80
}
const SZEMÉLY2= {
    nev: "JEnő",
    tel:"06-20-5264827",
    suly: 60
}

//console.log(SZEMÉLY1.nev)
//console.log(SZEMÉLY2.suly)
