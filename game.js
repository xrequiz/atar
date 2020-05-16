function playRandomSoundEdm(){


    //An array to house all of the URLs of your sounds
    var sounds = [ 
      
        "Justin Bieber - Sorry (PURPOSE  - The Movement).mp3",
      
        "Major Lazer & DJ Snake - Lean On (feat. MØ) (Official Music Video).mp3",
    
       "ZESKULLZ, PSYRUS - Broke Boys  (lyric video).mp3",
    
        "Alan Walker - Faded.mp3",
       
        "Major Lazer feat. Marcus Mumford - Lay Your Head On Me (Official Music Video).mp3",
        
        "Petit Biscuit - Sunset Lover (Official Video).mp3",
       
        "Danny Avila - Run Wild (Official Music Video).mp3",
        
        "The Chainsmokers - Closer (Lyric) ft. Halsey.mp3",
        
        "Calvin Harris - This Is What You Came For (Official Video) ft. Rihanna.mp3",
        
        "Janieck - How (Do I Love You) [Official Lyric Video].mp3",
        
        "Clean Bandit - Rockabye (feat. Sean Paul & Anne-Marie) [Official Video].mp3",
       
       
        "Avicii - Wake Me Up (Official Video).mp3",
        
        "JOYRYDE - THRILL ft MAJILLA [official video].mp3",
        
        "The Chainsmokers & Coldplay - Something Just Like This (Lyric).mp3",
        
        "Steff Da Campo x Mordkey - Little Bit Love (Official Music Video).mp3",
        
        "Calvin Harris - Summer (Official Video).mp3",
        
        "David Guetta - Hey Mama (Official Video) ft Nicki Minaj, Bebe Rexha & Afrojack.mp3",
      
        "Mystique - Magic (feat. Tim Morrison) [Bingo Players Edit] (Official Music Video).mp3",
       
        "Calvin Harris & Disciples - How Deep Is Your Love.mp3",
        
        "David Guetta - Titanium ft. Sia (Official Video).mp3",
                   
                   ];
    
    //This line will select a random sound to play out of your provided URLS
    var random = sounds[Math.floor(Math.random()*sounds.length)];
    
    //Find the player element that you created and generate an embed file to play the sound within it
    document.getElementById("player").innerHTML="<embed src=\""+random+"\" loop=\"false\" />";


console.log(random);
console.log(player);

document.getElementById("disc").innerHTML=random;
document.getElementById("disc").style.display = "none" ; 

}

function discover(){
    document.getElementById("disc").style.display = "block" ;

}