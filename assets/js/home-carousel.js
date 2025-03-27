// inspired by https://codepen.io/paras594/pen/JzjwJK
onload = () => {
    const textSlide = document.getElementById("textSlide");
    const strings = textSlide.querySelectorAll("h2");

    const width = strings[0].clientWidth;

    let i = 0;

    setInterval(() => {
        if (i >= strings.length - 1) {
            return;
        }
        textSlide.style.transition = "transform 0.5s ease";
        i++;
        textSlide.style.transform = `translateX(-${width * i}px)`;
    }, 3500);

    textSlide.addEventListener("transitionend", () => {
        if (strings[i].id === "clone") {
            i = 0;
            textSlide.style.transition = "none";
            textSlide.style.transform = "translateX(0px)";
        }
    })
}