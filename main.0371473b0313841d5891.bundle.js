webpackJsonp([1],{0:function(n,l,t){n.exports=t("cDNt")},cDNt:function(n,l,t){"use strict";function u(n){return o._16(0,[(n()(),o._15(-1,null,["\n"])),(n()(),o._3(1,0,null,null,4,"div",[["style","text-align:center"]],null,null,null,null,null)),(n()(),o._15(-1,null,["\n  "])),(n()(),o._3(3,0,null,null,1,"h1",[],null,null,null,null,null)),(n()(),o._15(4,null,["\n    Welcome to the ","!\n  "])),(n()(),o._15(-1,null,["\n"])),(n()(),o._15(-1,null,["\n"])),(n()(),o._3(7,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),o._15(-1,null,["This app allows you to generate your own gym name. Enjoy it!"])),(n()(),o._15(-1,null,["\n"])),(n()(),o._3(10,0,null,null,1,"button",[["class","btn btn-primary"],["type","button"]],null,[[null,"click"]],function(n,l,t){var u=!0,e=n.component;if("click"===l){u=!1!==e.generate_gym_name()&&u}return u},null,null)),(n()(),o._15(-1,null,["Generate"])),(n()(),o._15(-1,null,["\n\n"])),(n()(),o._3(13,0,null,null,1,"h2",[],null,null,null,null,null)),(n()(),o._15(14,null,[""," ",""])),(n()(),o._15(-1,null,["\n"]))],null,function(n,l){var t=l.component;n(l,4,0,t.title),n(l,14,0,t.firstName,t.lastName)})}function e(n){return o._16(0,[(n()(),o._3(0,0,null,null,1,"app-root",[],null,null,null,u,s)),o._1(1,49152,null,0,a,[],null,null)],null,null)}Object.defineProperty(l,"__esModule",{value:!0});var o=t("/oeL"),r={production:!0},_=function(){function n(){}return n}(),a=function(){function n(){this.title="Gymnerator"}return n.prototype.generate_gym_name=function(){var n=["Body","Build","Force","Energy","Life","Sport","Fit","Fitness","Tech","Gym","Smart","Total"],l=this.getRandomItens(n,2),t=l[0],u=l[1];this.firstName=t,this.lastName=u},n.prototype.getRandomItens=function(n,l){var t=new Array(l),u=n.length,e=new Array(u);if(l>u)throw new RangeError("getRandom: more elements taken than available");for(;l--;){var o=Math.floor(Math.random()*u);t[l]=n[o in e?e[o]:o],e[o]=--u}return t},n}(),i=[""],c=[i],s=o._0({encapsulation:0,styles:c,data:{}}),f=o.Y("app-root",a,e,{},{},[]),m=t("qbdv"),p=t("fc+i"),d=o.Z(_,[a],function(n){return o._12([o._13(512,o.i,o.W,[[8,[f]],[3,o.i],o.x]),o._13(5120,o.v,o._11,[[3,o.v]]),o._13(4608,m.d,m.c,[o.v]),o._13(4608,o.h,o.h,[]),o._13(5120,o.a,o._4,[]),o._13(5120,o.t,o._9,[]),o._13(5120,o.u,o._10,[]),o._13(4608,p.b,p.s,[m.b]),o._13(6144,o.H,null,[p.b]),o._13(4608,p.e,p.f,[]),o._13(5120,p.c,function(n,l,t,u){return[new p.k(n),new p.o(l),new p.n(t,u)]},[m.b,m.b,m.b,p.e]),o._13(4608,p.d,p.d,[p.c,o.z]),o._13(135680,p.m,p.m,[m.b]),o._13(4608,p.l,p.l,[p.d,p.m]),o._13(6144,o.F,null,[p.l]),o._13(6144,p.p,null,[p.m]),o._13(4608,o.L,o.L,[o.z]),o._13(4608,p.g,p.g,[m.b]),o._13(4608,p.i,p.i,[m.b]),o._13(512,m.a,m.a,[]),o._13(1024,o.l,p.q,[]),o._13(1024,o.b,function(n,l){return[p.r(n,l)]},[[2,p.h],[2,o.y]]),o._13(512,o.c,o.c,[[2,o.b]]),o._13(131584,o._2,o._2,[o.z,o.X,o.r,o.l,o.i,o.c]),o._13(2048,o.e,null,[o._2]),o._13(512,o.d,o.d,[o.e]),o._13(512,p.a,p.a,[[3,p.a]]),o._13(512,_,_,[])])});r.production&&Object(o.R)(),Object(p.j)().bootstrapModuleFactory(d).catch(function(n){return console.log(n)})},gFIY:function(n,l){function t(n){return Promise.resolve().then(function(){throw new Error("Cannot find module '"+n+"'.")})}t.keys=function(){return[]},t.resolve=t,n.exports=t,t.id="gFIY"}},[0]);