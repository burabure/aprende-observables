import fetchJsonp from 'fetch-jsonp'
import { Observable } from 'rxjs/Rx'


/**
 * Documentacion relevante
 * debounceTime (antes solo debounce): http://reactivex.io/documentation/operators/debounce.html
 * distinctUntilChanged: http://reactivex.io/documentation/operators/distinct.html
 */

const search = document.getElementById('search')
const resultsContainer = document.getElementById('results')


// !~ Implementa una busqueda ajax
// !~ considera que no queremos generar llamados ajax constantemente,
// !~ si no solamente cuando haya un valor valido para buscar


// Una funcion que toma los resultados json de un query a wikipedia y los muestra en el HTML
function showResults(results) {
  const output = results[1].map(result => `<li>${result}</li>`).join('')
  resultsContainer.innerHTML = output
}

// Una funcion que toma un error de busqueda y lo muestra en el HTML
function showError(error) {
  resultsContainer.innerHTML = `Error!: ${JSON.stringify(error)}`
}

// una funcion que toma un termino de busqueda y retorna un Observable del resultado de la misma
function searchWikipedia(term) {
  const search =
    fetchJsonp(`http://en.wikipedia.org/w/api.php?format=json&action=opensearch&search=${encodeURI(term)}`)
      .then(response => response.json())
  return Observable.fromPromise(search);
}
