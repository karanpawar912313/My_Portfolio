
/* cursor */

const cursor=document.querySelector(".cursor")
window.addEventListener("mousemove",e=>{
cursor.style.left=e.clientX+"px"
cursor.style.top=e.clientY+"px"
})

/* smooth scroll */

const lenis=new Lenis()
function raf(time){
lenis.raf(time)
requestAnimationFrame(raf)
}
requestAnimationFrame(raf)

/* hero animation */

gsap.from(".hero h1",{y:100,opacity:0,duration:1})
gsap.from(".hero p",{y:50,opacity:0,duration:1,delay:.3})

/* skill animation */

gsap.to(".skill",{
scrollTrigger:"#skills",
y:0,
opacity:1,
duration:1,
stagger:.2
})

/* card tilt effect */

document.querySelectorAll(".card").forEach(card=>{

card.addEventListener("mousemove",e=>{

const rect=card.getBoundingClientRect()

const x=e.clientX-rect.left
const y=e.clientY-rect.top

card.style.setProperty("--x",x+"px")
card.style.setProperty("--y",y+"px")

})

})

/* modal */

const modal=document.getElementById("modal")
const modalTitle=document.getElementById("modalTitle")
const modalDesc=document.getElementById("modalDesc")

document.querySelectorAll(".card").forEach(card=>{
card.addEventListener("click",()=>{
modal.style.display="flex"
modalTitle.innerText=card.dataset.title
modalDesc.innerText=card.dataset.desc
})
})

document.querySelector(".close").onclick=()=>{
modal.style.display="none"
}

/* ===== ORIGINAL GALAXY (UNCHANGED) ===== */

const scene=new THREE.Scene()

const camera=new THREE.PerspectiveCamera(
75,
window.innerWidth/window.innerHeight,
0.1,
1000
)

const renderer=new THREE.WebGLRenderer({
canvas:document.querySelector("#bg"),
alpha:true
})

renderer.setSize(window.innerWidth,window.innerHeight)

const particlesGeometry=new THREE.BufferGeometry()

const count=5000

const positions=new Float32Array(count*3)

for(let i=0;i<count*3;i++){
positions[i]=(Math.random()-0.5)*400
}

particlesGeometry.setAttribute(
"position",
new THREE.BufferAttribute(positions,3)
)

const particlesMaterial=new THREE.PointsMaterial({
size:.3
})

const particles=new THREE.Points(
particlesGeometry,
particlesMaterial
)

scene.add(particles)

camera.position.z=120

let mouseX=0
let mouseY=0

document.addEventListener("mousemove",e=>{
mouseX=e.clientX/window.innerWidth-.5
mouseY=e.clientY/window.innerHeight-.5
})

function animate(){

requestAnimationFrame(animate)

particles.rotation.y+=0.0008
particles.rotation.x+=0.0002

camera.position.x+=(mouseX*20-camera.position.x)*0.05
camera.position.y+=(-mouseY*20-camera.position.y)*0.05

renderer.render(scene,camera)

}

gsap.to(".timeline-item",{

scrollTrigger:"#education",

y:0,
opacity:1,
duration:1,
stagger:.3

})

/* hamburger menu */

const toggle=document.querySelector(".menu-toggle")
const navLinks=document.querySelector(".nav-links")

toggle.addEventListener("click",()=>{

navLinks.classList.toggle("active")

})

animate()
