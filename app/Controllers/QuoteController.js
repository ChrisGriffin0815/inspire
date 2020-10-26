import { ProxyState } from "../AppState.js"
import quoteService from "../Services/QuoteService.js"
//TODO Create methods for constructor, and rendering the quote to the page

function _drawQuote() {
  document.getElementById("quote").innerHTML = ProxyState.quote.Template
}
export default class QuoteController {
  constructor() {
    ProxyState.on("quote", _drawQuote)
    quoteService.getQuote()
  }

  getQuote() {
    quoteService.getQuote()
  }

}