import '../OurBest/OurBest.css'
import bean from '../../images/815O9ktyfUL.png'



const OurBest = () => {
    return (
        <div class="bestCoffee">
            <h2 class="bestCoffee-promo">Our Best</h2>
            <div class="bestCoffee-cards">
                <a href="asf">
                    <div class="bestCoffee-cardsItem">
                        <img src={bean} alt="sale-beans" class="bestCoffee-image"/>
                        <h2 class="bestCoffee-cardName">Solimo Coffee Beans 2 kg</h2>
                        <h3 class="bestCoffee-price">10.73$</h3>
                    </div>
                </a>

                <a href="asf">
                    <div class="bestCoffee-cardsItem">
                        <img src={bean} alt="sale-beans" class="bestCoffee-image"/>
                        <h2 class="bestCoffee-cardName">Presto Coffee Beans 1 kg</h2>
                        <h3 class="bestCoffee-price">15.99$</h3>
                    </div>
                </a>

                <a href="asf">
                    <div class="bestCoffee-cardsItem">
                        <img src={bean} alt="sale-beans" class="bestCoffee-image"/>
                        <h2 class="bestCoffee-cardName">AROMISTICO Coffee 1 kg</h2>
                        <h3 class="bestCoffee-price">6.99$</h3>
                    </div>
                </a>

            </div>
        </div>
    )
}
export default OurBest