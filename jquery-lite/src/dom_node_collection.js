class DomNodeCollection {

    constructor(htmlElements) {
        this.htmlElements = htmlElements;
    }

    html(str=null){
        debugger
        if (str != null) {
            this.htmlElements.forEach( (el) => {
                el.innerHTML = str;
            });
        } else {
            return this.htmlElements[0].innerHTML;
        }
    }

    empty() {
        this.htmlElements.forEach((el) => {
            el.innerHTML = "";
        });
    }

    append(arg) {
        let appendVal = "";
        if ( str ) appendVal = str;
        if ( htmlelement ) appendVal = htmlelement;
        if ( collection ) appendVal = collection.htmlElements[0];

        switch( arg ) {
            case (arg instanceof String) :
                this.htmlElements.forEach((el) => {
                    el.innerHTML += arg;
                });
                break;
            case (arg instanceof HTMLElement) :
                this.htmlElements.forEach((el) => {
                    el.innerHTML += arg.outerHTML;
                });
                break;
            case (arg instanceof DomNodeCollection) :
                arg.forEach( (el) => {
                    
                });
        }


        
    }


}

module.exports = DomNodeCollection;