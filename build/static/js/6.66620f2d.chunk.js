(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{117:function(e,t,a){e.exports={parts:"AvailableParts_parts__3lai0","parts-appear":"AvailableParts_parts-appear__1ua-_",loading:"AvailableParts_loading__naycz",haserror:"AvailableParts_haserror__2wzYB",sorting:"AvailableParts_sorting__3idxy"}},119:function(e,t,a){e.exports={card:"Card_card__28K3L"}},121:function(e,t,a){e.exports={rap:"PartItems_rap__WuJv1",part:"PartItems_part__1nYbW",img:"PartItems_img__1QqFq",img_dev:"PartItems_img_dev__1kXrX",description:"PartItems_description__3lTAQ",price:"PartItems_price__13jkM",border:"PartItems_border__2tquF"}},123:function(e,t,a){e.exports={form:"PartItemsForm_form__1gAA8"}},125:function(e,t,a){},142:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),c=a(117),i=a.n(c),s=a(119),o=a.n(s),l=function(e){return n.a.createElement("div",{className:o.a.card},e.children)},m=a(121),d=a.n(m),p=a(123),u=a.n(p),_=function(e){return n.a.createElement("form",{className:u.a.form,onSubmit:function(t){t.preventDefault(),e.onAddToCart()}},n.a.createElement("button",null,"Add to Cart"))},g=a(10),f=a(23),E=a(16),b=a(33),v=function(e){var t=Object(g.b)(),a=Object(r.useContext)(b.b),c=e.id,i=e.img,s=e.name,o=e.description,m=e.price,p="$".concat(m.toFixed(2));return n.a.createElement("div",{className:d.a.rap},n.a.createElement(l,null,n.a.createElement(E.c,{to:"/partdetails/".concat(e.id)},n.a.createElement("div",{className:d.a.part},n.a.createElement("div",{className:d.a.img_dev},n.a.createElement("img",{src:i,alt:"product",width:"100",height:"100",className:d.a.img})),n.a.createElement("h3",null,s),n.a.createElement("div",{className:d.a.description},o),n.a.createElement("div",{className:d.a.price},p),n.a.createElement("button",null,"More Details"))),n.a.createElement("div",{className:d.a.border},n.a.createElement(_,{onAddToCart:function(){if(!a.isLoggedIn)return alert("Please signin before add item to cart ");t(f.a.addItemToCart({id:c,img:i,name:s,description:o,price:m}))}}))))},h=a(2),w=function(e){var t,a,c=Object(h.f)(),s=Object(h.g)(),o=new URLSearchParams(s.search),l="high-low"===o.get("sort"),m=o.get("sort"),d=function(){c.push("/parts?sort="+(l?"low-high":"high-low"))},p=(t=e.parts,a=l,t.sort(function(e,t){return a?e.price<t.price?1:-1:e.price>t.price?1:-1})).map(function(e){return n.a.createElement(v,{key:e.id,id:e.id,name:e.name,description:e.description,img:e.img,price:e.price})});return n.a.createElement(r.Fragment,null,n.a.createElement("div",{className:i.a.sorting},n.a.createElement("button",{onClick:d},"Show ",l?"Low to High":"High to Low"),m&&n.a.createElement("h4",{onClick:d},"Sort by: ",l?"High to Low":"Low to High"," List")),n.a.createElement("section",{className:i.a.parts},n.a.createElement("ul",null,p)))},P=a(34),N=a(35),A=a(36),I=a(125),C=a.n(I);t.default=function(e){var t=Object(P.a)(N.c,!0),a=t.sendRequest,c=t.status,i=t.data,s=t.error;return Object(r.useEffect)(function(){a()},[a]),"pending"===c?n.a.createElement("div",{className:"centered"},n.a.createElement(A.a,null)):s?n.a.createElement("p",{className:"centered focused"},s):n.a.createElement("div",{className:C.a.all_parts},n.a.createElement(w,{parts:i}))}}}]);
//# sourceMappingURL=6.66620f2d.chunk.js.map