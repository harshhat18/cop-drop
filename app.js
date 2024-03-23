const wrapper=document.querySelector(".sliderWrapper");
const menu=document.querySelectorAll(".menuItem");
const products=[
    {
        id: 1,
        title: "Air Force",
        price:119,
        Desc:"Nike Air Force combine timeless style with unmatched comfort and durability. With innovative technology and premium materials, they're a favorite choice for everyday wear, blending performance and fashion effortlessly.",
        color:[
            {
                code:"black",
                img: "./img/air.png",
            },
            {
                code:"darkblue",
                img: "./img/air2.png",
            },
        ],

    },
    {
        id: 2,
        title: "Air Jordan",
        price:149,
        Desc:"Nike Air Jordan is an icon,  Crafted with innovation, premium materials, they offer unrivaled comfort. From the Jumpman logo to Air cushioning, they're a must-have for sneaker enthusiasts.",
        color:[
            {
                code:"lightgray",
                img: "./img/jordan.png",
            },
            {
                code:"green",
                img: "./img/green jordan.png",
            },
        ],

    },
    {
        id: 3,
        title: "Blazer",
        price:109,
        Desc:"Nike Blazers are Timeless with unmatched comfort. Crafted with innovation, premium materials, they offer unparalleled wearability. From the classic silhouette to versatile design, a staple for sneaker lovers.",
        color:[
            {
                code:"lightgray",
                img: "./img/blazer.png",
            },
            {
                code:"green",
                img: "./img/blazer2.png",
            },
        ],

    },
    {
        id: 4,
        title: "Crater",
        Desc:"    Nike Crater have Sustainable style, innovative comfort. Crafted with recycled materials, they offer eco-friendly wearability. From the unique design to lightweight construction, a must-have for eco-conscious sneaker enthusiasts.",
        price:129,
        color:[
            {
                code:"black",
                img: "./img/crater.png",
            },
            {
                code:"lightgray",
                img: "./img/crater2.png",
            },
        ],

    },
    {
        id: 5,
        title: "Hippie",
        price:99,
        Desc:"Nike Hippie draws inspiration from the hippie movement of the 1960s.these shoes typically feature  design elements reminiscent of the hippie era.ike Hippie shoes offer a unique blend of nostalgia and modern fashion.",
        color:[
            {
                code:"gray",
                img: "./img/hippie.png",
            },
            {
                code:"black",
                img: "./img/hippie2.png",
            },
        ],

    },
]; 

let choosenProduct=products[0];
const currentProductImg=document.querySelector(".productImg");
const currentProductTitle=document.querySelector(".productTitle");
const currentProductPrice=document.querySelector(".productPrice");
const currentProductDesc=document.querySelector(".productDesc")
const currentProductColors=document.querySelectorAll(".color");
const currentProductSizes=document.querySelectorAll(".size");



menu.forEach((item,idx)=>{
    item.addEventListener("click",()=>{
        //change the current slide

    wrapper.style.transform= `translateX(${-100*idx}vw)`;  
    //change the product
    choosenProduct=products[idx];
    //change text of current product
    currentProductTitle.textContent=choosenProduct.title;
    currentProductPrice.textContent="$"+choosenProduct.price;
    currentProductDesc.textContent=choosenProduct.Desc;
    currentProductImg.src=choosenProduct.color[0].img;

    currentProductColors.forEach((color,idx)=>{
        color.style.backgroundColor=choosenProduct.color[idx].code;

    })


    });

});

currentProductColors.forEach((color,idx)=>{
    color.addEventListener("click",()=>{
        currentProductImg.src=choosenProduct.color[idx].img;

    })
})

currentProductSizes.forEach((size,idx)=>{
    size.addEventListener("click",()=>{
        currentProductSizes.forEach((size)=>{
            size.style.backgroundColor="white";
            size.style.color="black";     
        })
        size.style.backgroundColor="black";
        size.style.color="white";


    })
    
})

const productButton=document.querySelector(".productButton");
const payment=document.querySelector(".payment");
const close=document.querySelector(".close");   
const confirmButton=document.querySelector(".cbtn");
const cSpan=document.querySelector(".cSpan");
const confirm=document.querySelector(".confirm");
const payButton=document.querySelector(".payButton");

productButton.addEventListener("click",()=>{
    payment.style.display="flex";

})

close.addEventListener("click",()=>{
    payment.style.display="none";
    
})

payButton.addEventListener("click",()=>{
    payment.style.display="none";
    confirm.style.display="flex";

    
})



confirmButton.addEventListener("click",()=>{
    confirm.style.display="none";
    
})

cSpan.addEventListener("click",()=>{
    confirm.style.display="none";
    
})




