function euroConverter()
{
document.getElementById("dollar").value = document.getElementById("euro").value * 1.12941
document.getElementById("dinar").value = document.getElementById("euro").value * 0.347
document.getElementById("inr").value = document.getElementById("euro").value * 84.9699
}

function dollarConverter()
{
document.getElementById("euro").value = document.getElementById("dollar").value * 0.88530
document.getElementById("dinar").value = document.getElementById("dollar").value * 0.30724
document.getElementById("inr").value = document.getElementById("dollar").value * 75.2337
}

function dinarConverter()
{
document.getElementById("euro").value = document.getElementById("dinar").value * 2.8683
document.getElementById("dollar").value = document.getElementById("dinar").value * 3.23994
document.getElementById("inr").value = document.getElementById("dinar").value * 243.753
}

function inrConverter()
{
document.getElementById("euro").value = document.getElementById("inr").value * 0.01175
document.getElementById("dinar").value = document.getElementById("inr").value * 0.00408
document.getElementById("dollar").value = document.getElementById("inr").value * 0.01327
}