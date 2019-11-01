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
           var d1 = "la"+this.id.charAt(2);
           var df1 = document.getElementById(d1);
            icon.call(df1);
        }
     }
    if (event.which === 13  ) {
        if(this.value !=""){
        focus.call(this);}
        
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
    var e= document.createElement("icon");
    var linebreak = document.createElement("br");
    x.type = "text";
    x.className = "new";  // set the CSS class
    x.placeholder= "list item";
    x.id="li"+i;
    e.className ="fas fa-plus";
    e.id="la"+i;
    // list.appendChild(ins.x);
    //var ins = document.createElement("li");
    //addl(ins,x)
    list.appendChild(e);
    e.insertAdjacentElement("afterend", x);
    list.appendChild(linebreak);
    //console.log(x);
    console.log("werty");
    i++;
     x.addEventListener("click",addel);
     x.addEventListener("blur",remel);
     x.addEventListener("keypress", itemKeypress);
     e.addEventListener("click",ican);
    } 
    if(a==0 && a1==0 ){
    list.removeChild(list.childNodes[1]);    
    i--;}
    if(a1==1 && a==0){  
      
      var y1="li"+(q);
      var y11="la"+(q);
      var s=document.getElementById(y1).nextSibling.nextSibling.nextSibling;
      console.log(s);
      var y=document.getElementById(y1);
      var y01=document.getElementById(y1).nextSibling;
      var y02=document.getElementById(y1).previousSibling;
      var z1 = document.getElementById(y11).nextSibling.nextSibling.nextSibling;
     // console.log(y1);
      list.removeChild(y02);
      list.removeChild(y01);
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
     for(var d=0;d<i-q;d++)
     {var j=z1.id;
        var sd = z1.id.charAt(2);
        var sdd= parseInt(sd) +1;
        console.log(j);
       z1.id = "la"+(sd-1);
       z1=document.getElementById("la"+sdd); 
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
function icon(){
    var d = "li"+this.id.charAt(2);
    df = document.getElementById(d);
    console.log(df.value);
    if (df.value != "") {
       //this.className = "far fa-check-square";
       this.className ="far fa-square";
       df.className = "le";

    }
    // if (df.value =="")
    // {
    //     focus.call(df);
    //     this.className = "fa-plus-square";
    // }
    
}
function ican(){
    var d = "li"+this.id.charAt(2);
    df = document.getElementById(d);
    console.log(this.className);
    if (this.className == "far fa-check-square") {
       //this.className = "far fa-check-square";
     this.className ="far fa-square";
     df.className = "le";
    }
    else if (this.className =="far fa-square")
    {
        this.className = "far fa-check-square";
        df.className = "lc";
    }
    
}

// function addl(ins,x){
    
//     list.appendChild(x);
//     console.log("hi");
// }  