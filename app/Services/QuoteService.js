import { api } from "./AxiosService.js";
import Quote from "../Models/Quote.js"
import { ProxyState } from "../AppState.js"


//TODO create methods to retrieve data and update the State
class QuoteService {

  constructor() {
  }
  async getQuote() {
    let res = await api.get('quotes')
    ProxyState.quote = new Quote(res.data)
    console.log(ProxyState.quote)

  }
}

const quoteService = new QuoteService();
export default quoteService;