function MyFunction(smallImg){
    var fullImg = document.getElementById("imgBox");
    fullImg.src = smallImg.src;
}
function MessageService() {
    var messageService = new Object();
    messageService.show = function (node = document.getElementById(), message) {
        node.style.display = 'block';
        node.innerHTML = message;
        setTimeout(() => {
            node.style.display = 'none';
        }, 2000);
    }
    return messageService;
}
function them(){
    alert("Đã thêm 1 sản phẩm vào giỏ hàng!!")
}
