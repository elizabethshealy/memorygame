//  var array = ["a","a", "b", "b", "c", "c", "d", "d", "e", "e", "f", "f", "g", "g", "h", "h", "i", "i"];
//  var newArray = [];


// $(function() {
//     var shuffle = function(o) {
//         for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
//         return o;
//         };
        
//     $("#MyButton").click(shuffle);
//         shuffle();
// });

// shuffle(array);


$(".card-container").justFlipIt({Click: true});

var array = ["a","a", "b", "b", "c", "c", "d", "d", "e", "e", "f", "f", "g", "g", "h", "h", "i", "i"];
var newArray = [];

function shuffle(o){
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}

shuffle(array);

// $("#MyButton").click(shuffle(array));

//Assigns the array to each card
var foos = document.querySelectorAll("#back");

for (var i = 0; i < foos.length; ++i) {
    foos[i].textContent = array[i];
}

console.log (array[1]);

//Assigns variables to each card selected
// var cardone;
// var cardtwo;

// $('.card-container').click(function(){
//     $(this).addClass('activeTab');
//     alert ("hello");
// });

var pick1;
var pick2;

$('#test-card').click(function() {

    // set first card
    if (pick1 === null) {
        
        pick1 = $(this).attr("id")
        alert ('pick1');
        console.log ('pick1');

    }
    // set second card
    else if (pick2 === null) {

        pick2 = $(this).val('#back');

        // compare colors
        if (pick1 === pick2) {
            alert('MATCH!');
        }
        else alert('NO MATCH!');

        // reset pick variables
        pick1 = null;
        pick2 = null;
    }

});





// var card = document.getElementById("#test-card").value;


// function select() {
//     if (".card-container").value = "a" {
//         alert "Hello";
//     }
    
//    else {
//    alert "No thanks";
// };


