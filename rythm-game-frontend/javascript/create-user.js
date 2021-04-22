let username = document.getElementById('username-input')
let saveBtn = document.getElementById('saveBtn')

saveBtn.addEventListener("click", (e)=>{
    e.preventDefault()
    console.log(username.value)
})