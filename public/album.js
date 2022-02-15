let firstTitle=[];
let secondTitle=[];
let address=[];
let al=[];
for(let i=0;i<count;i++){
    al[i]=data.split(',')[i];

    firstTitle[i]=al[i].split('//')[0];
    secondTitle[i]=al[i].split('//')[1];
    address[i]=al[i].split('//')[2];
}
let html=document.getElementById("albumSection");
function showAlbum(){
    
    let firstText='';

    for(let i=0;i<firstTitle.length;i++){
        if(i>=1){
            if(firstTitle[i]==firstTitle[i-1]){
                continue;
            }
        }
        firstText+='<div class="album">';
        firstText+='<div class="albumCon" id="'+firstTitle[i]+'" onclick="openSecondAlbum(this.id);"><img src="folder.png"></div>';
        firstText+='<div class="albumTi">';
        firstText+='<p>'+firstTitle[i]+'</p>';
        firstText+='</div></div>';
    }
    html.innerHTML=firstText;
}

showAlbum();

function openSecondAlbum(id){
    let secondText='';
    // let firstTitle=[];
    // let secondTitle=[];
    // let address=[];
    // let al=[];
    console.log(id);
    secondText+='<div class="album">';
    secondText+='<div class="albumCon" id="back" onclick="showAlbum();"><img src="refolder.png"></div>';
    secondText+='<div class="albumTi">';
    secondText+='<p>Back</p>';
    secondText+='</div></div>';

    for(let i=0;i<count;i++){
        // al[i]=data.split(',')[i];

        // firstTitle[i]=al[i].split('//')[0];
        // secondTitle[i]=al[i].split('//')[1];
        // address[i]=al[i].split('//')[2];

        

        if(id==firstTitle[i]){
            if(i>=1){
            if(secondTitle[i]==secondTitle[i-1]){
                continue;
            }
        }
            secondText+='<div class="album">';
            secondText+='<div class="albumCon" id="'+firstTitle[i]+'_'+secondTitle[i]+'" onclick="openImage(this.id);"><img src="folder.png"></div>';
            secondText+='<div class="albumTi">';
            secondText+='<p>'+secondTitle[i]+'</p>';
            secondText+='</div></div>';
        }
    }

    html.innerHTML=secondText;
}

function openImage(id){
    let thirdText='';
    let prevId=id.split("_")[0];
    console.log(prevId);
    
    thirdText+='<div class="album">';
    thirdText+='<div class="albumCon" id="back" onclick="showAlbum();"><img src="refolder.png"></div>';
    thirdText+='<div class="albumTi">';
    thirdText+='<p>Back</p>';
    thirdText+='</div></div>';

    for(let i=0;i<count;i++){
        if(id==firstTitle[i]+'_'+secondTitle[i]){
            thirdText+='<div class="album">';
            thirdText+='<div class="albumCon"><img src="'+address[i]+'" alt="사진없음"></div>';
            thirdText+='</div>';
        }
    }
    html.innerHTML=thirdText;
}