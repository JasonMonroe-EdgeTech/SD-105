let outstanding = require('./invoices.json');

//print all CONT invoices or ANY invoice that is at least 15000
for(let i = 0 ; i < outstanding.invoices.length; i++){
    if(outstanding.invoices[i].id.substr(0,4)=="CONT"||outstanding.invoices[i].total >=15000){
        console.log(outstanding.invoices[i].id+" - "+outstanding.invoices[i].total);
    }
}



//
// //process invoices, printing Equipment and Repair invoices (EQINV or REPINV)
// for(let i = 0 ; i < outstanding.invoices.length; i++){
//     if(outstanding.invoices[i].id.substr(0,2)=="EQ"||outstanding.invoices[i].id.substr(0,3)=="REP"){
//         console.log(outstanding.invoices[i].id+" - "+outstanding.invoices[i].total);
//     }
// }