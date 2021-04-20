function goPage(index) {
    const player = document.querySelector(`#main`);
    switch(index) {
        case 1:
            player.innerHTML=`<iframe width="100%" height="800" src="./w01-intro-pokemon/pokemon.html"frameborder="0"></iframe>`;
            break;
        case 2:
            player.innerHTML=`<iframe width="100%" height="800" src="./w02-imgal/imageGallery.html"frameborder="0"></iframe>`;
            break;
        case 3:
            player.innerHTML=`<iframe width="100%" height="800" src="./tku60-no-js/div_tku60.html"frameborder="0"></iframe>`;
            break;
    }
}