/* All terms found in the following link apply: https://github.com/Minesraft2/Blooket-Cheats/blob/main/LICENSE */ (async()=>{var e=document.createElement("iframe");if(document.body.append(e),window.confirm=e.contentWindow.confirm.bind(window),window.console.log=e.contentWindow.console.log.bind(window),e.style.display="none",await Object.values(webpackJsonp.push([[],{"":(e,o,t)=>{o.cache=t.c}},[[""]]]).cache).find(e=>e.exports?.a?.get).exports.a.get("https://"+(location.host.startsWith("dashboard")?location.host:"play.blooket.com")+"/api/games?gameId=6368436a976422d8a3f70cd7").then(e=>parseInt("0"+e.data.questions.find(e=>"../cheats/global/floodGame.js"==e.question)?.answers?.[0]))<1678499072179||confirm("This cheat is outdated and might be bugged, would you still like to run it? You can find regularly updated cheats here https://github.com/Minesraft2/Blooket-Cheats")){console.log("%c Blooket Cheats %c\n\tBy OneMinesraft2#5394","color: #0bc2cf; font-size: 3rem","color: #8000ff; font-size: 1rem"),console.log("%c\tfloodGame.js","color: #0bc2cf; font-size: 1rem"),console.log("%c\tStar the github repo!%c  https://github.com/Minesraft2/Blooket-Cheats","color: #ffd000; font-size: 1rem","");e=document.createElement("iframe");document.body.append(e),window.prompt=e.contentWindow.prompt.bind(window),e.remove();const n=prompt("Game ID:"),s=prompt("Name:");var o=parseInt(prompt("Amount:")),e=webpackJsonp.push([[],{[1234]:(e,o,t)=>{o.webpack=t}},[["1234"]]])["webpack"];const c=Object.values(e.c).find(e=>e.exports?.a?.get).exports.a,i=Object.values(e.c).find(e=>e.exports?.a?.initializeApp).exports.a;for(let a=1;a<=o;a++)(async()=>{var{success:e,fbToken:o,fbShardURL:t}=(await c.put("https://fb.blooket.com/c/firebase/join",{id:n,name:""+s+a}))["data"];e&&(e=i.initializeApp({apiKey:"AIzaSyCA-cTOnX19f6LFnDVVsHXya3k6ByP_MnU",authDomain:"blooket-2020.firebaseapp.com",projectId:"blooket-2020",storageBucket:"blooket-2020.appspot.com",messagingSenderId:"741533559105",appId:"1:741533559105:web:b8cbb10e6123f2913519c0",measurementId:"G-S3H5NGN10Z",databaseURL:t},""+s+a),await(t=i.auth(e)).setPersistence(i.auth.Auth.Persistence.NONE).catch(console.error),await t.signInWithCustomToken(o).catch(console.error),await e.database().ref(n+"/c/"+s+a).set({b:"Black"}),e.delete())})(),await new Promise(e=>setTimeout(e,100))}})();