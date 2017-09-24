$(document).ready(function() {
    $('.crop-img').each(function() {
    var maxWidth = $('.card').width(); // 圖片最大寬度
    var maxHeight = 300;    // 圖片最大高度
    var ratio = 0;  // 縮放比例
    var width = $(this).width();    // 圖片實際寬度
    var height = $(this).height();  // 圖片實際高度
 
    // 檢查圖片是否超寬
    if(width > maxWidth){
        ratio = maxWidth / width;   // 計算縮放比例
        $(this).css("width", maxWidth); // 設定實際顯示寬度
        height = height * ratio;    // 計算等比例縮放後的高度 
        $(this).css("height", height * ratio);  // 設定等比例縮放後的高度
    }
 
    // 檢查圖片是否超高
    if(height > maxHeight){
        ratio = maxHeight / height; // 計算縮放比例
        $(this).css("height", maxHeight);   // 設定實際顯示高度
        width = width * ratio;    // 計算等比例縮放後的高度
        $(this).css("width", width * ratio);    // 設定等比例縮放後的高度
    }
});
});