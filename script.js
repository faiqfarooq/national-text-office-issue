'use strict';


const firstName=document.getElementById("firstname");
const surName=document.getElementById("lname");
const dataOfBirth=document.getElementById("DOB");
const gender=document.querySelector(".radio-input");


let genderinfo;
const fnamedata=[];
const snamedata=[];
const dobdata=[];




  ////////////////////////gender///////////////

  function genderselect(){
    if(document.getElementById('male').checked) { 
        genderinfo = document.getElementById("male").value ;
           
    } 
    else if(document.getElementById('female').checked) { 
        genderinfo = document.getElementById("female").value ;
        
    } 
    else{
        document.getElementById("select-radio").innerHTML="Plese Select Male Or Female";
    }

}




////////////////////convert the input field into the upper case
function upperCase() {
    
    firstName.value =firstName.value.toUpperCase();
    surName.value =surName.value.toUpperCase();
  }












function loadData(){
   
    const obj={
        fname:firstName.value,
        sname:surName.value,
        dob:dataOfBirth.value,
        gender:genderinfo
    }
/////////////////////////time/////////////////////
    const year=new Date(obj.dob).getFullYear();
    const month=new Date(obj.dob).getMonth() ;
    const day=new Date(obj.dob).getDate();

    const yearinfo=String(year);
    const dayinfo=String(day);
    let j=0;
    let montharr=['A','B','C','D','E','F','G','H','I','J','K','T'];
    for(let i=2;i<4;i++){
     
     dobdata[j]=yearinfo[i];
     j++;
    }
///////////////////set the month ==
    dobdata[2]=montharr[month];

/////////////////date////////////////////

if(genderinfo ==='M'){
    if(day < 10){
        dobdata[3]='0';
        dobdata[4]=dayinfo;
    }
    else{
        dobdata[3]=dayinfo;
    }

}
else if (genderinfo ==='F'){
    dobdata[3]=String(day+40);

}





   //////////remove the vowels /////////////
  
    const fnamestr = obj.fname;
    const snamestr = obj.sname;
 const fnameNoVowels = fnamestr.replace(/[aeiou]/gi, '');
 const fnameWithVowels=fnamestr.replace(/[bcdfghjklmnpqrstvwxyz]/gi,'');
 const snameNoVowels = snamestr.replace(/[aeiou]/gi, '');
 const snameWithVowels=snamestr.replace(/[bcdfghjklmnpqrstvwxyz]/gi,'');

///////////////////////surname//////////////////////

if(snameNoVowels.length === 3){
    for(let i =0;i<3;i++){
        snamedata[i]= snameNoVowels[i]; 
    }
}
else if(snameNoVowels.length > 3){
    for(let i =0;i<3;i=i+2){
        snamedata[i]= snameNoVowels[i]; 
    }
    snamedata[2]=snameWithVowels[3];
}
else if(snameNoVowels.length<3){
    for(let i =0;i<2;i++){
        snamedata[i]= snameNoVowels[i]; 
    }
    snamedata[2]=snameWithVowels[0];
}
if(snamestr.length<3){
    for(let i =0;i<2;i++){
        snamedata[i]=snameNoVowels[i];
        
    }
    snamedata[1]=snameWithVowels[0];
    snamedata[2]='X';
}


///////////////////////first name///////////////////
if(fnameNoVowels.length >= 3){
    for(let i =0;i<3;i++){
       
        fnamedata[i]= fnameNoVowels[i]; 
    }
}

else if(fnameNoVowels.length<3){
    for(let i =0;i<2;i++){
        fnamedata[i]= fnameNoVowels[i]; 
    }
    fnamedata[2]=fnameWithVowels[0];
}
if(fnamestr.length<3){
    for(let i =0;i<2;i++){
        fnamedata[i]=fnameNoVowels[i];
        
    }
    fnamedata[1]=fnameWithVowels[0];
    fnamedata[2]='X';
}






      ///////////////////concate/////////////
  const arr1=String(fnamedata);
  const arr2=String(snamedata);
  const arr3=String(dobdata);
  const children = arr2.concat(arr1, arr3);
  const result = children.replace(/[,]/gi, '');

  document.querySelector('.id-issue').textContent=result;
   console.log(result);
   console.log('see this bro');
   console.log( arr1);
   console.log(arr2 );
   console.log(arr3 );
   console.log("without");
   console.log(fnamedata);
   console.log(snamedata);
   console.log(dobdata);

   
    
}

