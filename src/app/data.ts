import { PictureData } from "./picture-data";

export class Data {
  public static data: Array<PictureData> = [
    new PictureData("Trilobit", undefined, ["assets/pictures/Trilobit_Base_Final.jpg"], []),
    new PictureData("Logo GAIA", undefined, ["assets/pictures/LogoGAIA.jpg"], []),
    new PictureData("Slideshow", undefined, ["assets/pictures/Slideshow.png"], ['assets/videos/Slideshow_converted.mp4']),
    new PictureData("Earth", undefined, ["assets/pictures/earth1.png"], []),
    new PictureData("Space Spider", undefined, ["assets/pictures/Spacespider.png"], ['assets/videos/Spider_final_v2.mp4']),
  ]
}
