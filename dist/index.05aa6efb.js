!function(){var t=new WeakSet;function e(){let t=document.createElement("div");t.classList.add("user"),t.setAttribute("data-present",this.isPresent);let e=`
            <img src="${this.pictureLarge}">
            <div class="user--info">
                <h1>${this.nameTitle} ${this.nameFirst} ${this.nameLast}</h1>
                <p>${this.dobAge} years old</p>
                <p>${this.locationCity}, ${this.locationCountry}</p>
            </div>
            <a href="mailto:${this.email}">
                <span class="mail">\u{2709}\u{FE0F}</span>
            </a>
        `;return t.innerHTML=e,t}var i=class{addClickEvent(){this.element.addEventListener("click",()=>{this.togglePresence()})}togglePresence(){this.isPresent=!this.isPresent,this.element.setAttribute("data-present",this.isPresent),this.element.classList.toggle("present",this.isPresent)}render(t){t.appendChild(this.element)}constructor(i,s,n,a,r,l,o,h){var c;!function(t,e){if(e.has(t))throw TypeError("Cannot initialize the same private elements twice on an object")}(this,t),t.add(this),(c="isPresent")in this?Object.defineProperty(this,c,{value:!1,enumerable:!0,configurable:!0,writable:!0}):this[c]=!1,this.nameTitle=i,this.nameFirst=s,this.nameLast=n,this.locationCity=a,this.locationCountry=r,this.dobAge=l,this.email=o,this.pictureLarge=h,this.element=(function(t,e,i){if(!e.has(t))throw TypeError("attempted to get private field on non-instance");return i})(this,t,e).call(this),this.addClickEvent()}};let s=async()=>{let t=await fetch("https://randomuser.me/api/?results=20");return(await t.json()).results},n=document.querySelector("main");(async()=>{let t=(await s()).map(t=>{let{name:e,location:s,dob:n,email:a,picture:r}=t;return new i(e.title,e.first,e.last,s.city,s.country,n.age,a,r.large)});t.sort((t,e)=>{let i=t.nameLast.toLowerCase(),s=e.nameLast.toLowerCase();return i<s?-1:i>s?1:0}),t.forEach(t=>{t.render(n)})})()}();
//# sourceMappingURL=index.05aa6efb.js.map
