import React from 'react';
import "./Scroll-Animation.css"
const ScrollAnimation = () => {
    setTimeout(() => {
        
    let boxes = document.querySelectorAll('h1')
    window.addEventListener('scroll', () => { 
    let height =window.innerHeight / 5 * 4
    console.log(height)
    boxes.forEach((box) => {
        let x = box.getBoundingClientRect().top 
        
        if(x < height){
            box.classList.add('animation')              
        }
        else{
            box.classList.remove('animation') 
        } 
    });  
},0)
    })
    return ( 
        <>
         
            <h1>joscript</h1>
            <h1>joscript</h1>
            <h1>joscript</h1>
            <h1>joscript</h1>
            <h1>joscript</h1>
            <h1>joscript</h1>
            <h1>joscript</h1>
            <h1>joscript</h1>
            <h1>joscript</h1>
            <h1>joscript</h1>
            <h1>joscript</h1>
            <h1>joscript</h1>
            <h1>joscript</h1>
            <h1>joscript</h1>
            <h1>joscript</h1>
            <h1>joscript</h1>
            <h1>joscript</h1>
            <h1>joscript</h1>
            <h1>joscript</h1>
            <h1>joscript</h1>
            <h1>joscript</h1>
            <h1>joscript</h1>
            <h1>joscript</h1>
            <h1>joscript</h1>
            <h1>joscript</h1>
            <h1>joscript</h1>
            <h1>joscript</h1>
            <h1>joscript</h1>
            <h1>joscript</h1>
            <h1>joscript</h1>
            <h1>joscript</h1>
            <h1>joscript</h1>
            <h1>joscript</h1>
            <h1>joscript</h1>
            <h1>joscript</h1>
            <h1>joscript</h1>
            <h1>joscript</h1>
            <h1>joscript</h1>
            <h1>joscript</h1>
            <h1>joscript</h1>
            <h1>joscript</h1>
            <h1>joscript</h1>
            <h1>joscript</h1>
            <h1>joscript</h1>
            <h1>joscript</h1>
            <h1>joscript</h1>
            <h1>joscript</h1>
            <h1>joscript</h1>
            <h1>joscript</h1>
            <h1>joscript</h1>
            <h1>joscript</h1>
            <h1>joscript</h1>
            <h1>joscript</h1>
            <h1>joscript</h1>
            <h1>joscript</h1>
            <h1>joscript</h1>
            <h1>joscript</h1>
            <h1>joscript</h1>
            <h1>joscript</h1>
            <h1>joscript</h1>
            <h1>joscript</h1>
       
            
        </>
    );
}

export default ScrollAnimation;
