/* Name this external file gallery.js */

function upDate(previewPic) {
    let imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
    imageDiv.innerText = previewPic.alt;
}

function unDo() {
    let imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = "url('')";
    imageDiv.innerText = "Hover over an image below to display here.";
}

// Lặp qua tất cả ảnh và thêm các sự kiện cần thiết
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".preview").forEach((img) => {
        img.addEventListener("mouseover", function () {
            upDate(this);
            console.log("Mouse over: " + this.alt);
        });

        img.addEventListener("mouseleave", function () {
            unDo();
            console.log("Mouse leave: " + this.alt);
        });

        img.addEventListener("focus", function () {
            upDate(this);
            console.log("Image focused: " + this.alt);
        });

        img.addEventListener("blur", function () {
            unDo();
            console.log("Image lost focus: " + this.alt);
        });

        // Đảm bảo ảnh có thể được focus bằng bàn phím
        img.setAttribute("tabindex", "0");
    });

    console.log("Gallery initialized");
});
