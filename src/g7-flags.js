const leaderNameInput = document.getElementById('leaderName');
const flagImage = document.getElementById('flagImage');
const submitButton = document.getElementById('submitButton');
submitButton.addEventListener('click', function(event){
    const leaderName = leaderNameInput.value.toLowerCase();
    let flagSrc = 'icons/евросоюз.jpeg'; 

  switch (leaderName) {
    case 'biden':
      flagSrc = 'icons/АКШ.jpeg';
      break;
    case 'scholz':
      flagSrc = 'icons/германия.png';
      break;
    case 'meloni':
      flagSrc = 'icons/италия.jpg';
      break;
    case 'trudeau':
      flagSrc = 'icons/канада.jpg';
      break;
    case 'macron':
      flagSrc = 'icons/франция.png';
      break;
    case 'sunak':
      flagSrc = 'icons/Улы-британия.png';
      break;
    case 'kisida':
      flagSrc = 'icons/жапон.png';
      break;
    case 'zelensky':
      flagSrc = 'icons/украина.jpeg';
      break;
  }

  flagImage.src = flagSrc;
});