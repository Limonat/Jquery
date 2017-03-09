$(':button').click(function(){
    alert('Merhaba Jquery, Nasılsın bugün?');
});
$(':submit').click(function(){
    alert('Merhaba Submit, Nasılsın bugün?');
});

//Giriş ve Üye olma yazılarını değiştirip 'Lütfen Bekleyiniz...' yapacağız.
$(':submit').click(function(){

        $(':submit').attr('value','Lütfen Bekleyiniz...');

});