(self["webpackChunkumain"]=self["webpackChunkumain"]||[]).push([[64],{6514:(e,t,a)=>{"use strict";a.d(t,{Z:()=>u});var o=a(3673);function s(e,t,a,s,l,i){const n=(0,o.up)("q-breadcrumbs-el"),r=(0,o.up)("q-breadcrumbs");return(0,o.wg)(),(0,o.j4)(r,{class:"breadcrumbs"},{default:(0,o.w5)((()=>[(0,o.Wm)(n,{icon:"home",to:"/"}),(0,o.Wm)(n,{label:"Blog",to:""}),(0,o.Wm)(n,{label:"Este é o exemplo de titulo de publicação do blog"})])),_:1})}const l={name:"BreadCrumbs"};var i=a(1481),n=a(5926),r=a(7518),c=a.n(r);l.render=s;const u=l;c()(l,"components",{QBreadcrumbs:i.Z,QBreadcrumbsEl:n.Z})},3668:(e,t,a)=>{"use strict";a.d(t,{Z:()=>d});var o=a(3673);const s={class:"text-right"};function l(e,t,a,l,i,n){const r=(0,o.up)("q-icon"),c=(0,o.up)("q-input"),u=(0,o.up)("q-btn");return(0,o.wg)(),(0,o.j4)("div",null,[(0,o.Wm)(c,{outlined:"",color:"accent",modelValue:e.text,"onUpdate:modelValue":t[1]||(t[1]=t=>e.text=t),class:"q-mb-md",label:"Seu nome",hint:"Utilize o nome que você deseja ser chamado(a)"},{prepend:(0,o.w5)((()=>[(0,o.Wm)(r,{name:"person"})])),_:1},8,["modelValue"]),(0,o.Wm)(c,{outlined:"",color:"accent",modelValue:e.text,"onUpdate:modelValue":t[2]||(t[2]=t=>e.text=t),class:"q-mb-md",label:"Email",hint:"Utilize um email válido"},{prepend:(0,o.w5)((()=>[(0,o.Wm)(r,{name:"email"})])),_:1},8,["modelValue"]),(0,o.Wm)(c,{outlined:"",color:"accent",modelValue:e.text,"onUpdate:modelValue":t[3]||(t[3]=t=>e.text=t),class:"q-mb-md",label:"Telefone",hint:"Digite seu número com DDD"},{prepend:(0,o.w5)((()=>[(0,o.Wm)(r,{name:"phone"})])),_:1},8,["modelValue"]),(0,o.Wm)(c,{outlined:"",color:"accent",modelValue:e.text,"onUpdate:modelValue":t[4]||(t[4]=t=>e.text=t),class:"q-mb-md",label:"Mensagem",hint:"Digite sua mensagem",autogrow:""},{prepend:(0,o.w5)((()=>[(0,o.Wm)(r,{name:"message"})])),_:1},8,["modelValue"]),(0,o.Wm)("div",s,[(0,o.Wm)(u,{color:"accent",label:"Enviar mensagem","icon-right":"send"})])])}const i={name:"FormContact"};var n=a(4689),r=a(4554),c=a(2165),u=a(7518),m=a.n(u);i.render=l;const d=i;m()(i,"components",{QInput:n.Z,QIcon:r.Z,QBtn:c.Z})},1691:(e,t,a)=>{"use strict";a.d(t,{Z:()=>m});var o=a(3673);const s={class:"col-12",autocorrect:"on",autocapitalize:"on",autocomplete:"on",spellcheck:"true"};function l(e,t,a,l,i,n){const r=(0,o.up)("q-editor");return(0,o.wg)(),(0,o.j4)("form",s,[(0,o.Wm)(r,{modelValue:l.qeditor,"onUpdate:modelValue":t[1]||(t[1]=e=>l.qeditor=e),dense:e.$q.screen.lt.md,toolbar:[[{label:e.$q.lang.editor.align,icon:e.$q.iconSet.editor.align,fixedLabel:!0,options:["left","center","right","justify"]}],["bold","italic","strike","underline","subscript","superscript"],["token","hr","link","custom_btn"],[{label:e.$q.lang.editor.formatting,icon:e.$q.iconSet.editor.formatting,list:"no-icons",options:["p","h1","h2","h3","h4","h5","h6","code"]},{label:e.$q.lang.editor.fontSize,icon:e.$q.iconSet.editor.fontSize,fixedLabel:!0,fixedIcon:!0,list:"no-icons",options:["size-1","size-2","size-3","size-4","size-5","size-6","size-7"]},"removeFormat"],["quote","unordered","ordered","outdent","indent"],["undo","redo"],["fullscreen"]]},null,8,["modelValue","dense","toolbar"])])}var i=a(1959);const n={name:"SocialLinks",setup(){return{qeditor:(0,i.iH)('<pre>Check out the two different types of dropdowns in each of the "Align" buttons.</pre> ')}}};var r=a(9989),c=a(7518),u=a.n(c);n.render=l;const m=n;u()(n,"components",{QEditor:r.Z})},4936:(e,t,a)=>{"use strict";a.d(t,{Z:()=>r});var o=a(3673);const s={class:"social-links-container full-width row"},l=(0,o.Wm)("ul",{class:"full-width"},[(0,o.Wm)("li",null,[(0,o.Wm)("a",{class:"social-link social-link-facebook",title:"Share on Facebook",href:"https://facebook.com/sharer/sharer.php?u=/////URL-DO-SITE/////",target:"_blank",rel:"noopener","aria-label":"Share on Facebook"},[(0,o.Wm)("span",null,[(0,o.Wm)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[(0,o.Wm)("path",{d:"M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"})])])])]),(0,o.Wm)("li",null,[(0,o.Wm)("a",{class:"social-link social-link-twitter",title:"Share on Twitter",href:"https://twitter.com/intent/tweet/?text=/////TEXTO-DO-SITE/////&url=/////URL-DO-SITE/////",target:"_blank",rel:"noopener","aria-label":"Share on Twitter"},[(0,o.Wm)("span",null,[(0,o.Wm)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[(0,o.Wm)("path",{d:"M23.44 4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96 1.32-2.02-.88.52-1.86.9-2.9 1.1-.82-.88-2-1.43-3.3-1.43-2.5 0-4.55 2.04-4.55 4.54 0 .36.03.7.1 1.04-3.77-.2-7.12-2-9.36-4.75-.4.67-.6 1.45-.6 2.3 0 1.56.8 2.95 2 3.77-.74-.03-1.44-.23-2.05-.57v.06c0 2.2 1.56 4.03 3.64 4.44-.67.2-1.37.2-2.06.08.58 1.8 2.26 3.12 4.25 3.16C5.78 18.1 3.37 18.74 1 18.46c2 1.3 4.4 2.04 6.97 2.04 8.35 0 12.92-6.92 12.92-12.93 0-.2 0-.4-.02-.6.9-.63 1.96-1.22 2.56-2.14z"})])])])]),(0,o.Wm)("li",null,[(0,o.Wm)("a",{class:"social-link social-link-reddit",title:"Share on Reddit",href:"https://reddit.com/submit/?url=/////URL-DO-SITE/////&resubmit=true&title=/////TEXTO-DO-SITE/////",target:"_blank",rel:"noopener","aria-label":"Share on Reddit"},[(0,o.Wm)("span",null,[(0,o.Wm)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[(0,o.Wm)("path",{d:"M24 11.5c0-1.65-1.35-3-3-3-.96 0-1.86.48-2.42 1.24-1.64-1-3.75-1.64-6.07-1.72.08-1.1.4-3.05 1.52-3.7.72-.4 1.73-.24 3 .5C17.2 6.3 18.46 7.5 20 7.5c1.65 0 3-1.35 3-3s-1.35-3-3-3c-1.38 0-2.54.94-2.88 2.22-1.43-.72-2.64-.8-3.6-.25-1.64.94-1.95 3.47-2 4.55-2.33.08-4.45.7-6.1 1.72C4.86 8.98 3.96 8.5 3 8.5c-1.65 0-3 1.35-3 3 0 1.32.84 2.44 2.05 2.84-.03.22-.05.44-.05.66 0 3.86 4.5 7 10 7s10-3.14 10-7c0-.22-.02-.44-.05-.66 1.2-.4 2.05-1.54 2.05-2.84zM2.3 13.37C1.5 13.07 1 12.35 1 11.5c0-1.1.9-2 2-2 .64 0 1.22.32 1.6.82-1.1.85-1.92 1.9-2.3 3.05zm3.7.13c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9.8 4.8c-1.08.63-2.42.96-3.8.96-1.4 0-2.74-.34-3.8-.95-.24-.13-.32-.44-.2-.68.15-.24.46-.32.7-.18 1.83 1.06 4.76 1.06 6.6 0 .23-.13.53-.05.67.2.14.23.06.54-.18.67zm.2-2.8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm5.7-2.13c-.38-1.16-1.2-2.2-2.3-3.05.38-.5.97-.82 1.6-.82 1.1 0 2 .9 2 2 0 .84-.53 1.57-1.3 1.87z"})])])])]),(0,o.Wm)("li",null,[(0,o.Wm)("a",{class:"social-link social-link-linkedin",title:"Share on LinkedIn",href:"https://www.linkedin.com/shareArticle?mini=true&url=/////URL-DO-SITE/////&title=/////TEXTO-DO-SITE/////&summary=/////TEXTO-DO-SITE/////&source=/////URL-DO-SITE/////",target:"_blank",rel:"noopener","aria-label":"Share on LinkedIn"},[(0,o.Wm)("span",null,[(0,o.Wm)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[(0,o.Wm)("path",{d:"M6.5 21.5h-5v-13h5v13zM4 6.5C2.5 6.5 1.5 5.3 1.5 4s1-2.4 2.5-2.4c1.6 0 2.5 1 2.6 2.5 0 1.4-1 2.5-2.6 2.5zm11.5 6c-1 0-2 1-2 2v7h-5v-13h5V10s1.6-1.5 4-1.5c3 0 5 2.2 5 6.3v6.7h-5v-7c0-1-1-2-2-2z"})])])])]),(0,o.Wm)("li",null,[(0,o.Wm)("a",{class:"social-link social-link-email",title:"Share by E-Mail",href:"mailto:?subject=/////TEXTO-DO-SITE/////&body=/////URL-DO-SITE/////",target:"_self",rel:"noopener","aria-label":"Share by E-Mail"},[(0,o.Wm)("span",null,[(0,o.Wm)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[(0,o.Wm)("path",{d:"M22 4H2C.9 4 0 4.9 0 6v12c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM7.25 14.43l-3.5 2c-.08.05-.17.07-.25.07-.17 0-.34-.1-.43-.25-.14-.24-.06-.55.18-.68l3.5-2c.24-.14.55-.06.68.18.14.24.06.55-.18.68zm4.75.07c-.1 0-.2-.03-.27-.08l-8.5-5.5c-.23-.15-.3-.46-.15-.7.15-.22.46-.3.7-.14L12 13.4l8.23-5.32c.23-.15.54-.08.7.15.14.23.07.54-.16.7l-8.5 5.5c-.08.04-.17.07-.27.07zm8.93 1.75c-.1.16-.26.25-.43.25-.08 0-.17-.02-.25-.07l-3.5-2c-.24-.13-.32-.44-.18-.68s.44-.32.68-.18l3.5 2c.24.13.32.44.18.68z"})])])])]),(0,o.Wm)("li",{class:"mobile-only"},[(0,o.Wm)("a",{class:"social-link social-link-whatsapp",title:"Share on WhatsApp",href:"whatsapp://send?text=/////TEXTO-DO-SITE/////%20/////URL-DO-SITE/////",target:"_blank",rel:"noopener","aria-label":"Share on WhatsApp"},[(0,o.Wm)("span",null,[(0,o.Wm)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[(0,o.Wm)("path",{d:"M20.1 3.9C17.9 1.7 15 .5 12 .5 5.8.5.7 5.6.7 11.9c0 2 .5 3.9 1.5 5.6L.6 23.4l6-1.6c1.6.9 3.5 1.3 5.4 1.3 6.3 0 11.4-5.1 11.4-11.4-.1-2.8-1.2-5.7-3.3-7.8zM12 21.4c-1.7 0-3.3-.5-4.8-1.3l-.4-.2-3.5 1 1-3.4L4 17c-1-1.5-1.4-3.2-1.4-5.1 0-5.2 4.2-9.4 9.4-9.4 2.5 0 4.9 1 6.7 2.8 1.8 1.8 2.8 4.2 2.8 6.7-.1 5.2-4.3 9.4-9.5 9.4zm5.1-7.1c-.3-.1-1.7-.9-1.9-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.1-.2.2-.3.2-.6.1s-1.2-.5-2.3-1.4c-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6s.3-.3.4-.5c.2-.1.3-.3.4-.5.1-.2 0-.4 0-.5C10 9 9.3 7.6 9 7c-.1-.4-.4-.3-.5-.3h-.6s-.4.1-.7.3c-.3.3-1 1-1 2.4s1 2.8 1.1 3c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.7-.7 1.9-1.3.2-.7.2-1.2.2-1.3-.1-.3-.3-.4-.6-.5z"})])])])]),(0,o.Wm)("li",{class:"mobile-only"},[(0,o.Wm)("a",{class:"social-link social-link-telegram",title:"Share on Telegram",href:"https://telegram.me/share/url?text=/////TEXTO-DO-SITE/////&url=/////URL-DO-SITE/////",target:"_blank",rel:"noopener","aria-label":"Share on Telegram"},[(0,o.Wm)("span",null,[(0,o.Wm)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[(0,o.Wm)("path",{d:"M.707 8.475C.275 8.64 0 9.508 0 9.508s.284.867.718 1.03l5.09 1.897 1.986 6.38a1.102 1.102 0 0 0 1.75.527l2.96-2.41a.405.405 0 0 1 .494-.013l5.34 3.87a1.1 1.1 0 0 0 1.046.135 1.1 1.1 0 0 0 .682-.803l3.91-18.795A1.102 1.102 0 0 0 22.5.075L.706 8.475z"})])])])])],-1);function i(e,t,a,i,n,r){return(0,o.wg)(),(0,o.j4)("section",s,[l])}const n={name:"SocialLinks"};n.render=i;const r=n},3142:(e,t,a)=>{"use strict";a.d(t,{Z:()=>d});var o=a(3673);const s={class:"col-6 col-md-4 q-pa-md"},l=(0,o.Uk)(" Clique para visualizar todas as vagas da [Nome da empresa] ");function i(e,t,a,i,n,r){const c=(0,o.up)("q-img"),u=(0,o.up)("q-tooltip"),m=(0,o.up)("router-link");return(0,o.wg)(),(0,o.j4)("picture",s,[(0,o.Wm)(m,{to:"/company"},{default:(0,o.w5)((()=>[(0,o.Wm)(c,{role:"img",class:"rounded-borders",alt:"Logo da Empresa [Nome da empresa]",ratio:1,src:"https://picsum.photos/500/500.jpg"}),(0,o.Wm)(u,null,{default:(0,o.w5)((()=>[l])),_:1})])),_:1})])}const n={name:"CompanyAvatar"};var r=a(4027),c=a(8870),u=a(7518),m=a.n(u);n.render=i;const d=n;m()(n,"components",{QImg:r.Z,QTooltip:c.Z})},6895:(e,t,a)=>{"use strict";a.d(t,{Z:()=>S});var o=a(3673);const s=(0,o.Uk)("Tipo da Empresa"),l=(0,o.Uk)("Empresa privada"),i=(0,o.Uk)("Sede"),n=(0,o.Uk)("Roma, Itália"),r=(0,o.Uk)("Quantidade de funcionários"),c=(0,o.Uk)("1200-2500"),u=(0,o.Uk)("Setor"),m=(0,o.Uk)("Tecnologia da informação e serviços"),d=(0,o.Uk)("Site"),w=(0,o.Uk)("sitedaempresa.com.br");function p(e,t,a,p,M,L){const D=(0,o.up)("q-item-label"),g=(0,o.up)("q-item-section"),j=(0,o.up)("q-item"),h=(0,o.up)("router-link"),b=(0,o.up)("q-list"),z=(0,o.Q2)("ripple");return(0,o.wg)(),(0,o.j4)(b,{separator:"",class:"rounded-borders"},{default:(0,o.w5)((()=>[(0,o.wy)((0,o.Wm)(j,{"no-pointer-events":""},{default:(0,o.w5)((()=>[(0,o.Wm)(g,null,{default:(0,o.w5)((()=>[(0,o.Wm)(D,{caption:""},{default:(0,o.w5)((()=>[s])),_:1}),(0,o.Wm)(D,null,{default:(0,o.w5)((()=>[l])),_:1})])),_:1})])),_:1},512),[[z]]),(0,o.wy)((0,o.Wm)(j,{"no-pointer-events":""},{default:(0,o.w5)((()=>[(0,o.Wm)(g,null,{default:(0,o.w5)((()=>[(0,o.Wm)(D,{caption:""},{default:(0,o.w5)((()=>[i])),_:1}),(0,o.Wm)(D,null,{default:(0,o.w5)((()=>[n])),_:1})])),_:1})])),_:1},512),[[z]]),(0,o.wy)((0,o.Wm)(j,{"no-pointer-events":""},{default:(0,o.w5)((()=>[(0,o.Wm)(g,null,{default:(0,o.w5)((()=>[(0,o.Wm)(D,{caption:""},{default:(0,o.w5)((()=>[r])),_:1}),(0,o.Wm)(D,null,{default:(0,o.w5)((()=>[c])),_:1})])),_:1})])),_:1},512),[[z]]),(0,o.wy)((0,o.Wm)(j,{"no-pointer-events":""},{default:(0,o.w5)((()=>[(0,o.Wm)(g,null,{default:(0,o.w5)((()=>[(0,o.Wm)(D,{caption:""},{default:(0,o.w5)((()=>[u])),_:1}),(0,o.Wm)(D,null,{default:(0,o.w5)((()=>[m])),_:1})])),_:1})])),_:1},512),[[z]]),(0,o.wy)((0,o.Wm)(j,{"no-pointer-events":""},{default:(0,o.w5)((()=>[(0,o.Wm)(g,null,{default:(0,o.w5)((()=>[(0,o.Wm)(D,{caption:""},{default:(0,o.w5)((()=>[d])),_:1}),(0,o.Wm)(D,{class:"ellipsis"},{default:(0,o.w5)((()=>[(0,o.Wm)(h,{to:"#"},{default:(0,o.w5)((()=>[w])),_:1})])),_:1})])),_:1})])),_:1},512),[[z]])])),_:1})}const M={name:"CompanyTabs"};var L=a(7011),D=a(3414),g=a(2035),j=a(2350),h=a(6489),b=a(7518),z=a.n(b);M.render=p;const S=M;z()(M,"components",{QList:L.Z,QItem:D.Z,QItemSection:g.Z,QItemLabel:j.Z}),z()(M,"directives",{Ripple:h.Z})},1508:(e,t,a)=>{"use strict";a.d(t,{Z:()=>h});var o=a(3673);const s={class:"row full-width"},l={class:"col-12 col-md col-lg no-padding no-margin desktop-only"},i=(0,o.Uk)(" Nome da empresa "),n=(0,o.Wm)("div",{class:"q-pa-xs"},null,-1),r=(0,o.Uk)(" Nome da vaga "),c=(0,o.Wm)("p",{class:"job-excerpt text-caption text-grey"}," Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, ducimus velit! Qui molestias adipisci dolorum quo cum? Quasi, magni. Voluptatum aperiam est porro corporis aspernatur quis id dolorem suscipit distinctio nam atque non illo, voluptates aut. Laboriosam, a. Alias sequi et illo error, corporis odio. Expedita, sapiente eaque? Culpa, minima. ",-1),u={class:"full-width row wrap justify-between items-start content-start"};function m(e,t,a,m,d,w){const p=(0,o.up)("q-img"),M=(0,o.up)("router-link"),L=(0,o.up)("q-card-section"),D=(0,o.up)("q-separator"),g=(0,o.up)("q-btn"),j=(0,o.up)("q-card");return(0,o.wg)(),(0,o.j4)(j,{class:"job-card card"},{default:(0,o.w5)((()=>[(0,o.Wm)(L,{horizontal:""},{default:(0,o.w5)((()=>[(0,o.Wm)("div",s,[(0,o.Wm)("picture",l,[(0,o.Wm)(p,{role:"img",loading:"lazy","spinner-color":"white",title:"[Nome da empresa]",alt:"Logo da Empresa [Nome da empresa]",class:"rounded-borders",ratio:1,src:"https://picsum.photos/500/500.jpg"})]),(0,o.Wm)(L,{class:"card-content col-12 col-md-8 col-lg-9"},{default:(0,o.w5)((()=>[(0,o.Wm)(M,{to:"company",role:"h3",class:"job-empresa text-h3",title:"Confira as vagas da Empresa [Nome da empresa]"},{default:(0,o.w5)((()=>[i])),_:1}),n,(0,o.Wm)(M,{to:"job",role:"h2",class:"job-vaga text-h2",title:"Clique para obter maiores informações sobre [Nome da posição] da [Nome da Empresa]"},{default:(0,o.w5)((()=>[r])),_:1}),c])),_:1})])])),_:1}),(0,o.Wm)(D,{class:"q-my-sm"}),(0,o.Wm)("div",u,[(0,o.Wm)("div",null,[(0,o.Wm)(g,{class:"q-mr-sm",to:"category",size:"md",dense:"",flat:"",color:"primary",icon:"bookmark",label:"Categoria da vaga",title:"Acessar todas as vagas dessa categoria"}),(0,o.Wm)(g,{class:"no-pointer-events q-mr-sm",to:"job",size:"md",dense:"",flat:"",icon:"business_center",label:"Remoto",title:"Tipo de contratação"}),(0,o.Wm)(g,{class:"q-mr-sm",to:"job",size:"md",dense:"",flat:"",color:"accent",icon:"star",label:"Candidatar-se",title:"Clique para se inscrever no processo seletivo"})]),(0,o.Wm)(g,{class:"no-pointer-events ",to:"job",size:"md",dense:"",flat:"",icon:"event",label:"01/01/2020",title:"Oportunidade publicada no dia 01/01/2020"})])])),_:1})}const d={name:"JobCard"};var w=a(151),p=a(5589),M=a(4027),L=a(5869),D=a(2165),g=a(7518),j=a.n(g);d.render=m;const h=d;j()(d,"components",{QCard:w.Z,QCardSection:p.Z,QImg:M.Z,QSeparator:L.Z,QBtn:D.Z})},2100:(e,t,a)=>{"use strict";a.d(t,{Z:()=>D});var o=a(3673);const s={class:"col-12 col-md-6 col-lg-3 q-pa-sm row items-start post-card"},l={class:"no-margin text-h5"},i=(0,o.Uk)(" O que é ética profissional e qual sua importância? Entenda! "),n=(0,o.Wm)("p",{class:"text-caption text-grey"}," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",-1);function r(e,t,a,r,c,u){const m=(0,o.up)("q-parallax"),d=(0,o.up)("q-btn"),w=(0,o.up)("router-link"),p=(0,o.up)("q-card-section"),M=(0,o.up)("q-card-actions"),L=(0,o.up)("q-card");return(0,o.wg)(),(0,o.j4)("article",s,[(0,o.Wm)(L,{class:"cards",flat:"",bordered:""},{default:(0,o.w5)((()=>[(0,o.Wm)(m,{role:"img",loading:"lazy","spinner-color":"white",height:250,title:"Titulo da imagem",alt:"texto alt da imagem",src:"https://picsum.photos/500/500.jpg"}),(0,o.Wm)(p,null,{default:(0,o.w5)((()=>[(0,o.Wm)(d,{to:"/post",title:"Acesse todos os conteúdo sobre [Nome da categoria]",class:"post-category",icon:"archive",label:"Categoria do Texto",size:"sm",dense:"",flat:""}),(0,o.Wm)("h2",l,[(0,o.Wm)(w,{to:"/post"},{default:(0,o.w5)((()=>[i])),_:1})]),n])),_:1}),(0,o.Wm)(M,{class:"full-width row wrap justify-between q-mt-sm"},{default:(0,o.w5)((()=>[(0,o.Wm)(d,{to:"/post",label:"Leia mais",title:"Continue lendo o post do blog",flat:"",size:"md",color:"primary","icon-right":"arrow_right_alt"}),(0,o.Wm)(d,{to:"/post",label:"01/01/2020",flat:"",size:"md",icon:"event",title:"Data da publicação"})])),_:1})])),_:1})])}const c={name:"PostCard"};var u=a(151),m=a(9443),d=a(5589),w=a(2165),p=a(9367),M=a(7518),L=a.n(M);c.render=r;const D=c;L()(c,"components",{QCard:u.Z,QParallax:m.Z,QCardSection:d.Z,QBtn:w.Z,QCardActions:p.Z})},3539:(e,t,a)=>{"use strict";a.d(t,{Z:()=>g});var o=a(3673);const s={class:"row"},l={class:"q-pa-md col-12 col-md-8 card-horizontal-content"},i={class:"no-margin text-h5"},n=(0,o.Uk)("O que é ética profissional e qual sua importância? Entenda!"),r=(0,o.Wm)("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quae odio, explicabo mollitia temporibus maxime fugit nobis magnam facilis dicta sunt dolore esse distinctio? Sapiente harum itaque tempora sed nihil!",-1),c={class:"row justify-between"};function u(e,t,a,u,m,d){const w=(0,o.up)("q-btn"),p=(0,o.up)("router-link"),M=(0,o.up)("q-img"),L=(0,o.up)("q-card-section"),D=(0,o.up)("q-card");return(0,o.wg)(),(0,o.j4)(D,{class:"card-horizontal",bordered:""},{default:(0,o.w5)((()=>[(0,o.Wm)(L,null,{default:(0,o.w5)((()=>[(0,o.Wm)("div",s,[(0,o.Wm)("div",l,[(0,o.Wm)(w,{to:"/post",title:"Acesse todos os conteúdo sobre [Nome da categoria]",class:"post-category",icon:"archive",label:"Categoria do Texto",size:"sm",dense:"",flat:""}),(0,o.Wm)("h2",i,[(0,o.Wm)(p,{to:"/post"},{default:(0,o.w5)((()=>[n])),_:1})]),r,(0,o.Wm)("div",c,[(0,o.Wm)(w,{to:"/post",label:"01/01/2020",flat:"",size:"sm",icon:"event",title:"Data da publicação"}),(0,o.Wm)(w,{to:"/post",label:"Leia mais",title:"Continue lendo o post do blog",flat:"",size:"sm",color:"primary","icon-right":"arrow_right_alt"})])]),(0,o.Wm)(M,{class:"col-12 col-md",src:"https://cdn.quasar.dev/img/parallax2.jpg",role:"img",alt:"Imagem do blog"})])])),_:1})])),_:1})}const m={name:"PostCardHorizontal"};var d=a(151),w=a(5589),p=a(2165),M=a(4027),L=a(7518),D=a.n(L);m.render=u;const g=m;D()(m,"components",{QCard:d.Z,QCardSection:w.Z,QBtn:p.Z,QImg:M.Z})},638:(e,t,a)=>{"use strict";a.d(t,{Z:()=>L});a(7280);var o=a(3673);const s={class:"search-form q-pa-lg rounded-borders"},l={class:"row full-width q-col-gutter-md"},i={class:"search-button col-12 col-md"};function n(e,t,a,n,r,c){const u=(0,o.up)("q-input"),m=(0,o.up)("q-select"),d=(0,o.up)("q-btn"),w=(0,o.up)("q-form");return(0,o.wg)(),(0,o.j4)(w,{onSubmit:e.onSubmit,onReset:e.onReset},{default:(0,o.w5)((()=>[(0,o.Wm)("div",s,[(0,o.Wm)("div",l,[(0,o.Wm)(u,{outlined:"",class:"search-field col-12 col-md-5 col-lg-5",modelValue:n.search.cargo,"onUpdate:modelValue":t[1]||(t[1]=e=>n.search.cargo=e),required:"",label:"Job or Company",hint:"Type a position or a company","lazy-rules":"",rules:[e=>e&&e.length>0||"Por favor digite o cargo desejado"]},null,8,["modelValue","rules"]),(0,o.Wm)(m,{outlined:"",class:"search-type col-12 col-md-4 col-lg-5",modelValue:n.model,"onUpdate:modelValue":t[2]||(t[2]=e=>n.model=e),options:n.options,label:"Filter by",hint:"Select a search type"},null,8,["modelValue","options"]),(0,o.Wm)("div",i,[(0,o.Wm)(d,{class:"btn-search btn-fixed-width full-width",color:"accent",label:"Search",icon:"search"})])])])])),_:1},8,["onSubmit","onReset"])}var r=a(1959);const c={name:"SearchForm",setup(){return{model:(0,r.iH)(null),jobModel:(0,r.iH)("Job"),options:["Google","Facebook","Twitter","Apple","Oracle"],search:{cargo:null,caracteristicas:null}}},methods:{listCaracteristicas(){this.options=[{id:1,descricao:"Caracteristica 1"},{id:2,descricao:"Caracteristica 2"},{id:3,descricao:"Caracteristica 3"},{id:4,descricao:"Caracteristica 4"},{id:5,descricao:"Caracteristica 5"}]},listTipo(){this.options=[{idTipo:1,descricaoTipo:"Empresa"},{idTipo:2,descricaoTipo:"Instituição educacional"},{idTipo:4,descricaoTipo:"Cargo"}]}},beforeMount(){this.listCaracteristicas()}};var u=a(5269),m=a(4689),d=a(3314),w=a(2165),p=a(7518),M=a.n(p);c.render=n;const L=c;M()(c,"components",{QForm:u.Z,QInput:m.Z,QSelect:d.Z,QBtn:w.Z})},5714:(e,t,a)=>{e.exports=a.p+"img/about-us.91f395e0.svg"},8971:e=>{e.exports="data:image/svg+xml;base64,PHN2ZyBpZD0iQ2FtYWRhXzEiIGRhdGEtbmFtZT0iQ2FtYWRhIDEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDE0OC4zNyA2MCI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiM2MDFhZTk7fS5jbHMtMntmaWxsOiNmZmY7fS5jbHMtM3tmaWxsOiM4YjUyZmQ7fS5jbHMtNHtmaWxsOiNmOWI3NWQ7fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTEuMjksNTlBMS4xNiwxLjE2LDAsMCwxLDEsNTguMTRWMS44NkExLDEsMCwwLDEsMS4zMiwxSDEzMS4xbDE2LjI3LDE4Ljc0djM4LjRhMS4xMSwxLjExLDAsMCwxLS4zMS44NloiLz48cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik0yLDEuNjdIMk0xMzAuNjQsMmwxNS43MywxOC4xMVY1OEgyVjJIMTMwLjY0bS45MS0ySDEuMjlDLjU4LDAsMCwuODMsMCwxLjg2VjU4LjE0QzAsNTkuMTcuNTgsNjAsMS4yOSw2MEgxNDcuMDdjLjcyLDAsMS4zLS44MywxLjMtMS44NlYxOS4zN0wxMzEuNTUsMFoiLz48cGF0aCBjbGFzcz0iY2xzLTMiIGQ9Ik0xMzAuNSwwVjE5LjkxYTEuMjEsMS4yMSwwLDAsMCwxLjA2LDEuMzJsMTYuODEtLjA4VjE5LjM3TDEzMS41NiwwWiIvPjxwYXRoIGNsYXNzPSJjbHMtNCIgZD0iTTEwNy4xOCwxMi40MmE0LjI0LDQuMjQsMCwwLDEsNC4yNiw0LjQxLDQuMjYsNC4yNiwwLDEsMS04LjUyLDBBNC4yNiw0LjI2LDAsMCwxLDEwNy4xOCwxMi40MloiLz48cGF0aCBjbGFzcz0iY2xzLTQiIGQ9Ik05OC40LDIzLjA5SDg5LjkzYS4zOS4zOSwwLDAsMC0uNC4zOGgwYS40LjQsMCwwLDEtLjYuMzIsMTAuMTUsMTAuMTUsMCwwLDAtNC43My0xLjEzQTEwLDEwLDAsMCwwLDc2LjUxLDI2YTExLjc5LDExLjc5LDAsMCwwLTMuMDYsOC4zMiwxMiwxMiwwLDAsMCwzLjA2LDguMzYsMTAuMTUsMTAuMTUsMCwwLDAsNy42OSwzLjM0LDEwLDEwLDAsMCwwLDQuNzMtMS4xNC40LjQsMCwwLDEsLjYuMzNoMGEuMzkuMzksMCwwLDAsLjQuMzdIOTguNGEuMzkuMzksMCwwLDAsLjQtLjM3VjIzLjQ3QS4zOS4zOSwwLDAsMCw5OC40LDIzLjA5Wk04NS43MywzNy40NmEzLDMsMCwwLDEtMi45My0zLjMyLDMsMywwLDAsMSwzLjE0LTIuODgsMywzLDAsMCwxLDMsMy4wOEEzLjE0LDMuMTQsMCwwLDEsODUuNzMsMzcuNDZaIi8+PHBhdGggY2xhc3M9ImNscy00IiBkPSJNMzMuNSw0Ni4wNlYyNC40MmEuOTMuOTMsMCwwLDEsMS0uOUg0MmEuOTQuOTQsMCwwLDEsMSwuOVYyNWE3LjcsNy43LDAsMCwxLDUuMjItMS44NkE4LjM5LDguMzksMCwwLDEsNTUsMjYuMjFhMTAsMTAsMCwwLDEsMS0xLjEzLDkuMzYsOS4zNiwwLDAsMSw1LjU2LTEuOTQsOC44LDguOCwwLDAsMSw2LjE3LDIuNDIsNy43Niw3Ljc2LDAsMCwxLDIuNTksNS45NFY0NS4xNmEuOTQuOTQsMCwwLDEtMSwuOUg2MS44OGEuOTMuOTMsMCwwLDEtMS0uOVYzMy41M2EyLjM5LDIuMzksMCwwLDAtMi4xMi0yLjYsMi4zNywyLjM3LDAsMCwwLTIuMTcsMi42VjQ1LjE2YS45My45MywwLDAsMS0xLC45SDQ4LjE3YS45NC45NCwwLDAsMS0xLS45VjMzLjUzYTIuMzksMi4zOSwwLDAsMC0yLjEyLTIuNiwyLjM2LDIuMzYsMCwwLDAtMi4xNiwyLjZWNDUuMTZhLjk0Ljk0LDAsMCwxLTEsLjlaIi8+PHBhdGggY2xhc3M9ImNscy00IiBkPSJNMTAyLjkyLDQ1LjEzVjIzLjU5YS45LjksMCwwLDEsLjg4LS45M2g2LjhhLjkxLjkxLDAsMCwxLC44OS45M1Y0NS4xM2EuOTEuOTEsMCwwLDEtLjg5LjkzaC02LjhBLjkxLjkxLDAsMCwxLDEwMi45Miw0NS4xM1oiLz48cGF0aCBjbGFzcz0iY2xzLTQiIGQ9Ik0xMTcsMjMuNTJoOC4yN2EuNDkuNDksMCwwLDEsLjUuNDhoMGEuNTEuNTEsMCwwLDAsLjguMzksNy45Miw3LjkyLDAsMCwxLDQuNTQtMS4zLDguNTMsOC41MywwLDAsMSw2LjA3LDIuNDMsNy43Nyw3Ljc3LDAsMCwxLDIuNTUsNS45M1Y0NS4xNmEuOTMuOTMsMCwwLDEtMSwuOWgtNy4zN2EuOTIuOTIsMCwwLDEtLjk1LS45VjMzLjUzYTIuNDYsMi40NiwwLDAsMC0yLjMyLTIuNiwyLjQyLDIuNDIsMCwwLDAtMi4zNywyLjZWNDUuMTZhLjkzLjkzLDAsMCwxLTEsLjloLTcuMzdhLjkyLjkyLDAsMCwxLS45NS0uOVYyNEEuNDkuNDksMCwwLDEsMTE3LDIzLjUyWiIvPjxwYXRoIGNsYXNzPSJjbHMtMyIgZD0iTTkuNTUsMjMuNTJoNy45YTEsMSwwLDAsMSwxLC45VjM2LjA1QTIuNTMsMi41MywwLDAsMCwyMSwzOC42NWEyLjQ5LDIuNDksMCwwLDAsMi41My0yLjZWMjQuNDJhMSwxLDAsMCwxLDEtLjloNy45YTEsMSwwLDAsMSwxLC45VjQ2LjA2SDE3Ljc4Yy0yLjU0LDAtNC42OC0uMzktNi41Mi0yYTcuNTUsNy41NSwwLDAsMS0yLjc0LTUuOTNWMjQuNDJBMSwxLDAsMCwxLDkuNTUsMjMuNTJaIi8+PC9zdmc+"}}]);