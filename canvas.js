var convas = document.querySelector('canvas')

convas.width = window.innerWidth
convas.height = window.innerHeight

var ctx = convas.getContext('2d')

/// NOTE: Variables
const mouse = {
  x: 20,
  y: 20
}

const colors = [
  '#2185c5',
  '#7ECEFD',
  '#FFF6E5',
  '#FF7F66'
]

/// NOTE: Events listerne
window.addEventListener('mousemove', e => {
  mouse.x = e.x
  mouse.y = e.y
  // console.log(mouse)
})

window.addEventListener('resize', () => {
  convas.width = window.innerWidth
  convas.height = window.innerHeight

  location.reload()
})

//utiity function
function randomIntRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function randomColor(colors) {
  return colors[Math.floor(Math.random() * colors.length)]
}

function getDistance(x1, y1, x2, y2) {

  let xDistance = x2 - x1
  let yDistance = y2 - y1

  return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2))
}

class Circle {
  constructor(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
  }

  draw = () => {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.fillStyle = this.color
    ctx.fill()
    ctx.closePath()
  }

  update = () => {
    this.draw()
  }
}

// Implementation
let Circle1
let Circle2
function init() {
  Circle1 = new Circle(300, 300, 100, 'black')
  Circle2 = new Circle(undefined, undefined, 30, 'red')
}

/// Animation Loop
function animate() {
  requestAnimationFrame(animate)
  ctx.clearRect(0, 0, convas.width, convas.height)
  Circle2.x = mouse.x
  Circle2.y = mouse.y
  Circle1.update()
  Circle2.update()

  const distance = getDistance(Circle1.x, Circle1.y, Circle2.x, Circle2.y)
  if (distance < Circle1.radius + Circle2.radius) {
    Circle1.color = 'red'
  } else {
    Circle1.color = 'blue'
  }

}

init()
animate()