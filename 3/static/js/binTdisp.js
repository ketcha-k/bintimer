console.log("dispiii");
//alert("sto");

$(function(){
    ketFont($("#ketv0"), 1);
    create_digits(8);
});

///////////////////////////////
$(disp_recet);
$(window).resize(disp_recet);
function disp_recet(){
    setTimeout(function(){
        clinWH();
        arrange_all()
    }, 10);
}
function arrange_all(){
    var w2h = inWH.width / inWH.height;
    if(w2h )
    arrange_ketv("#ketv0", 
        ['w', 0.8, 1/5], 1, [[50, 50], ["center", "middle"]]);
    arrange_ketv("#ketv1", 
        ['w', 0.15, 1], 0.5, [[30, 30], ["center", "middle"]])
}

function arrange_ketv(id, size, f2h, position){
    var elem = $(id);
    if(size[0] == 'w'){
        elem.width(inWH.width * size[1]);
        elem.height(elem.width() * size[2]);
    }
    var h = elem.height()* f2h + "px";
    console.log("h: "+ h);
    elem.css("font-size", h);
    elem.css("line-height", elem.height() + "px");
    arng_xyV(elem, position[0], position[1]); //lcr tmb
}

//KETV0/////////////////////
//id: d7 d6 d5 d4 d3 d2 d1 d0
function create_digits(n){
    var str = toBinary(sie);
    console.log("bin: "+ str);
    var BinArr = toArray(str, true);
    console.log(BinArr);
    for(var i = 0; i < n; i++){
        var index = ((n-1) - i);
        if(i == 4){
            $('<span>', {
                class: 'space',
                text: ' '
            }).appendTo('#ketv0');
        }
        $('<span>', {
            id: 'd'+ index,
            class: 'digit',
            text: BinArr[index]
        }).appendTo('#ketv0');
    }
}
function refresh_digits(){
    var BinArr = toArray(
        toBinary(sie)
    , true);
    var target = $(".digit");
    //console.log(typeof target);
    var len = target.length;
    target.map(function(ind, elem){
        //console.log(elem);
        elem.innerText 
            = BinArr[(len-1)-ind];
    });
}
//toBinary = (n) => parseInt(n.toString(2));
function toBinary(n){
    var str = n.toString(2);
    str = ('00000000'+ str ).slice(-8);
    //console.log(str);
    return str;
}
//small first, large last
function toArray(str, rvs){
    var strarr = str.split("");
    if(rvs){
        return strarr.reverse();
    }
}    
