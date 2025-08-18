import React, { useEffect, useState } from "react";
import "./AccountPage.css";

const AccountPage = () => {
  const [username, setUsername] = useState("");

  useEffect(() => {
    const storedName = localStorage.getItem("username");
    if (storedName) {
      setUsername(storedName);
    }
  }, []);

  const sections = [
    { title: "Your Orders", desc: "Track, return, or buy things again" },
    { title: "Login & security", desc: "Edit login, name, and mobile number" },
    { title: "Subscription", desc: "View benefits and payment settings" },
    { title: "Your Addresses", desc: "Edit addresses for orders and gifts" },
    { title: "Your business account", desc: "Sign up for free to save up to 28% with GST invoice and bulk discounts and purchase on credit." },
    { title: "Payment options", desc: "Edit or add payment methods" },
    { title: "Merchendise", desc: "Exclusive merch for true sneakerheads" },
    { title: "Contact Us", desc: "Contact our customer service via phone or chat" },
  ];

  return (
    <div className="account-page">
      <h1 className="account-title">
  Your Account: {username ? username .split(" ")
        .map(
          (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        )
        .join(" ")
    : ""}
</h1>


      <div className="account-grid">
        {sections.map((section, index) => (
          <div key={index} className="account-card">
            <h3>{section.title}</h3>
            <p>{section.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccountPage;
