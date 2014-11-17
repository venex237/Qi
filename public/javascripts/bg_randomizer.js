/**
 * Created by mko on 17/11/14.
 */

function randomizeBackground() {
    /*background image randomizer*/
    switch (Math.floor((Math.random() * 3) + 1)) {
        case 1:
            $('body').css('background', '#000 url("http://i.imgur.com/0M8rLZG.jpg")');
            //$('#errorDiv').css('color', 'white');
            break;
        case 2:
            $('body').css('background', '#000 url("http://i.imgur.com/g7ONRRQ.jpg")');
            //$('#errorDiv').css('color', 'white');
            break;
        case 3:
            $('body').css('background', '#000 url("http://imgur.com/OTfm92s.jpg")');
            //$('#errorDiv').css('color', 'black');
            break;
        default:
            $('body').css('background', '#000 url("http://imgur.com/OTfm92s.jpg")');
            //$('#errorDiv').css('color', 'black');
            break;
    }
}