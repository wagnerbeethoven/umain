(self["webpackChunkumain"]=self["webpackChunkumain"]||[]).push([[192],{9192:(e,a,l)=>{"use strict";l.r(a),l.d(a,{default:()=>P});var o=l(3673),t=l(8880);const s={class:"q-ma-md"},m={class:"q-mx-md page-container-bg q-pa-md"},d=(0,o.Wm)("header",{class:"section-header q-px-md"},[(0,o.Wm)("h1",{class:"section-title"},[(0,o.Uk)("Nova "),(0,o.Wm)("strong",null,"empresa")]),(0,o.Wm)("p",null,"Cadastre nova empresa, publique suas vagas e encontre os melhores talentos do mercado!")],-1),n={class:"row q-col-gutter-lg"},u={class:"col-12 col-md-4"},r=(0,o.Uk)("Identificação"),c=(0,o.Uk)("Vagas disponíveis"),i=(0,o.Uk)("Detalhes"),p={class:"col-12 col-md-8"},g={class:"rounded-borders q-pa-md bg-white"},W={class:"q-col-gutter-md row"},h=(0,o.Wm)("legend",null,"Identificação",-1),w={class:"row col-12 col-md-6 q-col-gutter-md"},v={class:"col-12 text-center"},f={class:"row col-12 col-md-6 q-col-gutter-md"},q={class:"col-12 text-center"},b=(0,o.Wm)("p",null,"Format: png/ jpg. Size: 3MB",-1);function k(e,a,l,k,x,U){const Q=(0,o.up)("BreadCrumbs"),Z=(0,o.up)("q-item-section"),_=(0,o.up)("q-item"),y=(0,o.up)("q-list"),A=(0,o.up)("q-input"),I=(0,o.up)("q-skeleton"),V=(0,o.up)("q-avatar"),C=(0,o.up)("q-uploader"),j=(0,o.up)("q-icon"),S=(0,o.up)("q-file"),z=(0,o.up)("q-page"),B=(0,o.Q2)("ripple");return(0,o.wg)(),(0,o.j4)(z,{class:"page-container page-home-user"},{default:(0,o.w5)((()=>[(0,o.Wm)("div",s,[(0,o.Wm)(Q,{class:"clearfix"})]),(0,o.Wm)("div",m,[d,(0,o.Wm)("div",n,[(0,o.Wm)("div",u,[(0,o.Wm)(y,{bordered:"",separator:"",class:"rounded-borders bg-white"},{default:(0,o.w5)((()=>[(0,o.wy)((0,o.Wm)(_,null,{default:(0,o.w5)((()=>[(0,o.Wm)(Z,null,{default:(0,o.w5)((()=>[r])),_:1})])),_:1},512),[[B]]),(0,o.wy)((0,o.Wm)(_,null,{default:(0,o.w5)((()=>[(0,o.Wm)(Z,null,{default:(0,o.w5)((()=>[c])),_:1})])),_:1},512),[[B]]),(0,o.wy)((0,o.Wm)(_,null,{default:(0,o.w5)((()=>[(0,o.Wm)(Z,null,{default:(0,o.w5)((()=>[i])),_:1})])),_:1},512),[[B]])])),_:1})]),(0,o.Wm)("div",p,[(0,o.Wm)("div",g,[(0,o.Wm)("fieldset",W,[h,(0,o.Wm)(A,{outlined:"",class:"col-12",color:"accent",modelValue:e.text,"onUpdate:modelValue":a[1]||(a[1]=a=>e.text=a),label:"Nome",hint:"Digite o nome da empresa"},null,8,["modelValue"]),(0,o.Wm)("div",w,[(0,o.Wm)("div",v,[0===x.images.length?((0,o.wg)(),(0,o.j4)(I,{key:0,class:"block mx-auto",type:"QAvatar",size:"100px"})):((0,o.wg)(),(0,o.j4)(V,{key:1,size:"100px"},{default:(0,o.w5)((()=>[(0,o.Wm)("img",{src:x.urlAPI+x.images},null,8,["src"])])),_:1}))]),(0,o.Wm)(C,{color:"grey-3",modelValue:x.uploadAvatar,"onUpdate:modelValue":a[2]||(a[2]=e=>x.uploadAvatar=e),class:"col-12 q-mb-md","text-color":"grey-9",url:x.urlUpload,"field-name":"file",accept:".jpg, image/*",headers:x.headersUpload,"auto-upload":"",label:"Arquivo",onUploaded:U.addImage,"no-thumbnails":""},{list:(0,o.w5)((()=>[])),_:1},8,["modelValue","url","headers","onUploaded"])]),(0,o.Wm)("div",f,[(0,o.Wm)("div",q,[(0,o.Wm)(I,{class:"block mx-auto",height:"100px",width:"250px"})]),(0,o.Wm)(S,{outlined:"",class:"col-12",color:"accent","bottom-slots":"",modelValue:e.model,"onUpdate:modelValue":a[5]||(a[5]=a=>e.model=a),label:"Banner",counter:""},{prepend:(0,o.w5)((()=>[(0,o.Wm)(j,{name:"cloud_upload",onClick:a[3]||(a[3]=(0,t.iM)((()=>{}),["stop"]))})])),append:(0,o.w5)((()=>[(0,o.Wm)(j,{name:"close",onClick:a[4]||(a[4]=(0,t.iM)((a=>e.model=null),["stop"])),class:"cursor-pointer"})])),hint:(0,o.w5)((()=>[b])),_:1},8,["modelValue"])])])])])])])])),_:1})}var x=l(6514);const U={name:"New Company",components:{BreadCrumbs:x.Z},data(){return{urlAPI:"https://umain-api.herokuapp.com/api/images/",urlUpload:"https://umain-api.herokuapp.com/api/upload/images",uploadAvatar:{},headersUpload:[{name:"Authorization",value:sessionStorage.token}],skeletonTypes:["QAvatar"],images:[],company:{avatar:null,banner:null,name:null}}},methods:{addImage({files:e}){this.images=JSON.parse(e[0].xhr.response).filename}}};var Q=l(4379),Z=l(7011),_=l(3414),y=l(2035),A=l(4689),I=l(4103),V=l(5096),C=l(1034),j=l(1052),S=l(4554),z=l(6489),B=l(7518),N=l.n(B);U.render=k;const P=U;N()(U,"components",{QPage:Q.Z,QList:Z.Z,QItem:_.Z,QItemSection:y.Z,QInput:A.Z,QSkeleton:I.ZP,QAvatar:V.Z,QUploader:C.Z,QFile:j.Z,QIcon:S.Z}),N()(U,"directives",{Ripple:z.Z})}}]);