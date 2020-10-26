export default class Weather {
  constructor(data) {
    this.city = data.name
    this.kelvin = Math.floor((data.main.temp - 273) / (9 / 5) + 32)
  }

  get Template() {
    return /*html*/ `
    <h1 >${this.city}  ${this.kelvin}°</h1>    
    `
  }
}
