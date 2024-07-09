var users=[
    { 
            profilePic:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",
            displayPic:"https://images.pexels.com/photos/2073280/pexels-photo-2073280.jpeg?auto=compress&cs=tinysrgb&w=600",
            pendingMessage:12,
            location:"Delhi,India",
            name:"Ananya",
            age:21,
            interests:[
                {
                    icon:`<i class="fa-solid fa-music"></i>`,
                    interest:"Music"
                },
                {
                    icon:`<i class="fa-solid fa-dragon"></i>`,
                    interest:"Pet lover"
                },
                {
                    icon:`<i class="fa-solid fa-phone-volume"></i>`,
                    interest:"Talking"
                }
            ],
            bio:" passionate home cook and aspiring musician, explores global cuisines and melodies during her travels, seeking inspiration for fusion recipes and songs.",
            isFriend:null
    },
    {
            profilePic:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBvcnRyYWl0fGVufDB8fDB8fHww",
            displayPic:"https://images.pexels.com/photos/2010877/pexels-photo-2010877.jpeg?auto=compress&cs=tinysrgb&w=600",
            pendingMessage:7,
            location:"Jammu,India",
            name:"Anshu",
            age:25,
            interests:[
                {
                    icon:`<i class="fa-solid fa-music"></i>`,
                    interest:"Music"
                },
                {
                    icon:`<i class="fa-solid fa-pen-fancy"></i>`,
                    interest:"Writing"
                },
                {
                    icon:`<i class="fa-solid fa-phone-volume"></i>`,
                    interest:"Talking"
                }
            ],
            bio:"passionate home cook and aspiring musician, explores global cuisines and melodies during her travels, seeking inspiration for fusion recipes and songs.",
            isFriend:null
    },
    {
            profilePic:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBvcnRyYWl0fGVufDB8fDB8fHww",
            displayPic:"https://images.pexels.com/photos/2014864/pexels-photo-2014864.jpeg?auto=compress&cs=tinysrgb&w=600",
            pendingMessage:2,
            location:"Jaipur,India",
            name:"Victoria",
            age:23,
            interests:[
                {
                    icon:`<i class="fa-solid fa-music"></i>`,
                    interest:"Music"
                },
                {
                    icon:`<i class="fa-solid fa-pen-fancy"></i>`,
                    interest:"Writing"
                },
            ],
            bio:"Talented artist and illustrator based in Mumbai.she creates vibrant digital art inspired by Indian folklore. Volunteers teaching art to underprivileged children. Aspires to publish a graphic novel.",
            isFriend:null
    },
    {
            profilePic:"https://images.unsplash.com/photo-1521119989659-a83eee488004?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBvcnRyYWl0fGVufDB8fDB8fHww",
            displayPic:"https://images.pexels.com/photos/2063102/pexels-photo-2063102.jpeg?auto=compress&cs=tinysrgb&w=600",
            pendingMessage:9,
            location:"Patna,India",
            name:"Shreya",
            age:19,
            interests:[
                {
                    icon:`<i class="fa-solid fa-music"></i>`,
                    interest:"Music"
                },
                {
                    icon:`<i class="fa-solid fa-pen-fancy"></i>`,
                    interest:"Writing"
                },
                {
                    icon:`<i class="fa-solid fa-dragon"></i>`,
                    interest:"Pet lover"
                }
            ],
            bio:"Ambitious environmental scientist from Bangalore. she researches sustainable agriculture practices.Advocates for climate change through social media.",
            isFriend:null
    },
    {
        profilePic:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBvcnRyYWl0fGVufDB8fDB8fHww",
        displayPic:"https://images.pexels.com/photos/1898555/pexels-photo-1898555.jpeg?auto=compress&cs=tinysrgb&w=600",
        pendingMessage:11,
        location:"Gulmarg,India",
        name:"Shilpa",
        age:18,
        interests:[
            {
                icon:`<i class="fa-solid fa-music"></i>`,
                interest:"Music"
            },
            {
                icon:`<i class="fa-solid fa-pen-fancy"></i>`,
                interest:"Writing"
            },
        ],
        bio:"Talented artist and illustrator based in Mumbai.she creates vibrant digital art inspired by Indian folklore. Volunteers teaching art to underprivileged children. Aspires to publish a graphic novel.",
        isFriend:null
}
]
let curr=0;
function setInitial(){
document.querySelector(".maincard img").src=`${users[curr].displayPic}`;
document.querySelector(".incomingcard img").src=`${users[curr+1].displayPic}`;
document.querySelector(".prflimg img").src=`${users[curr].profilePic}`;
document.querySelector(".badge h5").textContent=`${users[curr].pendingMessage}`;
document.querySelector(".location h3").textContent=`${users[curr].location}`;
document.querySelector(".name h1:nth-child(1)").textContent=`${users[curr].name}`;
document.querySelector(".name h1:nth-child(2)").textContent=`${users[curr].age}`;
var clutter="";
users[curr].interests.forEach(function(interes){
    clutter+= `<div class="tag flex items-center bg-white/20 px-3 py-1 rounded-full gap-3">
    ${interes.icon}
    <h3 class="text-lg tracking-tighter capitalize">${interes.interest}</h3>
</div>`
})
document.querySelector(".tags").innerHTML=`${clutter}`;
    document.querySelector(".bio p").textContent=`${users[curr].bio}`;
};
setInitial();
let isAnimating=false;


let deny=  document.querySelector(".deny");
let accept=   document.querySelector(".accept");
function imageChange(){
    if(!isAnimating){
        isAnimating=true;
        curr=(curr+1)%users.length;
        let tl=gsap.timeline({
            onComplete:function(){
                isAnimating=false;
                let main=document.querySelector(".maincard");
                let incoming=document.querySelector(".incomingcard");
                incoming.classList.remove("z-[2]");
                incoming.classList.add("z-[3]");
                incoming.classList.remove("incomingcard");
                main.classList.remove("z-[3]");
                main.classList.add("z-[2]");
                gsap.set(main,{
                    scale:1,
                    opacity:1
                })
                
                document.querySelector(".maincard img").src=users[curr].displayPic;
                main.classList.remove("maincard");
                incoming.classList.add("maincard");
                main.classList.add("incomingcard");
                setInitial();
            }
        });
       
        tl.to(".maincard",{
            scale:1.1,
            opacity:0,
            ease:Circ,
            duration:.9
        },"a")
        .from(".incomingcard",{
            scale:.9,
            opacity:0,
            ease:Circ,
            duration:1.1
        },"a")
    }
   
}
(function containerCreator(){
    document.querySelectorAll(".element").forEach(function(element){
        let div=document.createElement("div");
        div.classList.add(`${element.classList[1]}container`,'overflow-hidden');
        div.appendChild(element);
        document.querySelector(".details").appendChild(div);
    })
})();
deny.addEventListener("click",function(){
    imageChange();
   gsap.from(".details .element",{
    y:"100%",
    stagger:.06,
    ease:Circ,
    duration:1.5
})
})


function heartClick(){
    alert(`Hey,Congratulations ❤ ❤ You find a correct match Live Life with Her ❤ ❤ Have a Happy life ❤ ❤`)
}
