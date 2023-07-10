let emoji = []
const emojiEl = document.getElementById("emoji")
const addEnd = document.getElementById("add-end")
const addBeginning = document.getElementById("add-beginning")
const removeEnd = document.getElementById("remove-end")
const removeBeginning = document.getElementById("remove-beginning")
const inputEl = document.getElementById("input-el")
const clearEl = document.getElementById("clear-el")


addEnd.addEventListener("click", function(){
let value = inputEl.value
emoji.push(value)
emojiEl.textContent = emoji
console.log(emoji)
})

addBeginning.addEventListener("click", function(){
let value = inputEl.value
emoji.unshift(value)
emojiEl.textContent = emoji
console.log(emoji)
})

removeEnd.addEventListener("click", function(){
emoji.pop()
emojiEl.textContent = emoji
console.log(emoji)
})

removeBeginning.addEventListener("click", function(){
emoji.shift()
emojiEl.textContent = emoji
console.log(emoji)
})

clearEl.addEventListener("click", function(){
inputEl.value = " "

})
