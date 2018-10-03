var doorImage1=document.getElementById("door1");
doorImage1.onclick=()=>{
    
    if(isClicked(doorImage1))
    {
    playDoor();
    }
    doorImage1.src=openDoor1;
    playOver(doorImage1);
}
var botDoorPath= "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg";

var doorImage2=document.getElementById("door2");
doorImage2.onclick=()=>{
    
    if(isClicked(doorImage2))
    {
    playDoor();
    }
    doorImage2.src=openDoor2;
    playOver(doorImage2);
}
var beachDoorPath="https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg";

var doorImage3=document.getElementById("door3");
doorImage3.onclick=()=>{
    
    if(isClicked(doorImage3))
    {
    playDoor();
    }
    doorImage3.src=openDoor3;
    playOver(doorImage3);
}
var startButton=document.getElementById('start');




startButton.onclick=()=>{
doorImage1.src=closedDoorPath;
doorImage2.src=closedDoorPath;
doorImage3.src=closedDoorPath;
startButton.innerHTML='Good luck';
randomChoreDoorGenerator();
}
function gameOver(str)
{
    if(str==='win')
    {
        startButton.innerHTML='You win! Play again?';
        
    }
    else if(numClosedDoors!==0){
        startButton.innerHTML='Game over!Play again?';
    }
    currentlyPlaying=false;
}
var spaceDoorPath="https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg";

var openDoor1;
var openDoor2;
var openDoor3;
var numClosedDoors=3;
function randomChoreDoorGenerator(){
    
    var choreDoor=Math.floor(Math.random()*3);
    if(choreDoor===0)
    {
        openDoor1=botDoorPath;
        openDoor2=beachDoorPath;
        openDoor3=spaceDoorPath;
    }
    else if(choreDoor===1)
    {
        openDoor2=botDoorPath;
        openDoor1=beachDoorPath;
        openDoor3=spaceDoorPath;

    }
    else {
        openDoor3=botDoorPath;
        openDoor1=spaceDoorPath;
        openDoor2=beachDoorPath;
    }
}
randomChoreDoorGenerator();
var closedDoorPath="https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg";
function playOver(door)
{
   if(isBot(door))
    {
       gameOver("x");
    }
}

function isBot(door){
    if(door.src===botDoorPath){
        return true;
    }
    else{
        return false;
    }
}

function isClicked(door){
  if(door.src===closedDoorPath)
  {return true}
  else{return false;}
}
function playDoor(){
    --numClosedDoors;
    if(numClosedDoors===0){
        gameOver('win');
    }
}
