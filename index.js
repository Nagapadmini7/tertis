document.addEventListener('DOMContentLoaded',()=>{
    const grid=document.querySelector('.grid')
    let squares=Array.from(document.querySelectorAll('.grid div'))
    const width=10
    const ScoreDisplay=document.querySelector('#score')
    const startbtn=document.querySelector('#startbutton')

const ltetra=[[1,width+1,width*2+1,2],[width,width+1,width+2,width*2+2],[1,width+1,width*2+1,width*2]
,[width,width*2,width*2+1,width*2+2]]
 const ztetra=[[0,width,width+1,width*2+1],
[width+1,width+2,width*2,width*2+1],
[0,width,width+1,width*2+1],
[width+1,width+2,width*2,width*2+1]
]

const ttetra=[[1,width,width+1,width+2],[1,width+1,width+2,width*2+1],
[width,width+1,width+2,width*2+1],[1,width,width+1,width*2+1]]
const otetra=[[0,1,width,width+1],,[0,1,width,width+1],[0,1,width,width+1]
]

const  itetra=[[1,width+1,width*2+1,width*3+1],
[width,width+1,width+2,width+3],
[1,width+1,width*2+1,width*3+1],
[width,width+1,width+2,width+3]]


const tetra=[ltetra,ztetra,ttetra,otetra,itetra]

let currentposition=4
let currentrotation=0
let random=Math.floor(Math.random()*tetra.length)
let current = tetra[random][currentrotation]
console.log(random)



//draw the tetra
function draw(){
    current.forEach(index =>{
        squares[currentposition+ index].classList.add('tetra')

    })
}
function undraw(){
    current.forEach(index =>{
        squares[currentposition+index].classList.remove('tetra')
    })
}








})
