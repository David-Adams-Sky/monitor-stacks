//  HTML code for the buttons on the HTML layout pages
//  <button class="tablinks" onclick="loadLayout(event, 'A', 'Mon1')">Full</button>
//  <button class="tablinks" onclick="loadLayout(event, 'C', 'Mon1')">4-way</button>
//  <button class="tablinks" onclick="loadLayout(event, 'F', 'Mon1')">9-way</button>
//  <button class="tablinks" onclick="loadLayout(event, 'G', 'Mon1')">12-way</button>
//  <button class="tablinks" onclick="loadLayout(event, 'H', 'Mon1')">16-way</button>
//  <button class="tablinks" onclick="loadLayout(event, 'P', 'Mon1')">10-way</button>
//  <button class="tablinks" onclick="loadLayout(event, 'Q', 'Mon1')">5-way</button>
//  <button class="tablinks" onclick="loadLayout(event, 'R', 'Mon1')">6-way</button>
//  <button class="tablinks" onclick="loadLayout(event, 'S', 'Mon1')">9-way</button>
//  <button class="tablinks" onclick="loadLayout(event, 'V', 'Mon1')">7-way</button>
//  <button class="tablinks" onclick="loadLayout(event, 'X', 'Mon1')">13-way</button>
//  <button class="tablinks" onclick="loadLayout(event, 'Y', 'Mon1')">13-way</button>
//  <button class="tablinks" onclick="loadLayout(event, 'EE', 'Mon1')">7-way</button>
//  <button class="tablinks" onclick="loadLayout(event, 'GG', 'Mon1')">10-way</button>
//  <button class="tablinks" onclick="loadLayout(event, 'OO', 'Mon1')">30-way</button>

// Get the element with id="defaultOpen" and click on it. Displays the default layout on page load.
function openDefaults() {
    'use strict';
    let mon = "";
        for (let i = 1; i < 11; i += 1) {
        mon = "defaultOpen" + i;
        document.getElementById(mon).click();
    }
}

//On layout click, the function "loadLayout" is called with the variables evt, layoutName and mon.
function loadLayout(evt, layoutName, mon) {
    'use strict';
    var i, tabcontent, tablinks;
    
    //tabcontent = document.getElementsByClassName("tabcontent");
    //for (i = 0; i < tabcontent.length; i += 1) {
    //    tabcontent[i].style.display = "none";
    //}
    
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i += 1) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    
    //document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
    
    
    //Change layout to monitor based on layout requested. "Case" is a layout parsed, "mon" is the monitor ID parsed
    switch (layoutName) {
    case "A": // Full
        document.getElementById(mon).innerHTML = '<table class="table"><tr style="height: 240px"><td><input type="text" class="textbox"></td></tr></table>';
        break;
    case "C": // 4-way
        document.getElementById(mon).innerHTML = '<table class="table"><tr style="height: 120px"><td><input type="text" class="textbox"></td><td><input type="text" class="textbox"></td> </tr><tr style="height: 120px"><td><input type="text" class="textbox"></td><td><input type="text" class="textbox"></td></tr></table>';
        break;
    case "E": // 8-way
        document.getElementById(mon).innerHTML = '<table class="table"><tr style="height: 80px"><td></td><td><input type="text" class="textbox"></td><td><input type="text" class="textbox"></td></tr><tr style="height: 80px"><td><input type="text" class="textbox"></td><td><input type="text" class="textbox"></td><td><input type="text" class="textbox"></td></tr><tr style="height: 80px"><td><input type="text" class="textbox"></td><td><input type="text" class="textbox"></td><td><input type="text" class="textbox"></td></tr></table>';
        break;
    case "F": // 9-way
        document.getElementById(mon).innerHTML = '<table class="table"><tr style="height: 80px"><td><input type="text" class="textbox"></td><td><input type="text" class="textbox"></td><td><input type="text" class="textbox"></td></tr><tr style="height: 80px"><td><input type="text" class="textbox"></td><td><input type="text" class="textbox"></td><td><input type="text" class="textbox"></td></tr><tr style="height: 80px"><td><input type="text" class="textbox"></td><td><input type="text" class="textbox"></td><td><input type="text" class="textbox"></td></tr></table>';
        break;
    case "G": // 12-way
        document.getElementById(mon).innerHTML = '<table class="table"> <tr style="height: 60px"> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> </tr> <tr style="height: 60px"> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> </tr> <tr style="height: 60px"> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> </tr> <tr style="height: 60px"> <td colspan="4"></td> </tr> </table>';
        break;
    case "H": // 16-way
        document.getElementById(mon).innerHTML = '<table class="table"> <tr style="height: 60px"> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> </tr> <tr style="height: 60px"> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> </tr> <tr style="height: 60px"> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> </tr> <tr style="height: 60px"> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> </tr> </table>';
        break;
    case "K": // 25-way   
        document.getElementById(mon).innerHTML = '<div id="K" class="tabcontent"> <table class="table"> <tr style="height: 48px"> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> </tr> <tr style="height: 48px"> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> </tr> <tr style="height: 48px"> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> </tr> <tr style="height: 48px"> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> </tr> <tr style="height: 48px"> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> </tr></table></div>'; 
        break;
    case "N": // VT Co-ord 1
        document.getElementById(mon).innerHTML = '<div id="N" class="tabcontent"> <table class="table"> <tr style="height: 60px"> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> </tr> <tr style="height: 120px"> <td colspan="2"><input type="text" class="textbox"></td> <td colspan="2"><input type="text" class="textbox"></td> </tr> <tr style="height: 60px"> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> </tr></table></div>';
        break;
    case "O": // VT Co-ord 2
        document.getElementById(mon).innerHTML = '<div id="O" class="tabcontent"> <table class="table"> <colgroup> <col style="width: 10%;"/> <col style="width: 10%;"/> <col style="width: 10%;"/> <col style="width: 10%;"/> <col style="width: 10%;"/> <col style="width: 10%;"/> <col style="width: 10%;"/> <col style="width: 10%;"/> <col style="width: 10%;"/> <col style="width: 10%;"/> </colgroup> <tr style="height: 48px"> <td colspan="2"><input type="text" class="textbox"></td> <td colspan="2"><input type="text" class="textbox"></td> <td colspan="2"><input type="text" class="textbox"></td> <td colspan="2"><input type="text" class="textbox"></td> <td colspan="2"><input type="text" class="textbox"></td> </tr> <tr style="height: 144px"> <td colspan="5" ><input type="text" class="textbox"></td> <td colspan="5" ><input type="text" class="textbox"></td> </tr> <tr style="height: 48px"> <td colspan="2"><input type="text" class="textbox"></td> <td colspan="2"><input type="text" class="textbox"></td> <td colspan="2"><input type="text" class="textbox"></td> <td colspan="2"><input type="text" class="textbox"></td> <td colspan="2"><input type="text" class="textbox"></td> </tr></table></div>';
        break;
    case "P": // 10+2
        document.getElementById(mon).innerHTML = '<table class="table"> <tr style="height: 60px"> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> </tr> <tr style="height: 60px"> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> </tr> <tr style="height: 120px"> <td colspan="2"><input type="text" class="textbox"></td> <td colspan="2"><input type="text" class="textbox"></td> </tr> </table>';
        break;
    case "Q": // 3+2
        document.getElementById(mon).innerHTML = '<table class="table"> <colgroup> <col style="width: 25%;"/> <col style="width: 25%;"/> <col style="width: 25%;"/> <col style="width: 25%;"/> </colgroup> <tbody> <tr style="height: 60px"> <td colspan="2" rowspan="2"><input type="text" class="textbox"></td> <td colspan="2"></td> </tr> <tr style="height: 60px"> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> </tr> <tr style="height: 120px"> <td colspan="2" rowspan="2"><input type="text" class="textbox"></td> <td colspan="2" rowspan="2"><input type="text" class="textbox"></td> </tr> </table>';
        break;
    case "R": // 4+2
        document.getElementById(mon).innerHTML = '<table class="table"> <colgroup> <col style="width: 25%;"/> <col style="width: 25%;"/> <col style="width: 25%;"/> <col style="width: 25%;"/> </colgroup> <tbody> <tr style="height: 60px"> <td colspan="4"></td> </tr> <tr style="height: 60px"> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> </tr> <tr style="height: 120px"> <td colspan="2" rowspan="2"><input type="text" class="textbox"></td> <td colspan="2" rowspan="2"><input type="text" class="textbox"></td> </tr> </table>';
        break;
    case "S": // 8+1
        document.getElementById(mon).innerHTML = '<table class="table"> <colgroup> <col style="width: 25%;"/> <col style="width: 25%;"/> <col style="width: 25%;"/> <col style="width: 25%;"/> </colgroup> <tbody> <tr style="height: 60px"> <td colspan="4"></td> </tr> <tr style="height: 60px"> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> </tr> <tr style="height: 60px"> <td colspan="2" rowspan="2"><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> </tr> <tr style="height: 60px"> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> </tr> </table>';
        break;
    case "V": // 3+4
        document.getElementById(mon).innerHTML = '<table class="table"> <colgroup> <col style="width: 25%;"/> <col style="width: 25%;"/> <col style="width: 25%;"/> <col style="width: 25%;"/> </colgroup> <tbody> <tr style="height: 60px"> <td colspan="2" rowspan="2"><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> </tr> <tr style="height: 60px"> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> </tr> <tr style="height: 120px"> <td colspan="2" rowspan="2"><input type="text" class="textbox"></td> <td colspan="2" rowspan="2"><input type="text" class="textbox"></td> </tr> </table>';
        break;
    case "W": // 
        document.getElementById(mon).innerHTML = '<table class="table"> <tr style="height: 60px"> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> </tr> <tr style="height: 60px"> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> </tr> <tr style="height: 120px"> <td colspan="2"><input type="text" class="textbox"></td> <td colspan="2"><input type="text" class="textbox"></td> </tr> </table>';
        break;
    case "X": // 12+1
        document.getElementById(mon).innerHTML = '<table class="table"> <colgroup> <col style="width: 25%;"/> <col style="width: 25%;"/> <col style="width: 25%;"/> <col style="width: 25%;"/> </colgroup> <tbody> <tr style="height: 60px"> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> </tr> <tr style="height: 60px"> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> </tr> <tr style="height: 60px"> <td colspan="2" rowspan="2"><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> </tr> <tr style="height: 60px"> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> </tr> </table>';
        break;
    case "Y": // 1+12
        document.getElementById(mon).innerHTML = '<table class="table"> <colgroup> <col style="width: 25%;"/> <col style="width: 25%;"/> <col style="width: 25%;"/> <col style="width: 25%;"/> </colgroup> <tbody> <tr style="height: 60px"> <td colspan="2" rowspan="2"><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> </tr> <tr style="height: 60px"> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> </tr> <tr style="height: 60px"> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> </tr> <tr style="height: 60px"> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> </tr> </table>';
        break;
    case "AA": // 24-way VT Co-ord
        document.getElementById(mon).innerHTML = '<div id="AA" class="tabcontent"> <table class="table"> <colgroup> <col style="width: 10%;"/> <col style="width: 10%;"/> <col style="width: 10%;"/> <col style="width: 10%;"/> <col style="width: 10%;"/> <col style="width: 10%;"/> <col style="width: 10%;"/> <col style="width: 10%;"/> <col style="width: 10%;"/> <col style="width: 10%;"/> </colgroup> <tr style="height: 48px"> <td colspan="2"><input type="text" class="textbox"></td> <td colspan="2"><input type="text" class="textbox"></td> <td colspan="2"><input type="text" class="textbox"></td> <td colspan="2"><input type="text" class="textbox"></td> <td colspan="2"><input type="text" class="textbox"></td> </tr> <tr style="height: 48px"> <td colspan="2"><input type="text" class="textbox"></td> <td colspan="2"><input type="text" class="textbox"></td> <td colspan="2"><input type="text" class="textbox"></td> <td colspan="2"><input type="text" class="textbox"></td> <td colspan="2"><input type="text" class="textbox"></td> </tr> <tr style="height: 48px"> <td colspan="2"><input type="text" class="textbox"></td> <td colspan="2"><input type="text" class="textbox"></td> <td colspan="2"><input type="text" class="textbox"></td> <td colspan="2"><input type="text" class="textbox"></td> <td colspan="2"><input type="text" class="textbox"></td> </tr> <tr style="height: 48px"> <td colspan="2"><input type="text" class="textbox"></td> <td colspan="2"><input type="text" class="textbox"></td> <td colspan="2"><input type="text" class="textbox"></td> <td colspan="2"><input type="text" class="textbox"></td> <td colspan="2"><input type="text" class="textbox"></td> </tr> <tr style="height: 48px"> <td> </td> <td colspan="2"><input type="text" class="textbox"></td> <td colspan="2"><input type="text" class="textbox"></td> <td colspan="2"><input type="text" class="textbox"></td> <td colspan="2"><input type="text" class="textbox"></td> <td> </td> </tr></table></div>';
        break;            
    case "EE": // 6+1
        document.getElementById(mon).innerHTML = '<table class="table"> <colgroup> <col style="width: 25%;"/> <col style="width: 25%;"/> <col style="width: 25%;"/> <col style="width: 25%;"/> </colgroup> <tbody> <tr style="height: 80px"> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> </tr> <tr style="height: 80px"> <td colspan="3" rowspan="2"><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> </tr> <tr style="height: 80px"> <td><input type="text" class="textbox"></td> </tr> </table>';
        break;
    case "GG": // 2+10
        document.getElementById(mon).innerHTML = '<table class="table"> <tr style="height: 120px"> <td colspan="2"><input type="text" class="textbox"></td> <td colspan="2"><input type="text" class="textbox"></td> </tr> <tr style="height: 60px"> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> </tr> <tr style="height: 60px"> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> </tr> </table>';
        break;
    case "OO": // 30
        document.getElementById(mon).innerHTML = '<div id="OO" class="tabcontent"> <table class="table"> <tr style="height: 48px"> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> </tr> <tr style="height: 48px"> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> </tr> <tr style="height: 48px"> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> </tr> <tr style="height: 48px"> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> </tr> <tr style="height: 48px"> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> </tr></table></div>'; 
        break;
    }
}