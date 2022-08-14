const secondsHand = document.querySelector('#seconds')
const minutesHand = document.querySelector('#minutes')
const hoursHand = document.querySelector('#hours')


function getCurrentTime() {
    const now = new Date()
    const seconds = now.getSeconds()
    const minutes = now.getMinutes()
    const hours = now.getHours()
    const timeInterval = 6 // since 60 * 6 = 360 ("degrees")
    
    secondsHand.style.transform = `rotate(${seconds * timeInterval}deg)`
    minutesHand.style.transform = `rotate(${(minutes * timeInterval) + (seconds / 10)}deg)`
    hoursHand.style.transform = `rotate(${(hours * 30) + (minutes / 2)}deg)`

}

setInterval(getCurrentTime, 100)