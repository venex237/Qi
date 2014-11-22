function randomizeBackground(){

    /*
     * TO DO
     * use images hosted on server instead
     */


    /*background image randomizer*/
    switch(Math.floor((Math.random() * 3) + 1)){
        case 1:
            $('body').css('background', '#000 url("/images/austria_sg.jpg")');
            //$('#errorDiv').css('color', 'white');
            break;
        case 2:
            $('body').css('background', '#000 url("/images/greece_olivetree.jpg")');
            //$('#errorDiv').css('color', 'white');
            break;
        case 3:
            $('body').css('background', '#000 url("/images/greece_olivetree_closeup.jpg")');
            //$('#errorDiv').css('color', 'black');
            break;
        default:
            $('body').css('background', '#000 url("http://imgur.com/OTfm92s.jpg")');
            //$('#errorDiv').css('color', 'black');
            break;
    }
}

function animateBackground(){
    $(function(){
        var x = 0;
        setInterval(function(){
            x-=1;
            $('body').css('background-position', x + 'px 0');
        }, 80 /*speed; higher is slower*/);
    })
}