var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    eval(this.responseText);
    var jbit = {
      "runBitProgram": function(bitprogram) {
        var bitarray = bitprogram.split(String.fromCharCode(parseInt(0xFEFF)));
        for(let i = 0; i < bitarray.length; i++) {
          var bitfunc = bitarray[i].split(String.fromCharCode(parseInt(0x1CBC)));
          var result = this[jpure.maximise(bitfunc[0])](bitfunc[1]);
          if(!result) return; // Every function must return a result.
        }
      },
      "57005": function() { return false; } // Terminate signal 0xDEAD. Return bit 0 to terminate program
    };
  }
};
xhttp.open("GET", "https://raw.githubusercontent.com/Nyanport/jpure/main/src/jpure.js", true);
xhttp.send();