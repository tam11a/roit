import React from 'react'

export default function NoPages() {

    var aText = [
        "hello there",
        "this is Red Ocean IT",
        "welcome to our portfolio",
        "",
        "",
        "thanks for joining us",
        "have a nice visit "
    ];

    var iSpeed = 100; 
    var iIndex = 0; 
    var iArrLength = aText[0].length; 
    var iScrollAt = 25; 
     
    var iTextPos = 0; 
    var sContents = ''; 
    var iRow; 
    //var keypress_audio = new Audio('https://typewritesomething.com/static/audio/keypress.mp3');
	//var newline_audio = new Audio('https://typewritesomething.com/static/audio/return.mp3');
    //console.log(keypress_audio, newline_audio);

    const typewriter = () => {
     sContents =  '<span class="dollar">$</span>  ';
     iRow = Math.max(0, iIndex-iScrollAt);
     var destination = document.getElementById("terminal");
     
     while ( iRow < iIndex ) {
      sContents += aText[iRow++] + '<br /><span class="dollar">$</span>  ';
     }
     console.log(sContents);
     //keypress_audio.play();
     destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + '<span class="dollar twc">_</span>';
     if ( iTextPos++ === iArrLength ) {
      iTextPos = 0;
      iIndex++;
      if ( iIndex !== aText.length ) {
       iArrLength = aText[iIndex].length;
       setTimeout(typewriter, 500);
      }
     } else {
      setTimeout(typewriter, iSpeed);
     }
    }


    var cText = [
        "Hello",
        "hola"
    ];
    var aSpeed = 100; 
    var aIndex = 0; 
    var aArrLength = aText[0].length; 
    var aScrollAt = 20; 
     
    var aTextPos = 0; 
    var aContents = ''; 
    var aRow; 

    const commandwriter = (cline) => {
        if(cline){
            cText.push(cline.toString());
        }
        aContents =  '<span class="dollar">$</span>  ';
        
        aRow = Math.max(0, aIndex-aScrollAt);
        var destination = document.getElementById("terminal");
        while ( aRow < aIndex ) {
            aContents += cText[aRow++] + '<br /><span class="dollar">$</span>  ';            
        }
        console.log(aContents);
        destination.innerHTML = aContents + cText[aIndex].substring(0, aTextPos) + '<span class="dollar twc">_</span>';

        if ( aTextPos++ === aArrLength ) {
            aTextPos = 0;
            aIndex++;
            if ( aIndex !== cText.length ) {
             aArrLength = cText[aIndex].length;
             setTimeout(commandwriter(), 500);
            }
           } else {
            setTimeout(commandwriter(), aSpeed);
           }
    }
    
    window.onload = () => {
        document.querySelector("#btn01").addEventListener("click", () => {
            commandwriter(Date.now());
        })
    }

    return (
        <div className="NoPages">
            <div id="terminal">
            </div>
            <button id="btn01">Hello</button>
        </div>
    )
}
