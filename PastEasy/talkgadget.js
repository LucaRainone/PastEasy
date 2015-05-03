var config = {
    input: 'div[contenteditable]',
    buttonPaint: '.Tnn80c.yE.UqhDsb.IOwWEe.uq'
};

function injectEngine(pastEasyIcon, config) {
    var logo = new Image();
    logo.src = pastEasyIcon;
    var input = document.querySelector('div[contenteditable]');
    input.addEventListener('paste', function(evt) {
        var items = (evt.clipboardData || evt.originalEvent.clipboardData).items;
        var blob = items[0].getAsFile();
        if(!blob || !blob.type || blob.type.substring(0,6) != "image/") {
            return ;
        }
        var butt = document.querySelector(config.buttonPaint);
        if(!butt) {
            var buttons = input.parentNode.parentNode.parentNode.parentNode.parentNode.querySelectorAll('button');
            if(buttons.length) {
                butt = buttons[buttons.length-1]
            }
        }
        if(!butt) {
            alert("Sorry. Something has changed on Google Hangouts and I cannot find some elements that I need. Please report it to rain1.it/pasteasy");
            return ;
        }
        butt.click();
        var img = new Image;
        img.onload = function() {
            var canvass = document.querySelectorAll('canvas');


            var cnvs = canvass[0];
            var ctx = cnvs.getContext('2d');
            if(!window._pasteasy_origCanvasWidth) {
                window._pasteasy_origCanvasWidth = cnvs.width;
            }
            cnvs.width = img.width;
            cnvs.height = img.height +50;
            ctx.clearRect(0,0, cnvs.width, cnvs.height);
            ctx.drawImage(img, 0, 0);
            ctx.fillStyle="#fff";
            ctx.fillRect(0,img.height,img.width,50);
            ctx.fillStyle="#333";
            ctx.fillText("Pasted with", 10, img.height+25);
            ctx.drawImage(logo, 70, img.height+1);
            //cnvs.style.transform = 'scale('+(window.origCanvasWidth/img.width)+')';
            //cnvs.style.transformOrigin = '0 0';
            for(var i = 1; i < canvass.length; i++) {
                cnvs= canvass[i];
                cnvs.width  = img.width;
                cnvs.height = img.height +40;
                //cnvs.style.transform = 'scale('+(window.origCanvasWidth/img.width)+')';
                //cnvs.style.transformOrigin = '0 0';
            }
            cnvs.parentNode.style.transform = 'scale('+(window._pasteasy_origCanvasWidth/img.width)+')';
            cnvs.parentNode.style.transformOrigin = '0 0';
            var el = canvass[0];
            var evt = document.createEvent("MouseEvents");
            var evt2 = document.createEvent("MouseEvents");
            var evt3 = document.createEvent("MouseEvents");

            evt.initEvent("mouseenter", true, true);
            evt2.initEvent("mousedown", true, true);
            evt3.initEvent("mouseup", true, true);


            el.dispatchEvent(evt);
            el.dispatchEvent(evt2);
            el.dispatchEvent(evt3);


        };
        setTimeout(function() {
            img.src = URL.createObjectURL(blob);
        },100);

    })
}

// logo
var pastEasyIcon = 'data:image/png;base64,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';
var cInt;
cInt = setInterval(function() {
    var input = document.querySelector(config.input);
    if( input) {
        clearInterval(cInt);
        var script = document.createElement('script');
        script.appendChild(document.createTextNode('('+ injectEngine +')("'+pastEasyIcon+'",'+JSON.stringify(JSON.stringify(config))+');'));
        (document.body || document.head || document.documentElement).appendChild(script);
    }
},1000);
