console.log("welcome to Spotify");
let songIndex=0;
let audioElement= new Audio('song/1.mp3');
let ab= new Audio('song/1.mp3');
let masterPlay= document.getElementById("masterPlay")
let myProgressBar= document.getElementById("myProgressBar")
let gif= document.getElementById('gif')
let songItems= Array.from(document.getElementsByClassName('songItem'))
let masteSongName= document.getElementById("masterSongName")
let timerTime=document.getElementById("timer");

let songs = [
    {songName:'945', filePath:"song/1.mp3", coverPath: "cover/1.jpg"},
    {songName:'YB2', filePath:"song/2.mp3", coverPath: "cover/2.jpg"},
    {songName:"KHV", filePath:"song/3.mp3", coverPath: "cover/1.jpg"},
    {songName:"IT", filePath:"song/4.mp3", coverPath: "cover/2.jpg"},
    {songName:"G", filePath:"song/5.mp3", coverPath: "cover/1.jpg"},
    {songName:"HI", filePath:"song/6.mp3", coverPath: "cover/2.jpg"}
]

songItems.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
    
    // 
    
    //    element.getElementsByClassName("timestamp")[0].innerText = ab;
 //  element.getElementsByClassName("timestamp")[0].innerText=songs[i].filePath.Audio().duration;
})

//audioElement.play()

//Handle play/pause click

masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }

})
//listen to events
audioElement.addEventListener('timeupdate',()=>{
// update seekbar
progress= parseInt((audioElement.currentTime/audioElement.duration)*100)
myProgressBar.value=progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value * audioElement.duration/100
})

const makeAllPlays = ()=>{
    
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle')
        element.classList.add('fa-play-circle')
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
element.addEventListener('click',(e)=>{
    let x=0;
    makeAllPlays();
    songIndex= parseInt(e.target.id);
e.target.classList.remove('fa-play-circle')
e.target.classList.add('fa-pause-circle')
audioElement.src=`song/${songIndex+1}.mp3`
masterSongName.innerText=songs[songIndex].songName;

audioElement.play()
gif.style.opacity=1;
masterPlay.classList.remove('fa-play-circle');
masterPlay.classList.add('fa-pause-circle');
})
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<1){
        songIndex=0;
    }
    else{
        songIndex--;
    }
    audioElement.src=`song/${songIndex+1}.mp3`
//audioElement.currentTime=0
audioElement.play()
masterSongName.innerText=songs[songIndex].songName;
masterPlay.classList.remove('fa-play-circle');
masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=5){
        songIndex=0;
    }
    else{
        songIndex++;
    }
    audioElement.src=`song/${songIndex+1}.mp3`
//audioElement.currentTime=0
audioElement.play()
masteSongName.innerText=songs[songIndex].songName;
masterPlay.classList.remove('fa-play-circle');
masterPlay.classList.add('fa-pause-circle');
})