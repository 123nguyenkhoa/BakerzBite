import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./VirtualAssistant.css";
import logo from "../Assets/gif.gif";
import products from "../Assets/all_product";

const VirtualAssistant = () => {
  const [assistantResponse, setAssistantResponse] = useState(
    "Click here to speak"
  );
  const [speechRecognition, setSpeechRecognition] = useState(null);
  const [userInput, setUserInput] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    setSpeechRecognition(recognition);

    recognition.onresult = (event) => {
      const current = event.resultIndex;
      const transcript = event.results[current][0].transcript.toLowerCase();
      setAssistantResponse(transcript);
      speakThis(transcript);
    };

    return () => {
      if (recognition) {
        recognition.abort();
      }
    };
  }, []);

  const speak = (sentence) => {
    const utterance = new SpeechSynthesisUtterance(sentence);
    utterance.lang = "en-US";
    window.speechSynthesis.speak(utterance);
  };

  const wishMe = () => {
    const day = new Date();
    const hr = day.getHours();
    let greeting = "";

    if (hr >= 0 && hr < 12) {
      greeting = "Good morning, Boss.";
    } else if (hr === 12) {
      greeting = "Good noon, Boss.";
    } else if (hr > 12 && hr <= 17) {
      greeting = "Good afternoon, Boss.";
    } else {
      greeting = "Good evening, Boss.";
    }

    speak(greeting);
  };

  const speakThis = (message) => {
    if (message.includes("hello") || message.includes("hi")) {
      const finalText = "Hello there.";
      speak(finalText);
    } else if (message.includes("home")) {
      navigate("/home");
      const finalText = "Opening Home page.";
      speak(finalText);
    } else if (message.includes("menu")) {
      navigate("/menu");
      const finalText = "Opening Menu page.";
      speak(finalText);
    } else if (message.includes("cake")) {
      navigate("/cake");
      const finalText = "Opening Cake page.";
      speak(finalText);
    } else if (message.includes("pie")) {
      navigate("/pies");
      const finalText = "Opening Pie page.";
      speak(finalText);
    } else if (message.includes("cheesecake")) {
      navigate("/cheesecake");
      const finalText = "Opening Cheesecake page.";
      speak(finalText);
    } else if (message.includes("cupcake")) {
      navigate("/cupcake");
      const finalText = "Opening Cupcake page.";
      speak(finalText);
    } else if (message.includes("brownies")) {
      navigate("/brownies");
      const finalText = "Opening Brownies page.";
      speak(finalText);
    } else if (message.includes("dessert")) {
      navigate("/desserts");
      const finalText = "Opening dessert page.";
      speak(finalText);
    } else if (message.includes("drinking")) {
      navigate("/drinking");
      const finalText = "Opening Drinking page.";
      speak(finalText);
    } else if (message.includes("merchandise")) {
      navigate("/merchandise");
      const finalText = "Opening Merchandise page.";
      speak(finalText);
    } else if (message.includes("blog")) {
      navigate("/blog");
      const finalText = "Opening Blog page.";
      speak(finalText);
    } else if (message.includes("gallery")) {
      navigate("/gallery");
      const finalText = "Opening Gallery page.";
      speak(finalText);
    } else if (message.includes("faq")) {
      navigate("/faq");
      const finalText = "Opening FAQ page.";
      speak(finalText);
    } else if (message.includes("contact")) {
      navigate("/contact us");
      const finalText = "Opening Contact page.";
      speak(finalText);
    } else if (message.includes("about")) {
      navigate("/about us");
      const finalText = "Opening About page.";
      speak(finalText);
    } else if (message.includes("login")) {
      navigate("/login");
      const finalText = "Opening Login page.";
      speak(finalText);
    } else if (message.includes("facebook")) {
      navigate("/facebook");
      const finalText = "Opening Facebook page.";
      speak(finalText);
    } else if (message.includes("youtube")) {
      navigate("/youtube");
      const finalText = "Opening YouTube page.";
      speak(finalText);
    } else if (message.includes("tiktok")) {
      navigate("/tiktok");
      const finalText = "Opening Tiktok page.";
      speak(finalText);
    } else if (message.includes("product")) {
      const randomIndex = Math.floor(Math.random() * products.length);
      const randomProduct = products[randomIndex];
      const finalText = `Our top selling product is ${randomProduct.name}. ${randomProduct.description}. Would you like to support our bakery by purchasing it?`;
      speak(finalText);
    }
     else if (message.includes("promotion")) {
      const promotionText = `
         July Promotions at Bakerz Bite! 
        At Bakerz Bite, we're celebrating the month of July with a special promotion that will sweeten your summer!  To show our appreciation for your continued support, we've crafted exclusive deals and delightful surprises just for you.

         Exclusive Discounts:
        For the entire month of July, enjoy a 15% discount on any purchase of $20 or more. This offer includes all our delicious cakes, pastries, and beverages. Whether you're craving a creamy pastry, a fresh-baked loaf, or a refreshing iced coffee, this is the perfect time to treat yourself and your loved ones. 

         Special Vouchers:
        Every purchase of $30 or more will come with a $5 voucher for your next visit. This voucher can be used on any product in our bakery, allowing you to enjoy our sweet treats again and again. 

         Gifts and Surprises:
        As a token of our gratitude, customers who spend $50 or more will receive a complimentary gift box filled with a selection of our best-selling cookies.  It's our way of saying thank you for being a valued part of the Bakerz Bite family.

         Customer Appreciation:
        We deeply appreciate your loyalty and support. Our team at Bakerz Bite is dedicated to bringing you the highest quality baked goods and the best customer service. Your satisfaction is our top priority, and we hope our July promotions add a little extra joy to your summer. 

        Don't miss out on these fantastic deals! Visit us today and make the most of our July promotions. We look forward to serving you and making your visit to Bakerz Bite a memorable one. 
      `;
      speak(promotionText);
    } else if (message.includes("loyalty")) {
      const loyaltyText = `
    
      Exclusive Loyalty Programs at Bakerz Bite! 
    At Bakerz Bite, we cherish our loyal customers and want to show our appreciation with special rewards and programs just for you!  Here’s how you can benefit from our exclusive loyalty programs:

     Member Discounts:
    As a valued member of our loyalty program, you can enjoy a 10% discount on all your purchases. Whether you're picking up a delightful cake, a scrumptious pastry, or a refreshing drink, you'll always save with us. 

     Reward Points:
    Earn reward points with every purchase. Accumulate points to redeem exciting rewards, including free products, discounts, and exclusive offers. The more you shop, the more you earn! 
    
    Birthday Surprises:
    Celebrate your special day with us! Receive a special birthday gift and a discount voucher to use on your birthday month. We want to make your birthday as sweet as possible! 

     VIP Events:
    As a loyal customer, you’re invited to exclusive VIP events where you can enjoy new product tastings, meet our bakers, and take part in fun activities. Stay tuned for invitations to these special occasions! 

     We value your loyalty and support. Our team at Bakerz Bite is dedicated to providing you with the best quality products and outstanding service. Thank you for being an essential part of our Bakerz Bite family.

    Don’t miss out on these amazing benefits! Join our loyalty program today and start enjoying the perks. We can’t wait to see you at Bakerz Bite! 
  `;
      speak(loyaltyText);
    } else if (message.includes("hours")) {
      const hoursText = `
     Bakerz Bite Opening Hours & Policies 
    We want to make sure you have the best experience at Bakerz Bite, so here’s a quick guide to our opening hours and policies:

     **Opening Hours:**
    - **Monday to Friday:** 8:00 AM - 8:00 PM
    - **Saturday:** 9:00 AM - 9:00 PM
    - **Sunday:** Closed

     **Special Opening Hours:**
    - **Holidays:** Check our website or social media for any changes in hours during public holidays or special occasions.

     **Return & Exchange Policy:**
    - **Return Policy:** If you are not completely satisfied with your purchase, you may return it within 7 days of receipt. Please ensure the product is unused and in its original packaging.
    - **Exchange Policy:** You may exchange items within 14 days of purchase, provided they are in their original condition and packaging. Exchanges are subject to availability.
    - **Non-Refundable Items:** Customized cakes and products that are made to order cannot be returned or exchanged.
    - **Refunds:** Refunds will be processed to the original payment method within 5-7 business days of receiving the returned item.

     **Customer Service:**
    If you have any questions or need assistance with returns or exchanges, please contact our customer service team at [Customer Service Email] or visit our store for help.

    We are committed to ensuring you have a delightful experience with us, and we appreciate your understanding and cooperation with our policies. Thank you for choosing Bakerz Bite!
  `;
      speak(hoursText);
    } else if (
      message.includes("payment method") ||
      message.includes("payment")
    ) {
      const paymentText = `
        We offer several convenient payment methods at Bakerz Bite:
        1. Cash on delivery
        2. Credit or debit card payment
        3. Payment through our mobile app

        Please let us know if you need any assistance with the payment process!
      `;
      speak(paymentText);
    } else if (message.includes("shipping policy")) {
      const shippingPolicyText = `
             Shipping Policy at Bakerz Bite 
            At Bakerz Bite, we strive to provide timely and efficient shipping for all our orders. We offer the following shipping options:

            1. **Standard Shipping:** Delivered within 5-7 business days.
            2. **Express Shipping:** Delivered within 2-3 business days.
            3. **Same-Day Delivery:** Available for orders placed before 10 AM, within local delivery areas.

            We ensure that all orders are packaged securely to maintain freshness. If you have any questions about shipping or need assistance with your order, please contact our support team. Thank you for choosing Bakerz Bite!
        `;
      speak(shippingPolicyText);
    } else if (message.includes("food safety")) {
      const safetyText = `
             Food Safety Commitment at Bakerz Bite 
            At Bakerz Bite, your health and safety are our top priorities. We are committed to:
            - **Using High-Quality Ingredients:** We source only the freshest and highest quality ingredients for all our baked goods.
            - **Maintaining Strict Hygiene Standards:** Our kitchen and staff adhere to rigorous hygiene and safety protocols to ensure that all products are prepared in a clean environment.
            - **Continuous Improvement:** We regularly review and update our procedures to ensure we meet the highest food safety standards.

            Your well-being is important to us, and we are dedicated to providing you with safe and delicious products every time you visit. Thank you for your trust in Bakerz Bite!
        `;
      speak(safetyText);
    } else if (message.includes("compare") || message.includes("comparison")) {
      const product1 = products[0];
      const product2 = products[1];

      const comparisonText = `
             Product Comparison 
            **Product 1: ${product1.name}**
            - **Description:** ${product1.description}
            - **Price:** ${product1.price}
            - **Ingredients:** ${product1.ingredients}

            **Product 2: ${product2.name}**
            - **Description:** ${product2.description}
            - **Price:** ${product2.price}
            - **Ingredients:** ${product2.ingredients}

            Compare these products to choose the best option for your needs. If you have any questions or need more details, feel free to ask!
        `;
      speak(comparisonText);
    } else if (message.includes("branch address")) {
      const locationText = `
        Sure! Could you please tell me which state you are in, in the United States? This will help me find the nearest Bakerz Bite branch for you.
      `;
      speak(locationText);
    } else if (message.includes("alabama")) {
      const branchText = `
        You can visit our branch in Alabama at 789 Bakery Lane, Birmingham. Feel free to contact us at (555) 789-1234 for more information.

        How else may I assist you today?
      `;
      speak(branchText);
    } else if (message.includes("alaska")) {
      const branchText = `
        You can visit our branch in Alaska at 456 Baking Boulevard, Anchorage. Feel free to contact us at (555) 456-7890 for more information.

        How else may I assist you today?
      `;
      speak(branchText);
    } else if (message.includes("arizona")) {
      const branchText = `
        You can visit our branch in Arizona at 123 Pastry Place, Phoenix. Feel free to contact us at (555) 123-4567 for more information.

        How else may I assist you today?
      `;
      speak(branchText);
    } else if (message.includes("arkansas")) {
      const branchText = `
        You can visit our branch in Arkansas at 321 Cake Street, Little Rock. Feel free to contact us at (555) 321-6789 for more information.

        How else may I assist you today?
      `;
      speak(branchText);
    } else if (message.includes("california")) {
      const branchText = `
        You can visit our branch in California at 123 Bakery Street, Los Angeles. Feel free to contact us at (555) 123-4567 for more information.

        How else may I assist you today?
      `;
      speak(branchText);
    } else if (message.includes("colorado")) {
      const branchText = `
        You can visit our branch in Colorado at 456 Cake Avenue, Denver. Feel free to contact us at (555) 456-7890 for more information.

        How else may I assist you today?
      `;
      speak(branchText);
    } else if (message.includes("connecticut")) {
      const branchText = `
        You can visit our branch in Connecticut at 789 Pie Parkway, Hartford. Feel free to contact us at (555) 789-1234 for more information.

        How else may I assist you today?
      `;
      speak(branchText);
    } else if (message.includes("delaware")) {
      const branchText = `
        You can visit our branch in Delaware at 987 Cookie Court, Dover. Feel free to contact us at (555) 987-6543 for more information.

        How else may I assist you today?
      `;
      speak(branchText);
    } else if (
      message.includes("district of columbia") ||
      message.includes("washington dc")
    ) {
      const branchText = `
        You can visit our branch in Washington D.C. at 654 Pastry Lane, Washington. Feel free to contact us at (555) 654-3210 for more information.

        How else may I assist you today?
      `;
      speak(branchText);
    } else if (message.includes("florida")) {
      const branchText = `
        You can visit our branch in Florida at 321 Dessert Drive, Miami. Feel free to contact us at (555) 321-6789 for more information.

        How else may I assist you today?
      `;
      speak(branchText);
    } else if (message.includes("georgia")) {
      const branchText = `
        You can visit our branch in Georgia at 987 Bakery Boulevard, Atlanta. Feel free to contact us at (555) 987-6543 for more information.

        How else may I assist you today?
      `;
      speak(branchText);
    } else if (message.includes("hawaii")) {
      const branchText = `
        You can visit our branch in Hawaii at 654 Cake Circle, Honolulu. Feel free to contact us at (555) 654-3210 for more information.

        How else may I assist you today?
      `;
      speak(branchText);
    } else if (message.includes("idaho")) {
      const branchText = `
        You can visit our branch in Idaho at 123 Pie Place, Boise. Feel free to contact us at (555) 123-4567 for more information.

        How else may I assist you today?
      `;
      speak(branchText);
    } else if (message.includes("illinois")) {
      const branchText = `
        You can visit our branch in Illinois at 456 Pastry Street, Chicago. Feel free to contact us at (555) 456-7890 for more information.

        How else may I assist you today?
      `;
      speak(branchText);
    } else if (message.includes("indiana")) {
      const branchText = `
        You can visit our branch in Indiana at 789 Cookie Court, Indianapolis. Feel free to contact us at (555) 789-1234 for more information.

        How else may I assist you today?
      `;
      speak(branchText);
    } else if (message.includes("iowa")) {
      const branchText = `
        You can visit our branch in Iowa at 987 Dessert Drive, Des Moines. Feel free to contact us at (555) 987-6543 for more information.

        How else may I assist you today?
      `;
      speak(branchText);
    } else if (message.includes("kansas")) {
      const branchText = `
        You can visit our branch in Kansas at 654 Bakery Lane, Topeka. Feel free to contact us at (555) 654-3210 for more information.

        How else may I assist you today?
      `;
      speak(branchText);
    } else if (message.includes("kentucky")) {
      const branchText = `
        You can visit our branch in Kentucky at 321 Cake Street, Frankfort. Feel free to contact us at (555) 321-6789 for more information.

        How else may I assist you today?
      `;
      speak(branchText);
    } else if (message.includes("louisiana")) {
      const branchText = `
        You can visit our branch in Louisiana at 123 Pastry Place, Baton Rouge. Feel free to contact us at (555) 123-4567 for more information.

        How else may I assist you today?
      `;
      speak(branchText);
    } else if (message.includes("maine")) {
      const branchText = `
        You can visit our branch in Maine at 456 Cookie Court, Augusta. Feel free to contact us at (555) 456-7890 for more information.

        How else may I assist you today?
      `;
      speak(branchText);
    } else if (message.includes("maryland")) {
      const branchText = `
        You can visit our branch in Maryland at 789 Pie Parkway, Annapolis. Feel free to contact us at (555) 789-1234 for more information.

        How else may I assist you today?
      `;
      speak(branchText);
    } else if (message.includes("massachusetts")) {
      const branchText = `
        You can visit our branch in Massachusetts at 987 Cake Avenue, Boston. Feel free to contact us at (555) 987-6543 for more information.

        How else may I assist you today?
      `;
      speak(branchText);
    } else if (message.includes("michigan")) {
      const branchText = `
        You can visit our branch in Michigan at 654 Pastry Place, Lansing. Feel free to contact us at (555) 654-3210 for more information.

        How else may I assist you today?
      `;
      speak(branchText);
    } else if (message.includes("minnesota")) {
      const branchText = `
        You can visit our branch in Minnesota at 321 Bakery Boulevard, St. Paul. Feel free to contact us at (555) 321-6789 for more information.

        How else may I assist you today?
      `;
      speak(branchText);
    } else if (message.includes("mississippi")) {
      const branchText = `
        You can visit our branch in Mississippi at 123 Cake Circle, Jackson. Feel free to contact us at (555) 123-4567 for more information.

        How else may I assist you today?
      `;
      speak(branchText);
    } else if (message.includes("missouri")) {
      const branchText = `
        You can visit our branch in Missouri at 456 Pie Place, Jefferson City. Feel free to contact us at (555) 456-7890 for more information.

        How else may I assist you today?
      `;
      speak(branchText);
    } else if (message.includes("montana")) {
      const branchText = `
        You can visit our branch in Montana at 789 Pastry Street, Helena. Feel free to contact us at (555) 789-1234 for more information.

        How else may I assist you today?
      `;
      speak(branchText);
    } else if (message.includes("nebraska")) {
      const branchText = `
        You can visit our branch in Nebraska at 987 Cookie Court, Lincoln. Feel free to contact us at (555) 987-6543 for more information.

        How else may I assist you today?
      `;
      speak(branchText);
    } else if (message.includes("nevada")) {
      const branchText = `
        You can visit our branch in Nevada at 654 Dessert Drive, Carson City. Feel free to contact us at (555) 654-3210 for more information.

        How else may I assist you today?
      `;
      speak(branchText);
    } else if (message.includes("new hampshire")) {
      const branchText = `
        You can visit our branch in New Hampshire at 321 Bakery Lane, Concord. Feel free to contact us at (555) 321-6789 for more information.

        How else may I assist you today?
      `;
      speak(branchText);
    } else if (message.includes("new jersey")) {
      const branchText = `
        You can visit our branch in New Jersey at 123 Cake Street, Trenton. Feel free to contact us at (555) 123-4567 for more information.

        How else may I assist you today?
      `;
      speak(branchText);
    } else if (message.includes("new mexico")) {
      const branchText = `
        You can visit our branch in New Mexico at 456 Pastry Place, Santa Fe. Feel free to contact us at (555) 456-7890 for more information.

        How else may I assist you today?
      `;
      speak(branchText);
    } else if (message.includes("new york")) {
      const branchText = `
        You can visit our branch in New York at 789 Pie Avenue, Albany. Feel free to contact us at (555) 789-1234 for more information.

        How else may I assist you today?
      `;
      speak(branchText);
    } else if (message.includes("north carolina")) {
      const branchText = `
        You can visit our branch in North Carolina at 987 Cake Court, Raleigh. Feel free to contact us at (555) 987-6543 for more information.

        How else may I assist you today?
      `;
      speak(branchText);
    } else if (message.includes("north dakota")) {
      const branchText = `
        You can visit our branch in North Dakota at 654 Pastry Parkway, Bismarck. Feel free to contact us at (555) 654-3210 for more information.

        How else may I assist you today?
      `;
      speak(branchText);
    } else if (message.includes("ohio")) {
      const branchText = `
        You can visit our branch in Ohio at 321 Bakery Boulevard, Columbus. Feel free to contact us at (555) 321-6789 for more information.

        How else may I assist you today?
      `;
      speak(branchText);
    } else if (message.includes("oklahoma")) {
      const branchText = `
        You can visit our branch in Oklahoma at 123 Cookie Street, Oklahoma City. Feel free to contact us at (555) 123-4567 for more information.

        How else may I assist you today?
      `;
      speak(branchText);
    } else if (message.includes("oregon")) {
      const branchText = `
        You can visit our branch in Oregon at 456 Pie Place, Salem. Feel free to contact us at (555) 456-7890 for more information.

        How else may I assist you today?
      `;
      speak(branchText);
    } else if (message.includes("pennsylvania")) {
      const branchText = `
        You can visit our branch in Pennsylvania at 789 Pastry Street, Harrisburg. Feel free to contact us at (555) 789-1234 for more information.

        How else may I assist you today?
      `;
      speak(branchText);
    } else if (message.includes("rhode island")) {
      const branchText = `
        You can visit our branch in Rhode Island at 987 Cake Lane, Providence. Feel free to contact us at (555) 987-6543 for more information.

        How else may I assist you today?
      `;
      speak(branchText);
    } else if (message.includes("south carolina")) {
      const branchText = `
        You can visit our branch in South Carolina at 654 Pastry Place, Columbia. Feel free to contact us at (555) 654-3210 for more information.

        How else may I assist you today?
      `;
      speak(branchText);
    } else if (message.includes("south dakota")) {
      const branchText = `
        You can visit our branch in South Dakota at 321 Bakery Court, Pierre. Feel free to contact us at (555) 321-6789 for more information.

        How else may I assist you today?
      `;
      speak(branchText);
    } else if (message.includes("tennessee")) {
      const branchText = `
        You can visit our branch in Tennessee at 123 Cake Lane, Nashville. Feel free to contact us at (555) 123-4567 for more information.

        How else may I assist you today?
      `;
      speak(branchText);
    } else if (message.includes("texas")) {
      const branchText = `
        You can visit our branch in Texas at 456 Pastry Street, Austin. Feel free to contact us at (555) 456-7890 for more information.

        How else may I assist you today?
      `;
      speak(branchText);
    } else if (message.includes("utah")) {
      const branchText = `
        You can visit our branch in Utah at 789 Cookie Place, Salt Lake City. Feel free to contact us at (555) 789-1234 for more information.

        How else may I assist you today?
      `;
      speak(branchText);
    } else if (message.includes("vermont")) {
      const branchText = `
        You can visit our branch in Vermont at 987 Pastry Avenue, Montpelier. Feel free to contact us at (555) 987-6543 for more information.

        How else may I assist you today?
      `;
      speak(branchText);
    } else if (message.includes("virginia")) {
      const branchText = `
        You can visit our branch in Virginia at 654 Cake Court, Richmond. Feel free to contact us at (555) 654-3210 for more information.

        How else may I assist you today?
      `;
      speak(branchText);
    } else if (message.includes("washington")) {
      const branchText = `
        You can visit our branch in Washington at 321 Bakery Lane, Olympia. Feel free to contact us at (555) 321-6789 for more information.

        How else may I assist you today?
      `;
      speak(branchText);
    } else if (message.includes("west virginia")) {
      const branchText = `
        You can visit our branch in West Virginia at 123 Pastry Street, Charleston. Feel free to contact us at (555) 123-4567 for more information.

        How else may I assist you today?
      `;
      speak(branchText);
    } else if (message.includes("wisconsin")) {
      const branchText = `
        You can visit our branch in Wisconsin at 456 Cookie Court, Madison. Feel free to contact us at (555) 456-7890 for more information.

        How else may I assist you today?
      `;
      speak(branchText);
    } else if (message.includes("wyoming")) {
      const branchText = `
        You can visit our branch in Wyoming at 789 Cake Avenue, Cheyenne. Feel free to contact us at (555) 789-1234 for more information.

        How else may I assist you today?
      `;
      speak(branchText);
    } else {
      const finalText = "I didn't understand what you said, please try again.";
      speak(finalText);
    }
  };

  // Function to handle user input submission
  const handleUserInputSubmit = (event) => {
    event.preventDefault();
    speakThis(userInput);
    setUserInput("");
  };
  const handleSpeechRecognition = () => {
    if (speechRecognition) {
      speechRecognition.start();
    }
  };
  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleInputSubmit = () => {
    speakThis(userInput);
  };
  useEffect(() => {
    if (speechRecognition) {
      speak("Activating Inertia.");
      speak("Going online.");
      wishMe();
    }
  }, [speechRecognition]);

  return (
    <section className="main-500">
      <div className="image-container-600">
        <div className="image700">
          <img src={logo} alt="image" />
        </div>
        <h1 className="virtual-title">I N E R T I A</h1>
        <p className="virtual-greet">
          I'm a Virtual Assistant. How can I help you?
        </p>
      </div>
      <div className="input900">
        <div className="user-input-container">
          <input
            type="text"
            value={userInput}
            onChange={handleInputChange}
            placeholder="Type your message here"
          />
          <button onClick={handleInputSubmit}>Submit</button>
          <button className="talk" onClick={handleSpeechRecognition}>
            <i className="uil uil-microphone"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default VirtualAssistant;
