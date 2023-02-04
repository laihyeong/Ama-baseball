const loginBtn = document.querySelector(".loginBtn")
const toolsBtn = document.querySelector(".toolsBtn")

function newPage(event) {
    window.location.href = `/${this.innerHTML}`
}

loginBtn.addEventListener('click', newPage)
toolsBtn.addEventListener('click', newPage)