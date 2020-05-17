

 

function stop() {
    audio.pause();
}





//edm
var soundsedm = [    "Justin Bieber - Sorry (PURPOSE  - The Movement).mp3",
  
    "Major Lazer & DJ Snake - Lean On (feat. MØ) (Official Music Video).mp3",

   
    "Alan Walker - Faded.mp3",
   
    

  
    "The Chainsmokers - Closer (Lyric) ft. Halsey.mp3",
    
    "Calvin Harris - This Is What You Came For (Official Video) ft. Rihanna.mp3",
    

    "Clean Bandit - Rockabye (feat. Sean Paul & Anne-Marie) [Official Video].mp3",
   
   
    "Avicii - Wake Me Up (Official Video).mp3",
    
    "JOYRYDE - THRILL ft MAJILLA [official video].mp3",
    
    "The Chainsmokers & Coldplay - Something Just Like This (Lyric).mp3",
    
    
    "Calvin Harris - Summer (Official Video).mp3",
    
    "David Guetta - Hey Mama (Official Video) ft Nicki Minaj, Bebe Rexha & Afrojack.mp3",
  
    "Calvin Harris & Disciples - How Deep Is Your Love.mp3",
    
    "David Guetta - Titanium ft. Sia (Official Video).mp3",
               
               ];


//hiphop
var soundshiphop = [ "50 Cent ft. Chris Brown - I'm The Man (Official Video).mp3",
                   "Bebe Rexha - 'No Broken Hearts' ft. Nicki Minaj (Official Music Video).mp3",
                   "Desiigner- Panda (OFFICIAL SONG) Prod. By - Menace.mp3",
                   "DJ Snake ft. Bipolar Sunshine - Middle (Official Audio).mp3",
                   "DJ Snake, Lil Jon - Turn Down for What.mp3",
                   "Eminem - Love The Way You Lie ft. Rihanna.mp3",
                   "Fetty Wap  - Trap Queen (Official Video) Prod. By Tony Fadd.mp3",
                   "Fat Joe, Remy Ma - All The Way Up ft. French Montana, Infared (Official Music Video).mp3",
                   "Fetty Wap - Wake Up [Official Video].mp3",
                   "Future - Low Life (Official Music Video) ft. The Weeknd.mp3",
                   "G-Eazy x Bebe Rexha - Me, Myself & I (Official Music Video).mp3",
                   "Jason Derulo - 'Wiggle' feat. Snoop Dogg (Official Music Video).mp3",
                   "MACKLEMORE & RYAN LEWIS - THRIFT SHOP FEAT. WANZ (OFFICIAL VIDEO).mp3",
                   "Maître Gims - Sapés comme jamais (Clip officiel) ft. Niska.mp3",
                   "O.T. Genasis - Cut It (feat. Young Dolph) [Official Music Video].mp3",
                   "Wiz Khalifa - See You Again ft. Charlie Puth [Official Video] Furious 7 Soundtrack.mp3",
                ];
    



//rock 
var soundsrock = [
"Drowning Pool - Bodies.mp3",
"The Killers - Mr. Brightside (Official Music Video).mp3",
"Switchfoot - Meant to Live (Live Video Version).mp3",
"Sum 41 - Fatlip (Official Music Video).mp3",
"Red Hot Chili Peppers - Dani California [Official Music Video].mp3",
"My Chemical Romance - Helena [Official Music Video].mp3",


"Breaking Benjamin - The Diary of Jane (Official Video).mp3",
"3 Doors Down - Kryptonite (Official Video).mp3",

"AC_DC - Back In Black (Official Video) (mp3cut.net).mp3",
"AC_DC - Highway to Hell (Live At River Plate, December 2009) (mp3cut.net).mp3",
"Creedence Clearwater Revival - Have You Ever Seen The Rain (mp3cut.net).mp3",
"Deep Purple - Smoke on the Water (Audio) (mp3cut.net).mp3",
"Guns N' Roses - Sweet Child O' Mine (Official Music Video) (mp3cut.net).mp3",
"Judas Priest - Breaking The Law (Official Music Video) (mp3cut.net).mp3",
"Metallica - Enter Sandman (Official Music Video) (mp3cut.net).mp3",
"Nirvana - Smells Like Teen Spirit (Official Music Video) (mp3cut.net).mp3",
"Pink Floyd - Another Brick In The Wall (HQ) (mp3cut.net).mp3",
"Queen – Bohemian Rhapsody (Official Video Remastered) (mp3cut.net),mp3",
"Red Hot Chili Peppers - Under The Bridge (mp3cut.net).mp3",
"Scorpions - Wind Of Change (Official Music Video) (mp3cut.net).mp3",
"Steppenwolf - Born To Be Wild (mp3cut.net).mp3",
"Uriah Heep - Lady in black (mp3cut.net).mp3",


];





                
//trap


var soundstrap = [ 
"The Chainsmokers - Don't Let Me Down (Illenium Remix).mp3",

"Axel Thesleff - Bad Karma.mp3",

"Two Feet - Go Fuck Yourself (Official Video).mp3",

"Diplo - Revolution (feat. Faustix & Imanos and Kai) [SEAN&BOBO Remix].mp3",

"Marshmello - Summer (Official Music Video) with Lele Pons.mp3",

" Eiffel 65 - Blue (KNY Factory Remix).mp3",

"Twenty One Pilots - Stressed Out (Tomsize Remix).mp3",

"Keys N Krates - Dum Dee Dum (JiKay Remix) [OFFICIAL].mp3",


           ];



function playRandomSoundTrap(){


    //An array to house all of the URLs of your sounds
    


                  

                   console.log(soundstrap);
    //This line will select a random sound to play out of your provided URLS
   var x = [Math.floor(Math.random()*soundstrap.length)];
    var random = soundstrap[x];
    
    //Find the player element that you created and generate an embed file to play the sound within it
 document.getElementById("player").innerHTML="<embed src=\""+random+"\" loop=\"false\" />";

 var discover1 = soundstrap[x].substring(0, soundstrap[x].length - 4);
 document.getElementById("disc").innerHTML=discover1;
 document.getElementById("disc").style.display = "none" ; 
 
 soundstrap.splice(x , 1 );
 console.log(soundstrap);
 
        if (soundstrap.length == 0 ){

            document.getElementById("end").innerHTML="Good Game";
            document.getElementById("end").style.display = "none" ;

        };        
 }

 

 function playRandomSoundEdm(){


    console.log(soundsedm);
   
   var x = [Math.floor(Math.random()*soundsedm.length)];
   var random = soundsedm[x];
   
   //Find the player element that you created and generate an embed file to play the sound within it
document.getElementById("player").innerHTML="<embed src=\""+random+"\" loop=\"false\" />";

var discover1 = soundsedm[x].substring(0, soundsedm[x].length - 4);
document.getElementById("disc").innerHTML=discover1;
document.getElementById("disc").style.display = "none" ; 

soundsedm.splice(x , 1 );
console.log(soundsedm);

       if (soundsedm.length == 0 ){

           document.getElementById("end").innerHTML="Good Game";
           document.getElementById("end").style.display = "none" ;

       };        
}

 




//This will play a random sound
function playRandomSoundRock(){

    console.log(soundsrock);
   
   var x = [Math.floor(Math.random()*soundsrock.length)];
   var random = soundsrock[x];
   
   //Find the player element that you created and generate an embed file to play the sound within it
document.getElementById("player").innerHTML="<embed src=\""+random+"\" loop=\"false\" />";

var discover1 = soundsrock[x].substring(0, soundsrock[x].length - 4);
document.getElementById("disc").innerHTML=discover1;
document.getElementById("disc").style.display = "none" ; 

soundsrock.splice(x , 1 );
console.log(soundsrock);

       if (soundsrock.length == 0 ){

           document.getElementById("end").innerHTML="Good Game";
           document.getElementById("end").style.display = "none" ;

       };        
}







function playRandomSoundHip(){


    console.log(soundshiphop);
   
   var x = [Math.floor(Math.random()*soundshiphop.length)];
   var random = soundshiphop[x];
   
   //Find the player element that you created and generate an embed file to play the sound within it
document.getElementById("player").innerHTML="<embed src=\""+random+"\" loop=\"false\" />";

var discover1 = soundshiphop[x].substring(0, soundshiphop[x].length - 4);
document.getElementById("disc").innerHTML=discover1;
document.getElementById("disc").style.display = "none" ; 

soundshiphop.splice(x , 1 );
console.log(soundshiphop);

       if (soundshiphop.length == 0 ){

           document.getElementById("end").innerHTML="Good Game";
           document.getElementById("end").style.display = "none" ;


       };        
}







 
 function discover(){
     document.getElementById("disc").style.display = "block" ;
 
 }



 //lasot txt shel ha shirim -> lekasher 
 //initialize ba code? 