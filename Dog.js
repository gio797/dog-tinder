// Create the Dog class here
// import dogs from './data.js'
import dogs from './data.js'


class Dog {
    constructor(data){
        Object.assign(this, data)
}   
    matchingStatus(swipedChoice, likedChoice){
        this.hasBeenSwiped = swipedChoice
        this.hasBeenLiked = likedChoice
        
        if (this.hasBeenSwiped && this.hasBeenLiked === false) {
            this.matchHtml = `<img class="hidden-cross" src="./images/badge-nope.png">`
            
        }else if(this.hasBeenSwiped === false && this.hasBeenLiked){
           this.matchHtml = `<img class="hidden-like" src="./images/badge-like.png">`
        }
}

    getDogHtml(){
        const { name, avatar, age, bio, hasBeenSwiped, hasBeenLiked, matchHtml } = this
        return `
            <div class="card-inr">
                <div class="upper">
                <img class="card-img" src="${avatar}">
                ${matchHtml? matchHtml : ''}
                <div class="card-info">
                    <h4>${name}<span> ${age}</span></h4>
                    <p>${bio}</p>
                </div>
            </div>
            `
    }
}


export default Dog