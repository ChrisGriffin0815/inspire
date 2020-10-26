export default class Quote {
  constructor(data) {
    this.body = data.quote.body,
      this.author = data.quote.author
  }

  get Template() {
    return /*html*/ `
    <h5>"${this.body}"</h5>
    <h5><i>-${this.author}-</i></h5>
    `
  }

}