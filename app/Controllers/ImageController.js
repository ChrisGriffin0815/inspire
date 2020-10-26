import { ProxyState } from "../AppState.js"
import imageService from "../Services/ImageService.js"
//TODO Create methods for constructor, and rendering the image to the page
//      (you may wish to set it as a background image: https://www.w3schools.com/JSREF/prop_style_backgroundimage.asp)

function _drawImg() {
  document.body.style.backgroundImage = `url(${ProxyState.img})`

}


export default class ImageController {
  constructor() {
    imageService.getImage()
    ProxyState.on("img", _drawImg)
  }
}