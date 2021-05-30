'use strict'

var cards = [
    {
        fullName: 'Albert Einstein',
        priceFor: 'Nobel Prize in Physics-1921',
        photo: './imgs/albert_einstein.jpeg'
    },
    {
        fullName: 'Alexander Fleming',
        priceFor: 'Nobel Prize in Physiology-1945',
        photo: './imgs/alexander_fleming.jpeg'
    },
    {
        fullName: 'Bob Dylan',
        priceFor: 'Nobel Prize in Literature-2016 ',
        photo: './imgs/bob_dylan.jpeg'
    },
    {
        fullName: 'Mikhail Gorbachev',
        priceFor: 'Nobel Prize for Peace-1990',
        photo: './imgs/Gorbachev_Mikhail.jpeg'
    },
    {
        fullName: 'Henry Kissinger',
        priceFor: 'Nobel Prize for Peace-1973',
        photo: './imgs/henry_kissinger.jpeg'
    },
    {
        fullName: 'Herman Muller',
        priceFor: 'Nobel Prize in Physiology-1946',
        photo: './imgs/herman_muller.jpeg'
    },
    {
        fullName: 'Ivo Andric',
        priceFor: 'Nobel Prize in Literature-1961',
        photo: './imgs/ivo_andric.jpg'
    },
    {
        fullName: 'Jean Paul Gisele',
        priceFor: 'The Nobel Prize in Literature-1964',
        photo: './imgs/Jean-Paul-Sartre-Gisele.jpeg'
    },
    {
        fullName: 'Kofi Annan',
        priceFor: 'Nobel Prize for Peace-2001',
        photo: './imgs/Kofi_Annan.jpeg'
    },
    {
        fullName: 'Marie Curie',
        priceFor: 'Nobel Prize for Physics-1903',
        photo: './imgs/marie_curie.jpeg'
    },
    {
        fullName: 'Martin Luter King',
        priceFor: 'Nobel Prize for Peace-1964',
        photo: './imgs/Martin_Luther_King.jpeg'
    },
    {
        fullName: 'Mother Teresa',
        priceFor: 'Nobel Prize for Peace-1979',
        photo: './imgs/mother-teresa.jpeg'
    },
    {
        fullName: 'Nelson Mendela',
        priceFor: 'Nobel Prize for Peace-1993',
        photo: './imgs/Nelson_Mandela.jpeg'
    },
    {
        fullName: 'Theodore Rosevelt',
        priceFor: 'Nobel Prize for Peace-1906',
        photo: './imgs/theo_rosevelt.jpeg'
    },
    {
        fullName: 'Werner Heisenberg',
        priceFor: 'Nobel Prize in Physics-1932',
        photo: './imgs/werner_heisenberg.jpeg'
    },

];

var section1 = document.querySelector('.section-1');
var section2 = document.querySelector('.section-2');

function shufleArr(arr) {
    for(var i = arr.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var perm = arr[i];
        arr[i] = arr[j];
        arr[j] = perm;
    }
    return arr
}

function generatePage(arr) {
    for(var i = 0; i<arr.length; i++) {
        var card = document.createElement('div');
        card.setAttribute('class', 'card')
        var img = document.createElement('img');
        img.src = arr[i].photo;
        var name = document.createElement('h2');
        name.textContent = `${arr[i].fullName}`
        var price = document.createElement('h3');
        price.textContent = `${arr[i].priceFor}`;
        if(i <= 10) {
            section1.append(card);
            card.append(img);
            card.append(name);
            card.append(price);
        }
        else {
            section2.append(card);
            card.append(img);
            card.append(name);
            card.append(price);
        }
    }
}

function swipeCards() {
    var sec1 = document.querySelectorAll(".section-1 div");
    var random1 = Math.floor(Math.random() * sec1.length);
    section2.appendChild(sec1[random1]);

    var sec2 = document.querySelectorAll(".section-2 div");
    var random2 = Math.floor(Math.random() * sec2.length);
    section1.appendChild(sec2[random2]);
}




generatePage(shufleArr(cards));
setInterval(swipeCards,2000)
//=====================================================





//URADI:
// PROPORCIALNO SMANJI MAIN COVER DA NE MORA DA SE GLEDA NA 33% ZUM
// TRANSITION KADA SE SVAJPUJU KARTICE
// UREDI SLUCAJ KAD SE PADNU DVA ISTA RANDOM BROJA JEDAN ZA DRUGIM






