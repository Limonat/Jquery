$(document).ready(function(){
    var default_email ='Lütfen email adresinizi giriniz...!';
    //attr('value',default_email) ile input e-mail value'sunu değiştiriyor.
    $('input[type="mail"]').attr('value',default_email);
});