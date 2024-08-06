

// src/components/VismeEmbed.js
import React, { useEffect } from 'react';
const ContactPage = () => {
  useEffect(() => {

    const script = document.createElement('script');
    script.src = "https://static-bundles.visme.co/forms/vismeforms-embed.js";
    script.async = true;
    document.body.appendChild(script);


    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className="visme_d"
      data-title="Untitled Project"
      data-url="rx7dxdg8-untitled-project?fullPage=true"
      data-domain="forms"
      data-full-page="true"
      data-min-height="100vh"
      data-form-id="85023"
    ></div>
  );
};

export default ContactPage;
