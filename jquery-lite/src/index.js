const DomNodeCollection = require('./dom_node_collection');

function $l(element){
    let elementArr = [];

    if( element instanceof HTMLElement ){
        elementArr.push(element);
    } else {
        let elementlist = document.querySelectorAll(element);
    
        elementlist.forEach( el => {
            elementArr.push(el);
        });
    }
    
    return new DomNodeCollection(elementArr);
}

window.$l = $l;
// $l("div").html();


