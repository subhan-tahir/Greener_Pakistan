import React from "react";

const Map = () => {
  return (
    <>
      <div className="w-full h-[400px] my-5">
      <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.1863356834956!2d67.03921448646864!3d24.857484721028523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e7e78b508ad%3A0x9f9e02c208d97ced!2sSea%20Breeze%20Plaza%2C%20Shahrah-e-Faisal%20Rd%2C%20Karachi%20Cantonment%20Fowler%20Lines%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1713733913497!5m2!1sen!2s"
          width="100%"
          height="100%"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
};

export default Map;
