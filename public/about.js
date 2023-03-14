
async function showRandomCat() {
    const response = await fetch("https://cataas.com/cat");
    const catImage = await response.blob();
    document.getElementById("cat-container").src = URL.createObjectURL(catImage);
}