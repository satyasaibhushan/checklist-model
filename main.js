var i=0;
var li = [];
var title = document.getElementById("h1");
var list = document.getElementById("UL");
var inputs = list.querySelectorAll("input");
// li.length=1;

var b = "li"+(i);
li[0] = list.childNodes[1];

title.addEventListener("click",addtitle);
title.addEventListener("blur",notitle);
title.addEventListener("keypress", itemKeypress);


function addtitle(){
  
    if(this.className =="")
    {   this.className = "edit";
        listadd();
    }  
}
function notitle(){

    if(this.value == "" && i==1 && this.value == ""){
    this.className = "";
    listrem();
    }
}
function itemKeypress(event) {
    // console.log("hi");
    if (this.id!="h1")
     {//console.log(this.value);
        if(this.id.charAt(2) == (i-1) && this.value != '' )
        {//console.log("hi")
            addli(1,1);
        }
     }
    if (event.which === 13  ) {
        if(this.value !="")
        focus.call(this);
        else if(this.id.charAt(2) != (i-1) && this.value =="")
        {   console.log(i);
            console.log(this.id.charAt(2));
           // i--;
            focus.call(this);
           
        }
    }
    
  }
function listadd(){
  
    title.placeholder = "Title";
    addli(1,0);
}
function adel(){
    addli(1);

}


function focus(){
    if(this.id=="h1")
    document.getElementById("li0").focus();
    else{
     var z = this.id.charAt(2);
     var z1= parseInt(z) +1;
    // document.getElementById("li"+(-("li"-this.id)))  
   // console.log("li"+z1);
    document.getElementById("li"+z1).focus();
    }
  
 }
function listrem(){
    addli(0,0);
    title.placeholder = "Take a note...";
}


function addli(a,a1,q){
    if(a==1 ){
    var x= document.createElement("input");
    x.type = "text";
    x.className = "edit";  // set the CSS class
    x.placeholder= "list item";
    x.id="li"+i;
    // list.appendChild(ins.x);
    //var ins = document.createElement("li");
    //addl(ins,x)
    list.appendChild(x);
    //console.log(x);
    console.log("werty");
    i++;
     x.addEventListener("click",addel);
     x.addEventListener("blur",remel);
     x.addEventListener("keypress", itemKeypress);
    
    } 
    if(a==0 && a1==0 ){
    list.removeChild(list.childNodes[1]);    
    i--;}
    if(a1==1 && a==0){  
      
      var y1="li"+(q);
      var s=document.getElementById(y1).nextSibling;
      var y=document.getElementById(y1);
     // console.log(y1);
      list.removeChild(y);
     // console.log(i);
      i--;
     console.log("removed");
    //   if(q ==i-1 )
    //    alert("please type something");
     y.removeEventListener("click",hi );
     y.removeEventListener("blur", hi);
     y.removeEventListener("keypress",hi );
     var s1=[];
     for(var d=0;d<i-q;d++)
     {var j=s.id;
        var sd = s.id.charAt(2);
        var sdd= parseInt(sd) +1;
        console.log(j);
       s.id = "li"+(sd-1);
       s=document.getElementById("li"+sdd); 
     }

      }
    
    b="li"+(i)
    //console.log(list.childNodes.length);
    console.log(b);
   // console.log(inputs);
}

function addel(){
   // console.log(this.value);
    if(this.id.charAt(2) == (i) && this.value !="")
    {//console.log("hi")
        addli(1,1);
    }
}
function remel(){
    console.log(this);
    if(this.value == "" && this.id.charAt(2) != (i-1))
    {//console.log("n odoubt");
    var z = this.id.charAt(2);
        addli(0,1,z)
    }
}
function hi(){
console.log("removeddddd")
}
// function addl(ins,x){
    
//     list.appendChild(x);
//     console.log("hi");
// }  