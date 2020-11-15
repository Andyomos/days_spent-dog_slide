let timer;
let deleteFirstPictureDelay;

const start = async () => {
    try {
        const animals = await fetch('https://dog.ceo/api/breeds/list/all');
        const data = await animals.json();
        createBreedList(data.message);
    } catch (err) { console.log(`There was a problem fetching the breed list. ${err}`); }
}

start();

const createBreedList = (breedList) => {
    console.log(breedList)
    document.querySelector('#breed').innerHTML = `

    <select onchange="loadByBreed(this.value)">
        <option> Choose Breed </option>
        ${Object.keys(breedList).map((breed) => {
            return `<option>${breed}</option>`
        }).join('')}
    </select>`;
}

const loadByBreed = async (breed) => {
    
    if (breed !== 'Choose Breed') {
        const response = await fetch(`https://dog.ceo/api/breed/${breed}/images`);
        const data = await response.json();
        createSlideShow(data.message)
        
    }
}

const createSlideShow = (images) => {
    let currentPosition = 0;
    clearInterval(timer);
    clearTimeout(deleteFirstPictureDelay);

    if (images.length > 1) {
         document.querySelector('#slideshow').innerHTML = `
         <div class="slide" style="background-image: url('${images[0]}')"></div>
         <div class="slide" style="background-image: url('${images[1]}')"></div>
    `;

    currentPosition += 2;
    if (images.length == 2) currentPosition = 0;
    timer = setInterval(nextSlide, 4000);
        
    } else {
         document.querySelector('#slideshow').innerHTML = `
         <div class="slide" style="background-image: url('${images[0]}')"></div>
         <div class="slide" ></div>
    `;

    }

    function nextSlide () {
        document.querySelector('#slideshow').insertAdjacentHTML("beforeend", `<div class="slide" style="background-image: url('${images[currentPosition]}')"></div>`);

       deleteFirstPictureDelay = setTimeout(function() {
            document.querySelector(".slide").remove();
        }, 1000);
        
        if (currentPosition + 1 >= images.length) {
            currentPosition = 0;
        } else {
            currentPosition++;
        }
    }
}




// fetch('https://dog.ceo/api/breeds/list/all').then((response) => {
//     return response.json();   
//     })
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));
