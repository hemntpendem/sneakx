import React, { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import "./AccountPage.css";

const AccountPage = () => {
  const [username, setUsername] = useState("");
  const [photo, setPhoto] = useState("");
  const [imgLoaded, setImgLoaded] = useState(false); // ✅ track if image loaded

  useEffect(() => {
    const storedName = localStorage.getItem("username");
    const storedPhoto = localStorage.getItem("photo");
    if (storedName) setUsername(storedName);
    if (storedPhoto) setPhoto(storedPhoto);
  }, []);

  const sections = [
    { title: "Your Orders", desc: "Track, return, or buy things again" },
    { title: "Login & security", desc: "Edit login, name, and mobile number" },
    { title: "Subscription", desc: "View benefits and payment settings" },
    { title: "Your Addresses", desc: "Edit addresses for orders and gifts" },
    {
      title: "Your business account",
      desc: "Sign up for free to save up to 28% with GST invoice and bulk discounts and purchase on credit."
    },
    { title: "Payment options", desc: "Edit or add payment methods" },
    { title: "Merchendise", desc: "Exclusive merch for true sneakerheads" },
    { title: "Contact Us", desc: "Contact our customer service via phone or chat" },
  ];

  return (
    <div className="account-page">
      <div
        className="account-header"
        style={{ display: "flex", alignItems: "center", marginBottom: 20 }}
      >
        {photo ? (
  <>
    {!imgLoaded && (
      <FaUserCircle
        className="user-icon-fallback"
        style={{
          width: 60,
          height: 60,
          marginRight: 10,
          fontSize: "3rem",
          opacity: 0.6,
        }}
      />
    )}
    <img
      src={photo}
      alt="Profile"
      style={{
        width: 60,
        height: 60,
        borderRadius: "50%",
        marginRight: 10,
        display: imgLoaded ? "block" : "none",
      }}
      onLoad={() => setImgLoaded(true)}
      onError={() => setImgLoaded(false)} // fallback if photo URL fails
    />
  </>
) : (
  <FaUserCircle
    className="user-icon-fallback"
    style={{ width: 60, height: 60, marginRight: 10, fontSize: "3rem" }}
  />
)}


        <h1 className="account-title">
          Your Account:{" "}
          {username
            ? username
                .split(" ")
                .map(
                  (word) =>
                    word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
                )
                .join(" ")
            : ""}
        </h1>
      </div>

      <div className="account-grid">
        {sections.map((section, index) => (
          <div key={index} className="account-card">
            <h3>{section.title}</h3>
            <p>{section.desc}</p>
          </div>
        ))}
      </div>
      <div className="signout-container">
  <button
    className="signout-btn"
    onClick={() => {
      localStorage.clear();
      sessionStorage.clear();
      window.location.href = "/";
    }}
  >
    Sign Out
  </button>
</div>

    </div>
  );
};

export default AccountPage;
