import React from "react";

const AboutPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold mb-4 text-center">
        About The Dragon News
      </h1>

      <p className="text-lg text-gray-600 mb-6 text-center">
        Delivering truth with fire.
      </p>

      <div className="space-y-6 text-gray-700 leading-relaxed">
        <p>
          <strong>The Dragon News</strong> is a modern digital news platform
          dedicated to delivering accurate, fast, and impactful news from around
          the world. Our mission is to keep readers informed with trustworthy
          journalism and powerful storytelling.
        </p>

        <p>
          We cover a wide range of topics including politics, technology,
          entertainment, sports, and global affairs. Our team works around the
          clock to bring you the latest updates and in-depth analysis.
        </p>

        <p>
          At The Dragon News, we believe that information is power. Just like a
          dragon symbolizes strength and vision, we aim to provide news that
          empowers our readers to understand the world better.
        </p>

        <p>
          Whether youre here for breaking news or detailed insights, The Dragon
          News is your trusted source.
        </p>
      </div>

      <div className="mt-10 text-center">
        <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
        <p>Email: contact@dragonnews.com</p>
        <p>Phone: +880-XXXXXXXXXX</p>
      </div>
    </div>
  );
};

export default AboutPage;
