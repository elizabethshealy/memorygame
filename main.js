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


var array = ["a","a", "b", "b", "c", "c", "d", "d", "e", "e", "f", "f", "g", "g", "h", "h", "i", "i"];
var newArray = [];

function shuffle(o){
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}

// shuffle(array);

$("#MyButton").click(shuffle(array));

var foos = document.querySelectorAll("#icon");

for (var i = 0; i < foos.length; ++i) {
    foos[i].textContent = array[i];
}

// .replace(/"game-card"/g, "Hello");

// $('#icon').replaceWith( "<p>Here's some new text</p>" );
// $("<p>Here's some new text</p>").replaceAll('#game-card');

// document.querySelectorAll(".class");

// function replaceContentInContainer(selector, content) {
//   var list = document.querySelectorAll(selector);
//   for (var i = 0, length = list.length; i < length; i++) {
//      list[i].innerHTML = content;
//   }
// }

// replaceContentInContainer(".game-card", array);

