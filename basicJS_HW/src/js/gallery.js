/* Name this external file gallery.js */

function upDate(previewPic) {
    // Lấy thẻ div có id là "image"
    let imageDiv = document.getElementById("image");
    
    // Thay đổi ảnh nền thành ảnh của previewPic
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
    
    // Thay đổi văn bản trong div thành nội dung alt của ảnh
    imageDiv.innerText = previewPic.alt;
}

function unDo() {
    // Lấy thẻ div có id là "image"
    let imageDiv = document.getElementById("image");
    
    // Khôi phục ảnh nền về trạng thái ban đầu
    imageDiv.style.backgroundImage = "url('')"; // Hoặc đặt lại background mặc định nếu có
    
    // Khôi phục văn bản về trạng thái ban đầu
    imageDiv.innerText = "Hover over an image below to display here.";
}
