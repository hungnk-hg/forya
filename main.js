
// Thay đổi nội dung búc thư ở đây
var letterContent ="Anh không biết từ khi nào, em đã trở thành một phần quen thuộc trong cuộc sống của anh. Mỗi tin nhắn, mỗi nụ cười của em đều khiến anh thấy ngày trôi qua ý nghĩa hơn. Anh không cần điều gì quá lớn lao, chỉ mong được cùng em đi qua những ngày bình yên, những buổi sáng dịu nhẹ và cả những khoảnh khắc im lặng nhưng tràn đầy yêu thương. Cảm ơn em vì đã đến, vì đã cho anh biết thế nào là hạnh phúc thật sự. Dù mai này mọi thứ có đổi thay, anh vẫn sẽ luôn trân trọng những phút giây có em trong đời💕."

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