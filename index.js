require('isomorphic-fetch') // polyfill fetch

if(window.location.pathname === '/01.html') require('01-Observables')
if(window.location.pathname === '/02.html') require('02-Drag-n-Drop')
if(window.location.pathname === '/03.html') require('03-Search-Box')
