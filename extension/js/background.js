/**
 * This chrome extension is powered by awesome-chrome-extension-boilerplate
 *
 * @see {@link https://github.com/tjx666/awesome-chrome-extension-boilerplate}
 * @preserve
 */(()=>{"use strict";const e="WORD_BLOCK_DATA";function t({page:t,limit:o,type:r,search:a}={page:0,limit:1e4,type:void 0,search:""}){return new Promise((c=>{chrome.storage.local.get([e],(e=>{let l=e.WORD_BLOCK_DATA||[];r&&(l=l.filter((e=>e.type===r))),a&&(l=l.filter((e=>e.content.toLowerCase().includes(a.toLowerCase())))),c({data:l.slice(t*o,t*o+o),total:l.length,all:l})}))}))}function o(t){chrome.storage.local.set({[e]:t})}function r(){const e=[],t="0123456789abcdef";for(let o=0;o<36;o++)e[o]=t.substr(Math.floor(16*Math.random()),1);e[14]="4",e[19]=t.substr(3&e[19]|8,1),e[8]=e[13]=e[18]=e[23]="-";return e.join("")}chrome.contextMenus.create({id:"wordblock",title:"Wordblock",visible:!0,contexts:["all"],onclick:async()=>{console.log("wordblock")}},(()=>{chrome.runtime.lastError&&console.log("create context menu failed! error:",chrome.runtime.lastError)})),chrome.contextMenus.create({parentId:"wordblock",contexts:["all"],title:"Save Text Block",onclick:async(e,a)=>{const{pageUrl:c,selectionText:l}=e,{data:n}=await t();if(l)return o([...n,{url:c,content:l,author:"mirror",tags:"favorite",create_at:Date.now(),id:r(),type:"text block"}]),void chrome.tabs.sendMessage(a.id,{type:"saved"});chrome.tabs.sendMessage(a.id,{type:"selectText"})}}),chrome.contextMenus.create({parentId:"wordblock",contexts:["all"],title:"Save Article",onclick:async(e,a)=>{const{pageUrl:c}=e,{title:l}=a,{data:n}=await t();o([...n,{url:c,content:l,author:"mirror",tags:"favorite",create_at:Date.now(),id:r(),type:"article"}]),chrome.tabs.sendMessage(a.id,{type:"saved"})}})})();