var i=0;
var btnn=1;
var li = [];
var title = document.getElementById("h1");
var list = document.getElementById("UL");
var inputs = list.querySelectorAll("input");
var slider = document.getElementById("off");
console.log(slider);
var btn= document.getElementById("onn");
// li.length=1;

var b = "li"+(i);
li[0] = list.childNodes[1];
btn.addEventListener("click",ap);
title.addEventListener("click",addtitle);
title.addEventListener("blur",notitle);
title.addEventListener("keypress", itemKeypress);
slider.addEventListener("click",slid);


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
        this.setAttribute("style","background-color:grey");
        console.log("hi");
        console.log(this.className);
        if(this.id.charAt(2) == (i-1) && this.value != '' )
        {console.log("hi")
         console.log(this.className);
            addli(1,1);
           var d1 = "la"+this.id.charAt(2);
           var df1 = document.getElementById(d1);
            icon.call(df1);
        }
     }
    if (event.which === 13  ) {
        if(this.value !=""){
        focus.call(this);
        if(i!=1){
        var z = this.id.charAt(2);
      //  var zw = document.getElementById("ln"+z);
      //  this.className="uc";
     //   zw.className="nu";
        }
    }
        
        else if(this.id.charAt(2) != (i-1) && this.value =="")
        {   console.log(i);
            console.log(this.id.charAt(2));
           // i--;
            focus.call(this);
           
        }
    }
    if ((event.which === 8 || event.which === 46 )&& this.value=="")
    { console.log("hwelooooo");
        var z = this.id.charAt(2);
     addli(0,1,z)
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
    addli(0,0,0);
    title.placeholder = "Take a note...";
}


function addli(a,a1,q){
    if(a==1 ){
    var x= document.createElement("input");
    var e= document.createElement("icon");
    var n= document.createElement("icon");
    var linebreak = document.createElement("br");
    x.type = "text";
    x.className = "new";  // set the CSS class
    x.placeholder= "list item";
    x.id="li"+(i);
    e.className ="fas fa-plus";
    e.id="la"+(i);
    n.id="ln"+(i);
    n.className="far fa-times-circle"
    // list.appendChild(ins.x);
    //var ins = document.createElement("li");
    //addl(ins,x)
    list.appendChild(e);
    e.insertAdjacentElement("afterend", x);
    list.appendChild(n);
    list.appendChild(linebreak);
    //console.log(x);
    console.log("werty");
    i++;
     x.addEventListener("click",addel);
     x.addEventListener("focus",high);
     x.addEventListener("blur",remel);
     x.addEventListener("keypress", itemKeypress);
     e.addEventListener("click",ican);
     n.addEventListener("click",remm)
    } 
    if(a==0 && a1==0 ){
    var y1="li"+(q);
    var y=document.getElementById(y1);  
       y.removeEventListener("click",hi );
       y.removeEventListener("blur", hi);
       y.removeEventListener("keypress",hi );
     for (let sa = 1; sa < 5; sa++) {
        list.removeChild(list.childNodes[4*q+1]); 
        }
        i--;
    }
    if(a1==1&& a==0){  
      
      var y1="li"+(q);
      var y11="la"+(q);
      var y12="ln"+(q);
      var s=document.getElementById(y1).nextSibling.nextSibling.nextSibling.nextSibling;
      console.log(s);
      console.log(document.getElementById("la0"));
      var y=document.getElementById(y1);
      var y01=document.getElementById(y12);
      var y02=document.getElementById(y11);
      var y03=document.getElementById(y12).nextSibling;
      
      console.log(document.getElementById("ln0"));
      console.log(document.getElementById("ln0").nextSibling);
      var z3= document.getElementById(y12).nextSibling.nextSibling.nextSibling.nextSibling;
      var z1 =document.getElementById(y11).nextSibling.nextSibling.nextSibling.nextSibling;
      console.log(z3);
      list.removeChild(y02);
      list.removeChild(y01);
      list.removeChild(y);
      list.removeChild(y03);
     // console.log(i);
      i--;
     console.log("removed");
    //   if(q ==i-1 )
    //    alert("please type something");
     y.removeEventListener("click",hi );
     y.removeEventListener("blur", hi);
     y.removeEventListener("keypress",hi );
     y01.removeEventListener("click",hi);
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
     for(var d=0;d<i-q;d++)
     {var j=z3.id;
        var sd = z3.id.charAt(2);
        var sdd= parseInt(sd) +1;
       z3.id = "ln"+(sd-1);
       z3=document.getElementById("ln"+sdd); 
     }
      }
    
    b="li"+(i)
    //console.log(list.childNodes.length);
    console.log(b);
   // console.log(inputs);
}

function addel(){
   // console.log(this.value);
//   this.className="foc";
this.setAttribute("style","background-color:grey");
    if(this.id.charAt(2) == (i) && this.value !="")
    {//console.log("hi")
       // this.className="foc";
        addli(1,1);
    }
}
function remel(){
    console.log(this);
    // app();
    //addli(1,0,i)
    //this.className="uc";
    this.setAttribute("style","background-color:white");
    if(this.value == "" && this.id.charAt(2) != (i-1))
    {//console.log("n odoubt");
    var z = this.id.charAt(2);
        addli(0,1,z);

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
       if(this.className=="fas fa-plus")
       this.className ="far fa-square";
       this.setAttribute("style","background-color:white");

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
     if(btnn ==0)
     ap();
    }
    else if (this.className =="far fa-square")
    {
        this.className = "far fa-check-square";
        df.className = "lc";
        if(btnn ==0)
        ap();
    }
    
}

function high(){
    var z = this.id.charAt(2);
    var zw = document.getElementById("ln"+z);
    if(this.value !="")
    {//zw.className="foc";
    zw.display = "initial";
    console.log(zw)
    
    }
}
function remm(){
    var z= this.id.charAt(2);
    if(z==0 && i==1){
        for (let sa = 1; sa < 5; sa++) {
          list.removeChild(list.childNodes[sa]);  
     }
  }

   if(z!=i-1)
   addli(0,1,z);
   else if(z==i-1 && z!=0)
   addli(0,0,z);
    
    if(btnn==0) ap();
  
}
function swap(a,b){
    var aa1=list.childNodes[4*a+1].className;
    var aa2=list.childNodes[4*a+2].value;
    var aa3=list.childNodes[4*a+2].className;
    list.childNodes[4*a+2].value = list.childNodes[4*b+2].value;
    list.childNodes[4*b+2].value = aa2;
    list.childNodes[4*a+1].className = list.childNodes[4*b+1].className;
    list.childNodes[4*b+1].className = aa1;
    list.childNodes[4*a+2].className = list.childNodes[4*b+2].className;
    list.childNodes[4*b+2].className = aa3;
    console.log(list.childNodes[4*b+2].className);

}
function ap() {
 if(i>2){
   var last="li"+(i-1);
   if(i!=0){
   if(document.getElementById(last).value == "")
       {addli(0,0,i-1);
       console.log("hi");}
   else{
        var las ="la"+(i-1) ;
        if(document.getElementById(las).className=="fas fa-plus")
        document.getElementById(las).className="far fa-square";
      }    
     
    app(); 

   }
} 
 }      
function app(){
    for (let a = 0; a < i-1; a++) {
        for (let b = 0; b < i-a-1; b++) {
            var c=document.getElementById("li"+b).className
            var d=document.getElementById("li"+(b+1)).className
            if(c=="lc" && d!="lc")
              {swap(b,b+1);}
            
        }
        
    }  
}
 function slid(){
     if(this.id =="on") {
         this.id="off";
         btnn=1;
         btn.id="onn"
         btn.addEventListener("click",ap)
      }

     else if(this.id =="off"){
         this.id = "on";
         btnn=0;
         btn.id="of";
         btn.removeEventListener("click",ap);
         console.log(this);
        ap();
     }

 }
// function addl(ins,x){
    
//     list.appendChild(x);
//     console.log("hi");
// }  