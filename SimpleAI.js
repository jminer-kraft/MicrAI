//Reset data to clean slate. Will change to user input later.
//Data stored in lists.
var data0 = [0,0,0,0,0,0,0,0,0,0];
var data1 = [0,0,0,0,0,0,0,0,0,0];
var data2 = [0,0,0,0,0,0,0,0,0,0];
var data3 = [0,0,0,0,0,0,0,0,0,0];
var data4 = [0,0,0,0,0,0,0,0,0,0];
var data5 = [0,0,0,0,0,0,0,0,0,0];
var data6 = [0,0,0,0,0,0,0,0,0,0];
var data7 = [0,0,0,0,0,0,0,0,0,0];
var data8 = [0,0,0,0,0,0,0,0,0,0];
var data9 = [0,0,0,0,0,0,0,0,0,0];
//How far across to go in data
function mainx(){
	x = prompt("What is input x?(0-9)");
	if (typeof null == x || typeof null == y || typeof NaN == x || typeof NaN == y) {
        return (null);
    } else {
        return (x);
    }
}

//How far down to go in data
function mainy(){
    y = prompt("What is input y?(0-9)");
    if (typeof null == x || typeof null == y || typeof NaN == x || typeof NaN == y) {
        return (null);
    } else {
        return (y);
    }
}
var x, y, exit;
//Set data at location y[x] to input
do {
      exit = prompt("Do you want to exit programming mode?")
      x = mainx();
      y = mainy();
      y = eval("data" + y);
    	var out = y[x];
    	out = prompt("Is " + out + " correct? (Give correct answer)");
    	y[x] = out;
    
} while (exit == 'no' || 'No' || 'NO' || 'n' || 'N');

document.write("Data");
document.write("<br>");
document.write(data0);
document.write("<br>");
document.write(data1);
document.write("<br>");
document.write(data2);
document.write("<br>");
document.write(data3);
document.write("<br>");
document.write(data4);
document.write("<br>");
document.write(data5);
document.write("<br>");
document.write(data6);
document.write("<br>");
document.write(data7);
document.write("<br>");
document.write(data8);
document.write("<br>");
document.write(data9);