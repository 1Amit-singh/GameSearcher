import Carousel from "nuka-carousel"
import "./Carousel.css"

const CarouselSlider = () => {
  return (
    <Carousel autoplay={true} autoplayInterval={6000} wrapAround={true} >
        <div className="sliderElement">
            <img className="sliderImage" src="https://cdn1.epicgames.com/offer/cbd5b3d310a54b12bf3fe8c41994174f/EGS_VALORANT_RiotGames_S1_2560x1440-91dc9490f14942ad5eeef278eb3ef4a6" />
            <div className="sliderText">
                <h2 className="gameHeading">Valorant</h2>
                <div className="secondaryImages">
                    <img src="https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt157300a3da119b99/627ed323466b1b559357b76d/Ask_VAL_Fade_Sova_Article_Banner.jpg?auto=webp&disable=upscale&height=549" ></img>
                    <img src="https://cdn.arstechnica.net/wp-content/uploads/2020/04/valorant-listing-800x450.jpg" ></img>
                </div>
            </div>
        </div>
        <div className="sliderElement">
            <img className="sliderImage" src="https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/blog/hero/mwiii/MWIII-REVEAL-FULL-TOUT.jpg" />
            <div className="sliderText">
            <h2 className="gameHeading">Modern Warfare 3</h2>
                <div className="secondaryImages">
                    <img src="https://cdn.akamai.steamstatic.com/steam/apps/115300/ss_eb46148984c39518162d7695a4428a6916a025aa.1920x1080.jpg?t=1692032509" ></img>
                    <img src="https://m.media-amazon.com/images/I/711Ba4a9hgL._AC_UF1000,1000_QL80_.jpg" ></img>
                </div>
            </div>
        </div>
        <div className="sliderElement">
            <img className="sliderImage" src="https://assetsio.reedpopcdn.com/Apex-Legends-Season-18-Key-Art-Revenant.jpg?width=1600&height=900&fit=crop&quality=100&format=png&enable=upscale&auto=webp" />
            <div className="sliderText">
            <h2 className="gameHeading">Apex Legends</h2>
                <div className="secondaryImages">
                    <img src="https://assets.xboxservices.com/assets/20/8d/208d0429-02fc-45d7-92f5-0ca469c83b77.jpg?n=Apex-Legends_Feature-Image-Priority-Full-Width-0_S13-Strategic-Combat_1248x702.jpg" ></img>
                    <img src="https://media.thenerdstash.com/wp-content/uploads/2023/01/Apex-legends-Welcome-Challenges.jpg" ></img>
                </div>
            </div>
        </div>
        <div className="sliderElement">
            <img className="sliderImage" src="https://media.steampowered.com/apps/csgo/blog/images/fb_image.png?v=6" />
            <div className="sliderText">
            <h2 className="gameHeading">Counter Strike</h2>
                <div className="secondaryImages">
                    <img src="https://gumlet.assettype.com/afkgaming%2F2023-04%2F82c08f04-bab1-49b7-a3d6-7aab7384aca7%2Fdesktop_wallpaper_counter_strike_source_counter_terrorist_backgrounds_counter.jpg?compress=true&dpr=1&w=1200" ></img>
                    <img src="https://prod.assets.earlygamecdn.com/images/csgo-2-header.png?transform=banner2x_webp" ></img>
                </div>
            </div>
        </div>
    </Carousel>

  )
}

export default CarouselSlider;