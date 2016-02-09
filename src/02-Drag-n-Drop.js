import { Observable } from 'rxjs/Rx'

/**
 * Documentacion relevante
 * http://reactivex.io/documentation/operators/takeuntil.html
 */


const box = document.getElementById('box')
const container = document.getElementById('container')


// !~ Implementa un Drag-n-drop con Observables


// Por cada 'Drag' movemos 'box' a una posicion en la pagina
/*
mouseDrags.forEach(dragPoint => {
  box.style.left = dragPoint.pageX + 'px'
  box.style.top = dragPoint.pageY + 'px'
})
*/
