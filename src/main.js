//hamburger menu variations
const bntMenu = document.getElementById('menu__bnt')
const bntOut = document.getElementById('bnt__out')
const menuNav = document.getElementById('menu__nav')
const desebolMain = document.getElementById('desebol__main')
const desebolFooter = document.getElementById('desebol__footer')

//checkbox verification variations mobill
const checkboxBnt = document.getElementById('checkbox__verification')
//checkbox verification variations big screen
const checkboxBntBig = document.getElementById('checkbox__verification__big')
//body add dark
const darkBody = document.getElementById('dark__body')
//Menu dark
const menuDark = document.getElementById('menu__dark')
//Menu white
const menuWhite = document.getElementById('menu__white')

//For bnt
const forBnt = document.getElementById('for__bnt')

//bnt hamburger
bntMenu.addEventListener('click', () => {
 toggleAddVarivel()
})

//bnt out
bntOut.addEventListener('click', () => {
 toggleAddVarivel()
})

//mode dark mobil
checkboxBnt.addEventListener('change', () => {
   checkboxBntBig.checked = checkboxBnt.checked
   addDark()
   addDarkMenu()
})
//mode dark big
checkboxBntBig.addEventListener('change', () => {
   checkboxBnt.checked = checkboxBntBig.checked
   addDark()
   addDarkMenu()
})

function toggleAddVarivel(){
 bntOut.classList.toggle('disable')   
 bntMenu.classList.toggle('disable')
 desebolMain.classList.toggle('disable')
 desebolFooter.classList.toggle('disable')
 menuNav.classList.toggle('disable')
}

function addDark(){
    darkBody.classList.toggle('mode__dark')
    const titulos = document.querySelectorAll('h2, h3')
    titulos.forEach(titulo => {
        titulo.classList.toggle('mode__dark');
    });
}

function addDarkMenu(){
    menuDark.classList.toggle('disable__menu__dark')
    menuWhite.classList.toggle('disable__menu__white')
}

forBnt.addEventListener('click', (event) =>{
    event.preventDefault()
})