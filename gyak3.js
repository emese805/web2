
function $(element){
    return document.querySelector(element);
}

function $$(element){
    return document.querySelectorAll(element);
}

function kezelotRegisztral(elem, tipus, kezelo) {
    if (elem.addEventListener) {
        elem.addEventListener(tipus, kezelo, false);
    } else if (elem.attachEvent) {
        elem.attachEvent('on' + tipus, function () {
            return kezelo.call(elem, window.event);
        });
    } else {
        elem['on' + tipus] = kezelo;
    }
}

function delegate(parentSelector, type, selector, fn) {
    function delegatedFunction(e) {
        var target = e.target;

        while (target && !target.matches(selector)) {
            if (target === parent) {
                return;
            }
            target = target.parentNode;
        }
        return fn.call(target, e);
    }
    var parent = $(parentSelector);
    kezelotRegisztral(parent, type, delegatedFunction)
}



function init() {

    delegate('html','click', 'p', feladat1);
    kezelotRegisztral(document,'click', feladat2);

}

function feladat1(event){
return;
    console.log('A: ');
    console.log(this);


    console.log('B:');
    console.log(event.type);

    console.log('C:');
    console.log(event.button);

    console.log('D');
    console.log(event.clientX+'|'+event.clientY);

    console.log('E');
    console.log(event.target);

    console.log('F');
    if(event.target.matches('span')){
        console.log(event.target.innerHTML);
    }

    console.log('G');

    if(event.target.matches('a')){

       if( event.target.innerHTML.indexOf('libero')>-1){
           event.preventDefault();
       }
    }

}

var osszTav=0;
var db=0;

var prevCord=null;

function feladat2(){
    if(prevCord==null){
        prevCord=
        {
            x : event.clientX,
            y : event.clientY
        };
        return;
    }
    var x=event.clientX;
    var y=event.clientY;

    var tav=Math.sqrt(Math.pow(x-prevCord.x,2)+Math.pow(y-prevCord.y,2))

   prevCord.x=x;
    prevCord.y=y;
    ++db;

    osszTav +=tav;
    console.log(osszTav/db);


}






//window.onload = init;
kezelotRegisztral(window, 'load', init);


