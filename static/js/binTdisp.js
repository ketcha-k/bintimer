console.log("dispiii");

$(function(){
    ketFont($("#ketv0"), 4);
    create_digits(8);
});
$(disp_recet);
$(window).resize(disp_recet);
function disp_recet(){
    console.log("");
    /*var w_p = clinWH();
    arrange_all(w_p);*/
    clinWH();
    console.log("ratio: "+ inWH.ratio);
    arrange_all();
}

function arrange_all(){
    arrange_ketv0();
}



function arrange_ketv0(){
    if(inWH.ratio > 16/8){

    }else if(inWH.ratio > 8/16){
        var elem = $("#ketv0");
        elem.width(inWH.width * 0.8);
        elem.height(elem.width() * 1/5);
        var h = elem.height()*1 + "px";
        console.log("h: "+ h);
        elem.css("font-size", h);
        elem.css("line-height", h);
        arng_xyV(elem, [50,50]);
    }else{

    }
}
//
function create_digits(n){
    for(var i = 0; i < n+1; i++){
        if(i != 4){
            $('<span>', {
                class: 'digit',
                text: randbin()
            }).appendTo('#ketv0');
        }else{
            $('<span>', {
                class: 'space',
                text: ' '
            }).appendTo('#ketv0');
        }
    }
}
function randbin(){
    if(Math.random() >= 0.5){
        return 1;
    }else{
        return 0;
    }
}

