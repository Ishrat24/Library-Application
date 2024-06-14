var data= {
    chatinit:{
        title: ["Hi there <span class='emoji'> &#128075;</span>","How can I help you today?"],
        options: ["I am looking to find books"]
    },
    i: {
        title:["What kind of books are you looking for?"],
        options:['Science fiction', 'Historical', 'Horror', 'Biography', 'Classics'],
        url : {}
    },
    science: {
        title:["Do you want recommendations for this category?"],
        options: ['Yes(Science Fiction)', 'No'],
        url : {}
    },
    "yes(science": {
        title:["Here are some recommendations for Science fiction books:", '<a href="http://localhost:3000/search?query=gettysburg+address+by+abraham+lincoln">1. Gettysburg Address by Abraham Lincoln</a>', '<a href="http://localhost:3000/search?query=A+Fire+Upon+the+Deep+by+Vernor+Vinge">2. A Fire Upon the Deep by Vernor Vinge</a>', '<a href="http://localhost:3000/search?query=Children+of+Dune+by+Frank+Herbert">3. Children of Dune by Frank Herbert</a>', "If you need me for anything else, feel free to ask again"],
        options: ["I want another category"],
        url: {}
    },
    no: {
        title:["Do you want to search it yourself?"],
        options: ['Yes', 'Nope'],
        url: {}
    },
    historical: {
        title:["Do you want recommendations for this category?"],
        options: ['Yes(Historical)', 'No'],
        url : {}
    },
    "yes(historical)": {
        title:["Here are some recommendations for Historical books:", '<a href="http://localhost:3000/search?query=gettysburg+address+by+abraham+lincoln">1. Gettysburg Address by Abraham Lincoln</a>', '<a href="http://localhost:3000/search?query=I+Have+a+Dream+by+Martin+Luther+King+Jr.">2. I Have a Dream by Martin Luther King Jr.</a>', '<a href="http://localhost:3000/search?query=On+War+by+Carl+von+Clausewitz">3. On War by Carl von Clausewitz</a>', "If you need me for anything else, feel free to ask again"],
        options: ["I want another category"],
        url: {}
    },
    horror: {
        title:["Do you want recommendations for this category?"],
        options: ['Yes(Horror)', 'No'],
        url : {}
    },
    "yes(horror)": {
        title:["Here are some recommendations for Horror books:", '<a href="http://localhost:3000/search?query=Dracula+by+Bram+Stoker">1. Dracula by Bram Stoker</a>', '<a href="http://localhost:3000/search?query=The+Shining+by+Stephen+King">2. The Shining by Stephen King</a>', '<a href="http://localhost:3000/search?query=I+am+Legend+by+Richard+Matheson">3. I am Legend by Richard Matheson</a>', "If you need me for anything else, feel free to ask again"],
        options: ["I want another category"],
        url: {}
    },
    biography: {
        title:["Do you want recommendations for this category?"],
        options: ['Yes(Biography)', 'No'],
        url : {}
    },
    "yes(biography)": {
        title:["Here are some recommendations for Biography books:", '<a href="http://localhost:3000/search?query=Man%27s+Search+for+Meaning+by+Viktor+Frankl">1. Man\'s Search for Meaning by Viktor Frankl</a>', '<a href="http://localhost:3000/search?query=Poor+Richard%27s+Almanack+by+Benjamin+Franklin">2. Poor Richard\'s Almanack by Benjamin Franklin</a>', '<a href="http://localhost:3000/search?query=Black+Boy+by+Richard+Wright">3. Black Boy by Richard Wright</a>', "If you need me for anything else, feel free to ask again"],
        options: ["I want another category"],
        url: {}
    },
    classics: {
        title:["Do you want recommendations for this category?"],
        options: ['Yes(Classics)', 'No'],
        url : {}
    },
    "yes(classics)": {
        title:["Here are some recommendations for Classical books:", '<a href="http://localhost:3000/search?query=The+Canterbury+Tales+by+Geoffrey+Chaucer">1. The Canterbury Tales by Geoffrey Chaucer</a>', '<a href="http://localhost:3000/search?query=Don+Quixote+by+Miguel+de+Cervantes">2. Don Quixote by Miguel de Cervantes</a>', '<a href="http://localhost:3000/search?query=The+Trial+by+Franz+Kafka">3. The Trial by Franz Kafka</a>', "If you need me for anything else, feel free to ask again"],
        options: ["I want another category"],
        url: {}
    },
    yes: {
        title:["You can search for your favourite books in the top right corner of our webpage"],
        options: ["I want another category"],
        url: {}
    },
    nope: {
        title:["If you need me for anything else, feel free to ask again"],
        options: ["I want another category"],
        url: {}
    }
}

document.getElementById("init").addEventListener("click",showChatBot);

var cbot= document.getElementById("chat-box");
var len1= data.chatinit.title.length;

var chatOpen = false;

function showChatBot(){
    console.log(this.innerText);
    if(this.innerText === 'START CHAT'){
        document.getElementById('test').style.display = 'block';
        document.getElementById('init').innerText = 'CLOSE CHAT';
        document.getElementById('init').innerHTML = '<img src="../images/chatbot.png" alt="Button Image">CLOSE CHAT';
        if(chatOpen == false) initChat();
    } else if(this.innerText === 'CLOSE CHAT'){
        document.getElementById('test').style.display = 'none';
        document.getElementById('init').innerText = 'START CHAT';
        document.getElementById('init').innerHTML = '<img src="../images/chatbot.png" alt="Button Image">START CHAT';
        chatOpen = true;
    }
}

function initChat(){
    j=0;
    cbot.innerHTML='';
    for(var i=0;i<len1;i++){
        setTimeout(handleChat,(i*500));
    }
    setTimeout(function(){
        showOptions(data.chatinit.options)
    },((len1+1)*500))
}

var j=0;
function handleChat(){
    console.log(j);
    var elm= document.createElement("p");
    elm.innerHTML= data.chatinit.title[j];
    elm.setAttribute("class","msg");
    cbot.appendChild(elm);
    j++;
    handleScroll();
}

function showOptions(options){
    for(var i=0;i<options.length;i++){
        var opt= document.createElement("span");
        var inp= '<div>'+options[i]+'</div>';
        opt.innerHTML=inp;
        opt.setAttribute("class","opt");
        opt.addEventListener("click", handleOpt);
        cbot.appendChild(opt);
        handleScroll();
    }
}

function handleOpt(){
    console.log(this);
    var str= this.innerText;
    var textArr= str.split(" ");
    var findText= textArr[0];
    
    document.querySelectorAll(".opt").forEach(el=>{
        el.remove();
    })
    var elm= document.createElement("p");
    elm.setAttribute("class","test");
    var sp= '<span class="rep">'+this.innerText+'</span>';
    elm.innerHTML= sp;
    cbot.appendChild(elm);

    console.log(findText.toLowerCase());
    var tempObj= data[findText.toLowerCase()];
    handleResults(tempObj.title,tempObj.options,tempObj.url);
}

function handleResults(title,options,url){
    for(let i=0;i<title.length;i++){
        setTimeout(function(){
            handleDelay(title[i]);
        },i*500)
        
    }

    const isObjectEmpty= (url)=>{
        return JSON.stringify(url)=== "{}";
    }

    if(isObjectEmpty(url)==true){
        console.log("having more options");
        setTimeout(function(){
            showOptions(options);
        },title.length*500)
        
    }
    else{
        console.log("end result");
        setTimeout(function(){
            handleOptions(options,url);
        },title.length*500)
        
    }
}

function handleDelay(title){
    var elm= document.createElement("p");
        elm.innerHTML= title;
        elm.setAttribute("class","msg");
        cbot.appendChild(elm);
}

function handleOptions(options,url){
    for(var i=0;i<options.length;i++){
        var opt= document.createElement("span");
        var inp= '<a class="m-link" href="'+url.link[i]+'">'+options[i]+'</a>';
        opt.innerHTML=inp;
        opt.setAttribute("class","opt");
        cbot.appendChild(opt);
    }
    var opt= document.createElement("span");
    var inp= '<a class="m-link" href="'+url.more+'">'+'See more</a>';

    const isObjectEmpty= (url)=>{
        return JSON.stringify(url)=== "{}";
    }

    console.log(isObjectEmpty(url));
    console.log(url);
    opt.innerHTML=inp;
    opt.setAttribute("class","opt link");
    cbot.appendChild(opt);
    handleScroll();
}

function handleScroll(){
    var elem= document.getElementById('chat-box');
    elem.scrollTop= elem.scrollHeight;
}