var config = {
    dragContainer: '.Zf-fn-En.Zf-fn-In'
};



function injectInput(icon, config) {
    // already injected
    if(document.querySelector('input[data-pasteasy]')) {
        return ;
    }

    config = JSON.parse(config);

    var gContainer = document.querySelector(config.dragContainer);

    // create input listener
    var inp = document.createElement('INPUT');

    inp.addEventListener('click', function (e) {
        e.stopPropagation();
    });

    inp.setAttribute('data-pasteasy',"1");

    inp.style.backgroundImage    = 'url("'+icon+'")';
    inp.style.backgroundRepeat   = 'no-repeat';
    inp.style.backgroundPosition = '50% 50%';
    inp.style.height             = '64px';
    inp.style.lineHeight         = '64px';
    inp.style.width              = '120px';
    inp.style.opacity            = .4;
    inp.style.marginTop          = '10px';


    inp.addEventListener('paste', function (event) {
        var items = (event.clipboardData || event.originalEvent.clipboardData).items;
        var blob = items[0].getAsFile();
        if(!blob || !blob.type || blob.type.substring(0,6) != "image/") {
            return ;
        }
        simulateDrop(gContainer.parentNode, blob);
    });


    // add input to container and fix its position

    gContainer.appendChild(inp);
    gContainer.style.height = "300px";


    // simulate drop event with pasted blob
    function simulateDrop(el, blob) {
        // big G. wants a filename and a valid image extension
        var filename = "Pasted" + (+new Date()) + ".png";

        var evt = document.createEvent("HTMLEvents");

        evt.dataTransfer = {
            files: [new File([blob], filename, {type: "image/png"})],
            types: ['Files']
        };

        evt.initEvent("drop", true, true);
        el.dispatchEvent(evt);
    }
}


var pastEasyIcon = chrome.extension.getURL("images/logosmall.jpg");
var cInt;
cInt = setInterval(function() {
    if( document.querySelector(config.dragContainer)) {
        clearInterval(cInt);
        var script = document.createElement('script');
        script.appendChild(document.createTextNode('('+ injectInput +')("'+pastEasyIcon+'",'+JSON.stringify(JSON.stringify(config))+');')); (document.body || document.head || document.documentElement).appendChild(script);
    }
},1000);