!function(t){var i={};function e(s){if(i[s])return i[s].exports;var n=i[s]={i:s,l:!1,exports:{}};return t[s].call(n.exports,n,n.exports,e),n.l=!0,n.exports}e.m=t,e.c=i,e.d=function(t,i,s){e.o(t,i)||Object.defineProperty(t,i,{enumerable:!0,get:s})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,i){if(1&i&&(t=e(t)),8&i)return t;if(4&i&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(e.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&i&&"string"!=typeof t)for(var n in t)e.d(s,n,function(i){return t[i]}.bind(null,n));return s},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},e.p="public",e(e.s=0)}([function(t,i,e){"use strict";e.r(i),e.d(i,"default",(function(){return o}));class s{constructor(t){this.x=t.width/2,this.y=t.height/2,this.speed=Math.ceil(10*Math.random()),this.angle=Math.random()*Math.PI*2,this.dx=Math.cos(this.angle)*this.speed,this.dy=Math.sin(this.angle)*this.speed}}class n{constructor(t,i){this.position=t,this.radius=5+Math.ceil(10*Math.random()),this.canvas=i}update(t){(this.position.x+this.position.dx>this.canvas.width-this.radius||this.position.x+this.position.dx<this.radius)&&(this.position.dx=-this.position.dx),(this.position.y+this.position.dy<this.radius||this.position.y+this.position.dy>this.canvas.height-this.radius)&&(this.position.dy=-this.position.dy),this.position.x+=this.position.dx*t,this.position.y+=this.position.dy*t}render(t){t.beginPath(),t.arc(this.position.x,this.position.y,this.radius,0,2*Math.PI),t.fillStyle="#eee",t.fill(),t.closePath()}}class o{constructor(){this.delta=0,this.draw=()=>{this.frameRequestHandle=window.requestAnimationFrame(this.draw);const t=Date.now();this.delta=.06*(t-this.startTime),this.startTime=t,this.ball.update(this.delta),this.context.clearRect(0,0,this.canvas.width,this.canvas.height),this.ball.render(this.context)},this.canvas=document.getElementById("myCanvas"),this.context=this.canvas.getContext("2d"),this.startTime=Date.now(),setInterval((function(){window.location.reload()}),1e4),this.frameRequestHandle=window.requestAnimationFrame(this.draw),this.ball=new n(new s(this.canvas),this.canvas)}}window.addEventListener("load",()=>{new o})}]);