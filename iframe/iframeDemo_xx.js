function goPage(index) {
    const p = document.querySelector('#main');
    switch (index) {
        case 1:
          p.innerHTML = `<iframe width="100%" height="700" src="./w01-intro-pokemon/pokemon.html"> </iframe>`;
          break;
        case 2:
          p.innerHTML = `<iframe width="100%" height="700" src="./w02-imgal/imageGallery.html"> </iframe>`;
        break;
        case 3:
          p.innerHTML = `<iframe width="100%" height="700" src="./w09-tku60/div_tku60_xx.html"> </iframe>`;
        break;
    }

}
