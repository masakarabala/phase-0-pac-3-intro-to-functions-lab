
function shout(string){
return string.toUpperCase();
}
console.log(shout("ali yilmaz"))

function whisper(string){
    return string.toLowerCase();
    }
    console.log(whisper("Ali Ali"))

function logShout(string){
    console.log(string.toUpperCase());
        }
        logShout("ali yilmaz")

function logWhisper(string){
     console.log(string.toLowerCase());
        }
        logWhisper("Ali Ali")

        const string = "HELLO";
function sayHiToHeadphonedRoommate(string){
   
    if (string===string.toLowerCase()){
        return "I can't hear you!";
    }else if(string===string.toUpperCase()){
        return "YES INDEED!";
    }
    else if("Let's have dinner together!"){
        return "I would love to!"
    }
   
}
console.log(sayHiToHeadphonedRoommate(string))
