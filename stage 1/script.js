const slackUserName = "Kato Mahad"
const slackDisplayImage = "https://ca.slack-edge.com/T05FFAA91JP-U05RYRH1FH7-6d00d18ebc45-512"
const currentDayOfTheWeek = getCurrentDayOfTheWeek()
const currentUTCTime = getCurrentUTCTime()
const myTrack = "Frontend"
const githubURL = "https://github.com/mnmkato/Stage1/"

const slackUserName_h1 = document.querySelector('[data-testid="slackUserName"]')
slackUserName_h1.textContent= slackUserName

const slackDisplayImage_img =  document.querySelector('[data-testid="slackDisplayImage"]')
slackDisplayImage_img.setAttribute("alt",slackUserName)
slackDisplayImage_img.setAttribute("src",slackDisplayImage)

const currentDayOfTheWeek_h3 = document.querySelector('[data-testid="currentDayOfTheWeek"]')
currentDayOfTheWeek_h3.textContent= currentDayOfTheWeek

const currentUTCTime_h3 = document.querySelector('[data-testid="currentUTCTime"]')
currentUTCTime_h3.textContent= currentUTCTime

const myTrack_h3 = document.querySelector('[data-testid="myTrack"]')
myTrack_h3.textContent= myTrack

const githubURL_a = document.querySelector('[data-testid="githubURL"]')
githubURL_a.textContent= githubURL
githubURL_a.setAttribute("href",githubURL)

function getCurrentDayOfTheWeek() { 
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const currentDate = new Date()
    const currentDayNumber = currentDate.getDay()
    
    return daysOfWeek[currentDayNumber]
}
function getCurrentUTCTime() {
    const currentDate = new Date()
    const utcHours = currentDate.getUTCHours();
    const utcMinutes = currentDate.getUTCMinutes();
    const utcSeconds = currentDate.getUTCSeconds();

    return `${utcHours}:${utcMinutes}:${utcSeconds} UTC`   
}