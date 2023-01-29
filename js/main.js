

const parallax1 = new Parallax(document.getElementById('scene1'));
const parallax2 = new Parallax(document.getElementById('scene2'));
const parallax3 = new Parallax(document.getElementById('scene3'));
const parallax4 = new Parallax(document.getElementById('scene4'));
parallax1.limit(50,40)
parallax2.limit(50,40)
parallax3.limit(50,40)
parallax4.limit(50,40)

const range = document.querySelector('.progress__el')
const childCount = document.querySelector('.calc__count')
const price = document.querySelector('.calc__span_price span')
const minStep = range.offsetWidth / 5000

function getChildCount(){
	return range.value
}
function setChildCountText(){
	childCount.innerText = getChildCount()
	let numPrice = getChildCount()*300
	price.innerText = numPrice
}
function getChildCountTextWidth(){
	return childCount.offsetWidth
}
function calcWidthOffset(){
	let value = getChildCount()
	return value < 1000 ? -16 : value < 2000 ? 0 : 
				 value < 3000 ? 4 : value == 3750 ? 24 :
				 value < 4000 ? 8 : value < 4500 ? 8 : 18
}
function setChildCount(value, width, widthStep){
	setChildCountText()
	childCount.style.left = minStep * value - (width/2 + widthStep) + 'px'
}
setChildCount(getChildCount(),getChildCountTextWidth(), calcWidthOffset())
range.addEventListener('input', () => {
	setChildCount(getChildCount(),getChildCountTextWidth(), calcWidthOffset())
})
