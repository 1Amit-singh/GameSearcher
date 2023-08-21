import Carousel from "nuka-carousel"
import "./Category.css";

const Category = () => {
  return (
    <div className="categoryMain">
        <Carousel className="categoryCarousel" wrapAround={true} slidesToShow={4} cellAlign="right">
        <div className="categoryElement">
            <img className="categoryImage" src="https://cdn1.epicgames.com/offer/cbd5b3d310a54b12bf3fe8c41994174f/EGS_VALORANT_RiotGames_S1_2560x1440-91dc9490f14942ad5eeef278eb3ef4a6" />
        </div>
        <div className="categoryElement">
            <img className="categoryImage" src="https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/blog/hero/mwiii/MWIII-REVEAL-FULL-TOUT.jpg" />
            
        </div>
        <div className="categoryElement">
            <img className="categoryImage" src="https://assetsio.reedpopcdn.com/Apex-Legends-Season-18-Key-Art-Revenant.jpg?width=1600&height=900&fit=crop&quality=100&format=png&enable=upscale&auto=webp" />
            
        </div>
        <div className="categoryElement">
            <img className="categoryImage" src="https://media.steampowered.com/apps/csgo/blog/images/fb_image.png?v=6" />
        
        </div>
    </Carousel>


    </div>
  )
}

export default Category;