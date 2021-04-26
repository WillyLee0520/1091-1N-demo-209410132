function changeVideo(index) {
    const player = document.querySelector('#player');
    switch (index) {
        case 1:
          player.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/RechrtUxfQc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
          break;
        case 2:
          player.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/MRWX49Furew" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
        break;
    }

}

function changeColor (index) {
    const p = document.querySelector('#section');
    switch(index) {
        case 1:
          p.style.backgroundColor = 'yellow'
        break;
    }
}