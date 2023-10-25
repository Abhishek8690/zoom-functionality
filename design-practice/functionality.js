var image_one = document.getElementById('other-img-1-id').innerHTML;
var image_two = document.getElementById('other-img-2-id');
var image_three = document.getElementById('other-img-3-id');
var product_img = document.getElementById('product-image-id');
var product_img_id = document.getElementById('product-image-div-id');
function showimage(){
    product_img.setAttribute('src','./small-img-2.png');
}
function showimage_2(){
    product_img.setAttribute('src','./small-img-4.png');
}
function zoom_image(event){
    console.log(event, "event");
    var x = event.clientX;
    var y = event.clientY;
    product_img.classList.add('position-absolute');
    product_img.style.overflow = 'hidden';
    product_img.style.top = ` ${-0.5*y}px`;
    product_img.style.left = `${-0.5*x}px`;
}
function remove_zoom(event){
    product_img.classList.remove('position-absolute');
}
image_two.addEventListener('click', showimage);
image_three.addEventListener('click',showimage_2);
product_img_id.onmousemove = function(event) {zoom_image(event)};
product_img_id.onmouseout = function(event) { remove_zoom(event)}