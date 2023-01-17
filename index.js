// document.getElementById("count_el").innerText = 5

// let firstBatch = 5
// let secondBatch = 5
// let count = firstBatch + secondBatch
// console.log(count)

// 1. Create two variables, myAge and humanDogRatio
//let myAge = 27
//let humanDogRatio = 7
// 2. Multiply the two together and store the result in myDogAge
//let count = myAge * humanDogRatio
// 3. Log myDogAge to the console
//console.log(count)

//1. create a variable, bonusPoints. Intialize it as 50. Increase it to 100
//let bonusPoints = 50
//console.log(bonusPoints)
//bonusPoints = bonusPoints + 50
//console.log(bonusPoints)
//2. Decrease it down to 25, and then finally increase it to 70
//bonusPoints = bonusPoints - 75
//console.log(bonusPoints)
//bonusPoints = bonusPoints + 45
//console.log(bonusPoints)
//3. console.log the value after each step

// 1. Initialize the count as 0

// 2. listen for clicks on the increment button

// 3. Increment the count variable when the button is clicked

// 4. change the count-el in the HTML to reflect the new count

//function increment(){
//    console.log("The button was clicked")
//}

//setting up the race 
//function countdown(){
//    console.log(5)
//    console.log(4)
//    console.log(3)
//    console.log(2)
//    console.log(1)
//}

//countdown()

// 1. create a function(you decide the name) that logs out the number 42 in the console
//function myLogger(){
//    console.log(42)
//}
// 2. call/invoke the function
//myLogger()

//create a function that logs out the sum of all the lap times
//let lap1 = 34
//let lap2 = 33
//let lap3 = 36

//function Lap(){
//    console.log(lap1 + lap2 + lap3)
//}
//Lap()

// 1. Create a function that increments the lapsCompleted variable with one
//let lapsCompleted = 0
// 2. Run it three times
//function incrementLap(){
//    lapsCompleted = lapsCompleted + 1
//}
//incrementLap()
//incrementLap()
//incrementLap()

//console.log(lapsCompleted)

// 1. Initialize the count as 0
//let countEL = document.getElementById("count-el")
//console.log(countEL)
//let count = 0
// 2. Listen for clicks on the increment button
// 3. Increment the count variable when the button is clicked (log it out)
//function increment(){
//    count = count + 1
//    countEL.innerText = count
//    console.log(count)
//}

// 4. change the count-el in the HTML to reflec the new count

//grab the count-el element, store it in a countEl variable
//let countEL = document.getElementById("count-el")
//let count=0


//function increment(){
 //   count = count + 1
 //   countEL.innerText = count
//}

// 1.0 Create a function, save(), which logs out the count when it's called
//let countEl = document.getElementById("count-el")
//let count = 0

//function increment() {
//   count = count + 1
//    countEl.innerText = count
//}

//function save(){
//    console.log(count)
//}

//let username = "per"

//Create a varibale, message, that stores the string: "you have tree new notifications"
//let message = "You have tree new notifications"

//console.log(message + ", " + username)

//let messageToUser = message + ", " + username

//console.log(messageToUser)

// Create two variables, name and greeting. The name variable should store your name,
// and the greeting should stoer e.g. "Hi, my name is "
//let name = "Umar"
//let greeting = "Hi, my name is "
//Create a thrid variable, myGreeting, that contatenates the two strings
//let myGreeting = greeting + name

//log myGreeting to the console
//console.log(myGreeting)

//Grab the welcome-el paragraph and store it in a variable called welcomeEL
//let welcomeEL = document.getElementById("welcome-el")
// Create two variables (name and greeting) that contains yoru name
// and the greeting we want to render on the page
//let name = "Umar Rashid"
//let greeting = "Welcome Back "

//Render the welcome message using welcomeEL.innerText
//welcomeEL.innerText = greeting + name

//welcomeEL.innerText += "👋" 


// 1. Grab the save-el paragraph and store it in a variable called saveEL
let saveEL = document.getElementById("save-el")
let countEL = document.getElementById("count-el")
let count = 0

function increment() {
    
    count+=1
    countEL.textContent = count
}

function save(){
    // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    // 3. Render the variable in the saveEL using innerText
    // NB: Make sure to not delete the existing content of the paragraph
    let countStr= count + " - "
    saveEL.textContent += countStr
    countEL.textContent = 0
    count = 0

    console.log(count)
}
