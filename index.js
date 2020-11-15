"use strict";
let myDiv = document.querySelector('.root');
let birthDay = document.querySelector('#birthDay');
let name = document.querySelector('#name');
let gender = document.querySelector('#gender');

function diplayDate() {
    
    let start = new Date(birthDay.value),
         end = new Date(),
         diff = 0,
        days = 1000 * 60 * 60 * 24;
    diff = end - start;

    let myAge = Math.floor((diff / days) / 365);

    if (gender.value.toUpperCase() === 'MALE' && name.value && birthDay.value) {
        if (myAge <= 1) {
            let printYears = `
        <h2>Hello, Mr. ${name.value}.</h2> 
        <p>You have spent ${Math.floor(diff / days)} days on earth since birth...</p>
        <p>You are ${myAge} year old today, Mr. ${name.value}.</p>
        `;
            myDiv.innerHTML = printYears;
        } else {
            let printYears = `
        <h2>Hello, Mr. ${name.value}.</h2> 
        <p>You have spent ${Math.floor(diff / days)} days on earth since birth...</p>
        <p>You are ${myAge} years old today, Mr. ${name.value}.</p>
        `;
            myDiv.innerHTML = printYears;
        }

    } else if(gender.value.toUpperCase() === 'FEMALE' && name.value && birthDay.value) {
        if (myAge <= 1) {
            let printYears = `
        <h2>Hello, Miss. ${name.value}.</h2> 
        <p>You have spent ${Math.floor(diff / days)} days on earth since birth...</p>
        <p>You are ${myAge} year old today, Miss. ${name.value}.</p>
        `;
            myDiv.innerHTML = printYears;
        } else {
            let printYears = `
        <h2>Hello, Miss. ${name.value}.</h2> 
        <p>You have spent ${Math.floor(diff / days)} days on earth since birth...</p>
        <p>You are ${myAge} years old today, Miss. ${name.value}.</p>
        `;
            myDiv.innerHTML = printYears;
        }
        

    } else {
        let printYears = `
        <p style="color:red;">All fields are required...</p>
        `;
        myDiv.innerHTML = printYears;
    }
    
    console.log(gender.value.toUpperCase());
}





// document.body.innerHTML = `<p>You are ${myAge} years old</p>`



