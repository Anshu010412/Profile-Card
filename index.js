const nameInput = document.getElementById("name");
const roleInput = document.getElementById("role");
const imageInput = document.getElementById("image");
const bioInput = document.getElementById("bio");

const themeSelect = document.getElementById("theme");
const gradientSelect = document.getElementById("gradient");
const templateSelect = document.getElementById("template");

const card = document.getElementById("card");

const previewName = document.getElementById("previewName");
const previewRole = document.getElementById("previewRole");
const previewImg = document.getElementById("previewImg");
const previewBio = document.getElementById("previewBio");

//LIVE PREVIEW
function animateCard() {
  card.style.animation = "none";
  card.offsetHeight;
  card.style.animation = "pop 0.4s ease";
}

nameInput.addEventListener("input", () => {
  previewName.innerText = nameInput.value || "Your Name";
  animateCard();
});

roleInput.addEventListener("input", () => {
  previewRole.innerText = roleInput.value || "Role";
  animateCard();
});

imageInput.addEventListener("input", () => {
  previewImg.src =
    imageInput.value ||
    "url";
  animateCard();
});

bioInput.addEventListener("input", () => {
  previewBio.innerText = bioInput.value || "Bio";
  animateCard();
});

// theme
themeSelect.addEventListener("change", () => {
  card.classList.remove("light", "dark");
  card.classList.add(themeSelect.value);
});

//gradient
gradientSelect.addEventListener("change", () => {
  card.classList.remove("grad1", "grad2","grad3");
  card.classList.add(gradientSelect.value);
});

//template
templateSelect.addEventListener("change", () => {
  card.classList.remove("template1", "template2");
  card.classList.add(templateSelect.value);
});

function downloadCard(){
    html2canvas(card).then(canvas=>{
        const link = document.createElement("a")
        link.download ='profile-card.png';
        link.href = canvas.toDataURL();
        link.click();
    })
}