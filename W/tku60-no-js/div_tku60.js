function changeVideo(index){
    const player = document.querySelector('#player');
    switch(index){
        case 1:
            player.innerHTML =`<iframe width="560" height="315" src="https://www.youtube.com/embed/RechrtUxfQc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
        case 2:
            player.innerHTML =`<iframe width="560" height="315" src="https://www.youtube.com/embed/MRWX49Furew" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
        case 3:
            player.innerHTML =`<iframe width="560" height="315" src="https://www.youtube.com/embed/METhdbL_iMw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
        case 4:
            player.innerHTML =`<iframe width="560" height="315" src="https://www.youtube.com/embed/ZyDbq-lEKTo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
        case 5:
            player.innerHTML =`<iframe width="560" height="315" src="https://www.youtube.com/embed/NlsrJbVvjaA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
        
    }
}

function changeColor(index) {
    const color = document.querySelector("#section");
    switch(index){
        case 1:
            color.style.backgroundColor = "gray";
            break;
        case 2:
            color.style.backgroundColor = "blue";
            break;
        case 3:
            color.style.backgroundColor = "red";
            break;
    }
}

function changeImg(index) {
    const Img = document.querySelector("#player");
    switch(index) {
        case 1:
        Img.innerHTML = `<img src="./images/TKU1.png" alt=""/>`;
        break;
        case 2:
        Img.innerHTML = `<img src="./images/TKU2.png" alt=""/>`;
        break;
        case 3:
        Img.innerHTML = `<img src="./images/TKU3.png" alt=""/>`;
        break;
        case 4:
        Img.innerHTML = `<img src="./images/TKU4.png" alt=""/>`;
        break;
        case 5:
        Img.innerHTML = `<img src="./images/TKU5.png" alt=""/>`;
        break;
    }
}
