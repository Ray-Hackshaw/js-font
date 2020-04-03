//Forked code from @kerimdzhanov and his random.js repo.
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

function fontChangerStart() {
    var font_array = ["Helvetica", "Courier", "Florence", "Times New Roman", "Arial", "Georgia", "Geneva", "Tahoma", "Trebuchet MS", "Verdana"];
    var word_array = ["farewell", "adieu", "arrivederci", "sayonara", "au revoir", "aveo", "soraidh slàn", "despedida", "afscheid", "goodbye"];
    var random = getRandomInt(0, 9);
   // document.getElementById("first").style.fontFamily = font_array[getRandomInt(0, 9)];
   // document.getElementById("second").style.fontFamily = font_array[getRandomInt(0, 9)];
   // document.getElementById("third").style.fontFamily = font_array[getRandomInt(0, 9)];
   // document.getElementById("fourth").style.fontFamily = font_array[getRandomInt(0, 9)];
   // document.getElementById("fifth").style.fontFamily = font_array[getRandomInt(0, 9)];
    document.getElementById("sixth").style.fontFamily = font_array[random];
    document.getElementById("sixth").innerHTML = word_array[random];

    clearTimeout(fontChangerStart.interval);
    fontChangerStart.interval = setTimeout(function(){ fontChangerStart(); }, 75); 
}

