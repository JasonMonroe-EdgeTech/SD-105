let outstanding = require('./invoices.json');

console.log("\n\n---------\nContract Invoices over $25,000:\n");

//process invoices, printing contract invoices over 25,000
for(let i = 0 ; i < outstanding.invoices.length; i++){
    if(outstanding.invoices[i].id.substr(0,4)=="CONT" && outstanding.invoices[i].total > 25000){
        console.log(outstanding.invoices[i].id+" - "+outstanding.invoices[i].total);
    }
}

console.log("\n\n---------\nEquipment and Repair Invoices:\n");

//process invoices, printing Equipment and Repair invoices (EQINV or REPINV)
for(let i = 0 ; i < outstanding.invoices.length; i++){
    if(outstanding.invoices[i].id.substr(0,2)=="EQ"||outstanding.invoices[i].id.substr(0,3)=="REP"){
        console.log(outstanding.invoices[i].id+" - "+outstanding.invoices[i].total);
    }
}

console.log("\n\n---------\ncontract Invoices or Any Invoice that is at least $15,000:\n");

//print all cONT invoices or ANY invoice that is at least 15000
for(let i = 0 ; i < outstanding.invoices.length; i++){
    if(outstanding.invoices[i].id.substr(0,4)=="cONT"||outstanding.invoices[i].total >=15000){
        console.log(outstanding.invoices[i].id+" - "+outstanding.invoices[i].total);
    }
}
