document.querySelectorAll(".carousel").forEach((carousel) => {
    let items = carousel.querySelectorAll(".carousel__item");
    let buttonsHtml = Array.from(items, () => {
        return `<span class="carousel__button"></span>`;
    });
    // inserts the resulting nodes into the DOM tree at a specified position.
    carousel.insertAdjacentHTML(
        "beforeend",
        `
          <div class="carousel__nav">
              ${buttonsHtml.join("")}
          </div>
      `
    );

    let buttons = carousel.querySelectorAll(".carousel__button");

    buttons.forEach((button, i) => {
        button.addEventListener("click", () => {
            // un-select all the items
            items.forEach((item) =>
                item.classList.remove("carousel__item--selected")
            );
            buttons.forEach((button) =>
                button.classList.remove("carousel__button--selected")
            );

            items[i].classList.add("carousel__item--selected");
            button.classList.add("carousel__button--selected");
        });
    });

    // Select the first item on page load
    items[0].classList.add("carousel__item--selected");
    buttons[0].classList.add("carousel__button--selected");
});




// owl carousel 
let index = 0;
let slides = document.getElementsByClassName("slides");
let nextArrow = document.getElementById("next");
let previousArrow = document.getElementById("previous");
let place = document.getElementById("place");


showSlides(index);

function showSlides(x) {
    if (x > slides.length - 1) {
        index = 0;
    }
    if (x < 0) {
        index = slides.length - 1;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[index].style.display = "flex";
}

nextArrow.onclick = function () {
    index += 1;
    showSlides(index);
}

previousArrow.onclick = function () {
    index -= 1;
    showSlides(index);
}


//hameburger
let hameburger = document.querySelector('.hame-burger');
hameburger.addEventListener('click', () => {
    console.log(hameburger.children);
  
    let hiddenInput = document.querySelector('.input-search ').classList.contains('hidden')
    let hiddenCart = document.querySelector('.cart').classList.contains('hidden')
    if (hiddenCart, hiddenInput) {
        document.querySelector('.input-search').classList.remove('hidden')
        document.querySelector('.cart').classList.remove('hidden')
        hameburger.children[2].classList.add('hidden')
        hameburger.children[1].classList.add('rotate-left')
        hameburger.children[0].classList.add('rotate-right');
        console.log(true);
    }
    else {
        document.querySelector('.input-search').classList.add('hidden')
        document.querySelector('.cart').classList.add('hidden')
        hameburger.children[2].classList.remove('hidden')
        hameburger.children[1].classList.remove('rotate-left')
        hameburger.children[0].classList.remove('rotate-right');
        console.log(false);
    }
})