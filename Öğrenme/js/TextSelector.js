// text'e tıklandığında demektir, focusin.
//input'un içerisini sarıya boyayacak.
$(':text').focusin(function(){
    $(this).css('background-color','yellow');
});

//Dışarı çıktığında mouse tekrar renk beyaz olacak, blur ile.
$(':text').blur(function(){
    $(this).css('background-color','white');
});