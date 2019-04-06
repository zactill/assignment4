var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-1.12.4.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

var rate = 15;
var overtime = 22.5;
var hours[];
var pay[];


function getHours(){
while (hours!=-1) {
var numHours = window.prompt("Enter number of hours worked for employee: \n Enter -1 if no more Employees to enter", "# of hours");

  if(numHours==-1){
   break;
  }
  else {
    hours.push(numHours);
      if (numHours>40) {
        pay.push((40*rate)+((numHours-40)*overtime));
      }
      else {
        pay.push(40*rate);
      }
    }
  }
  makeTable(hours,pay);
}

function makeTable(hArr, pArr){
 var tbl = document.getElementById('reportTable')
 var length = hArr.length;
 var total = 0;

 for (var i = 0; i < len; i++) {
     var tr = tbl.insertRow();

     var employee = tr.insertCell();
     employee.appendChild(document.createTextNode(i+1));

     var empHours = tr.insertCell();
     empHours.appendChild(document.createTextNode(hArr[i]));

     var empPay = tr.insertCell();
     empPay.appendChild(document.createTextNode('$' + pArr[i]));

     total +=Arr[i];
   }

   $("h2").text("Total Pay to all Employees: " + total);
}

$(document).ready(getHours);
