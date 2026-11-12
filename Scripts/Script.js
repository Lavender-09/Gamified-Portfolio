var P=
[
    {t:"Gamified learning system",tag:"Boss level",c:"--pink",s:"C#, ASP.NET, SQL Server | 2nd-year module (A)",
 b:["Multi-role platform for students, tutors and admins: booking, enrolment, announcements and material uploads","XP events, automatic level progression and a student progress dashboard","Accounts secured with Argon2id hashing and parameterised SQL"],
 badge:"Security shield",link:"https://github.com/Lavender-09/Gamified-LMS",lt:"See my GitHub"
},
{
    t:"Terminal AI agent",tag:"In progress",c:"--cyan",s:"Python, Anthropic API | personal project",
 b:["Terminal agent with credit-based cost control","Modular scripts generate adaptive code for variable inputs","Pre-run error checking: reads a script, spots likely errors and suggests fixes before it runs"],
 badge:"Bug spotter",link:"https://github.com/Lavender-09/AI-Agent-v1.0",lt:"See my GitHub"
},
{
    t:"To Infinity space website",tag:"Deployed",c:"--yellow",s:"HTML, CSS, JavaScript | 1st-year module (A)",
 b:["30+ page space exploration site with dropdown navigation","Two-way linking between the image gallery and each page","Missions panel, news feed, space calculator and ambient audio"],
 badge:"Liftoff",link:"https://to-infinity.netlify.app/",lt:"See it Live"
},
{
    t:"Japan VPN prototype",tag:"Side quest",c:"--orange",s:"Shell scripting, WireGuard, AWS | personal project",
    b:["Built independently to learn how tunnelling and networking work","Full deployment was limited by hosting costs, so I treated it as a learning build"],
    badge:"Tunnel builder",link:"https://github.com/Lavender-09/Japan-VPN",lt:"See my GitHub"
},
{
    t:"Personal link tree",tag:"Starter level",c:"--violet",s:"HTML, CSS | built before my degree",
    b:["Designed and hosted a personal link page with GitHub Pages"],
    badge:"First deploy",link:"https://github.com/Lavender-09/my-linktree",lt:"See my GitHub"
}];

var cleared=0,root=document.documentElement,L=document.getElementById("levels");
P.forEach(function(p,i){
  var d=document.createElement("article");d.className="lvl";d.style.setProperty("--c","var("+p.c+")");
  d.innerHTML='<header><h3 class="px">Level '+(i+1)+': '+p.t+'</h3><span class="tag">'+p.tag+'</span></header><p class="stack">'+p.s+'</p>'
  +'<button class="go px">Start level</button><div class="details"><ul>'+p.b.map(function(x){return "<li>"+x+"</li>"}).join("")+'</ul><p class="clear px">Level cleared! +100 XP</p><a href="'+p.link+'">'+p.lt+'</a></div>';
  d.querySelector(".go").onclick=function(){
    d.classList.add("done");cleared++;
    var bx=document.getElementById("badges");if(cleared===1)bx.innerHTML="";
    var b=document.createElement("span");b.className="badge";b.textContent=p.badge;bx.appendChild(b);
    var xp=cleared*100;
    document.getElementById("xp").textContent="XP "+xp+" / 500";
    document.getElementById("cl").textContent="Cleared "+cleared+" / 5";
    document.getElementById("lv").textContent="Level "+(cleared+1>5?"MAX":cleared+1);
    document.getElementById("fill").style.width=(xp/5)+"%";
    document.getElementById("pb").setAttribute("aria-valuenow",xp);
    if(cleared===5)document.getElementById("win").classList.add("on");
  };
  L.appendChild(d);
});
document.getElementById("start").onclick=function(){L.scrollIntoView({behavior:"smooth"})};
document.getElementById("theme").onclick=function(){
  var dark=root.getAttribute("data-theme")?root.getAttribute("data-theme")==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches;
  root.setAttribute("data-theme",dark?"light":"dark");
};