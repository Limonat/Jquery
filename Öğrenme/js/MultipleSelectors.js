/*
$(':button').click(function(){

        alert('button tıklandı');
});

$('p').click(function(){
    alert('paragrafa tıklandı');
});
*/
//Yukarıdakiler tek function indireceğiz şimdi.
//1
$(':button , p').click(function(){
    alert('Hepsi aynı anda çalışacak!');
});

//2
$('#bt , #pg').click(function(){
    alert('Hepsi aynı anda çalışacak!');
});
