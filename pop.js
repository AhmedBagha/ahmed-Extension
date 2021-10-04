const body= document.querySelector("body");
body.style.position="relative";
const outer= document.createElement("div");
outer.setAttribute("class","outer");
// document.querySelector("#container .tablearea section:first-child").after(outer);
body.appendChild(outer);
const container=document.createElement("div");
container.setAttribute("class","container");
outer.appendChild(container);
const icon=document.createElement("div");
icon.setAttribute("class","icon");
container.appendChild(icon);
const drawContainer=document.createElement("div");
drawContainer.setAttribute("class","draw-container");
icon.appendChild(drawContainer);
const div=document.createElement("div");
drawContainer.appendChild(div);
const squar1=document.createElement("span");
div.appendChild(squar1);
const squar2=document.createElement("span");
div.appendChild(squar2);
const squar3=document.createElement("span");
div.appendChild(squar3);
const tail=document.createElement("span");
div.appendChild(tail);

const groups=document.createElement("div");
groups.setAttribute("class","groups");
container.appendChild(groups);
groups.textContent="groups";
const arrow=document.createElement("span");
arrow.setAttribute("class","arrow");
groups.appendChild(arrow);
const groupsUl=document.createElement("ul");
groupsUl.setAttribute("class","ul-st");
groups.appendChild(groupsUl);
const groupsLi1=document.createElement("li");
groupsLi1.setAttribute("class","li-st");
groupsUl.appendChild(groupsLi1);
groupsLi1.textContent="group-A";

const outerTextarea=document.createElement("div");
outerTextarea.setAttribute("class","outer-textarea");
groupsLi1.appendChild(outerTextarea);
const innerTextarea=document.createElement("div");
innerTextarea.setAttribute("class","inner-textarea");
outerTextarea.appendChild(innerTextarea);
const closeButton=document.createElement("div");
closeButton.setAttribute("class","close");
innerTextarea.appendChild(closeButton);
const textarea=document.createElement("textarea");
innerTextarea.appendChild(textarea);

const relative=document.createElement("div");
relative.setAttribute("class","relative");
closeButton.appendChild(relative);
const closeSpanLeft=document.createElement("span");
closeSpanLeft.setAttribute("class","close-span-left");
relative.appendChild(closeSpanLeft);
const closeSpanRight=document.createElement("span");
closeSpanRight.setAttribute("class","close-span-right");
relative.appendChild(closeSpanRight);

const groupsLi2=document.createElement("li");
groupsLi2.setAttribute("class","li-st");
groupsUl.appendChild(groupsLi2);
groupsLi2.textContent="group-B";
const groupsLi3=document.createElement("li");
groupsLi3.setAttribute("class","li-st");
groupsUl.appendChild(groupsLi3);
groupsLi3.textContent="group-C";
const groupsLi4=document.createElement("li");
groupsLi4.setAttribute("class","li-st");
groupsUl.appendChild(groupsLi4);
groupsLi4.textContent="group-D";
const groupsLi5=document.createElement("li");
groupsLi5.setAttribute("class","li-st");
groupsUl.appendChild(groupsLi5);
groupsLi5.textContent="group-E";
const groupsLi6=document.createElement("li");
groupsLi6.setAttribute("class","li-st");
groupsUl.appendChild(groupsLi6);
groupsLi6.textContent="group-F";
const comment=document.createElement("li");
comment.setAttribute("class","li-st");
groupsUl.appendChild(comment);
comment.textContent="comment";

const symbols=document.createElement("div");
symbols.setAttribute("class","symbols");
container.appendChild(symbols);
symbols.textContent="tick marks";
const arrow2=document.createElement("span");
arrow2.setAttribute("class","arrow");
symbols.appendChild(arrow2);
const symbolsUl=document.createElement("ul");
symbolsUl.setAttribute("class","ul-st");
symbols.appendChild(symbolsUl);
const symbolsLi1=document.createElement("li");
symbolsLi1.setAttribute("class","li-st");
symbolsUl.appendChild(symbolsLi1);
symbolsLi1.textContent="MV";
const symbolsLi2=document.createElement("li");
symbolsLi2.setAttribute("class","li-st");
symbolsUl.appendChild(symbolsLi2);
symbolsLi2.textContent="O";
const symbolsLi3=document.createElement("li");
symbolsLi3.setAttribute("class","li-st");
symbolsUl.appendChild(symbolsLi3);
symbolsLi3.innerHTML="&equals;";
const symbolsLi4=document.createElement("li");
symbolsLi4.setAttribute("class","li-st");
symbolsUl.appendChild(symbolsLi4);
symbolsLi4.textContent="✔";
const symbolsLi5=document.createElement("li");
symbolsLi5.setAttribute("class","li-st");
symbolsUl.appendChild(symbolsLi5);
symbolsLi5.textContent="NM";
const symbolsLi6=document.createElement("li");
symbolsLi6.setAttribute("class","li-st");
symbolsUl.appendChild(symbolsLi6);
symbolsLi6.textContent="P";

const symbolsLi7=document.createElement("li");
symbolsLi7.setAttribute("class","li-st");
symbolsUl.appendChild(symbolsLi7);
symbolsLi7.textContent="C";
const symbolsLi8=document.createElement("li");
symbolsLi8.setAttribute("class","li-st");
symbolsUl.appendChild(symbolsLi8);
symbolsLi8.textContent="OCC";

const symbolsLi9=document.createElement("li");
symbolsLi9.setAttribute("class","li-st");
symbolsUl.appendChild(symbolsLi9);
symbolsLi9.textContent="CU";
const symbolsLi10=document.createElement("li");
symbolsLi10.setAttribute("class","li-st");
symbolsUl.appendChild(symbolsLi10);
symbolsLi10.textContent="CL";

const symbolsLi11=document.createElement("li");
symbolsLi11.setAttribute("class","li-st");
symbolsUl.appendChild(symbolsLi11);
symbolsLi11.textContent="PD";
const symbolsLi12=document.createElement("li");
symbolsLi12.setAttribute("class","li-st");
symbolsUl.appendChild(symbolsLi12);
symbolsLi12.textContent="RT";
const symbolsLi13=document.createElement("li");
symbolsLi13.setAttribute("class","li-st");
symbolsUl.appendChild(symbolsLi13);
symbolsLi13.textContent="submit";
const contactus=document.createElement("div");
contactus.setAttribute("class","contact-us");
container.appendChild(contactus);
contactus.textContent="contact us";

const contactusUl=document.createElement("ul");
contactusUl.setAttribute("class","ul-st");
contactus.appendChild(contactusUl);
const contactUsLi1=document.createElement("li");
contactUsLi1.setAttribute("class","li-st");
contactusUl.appendChild(contactUsLi1);
const linkedinLink=document.createElement("a");
linkedinLink.href="#";
contactUsLi1.appendChild(linkedinLink);
const contactUsLi2=document.createElement("li");
contactUsLi2.setAttribute("class","li-st");
contactusUl.appendChild(contactUsLi2);
const whatsappLink=document.createElement("a");
whatsappLink.href="#";
contactUsLi2.appendChild(whatsappLink);
const arrow3=document.createElement("span");
arrow3.setAttribute("class","arrow");
contactus.appendChild(arrow3);

const tabs=document.querySelectorAll(".container > div");
const commentObj= {
  stdes: "",
  stdate: "",
  stref: "",
  stval: "",
  colDes: [],
  gAdes: "",
  arrayOfSymbols: [],
  symbolsSelected: [],
  symbolslist: document.querySelectorAll(".ls_tiklist"),
  arraysymb: [],
  indexOfgroup: 0,
  name: ""
};

outer.onclick=(e)=>{
  e.stopPropagation();
  outer.classList.toggle("tab-move");
  if(outer.classList.contains("overflow")){ 
    outer.classList.remove("overflow");
  }
  
  document.querySelector(".groups ul").classList.toggle("active1",false);
  document.querySelector(".groups .arrow").classList.toggle("rotate",false);
  document.querySelectorAll(".groups .ul-st .li-st").forEach((item)=>{
    item.classList.toggle("opacity",false);
  });
  document.querySelector(".symbols ul").classList.toggle("active2",false);
  document.querySelector(".symbols .arrow").classList.toggle("rotate",false);
  document.querySelectorAll(".symbols > ul li").forEach((item)=>{
    item.classList.toggle("opacity",false);
   });
  document.querySelector(".contact-us ul").classList.toggle("active3",false);
  document.querySelector(".contact-us .arrow").classList.toggle("rotate",false);
  document.querySelectorAll(".contact-us > ul li").forEach((item)=>{
    item.classList.toggle("opacity",false);
  });
};
let stop=false;
closeButton.onclick=(e)=>{
 e.stopPropagation();
 stop=false;
 textarea.value="";
 e.target.classList.remove("close-button"); 
 outerTextarea.classList.remove("textarea-popup");
};
const grouplist=groupsUl.children;
const grouplis=groupsUl.childNodes;
grouplis.forEach((item,index)=>{item.onclick= (event)=>{
  event.stopPropagation();
  if(index===0){
    stop=true;
    outerTextarea.classList.add("textarea-popup");
    closeButton.classList.add("close-button");
  }
    item.classList.toggle("select-color");         
    document.querySelectorAll(".groups > ul li").forEach((value,i)=>{ 
      if(i!=index){
       value.classList.toggle("select-color",false); 
      }
    });      

   commentObj.indexOfgroup=index;
   console.log("index  "+commentObj.indexOfgroup);
    
}});
tabs[1].onclick= (e)=>{
  e.stopPropagation();
  outer.classList.add("overflow");
  groupsUl.classList.toggle("active1");
  arrow.classList.toggle("rotate"); 
  document.querySelectorAll(".groups .ul-st .li-st").forEach((item)=>{
    item.classList.toggle("opacity");
  });
 };
tabs[2].onclick= (e)=>{
   e.stopPropagation();
   outer.classList.add("overflow");
   symbolsUl.classList.toggle("active2"); 
   arrow2.classList.toggle("rotate");  
  document.querySelectorAll(".symbols > ul li").forEach((item)=>{
  item.classList.toggle("opacity");
});
};

tabs[3].onclick= (e)=>{
  e.stopPropagation();
  outer.classList.add("overflow");    
  document.querySelector(".contact-us .ul-st").classList.toggle("active3"); 
  document.querySelector(".contact-us .arrow").classList.toggle("rotate");  
  document.querySelectorAll(".contact-us ul li").forEach((item)=>{
    item.classList.toggle("opacity");
  });
};

document.querySelectorAll(".symbols > ul li").forEach((item,index)=>{item.onclick= (event)=>{
event.stopPropagation();
event.target.classList.toggle("select-color");
}});

textarea.onkeydown=(e)=> {
 if(e.key.toString()=="Enter"){
  const no =document.querySelectorAll(".sd_row td:nth-child(3) span:first-child");   
  let text=textarea.value;
  text=text.split("\n");
  no.forEach((item)=>{
    commentObj.colDes.push(text[parseInt(item.textContent)]);
    console.log("index  "+item.textContent+" "+text[parseInt(item.textContent)]);
  }); 
}
};
// const rowchild=allRow[index].children;
// function a(){
//   commentObj.stdes=rowchild[5].textContent.toString().trim();
//   commentObj.stdate=rowchild[4].textContent.toString().trim();
//   commentObj.stref=rowchild[3].textContent.toString().trim();
//   commentObj.stval=rowchild[6].textContent.toString().trim();
//   commentObj.gAdes=commentObj.colDes[index];
  
//   if(commentObj.stval.includes("(")){
//     commentObj.stval=commentObj.stval.slice(1,commentObj.stval.length-1);
//   }
//   let t=document.querySelector(".highlight td:first-child a");
//   commentObj.name=t.textContent.toString().trim();
//   index++;
//   if(index==allRow.length){
//     clearInterval(idcom);
//   }
// }


function commentAndArrow(){
  
  let allRow=document.querySelectorAll(".sd_row");
  if(allRow.length === 0 ){console.log("wrong bage");}
  else{
    let index=0;
    function a(){
      const rowchild=allRow[index].children;
      commentObj.stdes=rowchild[5].textContent.toString().trim();
      commentObj.stdate=rowchild[4].textContent.toString().trim();
      commentObj.stref=rowchild[3].textContent.toString().trim();
      commentObj.stval=rowchild[6].textContent.toString().trim();
      commentObj.gAdes=commentObj.colDes[index];
      if(commentObj.stval.includes("(")){
        commentObj.stval=commentObj.stval.slice(1,commentObj.stval.length-1);
      }
      const obj={
        c0: `تم فحص العينة بعد الاطلاع على كشف الحساب حيث تتمثل الحركة في  ${commentObj.gAdes+"\n"+"برقم مرجع"+" "+commentObj.stref+"\n"+" بتاريخ"+" "+commentObj.stdate+" "}`,
        c1: ` ${commentObj.stdes+"\n"+"برقم مرجع"+" "+commentObj.stref+"\n"+" بتاريخ"+" "+commentObj.stdate+" "}`,
        c2: `تم مطابقة  ${commentObj.stdes+"\n"+" بتاريخ"+" "+commentObj.stdate+"\n"+"بقيمة "+" "+commentObj.stval+" "+"، "+"برقم مرجع"+" "+commentObj.stref+" "}`,
        c3: `تم فحص الحركة    ${
          "\n"+"برقم قيد"+" "+commentObj.stref +" "+"\n"+" تاريخ الحركة "+" "+commentObj.stdate+"\n"+ "بمبلغ "+" "+commentObj.stval+"حيث تتمثل الحركة في"+"\n"+commentObj.stdes}`,
        c4: `تم مطابقة  ${commentObj.stdes+"\n"+" بتاريخ"+" "+commentObj.stdate+"\n"+"بقيمة "+" "+commentObj.stval+" "+"برقم مرجع"+" "+commentObj.stref+" "+ `   تم اثبات القيد من حساب      الى حساب ${commentObj.name}`}
        `,
        c5: `تم الإطلاع علي المستند   ${
          "\n"+"برقم مرجع"+" "+commentObj.stref +" "+"\n"+" بتاريخ"+" "+commentObj.stdate+"\n"+ "بقيمة "+" "+commentObj.stval+"\n"+commentObj.stdes}`
      };
      
      let t=document.querySelector(".highlight td:first-child a");
      commentObj.name=t.textContent.toString().trim();
      let s=rowchild[6].children;
      let ss=s.item(0).children;
      let arrow=ss.item(1).children;
      arrow.item(0).click();
      rowchild[10].children[2].focus();
      
      rowchild[10].children[2].value=obj[`c${commentObj.indexOfgroup}`];
      
      rowchild[10].children[2].blur();
      index++;
      if(index==allRow.length){
        clearInterval(idcom);
      }
    }
    let idcom=setInterval(a,0);
  }
  
}
comment.onclick=(e)=> {
  e.stopPropagation();
  if(document.querySelector(".groups ul .select-color")!=null){
    document.querySelectorAll(".groups .ul-st .select-color").forEach((item)=>{
      item.classList.remove("select-color");
     });
     document.querySelector(".groups ul").classList.toggle("active1",false);
     document.querySelector(".groups .arrow").classList.toggle("rotate",false);
     document.querySelectorAll(".groups .ul-st .li-st").forEach((item)=>{
       item.classList.toggle("opacity",false);
     }); 
    commentAndArrow();
  }
};

const tableRows=document.querySelectorAll(".sd_row");

function clickOnSymbols() {
  let indexm=0; 
  let idm=0;  
  const symblist=document.querySelectorAll(".ls_tiklist");
  function symbolscolumn(){
    let symbols= symblist[indexm].childNodes;        
          let indexc=0;
          function clicksymbols(){
              console.log("arsy  "+commentObj.arraysymb.indexOf(commentObj.arrayOfSymbols[indexc]));
            //   for(let i=0;i<commentObj.arrayOfSymbols.length;i++){
            //     symbols[`${commentObj.arraysymb.indexOf(commentObj.arrayOfSymbols[i])}`].click();
            //  }
              symbols[`${commentObj.arraysymb.indexOf(commentObj.arrayOfSymbols[indexc])}`].click();
              indexc++;
              if(indexc===commentObj.arrayOfSymbols.length){
            
                clearInterval(idc);
              }
          }
      
          let idc=setInterval(clicksymbols,140);
          
          indexm++;
          if(indexm===symblist.length){
            clearInterval(idm);
            // commentObj.arrayOfSymbols=[];
          }
      }

  idm=setInterval(symbolscolumn,600);
  // console.log(idm);
}

function searchForSy(){
  // commentObj.symbolsSelected=document.querySelectorAll(".symbols .ul-st .color"); 
  const symbolsSelected=document.querySelectorAll(".symbols .ul-st .select-color");
  // console.log(symbolsSelected["0"].textContent+" + "+symbolsSelected.length);
  const lll= document.querySelectorAll(".ls_tiklist");
    // const tt=commentObj.symbolslist["0"];
    // console.log(lll[0]);
  // const symb=document.querySelectorAll("a.row");
  symbolsSelected.forEach((item)=>{
    // for(let item=0;item<lll.length;item++){
    //   console.log(lll[0].children.item(0)+"  kk");
    // }
    // for(let item in lll){
    //    console.log(item);
    // }
  //  for(let value of commentObj.symbolslist["0"]){
  //        console.log(value["0"]);
  //  }
          
      
      lll[0].childNodes.forEach((value)=>{

        if(value.firstChild.textContent.trim()===item.textContent.trim()){
          commentObj.arrayOfSymbols.push(value.firstChild.textContent.trim());
          console.log("length  "+commentObj.arrayOfSymbols.length);
        } 
        else{
          console.log("selected  "+item.textContent.trim()+ "exact before  "+value.firstChild.textContent.trim());
        }
        commentObj.arraysymb.push(value.firstChild.textContent.trim());
        console.log("index "+commentObj.arraysymb.indexOf(`${value.firstChild.textContent.trim()}`));
      });
  });
  
}
symbolsUl.lastElementChild.onclick= (e)=> {
  e.stopPropagation();
  commentObj.arrayOfSymbols=[];
  searchForSy();
 if(commentObj.arrayOfSymbols.length != 0){
    clickOnSymbols();
  }
  else{
    console.log("you selected wrong symbol  "+commentObj.arrayOfSymbols);
  }
  document.querySelectorAll(".symbols .ul-st .select-color").forEach((item)=>{
    item.classList.remove("select-color");
   });

   document.querySelector(".symbols ul").classList.toggle("active2",false);
   document.querySelector(".symbols .arrow").classList.toggle("rotate",false);
   document.querySelectorAll(".symbols > ul li").forEach((item)=>{
     item.classList.toggle("opacity",false);
    });
};



