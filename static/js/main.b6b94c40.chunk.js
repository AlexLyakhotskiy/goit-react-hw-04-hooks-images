(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{10:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__3aq8p",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__2Wejw"}},11:function(e,t,a){e.exports={overlay:"Modal_overlay__1Mcq8",modal:"Modal_modal__2LGgW"}},14:function(e,t,a){e.exports={container:"Container_container__1LAbG"}},16:function(e,t,a){e.exports={container:"LoaderSpinner_container__1mqgj"}},17:function(e,t,a){e.exports={button:"Button_button__2-ZBx"}},19:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__2rfas"}},20:function(e,t,a){e.exports={appContainer:"App_appContainer__6i7AX"}},48:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(4),o=a.n(c),s=a(3),i=a(5),u=a(6),l=a.n(u),m=a(1);var h=function(e){var t=e.onSubmit,a=Object(r.useState)(""),n=Object(s.a)(a,2),c=n[0],o=n[1];return Object(m.jsx)("header",{className:l.a.Searchbar,children:Object(m.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),""===c.trim())return i.b.error("Please enter query");t(c),o("")},className:l.a.SearchForm,children:[Object(m.jsx)("button",{type:"submit",className:l.a.SearchFormButton,children:Object(m.jsx)("span",{className:l.a.SearchFormButtonLabel,children:"Search"})}),Object(m.jsx)("input",{onChange:function(e){o(e.currentTarget.value.toLowerCase())},value:c,className:l.a.SearchFormInput,name:"searchQuery",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})},b=a(13),j=a(14),f=a.n(j),d=function(e){var t=e.children;return Object(m.jsx)("div",{className:f.a.container,children:t})},p=a(10),g=a.n(p),_=function(e){var t=e.webformatURL,a=e.id,r=e.onImgClick,n=e.alt;return Object(m.jsx)("li",{className:g.a.ImageGalleryItem,onClick:function(){return r(a)},children:Object(m.jsx)("img",{src:t,alt:n,className:g.a.ImageGalleryItemImage})})},O=a(15),y=a.n(O),x=a(16),v=a.n(x),S=function(){return Object(m.jsx)("div",{className:v.a.container,children:Object(m.jsx)(y.a,{type:"ThreeDots",color:"#6e7b80",height:80,width:80})})},I=a(17),w=a.n(I),k=function(e){var t=e.onBtnLoadMoreClick;return Object(m.jsx)("button",{onClick:t,type:"button",className:w.a.button,children:"Load more"})},C=a(11),L=a.n(C),F=document.querySelector("#modal-root");var G=function(e){var t=e.closeModal,a=e.children;function n(e){"Escape"===e.code&&t()}return Object(r.useEffect)((function(){return window.addEventListener("keydown",n),document.body.style.overflow="hidden",function(){window.removeEventListener("keydown",n),document.body.style.overflow=""}}),[]),Object(c.createPortal)(Object(m.jsx)("div",{onClick:function(e){e.currentTarget===e.target&&t()},className:L.a.overlay,children:Object(m.jsx)("div",{className:L.a.modal,children:a})}),F)},N=a(12),B=a.n(N),E=a(18),Q={searchQuery:"",page:1,fetchArticles:function(){var e=this;return Object(E.a)(B.a.mark((function t(){var a,r,n;return B.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a="".concat("https://pixabay.com/api/","?q=").concat(e.searchQuery,"&page=").concat(e.page,"&key=").concat("22632103-559b096d748294a4f3f26d1f6").concat("&image_type=photo&orientation=horizontal&per_page=12"),t.next=3,fetch(a);case 3:return r=t.sent,t.next=6,r.json();case 6:if((n=t.sent).totalHits){t.next=9;break}return t.abrupt("return",Promise.reject('On your query "'.concat(e.searchQuery,'" nothing matches found. ')));case 9:return t.abrupt("return",n);case 10:case"end":return t.stop()}}),t)})))()},setQuery:function(e){this.searchQuery=e},incrementPage:function(){this.page+=1},resetPage:function(){this.page=1}},q=a(19),M=a.n(q);var P=function(e){var t=e.searchQuery,a=Object(r.useState)([]),n=Object(s.a)(a,2),c=n[0],o=n[1],u=Object(r.useState)(""),l=Object(s.a)(u,2),h=l[0],j=l[1],f=Object(r.useState)(!1),p=Object(s.a)(f,2),g=p[0],O=p[1];Object(r.useEffect)((function(){t&&(o([]),Q.setQuery(t),Q.resetPage(),x())}),[t]),Object(r.useEffect)((function(){1!==Q.page&&window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}),[c]);var y=function(e){var t=c.find((function(t,a){return a===e})).largeImageURL;j(t)};function x(){O(!0),Q.fetchArticles().then((function(e){var t=e.hits;return o((function(e){return[].concat(Object(b.a)(e),Object(b.a)(t))}))})).catch((function(e){return i.b.error("".concat(e))})).finally(O(!1))}return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(d,{children:Object(m.jsx)("ul",{className:M.a.ImageGallery,children:c.map((function(e,t){var a=e.webformatURL,r=e.tags;return Object(m.jsx)(_,{webformatURL:a,alt:r,id:t,onImgClick:y},t)}))})}),!!c.length&&!g&&Object(m.jsx)(k,{onBtnLoadMoreClick:function(){Q.incrementPage(),x()}}),g&&Object(m.jsx)(S,{}),h&&Object(m.jsx)(G,{closeModal:function(){return j("")},children:Object(m.jsx)("img",{src:h,alt:"large pic in modal"})})]})},A=a(20),T=a.n(A);a(47);var R=function(){var e=Object(r.useState)(""),t=Object(s.a)(e,2),a=t[0],n=t[1];return Object(m.jsxs)("div",{className:T.a.appContainer,children:[Object(m.jsx)(h,{onSubmit:n}),Object(m.jsx)(P,{searchQuery:a}),Object(m.jsx)(i.a,{autoClose:3e3})]})};a(48);o.a.render(Object(m.jsx)(n.a.StrictMode,{children:Object(m.jsx)(R,{})}),document.getElementById("root"))},6:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__3v_TE",SearchForm:"Searchbar_SearchForm__3KZW7",SearchFormButton:"Searchbar_SearchFormButton__3jrWZ",SearchFormButtonLabel:"Searchbar_SearchFormButtonLabel__9_qC0",SearchFormInput:"Searchbar_SearchFormInput__2HtPz"}}},[[49,1,2]]]);
//# sourceMappingURL=main.b6b94c40.chunk.js.map