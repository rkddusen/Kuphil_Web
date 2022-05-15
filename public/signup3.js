let dbid_data = [];
let dbpwd_data = [];
let dbone_data = [];

for (let i=0; i<count; i++) {
    dbone_data[i] = data.split('//');
    console.log(dbone_data[i]);
    //id_data[i] = one_data[i].split('/')[0];
    //pwd_data[i] = one_data[i].split('/')[1];
}

let html = document.getElementById("dataSection");

function showdataSection() {
    let dataall = '';

    for (let i=0; i<dbid_data.length; i++) {
        //dataall = '<p>'+id_data[i]+pwd_data[i]+'</p>';
        dataall = '<p>'+dbone_data[i]+'</p>';
    }
    html.innerHTML=dataall;

}

showdataSection();
