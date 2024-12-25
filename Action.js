let backbtn=document.getElementById('backButton');
let nextbtn=document.getElementById('nextButton');
let imagecom=document.getElementById('ImageCom1');

const scrollamount=570;
let autoScroll;

backbtn.addEventListener("click",()=>{
    imagecom.scrollLeft -= scrollamount;
})
nextbtn.addEventListener("click",()=>{
    imagecom.scrollLeft += scrollamount;
})

function startAutoScroll(){
    autoScroll=setInterval(()=>{
        if(imagecom.scrollLeft>=imagecom.scrollWidth-imagecom.clientWidth){
            imagecom.scrollLeft=0;
        }else{
            imagecom.scrollLeft+=scrollamount;
        }
    },3000);
}

function resetAutoScroll(){
    console.log("Reset is call");
    clearInterval(autoScroll);
    startAutoScroll();
}
startAutoScroll();
const navbar=document.querySelector('#h-header');
var lastScrollPos=0;
window.addEventListener('scroll',()=>{
    var scrollTop=window.pageYOffset;
    if(scrollTop>lastScrollPos){
        navbar.style.transition="all .4s ease";
        navbar.style.transform="translateY(-100%)";
    }else{
        navbar.style.transition="all .6s ease";
        navbar.style.transform="translateY(0)";
    }
    lastScrollPos = scrollTop;
})

/*New*/
let menuList = document.getElementById("menuList")
        menuList.style.maxHeight = "0px";

        function toggleMenu(){
            if(menuList.style.maxHeight == "0px")
            {
                menuList.style.maxHeight = "1000px";
                menuList.style.maxWidth = "1280px";
            }
            else{
                menuList.style.maxHeight = "0px";
            }
        }
