const list =document.querySelector(".navbar");
console.log(list);

const listitem = document.createElement("li");
const text = document.createTextNode("service")
// console.log(text);
// console.log(listitem);
 
const frist =document.querySelector(".frist");

listitem.appendChild(text);
listitem.classList.add("nav-item");
// list.appendChild(listitem);
// list.replaceChild(listitem,frist);
list.removeChild();

list.prepend(listitem);

list.insertBefore(listitem,frist);
console.log(listitem);