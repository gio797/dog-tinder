
import dogs from './data.js'
import Dog from './Dog.js'

let dogIndex = 0
let dogProfile = new Dog(dogs[dogIndex])

function getNewDog() {
    if (dogs.length === dogIndex + 1){
        dogIndex = 0
        return dogProfile = new Dog(dogs[dogIndex])
        render()
    } else {
       dogIndex += 1
        return dogProfile = new Dog(dogs[dogIndex])
        render() 
    }
}

document.getElementById('heart').addEventListener('click', () => {
        dogProfile.matchingStatus(false, true)
        render()
        document.getElementById('heart').disabled = true
        document.getElementById('cross').disabled = true
        setTimeout(function(){
            dogProfile = getNewDog()
            render()
            document.getElementById('heart').disabled = false
            document.getElementById('cross').disabled = false
        },1000)
})

document.getElementById('cross').addEventListener('click', () => {
        dogProfile.matchingStatus(true, false)
        render()
        document.getElementById('heart').disabled = true
        document.getElementById('cross').disabled = true
        setTimeout(function(){
            dogProfile = getNewDog()
            render()
            document.getElementById('heart').disabled = false
            document.getElementById('cross').disabled = false
        },1000)
})

function getmatchHtml(){
    
}

function render() {
    document.getElementById('card').innerHTML = dogProfile.getDogHtml()
}

render()