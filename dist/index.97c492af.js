!function(){let e;var t=new WeakSet;function s(){let e=document.createElement("div");e.classList.add("user"),e.setAttribute("data-present",this.isPresent);let t=`
            <img src="${this.pictureLarge}">
            <div class="user--info">
                <h1>${this.nameTitle} ${this.nameFirst} ${this.nameLast}</h1>
                <p>${this.dobAge} years old</p>
                <p>${this.locationCity}, ${this.locationCountry}</p>
            </div>
            <a href="mailto:${this.email}">
                <span class="mail">\u{2709}\u{FE0F}</span>
            </a>
        `;return e.innerHTML=t,e}var i=class{addClickEvent(){this.element.addEventListener("click",()=>{this.togglePresence()})}togglePresence(){this.isPresent=!this.isPresent,this.element.setAttribute("data-present",this.isPresent),this.element.classList.toggle("present",this.isPresent)}render(e){e.appendChild(this.element)}constructor(e,i,a,n,r,o,l,c){var h;!function(e,t){if(t.has(e))throw TypeError("Cannot initialize the same private elements twice on an object")}(this,t),t.add(this),(h="isPresent")in this?Object.defineProperty(this,h,{value:!1,enumerable:!0,configurable:!0,writable:!0}):this[h]=!1,this.nameTitle=e,this.nameFirst=i,this.nameLast=a,this.locationCity=n,this.locationCountry=r,this.dobAge=o,this.email=l,this.pictureLarge=c,this.element=(function(e,t,s){if(!t.has(e))throw TypeError("attempted to get private field on non-instance");return s})(this,t,s).call(this),this.addClickEvent()}};let a=async()=>{let e=await fetch("https://randomuser.me/api/?results=20");return(await e.json()).results},n=document.querySelector("main"),r=async()=>{(e=(await a()).map(e=>{let{name:t,location:s,dob:a,email:n,picture:r}=e;return new i(t.title,t.first,t.last,s.city,s.country,a.age,n,r.large)})).sort((e,t)=>{let s=e.nameLast.toLowerCase(),i=t.nameLast.toLowerCase();return s.localeCompare(i)}),e.forEach(e=>{e.render(n)})},o=document.getElementById("sort--name"),l=document.getElementById("sort--age");o.addEventListener("click",()=>{e.sort((e,t)=>{let s=e.nameLast.toLowerCase(),i=t.nameLast.toLowerCase();return s.localeCompare(i)}),h(),c(o,l)}),l.addEventListener("click",()=>{e.sort((e,t)=>e.dobAge-t.dobAge),h(),c(l,o)});let c=(e,t)=>{e.classList.add("selected"),t.classList.remove("selected")},h=()=>{n.innerHTML="",e.forEach(e=>{e.render(n)})};r()}();
//# sourceMappingURL=index.97c492af.js.map
