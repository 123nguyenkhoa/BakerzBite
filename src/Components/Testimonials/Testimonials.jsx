import React, { useState, useEffect, useMemo } from "react";
import "./Testimonials.css";
import client_1 from "../Assets/client-1.jpg";
import client_2 from "../Assets/client-2.jpg";
import client_3 from "../Assets/client-3.jpg";
import client_4 from "../Assets/client-4.jpg";
import client_5 from "../Assets/client-5.jpg";

const Testimonials = () => {
  const [selectedClient, setSelectedClient] = useState(null);

  const clients = useMemo(
    () => [
      {
        name: "John Doe",
        designation: "Software Engineer, San Francisco California",
        description:
          "I've tried many different pastries at Bakerz Bite, and I've never been disappointed. The quality of the baked goods is outstanding, the flavors are delightful, and the customer service is excellent. This is definitely my favorite bakery!",
        image: client_1,
      },
      {
        name: "Michael Thompson",
        designation: "Graphic Designer, Austin Texas",
        description:
          "The cakes and pastries from Bakerz Bite are simply delicious. The attention to detail in every product is evident, and the flavors are rich and satisfying. It's always a pleasure to visit this bakery.",
        image: client_2,
      },
      {
        name: "Ellen Harper",
        designation: "Freelance Writer, Portland Oregon",
        description:
          "Bakerz Bite is truly an amazing bakery! The pastries are made from fresh ingredients and have a unique flavor. I'm always impressed with the quality and variety they offer. Highly recommended!",
        image: client_3,
      },
      {
        name: "David Johnson",
        designation: "Photographer, Los Angeles California",
        description:
          "Bakerz Bite offers some of the best pastries I've ever had. The flavors are exquisite, and the presentation is beautiful. It's clear that a lot of love and effort goes into making each item. I highly recommend this bakery to anyone looking for high-quality baked goods.",
        image: client_4,
      },
      {
        name: "Sarah Miller",
        designation: "Marketing Manager, New York",
        description:
          "I love Bakerz Bite! Their selection of pastries and cakes is fantastic, and everything I've tried has been fresh and tasty. The staff is friendly and always willing to help. A must-visit for any bakery lover!",
        image: client_5,
      },
    ],
    []
  );

  useEffect(() => {
    setSelectedClient(clients[0]);
  }, [clients]);

  const handleClientClick = (client) => {
    setSelectedClient(client);
  };

  return (
    <div className="wrapper-5">
      <div className="testimonials">
        <div className="title-1">
          <h2>OUR TESTIMONIALS</h2>
        </div>
        <div className="content">
          <div className="clients-list">
            <div className="clients-tabs">
              {clients.map((client, index) => (
                <div
                  key={index}
                  className={`client-item ${
                    selectedClient === client ? "active" : ""
                  }`}
                  onClick={() => handleClientClick(client)}
                >
                  <div className="client-thumbnail">
                    <img src={client.image} alt={`Client ${index + 1}`} />
                  </div>
                  <div className="client-intro">
                    <h5 className="client-name">{client.name}</h5>
                    <small className="client-designation">
                      {client.designation}
                    </small>
                    <p className="client-description">{client.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="show-info">
            <div className="show-img">
              <img
                src={selectedClient ? selectedClient.image : ""}
                alt={selectedClient ? selectedClient.name : "client image"}
              />
            </div>
            <div className="show-text">
              <div>
                <h4 className="show-name">
                  {selectedClient ? selectedClient.name : ""}
                </h4>
                <small className="show-designation">
                  {selectedClient ? selectedClient.designation : ""}
                </small>
              </div>
              <p className="show-description">
                {selectedClient ? selectedClient.description : ""}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
