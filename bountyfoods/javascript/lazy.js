
const images = document.querySelectorAll("[data-src]");


function preloadImage(ima){
    const src=ima.getAttribute("data-src");
    if (!src){
        return
    }
    ima.src=src;
}

const imageOPtion ={
    threshold:0,
    rootMargin: "0px 0px 200px 0px"
};


const imageObeservor= new IntersectionObserver((entries,imageObeservor)=>{

    entries.forEach(entry=>{
        if (!entry.isIntersecting){
            return
        }else{
            preloadImage(entry.target)
            imageObeservor.unobserve(entry.target)
        }
    })
    
}, imageOPtion);

images.forEach(image=>{
    imageObeservor.observe(image)
});