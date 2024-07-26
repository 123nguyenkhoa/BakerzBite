import React from "react";
import "./FAQ.css";
import fqa from "../Assets/fag-image.jpg"

const FAQ=()=>{
    return (
      <div>
        <div className="header">
          <h1 className="header-title">FAQ</h1>
          <p className="header-desc">Frequently Ask Question</p>
          <div className="search">
            <input type="text" placeholder="Search" />
            <button>Search</button>
          </div>
        </div>
        <div className="faq">
          <div className="faq-name">
            <h1 className="faq-header">
              Have <br />
              questions?
            </h1>
            <img className="faq-img" src={fqa} alt="" />
          </div>
          <div className="faq-box">
            <div className="faq-wrapper">
              <input type="checkbox" className="faq-trigger" id="faq-trigger-1" />
              <label for="faq-trigger-1" className="faq-title">
                What types of cakes does Bakerz Bite offer?
              </label>
              <div className="faq-detail">
                <p>
                  Bakerz Bite offers a wide variety of cakes including cupcakes,
                  cookies, bread, birthday cakes, and other sweet treats. We
                  constantly update our menu to provide customers with a diverse
                  and fresh selection.
                </p>
              </div>
            </div>
            <div className="faq-wrapper">
              <input type="checkbox" className="faq-trigger" id="faq-trigger-2" />
              <label for="faq-trigger-2" className="faq-title">
                Do Bakerz Bite cakes contain any allergens?
              </label>
              <div className="faq-detail">
                <p>
                  We strive to provide detailed ingredient information for each
                  type of cake on our website. However, if you have any
                  allergies, please contact us directly for specific advice to
                  ensure your safety.
                </p>
              </div>
            </div>
            <div className="faq-wrapper">
              <input type="checkbox" className="faq-trigger" id="faq-trigger-3" />
              <label for="faq-trigger-3" className="faq-title">
                How can I place an order at Bakerz Bite?
              </label>
              <div className="faq-detail">
                <p>
                  You can place an order online through our website or by
                  calling the store directly. We also accept orders through
                  popular delivery apps for your convenience.
                </p>
              </div>
            </div>
            <div className="faq-wrapper">
              <input type="checkbox" className="faq-trigger" id="faq-trigger-4" />
              <label for="faq-trigger-4" className="faq-title">
                Does Bakerz Bite accept custom cake orders?
              </label>
              <div className="faq-detail">
                <p>
                  Yes, we accept custom cake orders for special requests,
                  including birthday cakes, wedding cakes, and cakes for special
                  occasions. Contact us to discuss your ideas and requirements.
                </p>
              </div>
            </div>
            <div className="faq-wrapper">
              <input type="checkbox" className="faq-trigger" id="faq-trigger-5" />
              <label for="faq-trigger-5" className="faq-title">
                Does Bakerz Bite offer home delivery?
              </label>
              <div className="faq-detail">
                <p>
                  We offer home delivery services within the city area. Please
                  check our delivery areas or contact us for more details about
                  our delivery range and shipping fees.
                </p>
              </div>
            </div>
            <div className="faq-wrapper">
              <input type="checkbox" className="faq-trigger" id="faq-trigger-6" />
              <label for="faq-trigger-6" className="faq-title">
                Can I cancel my order after placing it?
              </label>
              <div className="faq-detail">
                <p>
                  You can cancel your order within 24 hours before the scheduled
                  delivery time. For special and large orders, we recommend
                  contacting us directly for detailed information about our
                  cancellation policy.
                </p>
              </div>
            </div>
            <div className="faq-wrapper">
              <input type="checkbox" className="faq-trigger" id="faq-trigger-7" />
              <label for="faq-trigger-7" className="faq-title">
                Does Bakerz Bite use natural ingredients?
              </label>
              <div className="faq-detail">
                <p>
                  We are committed to using fresh and natural ingredients to
                  ensure the best quality and taste for each cake. We carefully
                  select reliable suppliers to ensure the highest standards of
                  ingredients.
                </p>
              </div>
            </div>
            <div className="faq-wrapper">
              <input type="checkbox" className="faq-trigger" id="faq-trigger-8" />
              <label for="faq-trigger-8" className="faq-title">
                Does Bakerz Bite have any promotions or special offers?
              </label>
              <div className="faq-detail">
                <p>
                  We regularly have special promotions and offers for our
                  customers. Follow our website and social media channels to
                  stay updated on the latest promotions and offers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default FAQ;