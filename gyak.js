
function $(id) {
	return document.getElementById(id);
}

function init() {

	$('btnFeladat9a').onclick=feladat9;
	$('btnFeladat9b').onclick=feladat9b;
}
window.addEventListener('load', init);





function feladat1() {

}


function feladat2() {

}


function feladat3() {

}


function feladat4() {

}


function feladat5() {

}


function feladat6() {

}


function feladat7() {

}


function feladat8() {

}


var konyvtar = [
	{
		szerzo: "John Ajvide Lindqvist",
		cim: "�l�halottak � Hogyan b�njunk vel�k?",
		kiado : "K�nyvmolyk�pz� Kiad� Kft.",
		ev : 2011
	},
	{
		szerzo : "Max Brooks",
		cim : "World War Z",
		kiado : "K�nyvmolyk�pz� Kiad� Kft.",
		ev : 2011
	},
	{
		szerzo : "Max Brooks",
		cim : "Zombi t�l�l� k�zik�nyv",
		kiado : "K�nyvmolyk�pz� Kiad� Kft.",
		ev : 2013
	},
	{
		szerzo : "Mira Grant",
		cim : "Feed � Etet�s",
		kiado : "Lazi Kiad�",
		ev : 2012 
	}
];

function feladat9() {
/*
* <input type="text" id="textEvszam" />
<input type="button" value="Lekér évszám alapján!" id="btnFeladat9a" />
<ul id="ulKonyvek"></ul>
* */

var evszam= $('textEvszam').value;

var konyvek= [];

for(var i=0; i<konyvtar.length;i++){
	if(konyvtar[i].ev === evszam){
		konyvek.push(konyvtar[i].cim)
	}
}
filList('ulKonyvek',konyvek);
}

function filList(listId,content) {
	var less='';
	for(var i=0; i<content.length;i++){
		less +='<li>'+ content[i].cim+ '</li>';
	}
	$(listId).innerHTML= less;
}

function feladat9b() {
	var kiado= $('selKiadok').value;

	var konyvek= [];

	for(var i=0; i<konyvtar.length;i++){
		if(konyvtar[i].kiado === kiado){
			konyvek.push(konyvtar[i].cim)
		}
	}
	filList('ulKonyvek',konyvek);
}

function feladat9bInit() {
var kiadok= [];
	for(var i=0; i<konyvtar.length;i++){
		if(kiadok.indexOf(konyvtar[i].kiado)===-1){
			konyvek.push(konyvtar[i].kiado)
		}
	}

}

