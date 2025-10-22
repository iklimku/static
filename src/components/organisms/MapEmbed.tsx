// components/MapEmbed.js
import React from "react";

const MapEmbed = () => {
  return (
    <div style={{ width: "100%", height: "auto" }}>
      <iframe
        src="https://maps.google.com/maps?q=bmkg+indonesia&t=&z=13&ie=UTF8&iwloc=&output=embed"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default MapEmbed;
