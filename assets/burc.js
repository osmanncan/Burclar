let ay = prompt('Dogum ayiniz: ');
let gun = Number(prompt('Dogum gununuz: '));

if (
    (ay === 'Aralik' && gun >= 22 )  || (ay === 'Ocak' && gun <= 19 )
)
{
    alert('Merhaba burcunuz: Oglak');
}

else if (
    (ay === 'Ocak' && gun >= 20 )  || (ay === 'Subat' && gun <= 18 )
)
{
    alert('Merhaba burcunuz: Kova');
}

else if (
    (ay === 'Subat' && gun >= 19 )  || (ay === 'Mart' && gun <= 20 )
)
{
    alert('Merhaba burcunuz: Balik');
}

else if (
    (ay === 'Mart' && gun >= 21 )  || (ay === 'Nisan' && gun <= 19 )
)
{
    alert('Merhaba burcunuz: Koc');
}

else if (
    (ay === 'Nisan' && gun >= 20 )  || (ay === 'Mayis' && gun <= 20 )
)
{
    alert('Merhaba burcunuz: Boga');
}

else if (
    (ay === 'Mayis' && gun >= 21 )  || (ay === 'Haziran' && gun <= 20 )
)
{
    alert('Merhaba burcunuz: İkizler');
}

else if (
    (ay === 'Haziran' && gun >= 21 )  || (ay === 'Temmuz' && gun <= 22 )
)
{
    alert('Merhaba burcunuz: Yengec');
}


else if (
    (ay === 'Temmuz' && gun >= 23 )  || (ay === 'Agustos' && gun <= 22 )
)
{
    alert('Merhaba burcunuz: Aslan');
}
else if (
    (ay === 'Agustos' && gun >= 23 )  || (ay === 'Eylul' && gun <= 22 )
)
{
    alert('Merhaba burcunuz: Basak');
}
else if (
    (ay === 'Eylul' && gun >= 23 )  || (ay === 'Ekim' && gun <= 22 )
)
{
    alert('Merhaba burcunuz: Terazi');
}
else if (
    (ay === 'Ekim' && gun >= 23 )  || (ay === 'Kasim' && gun <= 21 )
)
{
    alert('Merhaba burcunuz: Akrep');
}
else if (
    (ay === 'Kasim' && gun >= 22 )  || (ay === 'Aralik' && gun <= 21 )
)
{
    alert('Merhaba burcunuz: Yay');
}

else {
    alert('Gecersiz bir tarih girdiniz.')
}