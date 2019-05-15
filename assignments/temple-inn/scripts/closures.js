var closures = new XMLHttpRequest();
closures.open('GET', 'https://mintner.github.io/assignments/temple-inn/closures.json', true)
closures.send();

closures.onload = function () {
    var dates = JSON.parse(closures.responseText);
    

    document.getElementById('wash').innerHTML = dates.Templehours["0"].closures;
    document.getElementById('oak').innerHTML = dates.Templehours["1"].closures;
    
    for (var i = 0; i < 10; i++) {
        var salt = 'salt' + i;
        var num =  i;
      
          document.getElementById(salt).innerHTML = dates.Templehours[2].closures[i];
        
    }
    
    for (var i = 0; i < 8; i++) {
        var gil = 'gil' + i;
        var num =  i;
      
          document.getElementById(gil).innerHTML = dates.Templehours[3].closures[i];
        
    }
};