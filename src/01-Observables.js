import { Observable } from 'rxjs/Rx'

/**
 * Documentacion relevante
 * Observable: https://github.com/zenparsing/es-observable  |  http://reactivex.io/documentation/observable.html
 * Operaciones: http://reactivex.io/documentation/operators.html
 */


// Un Observable es un 'Tipo' que representa una coleccion de uno o mas valores asincronos
//  Crear un Observable es facil
const miObs1 = Observable.of('Hola', 'Chao')


// OK... y como vemos los valores?...
// !~ Piensa en como mostramos los valores de un array en la consola ;D
//miObs1...


// Los Observables pueden contener diferentes tipos de valores
// En RxJs tenemos una coleccion de metodos para facilitar la creacion de Observables desde otras estructuras
Observable.from([1, 2, 3, 4, 5]) // !~ logea a consola
Observable.from('abcdef') // !~ logea a consola. Que paso?, por que obtienes ese resultado?


// Hasta ahora solo hemos creado Observables desde estructuras con valores ya definidos
// Creemos un Observable con valores asincronos desde un evento del DOM
const button = document.getElementById('button')
const clicks = Observable.fromEvent(button, 'EVENTO') // !~ remplaza por el evento adecuado y logea


// Tambien podemos crear Observables desde otras estructuras asincronas como Promesas
const reposDeUnUsuario = username => {
  // Una promesa que representa el resultado de ir a buscar (via AJAX) un JSON con los repositorios de Github de un usuario determinado
  return fetch(`https://api.github.com/users/${username}/repos`)
    .then( res => res.json() )
}


// ▼ ▼ ▼ descomentar antes de usar ▼ ▼ ▼ (ahorremos requests innecesarios a la api de github)
// const repos = Observable.fromPromise(reposDeUnUsuario('USUARIO'))
  // !~ Por cada respuesta retorna un array con los 'full_name' de los repositorios


const reposEnClick = undefined // !~ Por cada 'click' mandamos las 'repos' (Ojo! esto es un observable de observables)
  // !~ logea a consola


// La verdad es que podemos definir un Observable desde cualquier cosa que pueda ser modelada a traves de eventos
// Por ejemplo un Observable de un solo valor
const unNumero = new Observable(observer => {
  observer.next(42)
  return () => console.log('unsubscribed!')
}) // !~ logea a consola


// O un Observable de varios
const contador = new Observable(observer => {
  const interval = setInterval(() => observer.next('Plata...'), 1000)
  return () => clearInterval(interval)
}) // !~ logea a consola. Como puedes de-suscribirte de un observable manualmente?


// https://zenparsing.github.io/es-observable/#subscription-observer-objects
// !~ modifica contador para que al apretar un boton se dispare un error "Se robaron la plata"
// !~ modifica contador para que al apretar otro boton se complete la Observacion con "Se acabo la plata"
