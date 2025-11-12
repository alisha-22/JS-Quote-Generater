let q=document.querySelector("#quote")
let p=document.querySelector("#person")
let btn=document.querySelector("#gbtn")
const array=[{quote:"You must be the change you wish to see in the world.",person:"-Mahatma Gandhi"},
{quote:"It is during our darkest moments that we must focus to see the light.",person:"-Aristotle"},
{quote:"Compromise for your dream but never compromise on your dream.",person:"-Imran Khan"},
{quote:"See throught the Eye of compassion, Hear throught the ear of tolerance, Speak with the language of love",person:"-Rumi"},
{quote:"Peaceful is the one who is not concerned with having less or more.",person:"-Rumi"},
{quote:"Love the life you Live, Live the life you Love.",person:"-Bob Marley"},
{quote:"You only lose when you give up.",person:"-Imran Khan"}
]
btn.addEventListener("click",()=>{
    let random=Math.floor(Math.random()*array.length)
        q.innerHTML=array[random].quote;
        p.innerHTML=array[random].person;
    
})