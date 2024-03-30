let images = document.querySelector('img')

let wrapper = document.getElementById('wrapper')

let imgWrapper = document.getElementById('fullImg');

let close = document.querySelector('span2');

// function () {}
// () => {}
images.forEach((img, index) => {
    img.addEventListener('click', () => {
        openModal('images/img${index}.jpg');
    });
});

close.addEventListener('click', () => (wrapper.style.display = "none"));

function openModal(pic) {
    wrapper.style.display = 'flex';
    imgWrapper.src = pic
}


