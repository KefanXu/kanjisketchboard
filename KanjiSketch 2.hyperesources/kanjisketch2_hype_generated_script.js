//	HYPE.documents["KanjiSketch 2"]

(function(){(function k(){function l(a,b,d){var c=!1;null==window[a]&&(null==window[b]?(window[b]=[],window[b].push(k),a=document.getElementsByTagName("head")[0],b=document.createElement("script"),c=h,false==!0&&(c=""),b.type="text/javascript",b.src=c+"/"+d,a.appendChild(b)):window[b].push(k),c=!0);return c}var h="KanjiSketch%202.hyperesources",c="KanjiSketch 2",e="kanjisketch2_hype_container";if(false==!1)try{for(var f=document.getElementsByTagName("script"),
a=0;a<f.length;a++){var b=f[a].src,d=null!=b?b.indexOf("/kanjisketch2_hype_generated_script.js"):-1;if(-1!=d){h=b.substr(0,d);break}}}catch(n){}if(false==!1&&(a=navigator.userAgent.match(/MSIE (\d+\.\d+)/),a=parseFloat(a&&a[1])||null,a=l("HYPE_598","HYPE_dtl_598",!0==(null!=a&&10>a||false==!0)?"HYPE-598.full.min.js":"HYPE-598.thin.min.js"),false==!0&&(a=a||l("HYPE_w_598","HYPE_wdtl_598","HYPE-598.waypoints.min.js")),a))return;f=window.HYPE.documents;
if(null!=f[c]){b=1;a=c;do c=""+a+"-"+b++;while(null!=f[c]);d=document.getElementsByTagName("div");b=!1;for(a=0;a<d.length;a++)if(d[a].id==e&&null==d[a].getAttribute("HYP_dn")){var b=1,g=e;do e=""+g+"-"+b++;while(null!=document.getElementById(e));d[a].id=e;b=!0;break}if(!1==b)return}b=[];b=[{name:"untitledFunction",source:"function(hypeDocument, element, event) {\t//\t\n// This function is invoked when the main timeline is loaded. It animates forward or reverse depending on mouse wheel scroll direction.\n// One handler, DOMMouseScroll, is for Firefox and another, onmousewheel, is for the other browsers. They also happen to work in opposite directions.\n// That is why we have two similar blocks of code that only differs by \"event.detail < 0\" and \"event.wheelDeltaY > 0\".\n// It also checks that is is not in start position using \"hypeDocument.currentTimeInTimelineNamed('Main Timeline') > 2\" to prevent weird behaviour of going around the corner and starting at the end.\n//\n// Bjarne B\u00fclow, bjarne@surveylegend.com\n// view blog post: http://wp.me/p2JEXv-wB \n//\n\tfunction wheel2(event) { // other browsers\n\t\tevent.preventDefault();\n\t\tif (event.detail < 0 && (hypeDocument.currentTimeInTimelineNamed('Main Timeline') > 2)) {\n\t\t\thypeDocument.continueTimelineNamed('Main Timeline', hypeDocument.kDirectionReverse);\n\t\t} else {\n\t\t\thypeDocument.continueTimelineNamed('Main Timeline', hypeDocument.kDirectionForward)\t\t}\n\t}\n\tfunction wheel(event) { // Firefox\n\t\tevent.preventDefault();\n\t\tif (event.wheelDeltaY > 0 && (hypeDocument.currentTimeInTimelineNamed('Main Timeline') > 2)) {\n\t\t\thypeDocument.continueTimelineNamed('Main Timeline', hypeDocument.kDirectionReverse);\n\t\t} else {\n\t\t\thypeDocument.continueTimelineNamed('Main Timeline', hypeDocument.kDirectionForward)\t\t}\n\t}\n\twindow.onmousewheel = document.onmousewheel = wheel;\n\twindow.addEventListener(\"DOMMouseScroll\", wheel2, false);\n\tdocument.addEventListener(\"DOMMouseScroll\", wheel2, false);\n\t}",identifier:"9"}];d={};g={};for(a=0;a<b.length;a++)try{g[b[a].identifier]=b[a].name,d[b[a].name]=eval("(function(){return "+b[a].source+"})();")}catch(m){window.console&&window.console.log(m),d[b[a].name]=
function(){}}a=new HYPE_598(c,e,{"-2":{n:"blank.gif"},"2":{p:1,n:"Pasted.jpg",g:"368",o:true,t:"@1x"},"3":{p:1,n:"Pasted_2x.jpg",g:"368",o:true,t:"@2x"},"4":{p:1,n:"Lantingji_Xu_%E8%98%AD%E4%BA%AD%E5%BA%8F.png",g:"372",o:true,t:"@1x"},"5":{p:1,n:"Lantingji_Xu_%E8%98%AD%E4%BA%AD%E5%BA%8F_2x.png",g:"372",o:true,t:"@2x"},"6":{p:1,n:"Pasted-1.jpg",g:"381",o:true,t:"@1x"},"7":{p:1,n:"Pasted-1_2x.jpg",g:"381",o:true,t:"@2x"},"-1":{n:"PIE.htc"},"0":{p:1,n:"noun_Paint%20Brush_1064132.png",g:"356",t:"@1x"},"8":{p:1,n:"noun_Home_2501071.png",g:"397",o:true,t:"@1x"},"1":{p:1,n:"list%404x.png",g:"358",t:"@1x"},"9":{p:1,n:"noun_Home_2501071_2x.png",g:"397",o:true,t:"@2x"}},h,[],d,[{n:"Untitled Scene",o:"1",X:[0]}],[{p:"600px",U:{},c:"#FFFFFF",bZ:180,d:600,cA:false,K:{a:[{c:0,y:true,A:0,p:10,K:1,symbolOid:"2",b:"kTimelineDefaultIdentifier"}]},Y:600,L:[],Z:400,v:{"427":{G:"#000000",aU:8,c:109,d:140,aV:8,r:"inline",e:0,s:"'American Typewriter','Courier New',Courier,monospace",t:51,Z:"break-word",v:"bold",w:"\u5b57<br>\u753b<br>",bF:"425",j:"absolute",x:"visible",k:"div",y:"preserve",z:2,aS:8,aT:8,a:248,b:96},"446":{G:"#000000",aU:8,c:207,d:54,aV:8,r:"inline",e:0,s:"Helvetica,Arial,Sans-Serif",cQ:1,t:16,cR:1,Z:"break-word",v:"bold",w:"Now with the Help of the AI<br>We are able to <br>achieve something similar<br>",bF:"420",j:"absolute",x:"visible",k:"div",y:"preserve",z:22,aS:8,aT:8,a:192,F:"center",b:172},"433":{G:"#000000",aU:8,c:140,d:115,aV:8,r:"inline",e:0,s:"Helvetica,Arial,Sans-Serif",t:13,Z:"break-word",v:"bold",w:"Using different types of strokes in Kanji characters, the modern artist Xu Bing produced this piece of work which contains over 4,000 fake Chinese characters",bF:"420",j:"absolute",x:"visible",k:"div",y:"preserve",z:20,aS:8,aT:8,a:94,b:214},"452":{c:9,d:9,I:"None",cQ:0.50000000000000011,J:"None",K:"None",cR:0.50000000000000011,g:"#000000",L:"None",M:0,N:0,aI:"50%",A:"#D8DDE4",O:0,x:"visible",j:"absolute",aJ:"50%",k:"div",C:"#D8DDE4",z:7,B:"#D8DDE4",D:"#D8DDE4",aK:"50%",bF:"447",P:0,a:0,aL:"50%",b:96},"420":{k:"div",x:"visible",c:600,d:400,z:3,a:0,j:"absolute",bS:383,b:0},"428":{b:59,G:"#000000",aU:8,c:49,d:57,aV:8,r:"none",e:0,s:"Didot,'Times New Roman',serif",f:0,t:15,Z:"break-word",v:"bold",aY:0,w:"Kanji<br>Sketch<br>Board<br>",bF:"425",j:"absolute",x:"visible",k:"div",y:"preserve",z:3,aS:8,aT:8,a:172,F:"right",bR:0},"447":{x:"visible",k:"div",bF:"420",c:9,d:121,z:27,e:0,a:295,j:"absolute",f:90,b:290},"434":{G:"#000000",aU:8,c:120,aV:8,d:51,r:"none",s:"Didot,'Times New Roman',serif",f:90,t:9,Z:"break-word",w:"| KEFAN XU &nbsp; &nbsp; &nbsp; <br>| NYU SH &nbsp; &nbsp; &nbsp;<br>| AN IMA FINAL PEOJECT",bF:"420",j:"absolute",x:"visible",k:"div",y:"preserve",z:8,aS:8,aT:8,a:493,b:38},"453":{c:9,d:9,I:"None",cQ:0.50000000000000011,J:"None",K:"None",cR:0.50000000000000011,g:"#000000",L:"None",M:0,N:0,aI:"50%",A:"#D8DDE4",O:0,x:"visible",j:"absolute",aJ:"50%",k:"div",C:"#D8DDE4",z:8,B:"#D8DDE4",D:"#D8DDE4",aK:"50%",bF:"447",P:0,a:0,aL:"50%",b:112},"421":{G:"#000000",aU:8,c:266,d:18,aV:8,r:"inline",e:0,s:"Didot,'Times New Roman',serif",X:9.10914,t:14,Z:"break-word",v:"bold",w:"<p style=\"margin-top: 0px; margin-bottom: 0px; color: rgb(0, 0, 0); -webkit-text-stroke-width: initial; -webkit-text-stroke-color: rgb(0, 0, 0);\">INSPIRATION</p>",bF:"420",j:"absolute",x:"visible",k:"div",y:"preserve",z:32,aS:8,aT:8,a:158,F:"center",b:418},"429":{p:"no-repeat",b:412,c:14,q:"100% 100%",bS:383,d:12,r:"inline",e:0,aP:"pointer",h:"356",w:"",bF:"420",aA:{a:[{i:8,b:"kTimelineDefaultIdentifier",p:9,symbolOid:"2"}]},x:"visible",j:"absolute",k:"div",dB:"img",z:10,tX:0.5,a:309,tY:0.5},"440":{G:"#000000",aU:8,c:149,d:34,aV:8,r:"inline",e:0,s:"Helvetica,Arial,Sans-Serif",t:13,Z:"break-word",v:"bold",w:"<p style=\"margin-top: 0px; margin-bottom: 0px; color: rgb(0, 0, 0); -webkit-text-stroke-width: initial; -webkit-text-stroke-color: rgb(0, 0, 0);\"><span style=\"font-kerning: none\">It has a long history of evolution</span></p>",bF:"420",j:"absolute",x:"visible",k:"div",y:"preserve",z:16,aS:8,aT:8,a:109,b:285},"448":{c:9,d:9,I:"None",cQ:0.50000000000000011,J:"None",K:"None",cR:0.50000000000000011,g:"#000000",L:"None",M:0,N:0,aI:"50%",A:"#D8DDE4",O:0,x:"visible",j:"absolute",aJ:"50%",k:"div",C:"#D8DDE4",z:3,B:"#D8DDE4",D:"#D8DDE4",aK:"50%",bF:"447",P:0,a:0,aL:"50%",b:32},"435":{p:"no-repeat",c:18,q:"100% 100%",bS:383,d:18,r:"inline",e:1,f:0,aP:"pointer",h:"358",w:"",bF:"420",j:"absolute",x:"visible",aA:{a:[{i:7,b:"kTimelineDefaultIdentifier",p:9,symbolOid:"2"}]},k:"div",dB:"img",z:12,a:276,b:421},"454":{c:9,d:9,I:"None",cQ:0.50000000000000011,J:"None",K:"None",cR:0.50000000000000011,g:"#000000",L:"None",M:0,N:0,aI:"50%",A:"#D8DDE4",O:0,x:"visible",j:"absolute",aJ:"50%",k:"div",C:"#D8DDE4",z:1,B:"#D8DDE4",D:"#D8DDE4",aK:"50%",bF:"447",P:0,a:0,aL:"50%",b:0},"422":{U:"iframe-html\u5c0f\u7ec4\u4ef61.html",c:1744,V:"0",d:1036,I:"None",W:"",cQ:0.30000000000000021,J:"None",bL:0,e:0,K:"None",cR:0.30000000000000021,L:"None",bF:"420",j:"absolute",x:"visible",k:"div",z:24,a:-572,b:-318},"441":{G:"#000000",aU:8,aV:8,r:"none",e:0,s:"Helvetica,Arial,Sans-Serif",t:16,Z:"break-word",v:"bold",w:"Enjoy it!",bF:"420",j:"absolute",x:"visible",yy:"nowrap",k:"div",y:"preserve",z:26,aS:8,aT:8,a:260,b:-50},"449":{c:9,d:9,I:"None",cQ:0.50000000000000011,J:"None",K:"None",cR:0.50000000000000011,g:"#000000",L:"None",M:0,N:0,aI:"50%",A:"#D8DDE4",O:0,x:"visible",j:"absolute",aJ:"50%",k:"div",C:"#D8DDE4",z:4,B:"#D8DDE4",D:"#D8DDE4",aK:"50%",bF:"447",P:0,a:0,aL:"50%",b:48},"436":{G:"#000000",aU:8,c:149,d:70,aV:8,r:"inline",e:0,s:"Arial,Helvetica,Sans-Serif",t:13,Z:"break-word",v:"bold",w:"<p style=\"margin-top: 0px; margin-bottom: 0px; color: rgb(0, 0, 0); -webkit-text-stroke-width: initial; -webkit-text-stroke-color: rgb(0, 0, 0);\"><span style=\"font-kerning: none\">the oldest continuously used system of writing in the world, composed by different types of structures and strokes</span></p>",bF:"420",j:"absolute",x:"visible",k:"div",y:"preserve",z:15,aS:8,aT:8,a:109,b:187},"455":{c:9,d:9,I:"None",cQ:0.50000000000000011,J:"None",K:"None",cR:0.50000000000000011,g:"#000000",L:"None",M:0,N:0,aI:"50%",A:"#D8DDE4",O:0,x:"visible",j:"absolute",aJ:"50%",k:"div",C:"#D8DDE4",z:2,B:"#D8DDE4",D:"#D8DDE4",aK:"50%",bF:"447",P:0,a:0,aL:"50%",b:16},"423":{w:"",h:"368",p:"no-repeat",x:"visible",a:318,q:"100% 100%",b:39,j:"absolute",dB:"img",z:14,k:"div",bF:"420",d:207,c:186,r:"inline",e:0},"442":{h:"397",p:"no-repeat",x:"visible",a:293,q:"100% 100%",b:411,j:"absolute",dB:"img",aA:{a:[{b:"kTimelineDefaultIdentifier",p:3,z:false,symbolOid:"2"}]},z:9,k:"div",d:13,bF:"420",c:14,e:0,aP:"pointer",r:"inline"},"437":{G:"#000000",aU:8,c:266,d:38,aV:8,r:"inline",e:0,s:"Didot,'Times New Roman',serif",X:4,t:14,Z:"break-word",w:"<p style=\"margin-top: 0px; margin-bottom: 0px; color: rgb(0, 0, 0); -webkit-text-stroke-width: initial; -webkit-text-stroke-color: rgb(0, 0, 0);\">Xu Bing, The Book From the Sky, 1988 - 1991</p>",bF:"420",j:"absolute",x:"visible",k:"div",y:"preserve",z:30,aS:8,aT:8,a:160,F:"center",b:537},"456":{G:"#000000",aU:8,aV:8,r:"inline",e:1,s:"Didot,'Times New Roman',serif",t:16,Z:"break-word",v:"bold",w:"scroll up",bF:"420",j:"absolute",x:"visible",yy:"nowrap",k:"div",y:"preserve",z:11,aS:8,aT:8,a:257,b:-34},"424":{G:"#000000",aU:8,c:446,d:66,aV:8,r:"inline",e:0,s:"Didot,'Times New Roman',serif",X:6.8931899999999997,t:12,Z:"break-word",v:"bold",w:"<p style=\"margin-top: 0px; margin-bottom: 0px; color: rgb(0, 0, 0); -webkit-text-stroke-width: initial; -webkit-text-stroke-color: rgb(0, 0, 0);\">AN IMA FINAL PROJECT</p><p style=\"text-align: center; margin-top: 0px; margin-bottom: 0px; color: rgb(0, 0, 0); -webkit-text-stroke-width: initial; -webkit-text-stroke-color: rgb(0, 0, 0);\">MADE BY KEFAN XU</p>",bF:"420",j:"absolute",x:"visible",k:"div",y:"preserve",z:33,aS:8,aT:8,a:69,F:"center",b:393},"443":{c:34,d:34,I:"Solid",e:0,J:"Solid",K:"Solid",g:"#E8EBED",L:"Solid",aP:"pointer",M:1,N:1,bF:"420",A:"#D8DDE4",x:"visible",aA:{a:[{i:0,b:"kTimelineDefaultIdentifier",p:9,symbolOid:"2"}]},O:1,j:"absolute",k:"div",dB:"button",z:13,C:"#D8DDE4",D:"#D8DDE4",B:"#D8DDE4",P:1,a:282,b:416},"430":{h:"381",p:"no-repeat",x:"visible",a:285,q:"100% 100%",b:16,j:"absolute",dB:"img",z:19,k:"div",bF:"420",d:131,c:264,r:"inline",e:0},"438":{G:"#000000",aU:8,c:140,d:20,aV:8,r:"inline",e:0,s:"Helvetica,Arial,Sans-Serif",t:9,Z:"break-word",v:"bold",w:"\u5929\u4e66\uff0c\u5f90\u51b0\uff0c1988 - 1991<br>A Book From the Sky, Xu Bing<br>",bF:"420",j:"absolute",x:"visible",k:"div",y:"preserve",z:21,aS:8,aT:8,a:589,F:"right",b:274},"457":{G:"#000000",aU:8,aV:8,r:"inline",e:0,s:"Helvetica,Arial,Sans-Serif",t:16,Z:"break-word",v:"bold",w:"As you can see at the beginning",bF:"420",j:"absolute",x:"visible",yy:"nowrap",k:"div",y:"preserve",z:23,aS:8,aT:8,a:169,b:315},"425":{x:"visible",k:"div",c:112,d:77,z:25,e:1,a:12,j:"absolute",bF:"420",b:9},"444":{G:"#000000",aU:8,c:266,d:38,aV:8,r:"inline",e:0,s:"Didot,'Times New Roman',serif",X:4,t:14,Z:"break-word",w:"<p style=\"margin-top: 0px; margin-bottom: 0px; color: rgb(0, 0, 0); -webkit-text-stroke-width: initial; -webkit-text-stroke-color: rgb(0, 0, 0);\">Monica Dinculescu, Magic Sketchpad</p>",bF:"420",j:"absolute",x:"visible",k:"div",y:"preserve",z:31,aS:8,aT:8,a:158,F:"center",b:671},"431":{G:"#000000",aU:8,c:149,d:70,aV:8,r:"inline",e:0,s:"Arial,Helvetica,Sans-Serif",t:13,Z:"break-word",v:"bold",w:"<p style=\"margin-top: 0px; margin-bottom: 0px; color: rgb(0, 0, 0); -webkit-text-stroke-width: initial; -webkit-text-stroke-color: rgb(0, 0, 0);\">Consists of over 3,500 characters, it not only serves as a written</p><p style=\"margin-top: 0px; margin-bottom: 0px; color: rgb(0, 0, 0); -webkit-text-stroke-width: initial; -webkit-text-stroke-color: rgb(0, 0, 0);\">language but also a form of art.</p>",bF:"420",j:"absolute",x:"visible",k:"div",y:"preserve",z:18,aS:8,aT:8,a:217,F:"center",b:246},"439":{b:128,G:"#000000",aU:8,c:135,d:108,aV:8,r:"none",e:0,s:"Didot,'Times New Roman',serif",f:0,t:15,Z:"break-word",v:"bold",aY:0,w:"AN AI-BOOST SKETCH BOARD TO EXPLORE THE BEAUITY OF KANJI CHARACTERS<br>",bF:"420",j:"absolute",x:"visible",k:"div",y:"preserve",z:7,aS:8,aT:8,a:224,F:"left",bR:0},"450":{c:9,d:9,I:"None",cQ:0.50000000000000011,J:"None",K:"None",cR:0.50000000000000011,g:"#000000",L:"None",M:0,N:0,aI:"50%",A:"#D8DDE4",O:0,x:"visible",j:"absolute",aJ:"50%",k:"div",C:"#D8DDE4",z:5,B:"#D8DDE4",D:"#D8DDE4",aK:"50%",bF:"447",P:0,a:0,aL:"50%",b:64},"458":{c:9,d:9,I:"Solid",cQ:0.80000000000000004,e:0,J:"Solid",K:"Solid",cR:0.80000000000000004,L:"Solid",M:1,N:1,aI:"50%",A:"#000000",O:1,x:"visible",j:"absolute",aJ:"50%",k:"div",C:"#000000",z:28,B:"#000000",D:"#000000",aK:"50%",bF:"420",P:1,a:238,aL:"50%",b:408},"426":{c:9,d:0,I:"None",e:0,J:"None",K:"None",g:"#000000",L:"None",M:0,N:0,bF:"425",A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",k:"div",O:0,C:"#D8DDE4",z:1,P:0,D:"#D8DDE4",a:311,b:119},"445":{U:"iframe-html\u5c0f\u7ec4\u4ef6.html",c:1812,bS:45,d:1305,I:"None",V:"0",cQ:0.30000000000000021,e:1,bL:0,W:"",K:"None",cR:0.30000000000000021,J:"None",L:"None",bF:"420",j:"absolute",x:"visible",k:"div",z:3,a:-606,b:-453},"432":{G:"#000000",aU:8,c:266,d:38,aV:8,r:"inline",e:0,s:"Didot,'Times New Roman',serif",X:4,t:14,Z:"break-word",w:"<p style=\"margin-top: 0px; margin-bottom: 0px; color: rgb(0, 0, 0); -webkit-text-stroke-width: initial; -webkit-text-stroke-color: rgb(0, 0, 0);\"><span style=\"caret-color: rgb(36, 41, 46); color: rgb(36, 41, 46); font-style: normal; font-variant-caps: normal; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; word-spacing: 0px; background-color: rgb(255, 255, 255); text-decoration: none;\">Ulrich Apel, Kanji Dataset</span><br></p>",bF:"420",j:"absolute",x:"visible",k:"div",y:"preserve",z:29,aS:8,aT:8,a:160,F:"center",b:435},"451":{c:9,d:9,I:"None",cQ:0.50000000000000011,J:"None",K:"None",cR:0.50000000000000011,g:"#000000",L:"None",M:0,N:0,aI:"50%",A:"#D8DDE4",O:0,x:"visible",j:"absolute",aJ:"50%",k:"div",C:"#D8DDE4",z:6,B:"#D8DDE4",D:"#D8DDE4",aK:"50%",bF:"447",P:0,a:0,aL:"50%",b:80},"459":{h:"372",p:"no-repeat",x:"visible",a:-400,q:"100% 100%",b:111,j:"absolute",dB:"img",z:17,k:"div",bF:"420",d:177.547,c:600,r:"inline",bL:0,e:0}},A:{a:[{p:4,h:"9"}]},O:["445","422","439","456","420","428","425","427","426","436","441","434","431","459","440","433","430","446","423","457","438","454","447","455","435","448","442","429","449","458","424","450","451","421","443","452","453","432","437","444"],"_":0,bY:1,n:"Untitled Layout",a:100,o:"3",T:{kTimelineDefaultIdentifier:{f:30,z:10,i:"kTimelineDefaultIdentifier",n:"\u4e3b\u65f6\u95f4\u7ebf",j:{"3":[[54,380,54,380,325,362,325,362]],"1":[[316,380,316,380,54,380,54,380]],"2":[[54,380,54,380,54,380,54,380]],"0":[[316,418,316,418,316,380,316,380]]},a:[{f:"c",y:0,z:1,i:"d",e:124,s:0,o:"426"},{f:"c",y:0,z:1,i:"e",e:1,s:0,o:"427"},{f:"c",y:0,z:1,i:"a",e:320,s:224,o:"439"},{f:"c",y:0,z:1,i:"b",e:97,s:96,o:"427"},{o:"429",y:0,z:1,i:"a",e:309,a:"0",f:"c",s:309},{o:"429",y:0,z:1,i:"b",e:374,a:"0",f:"c",s:412},{f:"c",y:0,z:1,i:"e",e:1,s:0,o:"429"},{y:0,i:"e",s:1,z:0,o:"435",f:"c"},{f:"c",y:0,z:1,i:"e",e:1,s:0,o:"447"},{f:"c",y:0,z:1,i:"a",e:237,s:248,o:"427"},{f:"c",y:0,z:1,i:"b",e:175,s:59,o:"428"},{f:"c",y:0,z:1,i:"e",e:1,s:0,o:"439"},{f:"c",y:0,z:1,i:"a",e:172,s:172,o:"428"},{f:"c",y:0,z:1,i:"b",e:371,s:421,o:"435"},{f:"c",y:0,z:1,i:"e",e:1,s:0,o:"428"},{f:"c",y:0,z:2,i:"a",e:258,s:257,o:"456"},{f:"c",y:0,z:1,i:"e",e:1,s:0,o:"426"},{f:"c",y:0,z:7,i:"a",e:169,s:169,o:"457"},{f:"c",y:0.16,z:0.15,i:"b",e:4,s:-34,o:"456"},{f:"c",y:1,z:1,i:"a",e:238,s:238,o:"458"},{f:"c",p:2,y:1,z:1,i:"ActionHandler",e:{a:[{b:"kTimelineDefaultIdentifier",symbolOid:"2",p:7}]},s:{a:[{b:"kTimelineDefaultIdentifier",symbolOid:"2",p:7}]},o:"kTimelineDefaultIdentifier"},{f:"c",y:1,z:1,i:"bL",e:12,s:0,o:"445"},{f:"c",y:1,z:1,i:"c",e:3,s:9,o:"426"},{f:"c",y:1,z:1,i:"t",e:22,s:51,o:"427"},{f:"c",y:1,z:1,i:"e",e:1,s:0,o:"458"},{o:"429",y:1,z:1,i:"b",e:374,a:"1",f:"c",s:374},{o:"429",y:1,z:1,i:"a",e:47,a:"1",f:"c",s:309},{f:"c",y:1,z:1,i:"c",e:28,s:109,o:"427"},{f:"c",y:1,z:1,i:"d",e:44,s:140,o:"427"},{f:"c",y:1,z:1,i:"t",e:14,s:15,o:"428"},{y:1,i:"e",s:1,z:0,o:"429",f:"c"},{f:"c",y:1,z:1,i:"d",e:50,s:124,o:"426"},{f:"c",y:1,z:1,i:"b",e:374,s:408,o:"458"},{y:1,i:"e",s:1,z:0,o:"447",f:"c"},{f:"c",y:1,z:1,i:"b",e:319,s:290,o:"447"},{f:"c",y:1,z:1,i:"e",e:1,s:0,o:"423"},{f:"c",y:1,z:1,i:"a",e:318,s:318,o:"423"},{f:"c",y:1,z:1,i:"b",e:110,s:39,o:"423"},{f:"c",y:1,z:1,i:"e",e:1,s:0,o:"436"},{f:"c",y:1,z:1,i:"b",e:110,s:187,o:"436"},{f:"c",y:1,z:1,i:"a",e:109,s:109,o:"436"},{f:"c",y:1,z:1,i:"e",e:1,s:0,o:"440"},{f:"c",y:1,z:1,i:"b",e:208,s:285,o:"440"},{f:"c",y:1,z:1,i:"a",e:109,s:109,o:"440"},{f:"c",y:1,z:1,i:"e",e:0,s:1,o:"456"},{f:"c",y:1,z:1,i:"b",e:-136,s:128,o:"439"},{y:1,i:"e",s:1,z:0,o:"427",f:"c"},{f:"c",y:1,z:1,i:"a",e:27,s:276,o:"435"},{f:"c",y:1,z:1,i:"b",e:15,s:119,o:"426"},{f:"c",y:1,z:0.15,i:"e",e:0,s:1,o:"439"},{f:"c",y:1,z:1,i:"a",e:65,s:311,o:"426"},{f:"c",y:1,z:1,i:"b",e:0,s:97,o:"427"},{y:1,i:"e",s:1,z:0,o:"428",f:"c"},{f:"c",y:1,z:1,i:"a",e:320,s:320,o:"439"},{f:"c",y:1,z:1,i:"b",e:4,s:175,o:"428"},{y:1,i:"e",s:1,z:0,o:"426",f:"c"},{f:"c",y:1,z:1,i:"a",e:68,s:237,o:"427"},{f:"c",y:1,z:1,i:"b",e:371,s:371,o:"435"},{f:"c",y:1,z:1,i:"a",e:0,s:172,o:"428"},{f:"c",y:1.01,z:0.29,i:"b",e:-34,s:4,o:"456"},{y:1.15,i:"e",s:0,z:0,o:"439",f:"c"},{f:"c",y:2,z:1,i:"a",e:254,s:238,o:"458"},{f:"c",y:2,z:4,i:"bL",e:12,s:12,o:"445"},{f:"c",p:2,y:2,z:1,i:"ActionHandler",e:{a:[{b:"kTimelineDefaultIdentifier",symbolOid:"2",p:7}]},s:{a:[{b:"kTimelineDefaultIdentifier",symbolOid:"2",p:7}]},o:"kTimelineDefaultIdentifier"},{y:2,i:"e",s:1,z:0,o:"458",f:"c"},{y:2,i:"c",s:3,z:0,o:"426",f:"c"},{y:2,i:"t",s:22,z:0,o:"427",f:"c"},{o:"429",y:2,z:5,i:"b",e:374,a:"2",f:"c",s:374},{o:"429",y:2,z:5,i:"a",e:47,a:"2",f:"c",s:47},{y:2,i:"d",s:44,z:0,o:"427",f:"c"},{y:2,i:"c",s:28,z:0,o:"427",f:"c"},{y:2,i:"t",s:14,z:0,o:"428",f:"c"},{y:2,i:"d",s:50,z:0,o:"426",f:"c"},{f:"c",y:2,z:1,i:"e",e:1,s:0,o:"459"},{f:"c",y:2,z:1,i:"e",e:0,s:1,o:"423"},{y:2,i:"b",s:374,z:0,o:"458",f:"c"},{f:"c",y:2,z:1,i:"a",e:0,s:-400,o:"459"},{f:"c",y:2,z:1,i:"e",e:0,s:1,o:"436"},{y:2,i:"b",s:319,z:0,o:"447",f:"c"},{y:2,i:"a",s:318,z:0,o:"423",f:"c"},{f:"c",y:2,z:1,i:"e",e:0,s:1,o:"440"},{f:"c",y:2,z:1,i:"b",e:188,s:110,o:"423"},{f:"c",y:2,z:1,i:"a",e:109,s:109,o:"436"},{y:2,i:"e",s:0,z:0,o:"456",f:"c"},{f:"c",y:2,z:1,i:"b",e:24,s:110,o:"436"},{f:"c",y:2,z:1,i:"a",e:109,s:109,o:"440"},{f:"c",y:2,z:1,i:"b",e:122,s:208,o:"440"},{y:2,i:"a",s:65,z:0,o:"426",f:"c"},{y:2,i:"b",s:15,z:0,o:"426",f:"c"},{y:2,i:"a",s:258,z:0,o:"456",f:"c"},{y:2,i:"b",s:-136,z:0,o:"439",f:"c"},{f:"c",y:2,z:5,i:"a",e:27,s:27,o:"435"},{y:2,i:"b",s:4,z:0,o:"428",f:"c"},{y:2,i:"a",s:68,z:0,o:"427",f:"c"},{y:2,i:"b",s:0,z:0,o:"427",f:"c"},{y:2,i:"a",s:320,z:0,o:"439",f:"c"},{y:2,i:"b",s:-34,z:0,o:"456",f:"c"},{y:2,i:"a",s:0,z:0,o:"428",f:"c"},{f:"c",y:2,z:5,i:"b",e:371,s:371,o:"435"},{f:"c",y:3,z:1,i:"bL",e:7.439675632911392,s:0,o:"459"},{f:"c",p:2,y:3,z:1,i:"ActionHandler",e:{a:[{b:"kTimelineDefaultIdentifier",symbolOid:"2",p:7}]},s:{a:[{b:"kTimelineDefaultIdentifier",symbolOid:"2",p:7}]},o:"kTimelineDefaultIdentifier"},{f:"c",y:3,z:1,i:"a",e:270,s:254,o:"458"},{f:"c",y:3,z:1,i:"e",e:1,s:0,o:"431"},{f:"c",y:3,z:1,i:"e",e:1,s:1,o:"459"},{y:3,i:"e",s:0,z:0,o:"440",f:"c"},{y:3,i:"e",s:0,z:0,o:"436",f:"c"},{y:3,i:"e",s:0,z:0,o:"423",f:"c"},{f:"c",y:3,z:1,i:"a",e:217,s:217,o:"431"},{y:3,i:"a",s:0,z:0,o:"459",f:"c"},{f:"c",y:3,z:1,i:"b",e:159,s:246,o:"431"},{y:3,i:"a",s:109,z:0,o:"440",f:"c"},{y:3,i:"b",s:122,z:0,o:"440",f:"c"},{y:3,i:"a",s:109,z:0,o:"436",f:"c"},{y:3,i:"b",s:24,z:0,o:"436",f:"c"},{y:3,i:"b",s:188,z:0,o:"423",f:"c"},{f:"c",y:4,z:1,i:"bL",e:20,s:7.439675632911392,o:"459"},{f:"c",p:2,y:4,z:1,i:"ActionHandler",e:{a:[{b:"kTimelineDefaultIdentifier",symbolOid:"2",p:7}]},s:{a:[{b:"kTimelineDefaultIdentifier",symbolOid:"2",p:7}]},o:"kTimelineDefaultIdentifier"},{f:"c",y:4,z:1,i:"a",e:286,s:270,o:"458"},{f:"c",y:4,z:1,i:"e",e:1,s:0,o:"438"},{f:"c",y:4,z:1,i:"e",e:1,s:0,o:"433"},{f:"c",y:4,z:1,i:"e",e:1,s:0,o:"430"},{f:"c",y:4,z:1,i:"e",e:0,s:1,o:"431"},{f:"c",y:4,z:1,i:"e",e:0,s:1,o:"459"},{f:"c",y:4,z:1,i:"a",e:393,s:589,o:"438"},{f:"c",y:4,z:1,i:"a",e:94,s:94,o:"433"},{f:"c",y:4,z:1,i:"b",e:274,s:274,o:"438"},{f:"c",y:4,z:1,i:"a",e:285,s:285,o:"430"},{f:"c",y:4,z:1,i:"b",e:134,s:214,o:"433"},{y:4,i:"a",s:217,z:0,o:"431",f:"c"},{f:"c",y:4,z:1,i:"b",e:134,s:16,o:"430"},{f:"c",y:4,z:1,i:"b",e:78,s:159,o:"431"},{f:"c",y:5,z:1,i:"cQ",e:1.3999999999999999,s:1,o:"446"},{f:"c",y:5,z:1,i:"cR",e:1.3999999999999999,s:1,o:"446"},{y:5,i:"bL",s:20,z:0,o:"459",f:"c"},{f:"c",p:2,y:5,z:1,i:"ActionHandler",e:{a:[{b:"kTimelineDefaultIdentifier",symbolOid:"2",p:7}]},s:{a:[{b:"kTimelineDefaultIdentifier",symbolOid:"2",p:7}]},o:"kTimelineDefaultIdentifier"},{f:"c",y:5,z:1,i:"a",e:302,s:286,o:"458"},{f:"c",y:5,z:1,i:"e",e:1,s:0,o:"446"},{f:"c",y:5,z:1,i:"e",e:1,s:0,o:"457"},{y:5,i:"e",s:1,z:0,o:"438",f:"c"},{f:"c",y:5,z:1,i:"e",e:0,s:1,o:"433"},{f:"c",y:5,z:1,i:"e",e:0,s:1,o:"430"},{f:"c",y:5,z:1,i:"a",e:188,s:192,o:"446"},{y:5,i:"e",s:0,z:0,o:"431",f:"c"},{f:"c",y:5,z:1,i:"a",e:699,s:393,o:"438"},{y:5,i:"e",s:0,z:0,o:"459",f:"c"},{f:"c",y:5,z:1,i:"b",e:162,s:172,o:"446"},{f:"c",y:5,z:1,i:"a",e:-156,s:94,o:"433"},{f:"c",y:5,z:1,i:"b",e:258,s:315,o:"457"},{f:"c",y:5,z:1,i:"a",e:607,s:285,o:"430"},{f:"c",y:5,z:1,i:"b",e:274,s:274,o:"438"},{f:"c",y:5,z:1,i:"b",e:134,s:134,o:"433"},{f:"c",y:5,z:1,i:"b",e:134,s:134,o:"430"},{y:5,i:"b",s:78,z:0,o:"431",f:"c"},{y:6,i:"cQ",s:1.3999999999999999,z:0,o:"446",f:"c"},{y:6,i:"cR",s:1.3999999999999999,z:0,o:"446",f:"c"},{f:"c",y:6,z:1,i:"bL",e:0,s:12,o:"445"},{f:"c",p:2,y:6,z:1,i:"ActionHandler",e:{a:[{b:"kTimelineDefaultIdentifier",symbolOid:"2",p:7}]},s:{a:[{b:"kTimelineDefaultIdentifier",symbolOid:"2",p:7}]},o:"kTimelineDefaultIdentifier"},{f:"c",y:6,z:1,i:"a",e:318,s:302,o:"458"},{f:"c",y:6,z:1,i:"e",e:0,s:1,o:"425"},{f:"c",y:6,z:1,i:"e",e:0,s:1,o:"446"},{y:6,i:"a",s:188,z:0,o:"446",f:"c"},{f:"c",y:6,z:1,i:"e",e:0,s:1,o:"457"},{y:6,i:"a",s:-156,z:0,o:"433",f:"c"},{y:6,i:"e",s:0,z:0,o:"433",f:"c"},{y:6,i:"a",s:607,z:0,o:"430",f:"c"},{y:6,i:"e",s:0,z:0,o:"430",f:"c"},{y:6,i:"a",s:699,z:0,o:"438",f:"c"},{y:6,i:"b",s:162,z:0,o:"446",f:"c"},{f:"c",y:6,z:1,i:"b",e:240,s:258,o:"457"},{y:6,i:"b",s:134,z:0,o:"433",f:"c"},{y:6,i:"b",s:134,z:0,o:"430",f:"c"},{y:6,i:"b",s:274,z:0,o:"438",f:"c"},{f:"c",y:7,z:1,i:"e",e:1,s:0,o:"442"},{o:"429",y:7,z:1,i:"b",e:356,a:"3",f:"c",s:374},{o:"429",y:7,z:1,i:"a",e:318,a:"3",f:"c",s:47},{y:7,i:"bL",s:0,z:0,o:"445",f:"c"},{f:"c",p:2,y:7,z:1,i:"ActionHandler",e:{a:[{b:"kTimelineDefaultIdentifier",symbolOid:"2",p:7}]},s:{a:[{b:"kTimelineDefaultIdentifier",symbolOid:"2",p:7}]},o:"kTimelineDefaultIdentifier"},{f:"c",y:7,z:1,i:"a",e:334,s:318,o:"458"},{f:"c",y:7,z:1,i:"e",e:1,s:0,o:"441"},{f:"c",y:7,z:1,i:"e",e:0,s:1,o:"445"},{f:"c",y:7,z:1,i:"a",e:260,s:260,o:"441"},{f:"c",y:7,z:1,i:"e",e:1,s:0,o:"422"},{f:"c",y:7,z:1,i:"a",e:293,s:293,o:"442"},{f:"c",y:7,z:1,i:"e",e:1,s:0,o:"425"},{y:7,i:"a",s:169,z:0,o:"457",f:"c"},{y:7,i:"e",s:0,z:0,o:"446",f:"c"},{f:"c",y:7,z:1,i:"a",e:265,s:27,o:"435"},{y:7,i:"e",s:0,z:0,o:"457",f:"c"},{f:"c",y:7,z:1,i:"b",e:29,s:-50,o:"441"},{f:"c",y:7,z:1,i:"b",e:355,s:411,o:"442"},{y:7,i:"b",s:240,z:0,o:"457",f:"c"},{f:"c",y:7,z:1,i:"b",e:353,s:371,o:"435"},{f:"c",y:8,z:1,i:"e",e:1,s:0,o:"424"},{f:"c",y:8,z:1,i:"b",e:188,s:393,o:"424"},{f:"c",y:8,z:1,i:"a",e:69,s:69,o:"424"},{f:"c",y:8,z:1,i:"bL",e:15.458860759493669,s:0,o:"422"},{y:8,i:"e",s:1,z:0,o:"442",f:"c"},{y:8,i:"b",s:356,z:0,o:"429",f:"c"},{y:8,i:"a",s:318,z:0,o:"429",f:"c"},{f:"c",p:2,y:8,z:1,i:"ActionHandler",e:{a:[{b:"kTimelineDefaultIdentifier",symbolOid:"2",p:7}]},s:{a:[{b:"kTimelineDefaultIdentifier",symbolOid:"2",p:7}]},o:"kTimelineDefaultIdentifier"},{f:"c",y:8,z:1,i:"a",e:350,s:334,o:"458"},{y:8,i:"e",s:1,z:0,o:"441",f:"c"},{y:8,i:"a",s:260,z:0,o:"441",f:"c"},{y:8,i:"e",s:0,z:0,o:"445",f:"c"},{y:8,i:"a",s:293,z:0,o:"442",f:"c"},{y:8,i:"e",s:1,z:0,o:"422",f:"c"},{y:8,i:"a",s:265,z:0,o:"435",f:"c"},{y:8,i:"e",s:1,z:0,o:"425",f:"c"},{y:8,i:"b",s:29,z:0,o:"441",f:"c"},{y:8,i:"b",s:355,z:0,o:"442",f:"c"},{y:8,i:"b",s:353,z:0,o:"435",f:"c"},{f:"c",y:9,z:1,i:"b",e:188,s:435,o:"432"},{f:"c",y:9,z:1,i:"a",e:160,s:160,o:"432"},{f:"c",y:9,z:1,i:"e",e:1,s:0,o:"432"},{f:"c",y:9,z:1,i:"e",e:1,s:0,o:"437"},{f:"c",y:9,z:1,i:"a",e:157,s:160,o:"437"},{f:"c",y:9,z:1,i:"b",e:232,s:537,o:"437"},{f:"c",y:9,z:1,i:"b",e:279,s:671,o:"444"},{f:"c",y:9,z:1,i:"e",e:1,s:0,o:"444"},{f:"c",y:9,z:1,i:"a",e:157,s:158,o:"444"},{f:"c",y:9,z:1,i:"e",e:1,s:0,o:"421"},{f:"c",y:9,z:1,i:"b",e:142,s:418,o:"421"},{f:"c",y:9,z:1,i:"a",e:158,s:158,o:"421"},{y:9,i:"e",s:1,z:0,o:"424",f:"c"},{f:"c",y:9,z:1,i:"b",e:90,s:188,o:"424"},{f:"c",y:9,z:1,i:"a",e:69,s:69,o:"424"},{y:9,i:"bL",s:15.458860759493669,z:0,o:"422",f:"c"},{y:9,i:"a",s:350,z:0,o:"458",f:"c"},{f:"c",p:2,y:9,z:1,i:"ActionHandler",e:{a:[{}]},s:{a:[{b:"kTimelineDefaultIdentifier",symbolOid:"2",p:7}]},o:"kTimelineDefaultIdentifier"},{y:10,i:"b",s:188,z:0,o:"432",f:"c"},{y:10,i:"a",s:160,z:0,o:"432",f:"c"},{y:10,i:"e",s:1,z:0,o:"432",f:"c"},{y:10,i:"e",s:1,z:0,o:"437",f:"c"},{y:10,i:"a",s:157,z:0,o:"437",f:"c"},{y:10,i:"b",s:232,z:0,o:"437",f:"c"},{y:10,i:"b",s:279,z:0,o:"444",f:"c"},{y:10,i:"e",s:1,z:0,o:"444",f:"c"},{y:10,i:"a",s:157,z:0,o:"444",f:"c"},{y:10,i:"e",s:1,z:0,o:"421",f:"c"},{y:10,i:"b",s:142,z:0,o:"421",f:"c"},{y:10,i:"a",s:158,z:0,o:"421",f:"c"},{y:10,i:"b",s:90,z:0,o:"424",f:"c"},{y:10,i:"a",s:69,z:0,o:"424",f:"c"},{f:"c",p:2,y:10,z:0,i:"ActionHandler",s:{a:[{b:"kTimelineDefaultIdentifier",symbolOid:"2",p:7}]},o:"kTimelineDefaultIdentifier"}],b:[]}},b:100}],{},g,{},null,false,true,-1,true,true,false,true);f[c]=a.API;document.getElementById(e).setAttribute("HYP_dn",
c);a.z_o(this.body)})();})();