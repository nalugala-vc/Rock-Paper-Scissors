
consoleText(['These are Dark Times','Computers are trying to take over the world!','It is up to YOU to save humanity','Through a game of Rock! Paper! Scissors!','Do you think you have what it takes?'],'text',['#32a83a', '#32a83a', '#32a83a', '#32a83a', '#32a83a']);

        function consoleText(words,id,color){
            if(color===undefined){
                color=['#32a83a'];
            }
            var visible=true;
            var con=document.getElementById('console');
            var lettercount=1;
            var x=1;
            var waiting =false;
            var target=document.getElementById(id);
            target.setAttribute('style','color:'+color[0])
            window.setInterval(function(){
                if(lettercount===0&& waiting===false){
                    waiting=true;
                    target.innerHTML=words[0].substring(0,lettercount)
                    window.setTimeout(function(){
                        var usedcolor=color.shift();
                        color.push(usedcolor);
                        var usedword=words.shift();
                        words.push(usedword);
                        x=1;
                        target.setAttribute('style','color:'+color[0])
                        lettercount+=x;
                        waiting=false;
                    },1000);
                }else if(lettercount===words[0].length+1 && waiting===false){
                    waiting=true;
                    window.setTimeout(function(){
                        x=-1;
                        lettercount+=x;
                        waiting=false;
                    },1000)
                }else if(waiting===false){
                    target.innerHTML=words[0].substring(0,lettercount);
                    lettercount+=x;
                }
            },120);

            window.setInterval(function(){
                if(visible===true){
                    con.className="underscore hidden";
                    visible=false;
                }else{
                    con.className="underscore";
                    visible=true;
                }

            },400)
        }
