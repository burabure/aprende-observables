import fetchJsonp from 'fetch-jsonp'
import { Observable } from 'rxjs/Rx'


/**
 * Documentacion relevante
 * debounceTime (antes solo debounce): http://reactivex.io/documentation/operators/debounce.html
 * distinctUntilChanged: http://reactivex.io/documentation/operators/distinct.html
 */

const search = document.getElementById('search')
const resultsContainer = document.getElementById('results')

const queries =
  Observable.fromEvent(search, 'keyup')
    .map(event => event.target.value)
    .filter(text => text.length > 2)
    .debounceTime(500)
    .distinctUntilChanged()

const suggestions =
  queries
    .flatMap(searchWikipedia)
    .forEach(showResults)
    .catch(showError)


function showResults(results) {
  const output = results[1].map(result => `<li>${result}</li>`).join('')
  resultsContainer.innerHTML = output
}

function showError(error) {
  resultsContainer.innerHTML = `Error!: ${JSON.stringify(error)}`
}

function searchWikipedia (term) {
  const search = 
    fetchJsonp(`http://en.wikipedia.org/w/api.php?format=json&action=opensearch&search=${encodeURI(term)}`)
      .then(response => response.json())
  return Observable.fromPromise(search);
}
