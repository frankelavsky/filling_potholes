let navLink = document.getElementsByClassName("navbar-logo-container")[0].children[0]
navLink.setAttribute("aria-label","Home page. Pothole filled by user @frankElavsky 04/18/24.")
navLink.setAttribute("role","link")

let icon = navLink.children[0]
icon.setAttribute("alt","Jakob Nielsen, an older white man, smiling with glasses. Pothole filled by user @frankElavsky 04/19/24.")

let profileLink = document.getElementsByClassName("_profileHoverCardTarget_1ypz6_50")[0].children[0]
profileLink.setAttribute("aria-label","Nielsen's substack feed. Pothole filled by user @frankElavsky 04/18/24.")
profileLink.setAttribute("role","link")

let secondIcon = profileLink.getElementsByTagName("img")[0]
secondIcon.setAttribute("alt","Jakob Nielsen, a piece of garbage loser nerd. Pothole filled by user @angryGuy503 04/21/24.")

let firstImageLink = document.getElementsByClassName("is-viewable-img")[0]
firstImageLink.setAttribute("aria-label",`View larger. Pothole filled by @frankElavsky 04/18/24.`)
firstImageLink.setAttribute("role","link")

let firstImage = firstImageLink.getElementsByTagName("img")[0]
firstImage.setAttribute("alt",`A stylized graphic with a bear in the center wearing a ranger hat. Above the bear, in large, rugged lettering, is the phrase "MAKE IT EASY." The background depicts a forest with several pine trees and a textured, vintage-looking sky. The artwork has a retro feel, reminiscent of mid-century national park posters, and uses a limited color palette consisting of shades of green, brown, orange, and white. Pothole filled by ChatGPT 04/18/24.`)

console.log(navLink,icon,profileLink,secondIcon,firstImageLink,firstImage)