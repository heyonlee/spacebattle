'use strict'


class Ship {
  constructor(hull,firepower,accuracy)  {
     this.hull = hull
     this.firepower = firepower
     this.accuracy = accuracy
  } 
 hull(){
   return this.hull
  } 
 firepower(){
     return this.firepower
  }
 accuracy(){
     return this.accuracy   
 }
 }
 const HelloWorld = new Ship(20,5,.7)
 /**   @type {Array<Ship>}*/ 
 
 const alien =[];
 const makeAlien=()=>{
 for(let i =0; i<6 ; i++){
    alien.push(new Ship(Math.floor(Math.random()*4)+3,Math.floor(Math.random()*3)+2,((Math.random()*0.2)+0.6).toFixed(2)))
   }
 }
 makeAlien()
 

const fight=()=>{
 console.log('%c spacebattle', 'font-size: 40px')
  alert("Start")
  for(let i=0; i<alien.length; i++){
      while(alien[i].hull>=0 && HelloWorld.hull >=0){
      if(Math.random() < HelloWorld.accuracy){
        alien[i].hull -= HelloWorld.firepower
        console.log('%c You have done ' + HelloWorld.firepower + ' damage ', 'font-style: italic; background: azure; border: 1px solid grey;')
        
        alert(`Your turn! You hit the alien ship${i+1} and demaged ${HelloWorld.firepower} !! now alienship hull : ${alien[i].hull.toFixed(2)}`)
      }
      else{ 
         console.log("you missed it!");
         alert("you missed it!");
     }  //Helloship attacks 



    if (alien[i].hull<0){
   
      if ( alien.indexOf(alien[i]) == 5){
       console.log(" You destroyed all of alienships. Awesome! Game over.")
        return alert(" You destroyed all of alienships. Awesome! Game over.")
      }
      else{console.log(`You destroyed the alien ship ${i+1}! Great job!`)
         let a = confirm(`You destroyed the alien ship ${i+1}! Great job! Do you want to continue?`)
            if(a){
                continue;
             }
            else{ console.log(`Your win! You destroyed ${i+1}alienships.  Game over`)
             return alert(`Your win! You destroyed ${i+1}alienships.  Game over`)
                break;
              }   
        } 
     }  // Helloworld hull check 

       if(Math.random() < alien[i].accuracy){
         HelloWorld.hull -= alien[i].firepower
         console.log('%c You have been hit! ' + alien[i].firepower + ' damage ', 'font-style: italic; background: azure; border: 1px solid grey;')
         
        alert(`You have been hit! demaged  ${alien[i].firepower}!!  your hull : ${HelloWorld.hull.toFixed(2)}` )
      }
      else{
         console.log("Alien missed it!")
         alert("Alien missed it!") 
      }
// alien ship attacks
 if(HelloWorld.hull<0){
   console.log( `${i+1}th alien destroyed the Helloworld ship. You lost!`)
    return alert(`${i+1}th alien destroyed the Helloworld ship. You lost!`) 
    break;}
           //hull check
 
     } //while
    
    } //for
   
  } //function

fight()


