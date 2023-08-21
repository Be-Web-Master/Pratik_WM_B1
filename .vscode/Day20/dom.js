// Ques1
// const main = document.getElementById("main-heading")
// console.log(main);

// Ques2
// const elem = document.getElementById("name")
// console.log(elem.type)

// Ques3
// const elem = document.getElementById("name")
// console.log(elem.name)

//Ques4
// const eleId = document.getElementById("name")
// console.log(eleId.id);

// Ques5
// const eleValue = document.getElementById("name")
// console.log(eleValue.value);

//Ques6
// const query = document.querySelectorAll(".list")
// console.log(query[0].innerHTML);

// Ques7
// const querySelector = document.querySelector('.content')
// console.log(querySelector);

// Ques8
// const body = document.body.children
// console.log(body);

// Ques9
// const tagName = document.getElementsByTagName("li")[0]
// console.log(tagName);  

// Ques10
// const className = document.getElementsByClassName("content")
// console.log(className)

// Ques11
// const byName = document.getElementsByName("fullName")
// console.log(byName);

//Ques12
// const n = document.getElementById("main-heading")
// console.log(n.classList);

// Ques13
//const add = document.getElementById("main-heading")

//console.log(add.classList.add("highlight"));
// console.log(add)

// Ques14
// consol.log(add.classList.remove);
// console.log(add);

// Ques15
// const t = document.getElementsByClassName("inner-box")
// console.log(t[0].classList.toggle("class"));
// console.log(t);

// Ques16
// const elem = document.getElementsByClassName("inner-box") 
// console.log(elem.classList.has("active"));

// Ques17
// const n = document.getElementById("name")
// console.log(n.classList.contains("input-field"));


// Ques18 (Old sheet)
// const col = document.getElementById("main-heading")
// col.style.backgroundColor ="red"
// console.log(col.style.backgroundColor);

// Ques18 (new sheet)
// const n = document.getElementsByClassName("item 2")
// console.log(n.match);

// Ques20
// const n = document.getElementById("container").getElementsByClassName("inner-box")
// console.log(n.closest);

// Ques21
// const n = document.body
// console.log(n);

// Ques22
// const ch = document.body.children
// console.log(ch); 

// Ques23
// const tag = document.body.children[0].tagName
// console.log(tag);

// Ques24
// const n = document.body.children[0].className
// console.log(n);

// Ques25
// const q = document.querySelector(".content").children[0].innerHTML
// console.log(q);

// Ques26
// const q = document.querySelector(".content").children[0].innerText
// console.log(q);

// Ques27
// const type = document.getElementById("name").getAttribute("type")
// console.log(type);

// Ques28
// const type = document.getElementById("name").setAttribute('placeholder',"Enter your name")

//  Ques29
// const check = document.getElementById("name")
// console.log(check.hasAttribute("placeholder"));

// Ques30
// const attRemove = document.getElementById("name").removeAttribute("value")

// Ques31
// const att = document.getElementById("main-heading")
// console.log(att.attributes);

// Ques32
// const newDiv = document.createElement("div")
// console.log(newDiv);

// Ques33
// const newTextNode = document.createTextNode("This new text node")
// console.log(newTextNode);

// Ques34
// newDiv.append(newTextNode);
// console.log(newDiv);

// Ques35
// const nw = document.getElementsByClassName("content")
// newDiv.prepend(nw)
// console.log(newDiv);

// Ques36
// const nw = document.getElementById("main-heading")
// nw.replaceWith(newTextNode)
// console.log(nw);

// Ques37
// const nw = document.getElementsByClassName("inner-box")[0]
// const first = nw.firstChild;
// console.log(nw.insertBefore(newDiv, first));

// Ques38
// const nw = document.getElementsByClassName("inner-box")[0]
// const first = nw.firstChild;
// console.log(nw.insertAfter(newDiv, first));

// Ques41
// const nw = document.getElementsByClassName("content")[0]
// console.log(nw.offsetHeight);

// Ques44
// const nw = document.getElementById("main-heading")
// nw.innerHTML = "Hello, DOM!"
// console.log(nw);

// Ques45
// const nw = document.getElementById("name")
// nw.value = "Jane Smith"
// console.log(nw);

// Ques46
// const nw = document.querySelector(".list") 
// const li = document.createElement("li")
// const text = document.createTextNode("Item4")
// li.append(text)
// nw.append(li)
// console.log(li);
// console.log(nw);

// Ques47
// const nw = document.getElementsByClassName("content")
// nw.textContent = "hertyuytreertg"
// console.log(nw); 

// Ques48
// const col = document.getElementById("container")
// col.style.backgroundColor = "blue"
// console.log(col.style.backgroundColor);

// Ques49
// const nw = document.querySelector(".inner-box")
// nw.classList.remove("p");
// console.log(nw);

// Ques50
// const body = document.querySelector("body")
// const ad = document.getElementById("container")
// const div = document.createElement("div")
// div.append(ad)
// body.append(div)
//  console.log(body);
// console.log(div);

//  Ques51
// const add = div.setAttribute("class" , "wrap")
// console.log(add);

// Ques53
// const nw = document.querySelector(".content")
// const at =nw.setAttribute("class" ,"highligth")
// console.log(at);

// Ques54
// const nw = document.querySelector("input")
// nw.type = "email"
// console.log(nw);

// Ques55
// const nw = document.querySelector("li")
// nw.textContent = "hi"
// console.log(nw);

// Ques56
// const nw = document.getElementById("name")
// nw.value = ""
// console.log(nw);

// Ques57
// const nw = document.querySelector("form")
// nw.remove()
// console.log(nw);

// Ques58
// const nw = document.getElementById("main-heading")
// const ev =nw.addEventListener("click", ()=> {console.log("clicked");})
// console.log(nw);

// Ques59
// const nw = document.querySelector(".content")
// nw.style.fontSize = "20px";
// console.log(nw.style.fontSize);

//Ques60
// const rm = document.querySelector(".list")
// rm.remove()
// console.log(rm);

// Ques61
// const b = document.querySelector("body")
// const nw = document.createElement("div")
// nw.setAttribute("class" ,"new-div")
// b.append(nw)
// console.log(b);
// console.log(nw);

// Ques62
// const nw = document.querySelector(".inner-box")
// const p = document.createElement("p")
// const text = document.createTextNode("hello")
// p.append(text)
// nw.append(p)
// console.log(nw);