import { Observable } from 'rxjs/Rx'

/**
 * Documentacion relevante
 * http://reactivex.io/documentation/operators/takeuntil.html
 */

// !~ Implementa un Drag-n-drop con Observables
const box = document.getElementById('box')
const container = document.getElementById('container')

const mouseDowns = Observable.fromEvent(box, 'mousedown')
const containerMouseMoves = Observable.fromEvent(container, 'mousemove')
const containerMouseUps = Observable.fromEvent(container, 'mouseup')

const mouseDrags =
  mouseDowns
    .concatMap(contactPoint => {
      return containerMouseMoves
        .takeUntil(containerMouseUps)
        .map(movePoint => {
          return {
            pageX: movePoint.pageX - contactPoint.offsetX,
            pageY: movePoint.pageY - contactPoint.offsetY,
          }
        })
    })

// Por cada 'Drag' movemos 'box' a una posicion en la pagina
mouseDrags.forEach(dragPoint => {
  box.style.left = dragPoint.pageX + 'px'
  box.style.top = dragPoint.pageY + 'px'
})
