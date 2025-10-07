
// Thay đổi nội dung búc thư ở đây
var letterContent ="Cảm ơn em đã luôn dành cho anh sự chân thành và ấm áp. Anh có những điều muốn gửi gắm đến tình yêu của anh ❤️. Em là món quà quý giá mà Thượng Đế đã gửi đến anh, là người khiến anh cảm thấy đặc biệt và trọn vẹn hơn bao giờ hết. Có lẽ tất cả những gì anh trải qua trong quá khứ chỉ để chờ đợi ngày em bước vào cuộc đời anh. Anh yêu em rất nhiều 💕."

// Tốc độ viết chữ. Số càng nhỏ tốc độ càng nhanh. 50 là tốc độ khá phù hợp
durationWrite = 50 

// Hiệu ứng gõ chữ

function effectWrite () {
    var boxLetter = document.querySelector(".letterContent")
    letterContentSplited = letterContent.split("")
    
    letterContentSplited.forEach((val, index) => {
        setTimeout(() => {
            boxLetter.innerHTML += val    
        }, durationWrite* index)
    })
}

document.addEventListener("DOMContentLoaded", function () {
    let audio = document.getElementById("bg-music");

    // Thử tự động phát
    let playPromise = audio.play();

    if (playPromise !== undefined) {
        playPromise.catch(error => {
            console.log("Tự động phát bị chặn, chờ tương tác của người dùng...");

            // Khi người dùng nhấp vào bất kỳ đâu trên trang, phát nhạc
            document.addEventListener("click", function () {
                audio.play();
            }, { once: true }); // Sự kiện chỉ chạy một lần
        });
    }
});

window.addEventListener("load", () => {
    setTimeout(() => {
        document.querySelector(".container").classList.add("active")
    }, 500)
})

var openBtn = document.querySelector(".openBtn")
openBtn.addEventListener("click", () => {
    document.querySelector(".cardValentine").classList.add("active")
    document.querySelector(".container").classList.add("close")
})

var cardValentine = document.querySelector(".cardValentine")

cardValentine.addEventListener("click", () => {
    cardValentine.classList.toggle("open")

    if(cardValentine.className.indexOf("open") != -1) {
        setTimeout(effectWrite, 500)
    } else {
        setTimeout(() => {
            document.querySelector(".letterContent").innerHTML = ""
        }, 1000)
    }
})