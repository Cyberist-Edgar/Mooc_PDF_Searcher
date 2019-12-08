var script = document.getElementsByTagName('script');
var reg = /isSlideShow\(\"\/repositry\/resource\/.*pdf\"\)/;

function getAddress(){
for (var i=0; i<script.length;i++){
    if (script[i].getAttribute('type')=='text/javascript' && reg.test(script[i].innerHTML)){
        let html = script[i].innerHTML;
        let reg2 = /isSlideShow\("(.*)"\)/;
        console.log(reg2.exec(html));
        address = "https://cnmooc.org" + reg2.exec(html)[1];
       return address;
    }
}
}

function set(address){
var a = document.createElement('a');
a.href = address;
a.text = 'download';
a.className = 'ln-item ln-learn';
a.target = '_blank';

var view_left= document.getElementsByClassName("learn-nav");
view_left[0].insertBefore(a, view_left[0].firstElementChild)
}
var address = getAddress();
var flag = false;
function down_pdf(){
if (address && ! flag){
    set(address);
    flag = true;
}
}

setInterval(down_pdf, 100);
