
const tooltip = document.querySelector("#tooltip");
const body = document.querySelector("body");
const header = document.querySelector(".top-site");

tooltip.addEventListener("mouseover", (e) => {
    console.log(e);
    console.log("Altura da página", body.clientHeight);
    console.log("largura da página", body.clientWidth);
    console.log("Altura do tooltip", tooltip.clientWidth);
    console.log("largura da página", tooltip.clientWidth);
    console.log("Altura do mouse", e.clientY);
    console.log("Largura do mouse", e.clientX);


if(document.querySelector(".tooltip")) {
    document.querySelector(".tooltip").remove();
}

const newDiv = document.createElement("div");

newDiv.classList.add("tooltip");
newDiv.innerHTML = 
"Meu tooltip com muitas dicas tops demais, aparece e desaparece.";

newDiv.style.position = "absolute";
newDiv.style.top = e.clientY + "px";
newDiv.style.left = e.clientX + "px";
newDiv.style.display = "block";
header.appendChild(newDiv);
});