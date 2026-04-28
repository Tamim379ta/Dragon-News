import React from "react";

const CareerPage = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold text-center mb-4">
        Careers at The Dragon News
      </h1>

      <p className="text-center text-gray-600 mb-8">
        Join our team and help shape the future of digital journalism.
      </p>

      {/* Intro */}
      <div className="mb-10 text-gray-700 leading-relaxed space-y-4">
        <p>
          At <strong>The Dragon News</strong>, we believe in fearless reporting,
          creative storytelling, and innovation. We are always looking for
          passionate individuals who want to make an impact through journalism
          and technology.
        </p>

        <p>
          Whether you're a writer, developer, designer, or analyst — there's a
          place for you in our growing team.
        </p>
      </div>

      {/* Open Positions */}
      <h2 className="text-2xl font-semibold mb-4">Open Positions</h2>

      <div className="space-y-6">
        {/* Job 1 */}
        <div className="border p-5 rounded-xl shadow-sm">
          <h3 className="text-xl font-semibold">Frontend Developer</h3>
          <p className="text-gray-600">Remote • Full-time</p>
          <p className="mt-2 text-gray-700">
            Build modern and responsive UI using React and Next.js.
          </p>
        </div>

        {/* Job 2 */}
        <div className="border p-5 rounded-xl shadow-sm">
          <h3 className="text-xl font-semibold">Content Writer</h3>
          <p className="text-gray-600">On-site • Dhaka</p>
          <p className="mt-2 text-gray-700">
            Write engaging and accurate news articles across multiple categories.
          </p>
        </div>

        {/* Job 3 */}
        <div className="border p-5 rounded-xl shadow-sm">
          <h3 className="text-xl font-semibold">Backend Developer</h3>
          <p className="text-gray-600">Remote • Full-time</p>
          <p className="mt-2 text-gray-700">
            Work with Node.js, Express, and MongoDB to build scalable APIs.
          </p>
        </div>
      </div>

      {/* Why Join */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Why Join Us?</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Work on real-world impactful projects</li>
          <li>Flexible work environment</li>
          <li>Opportunity to grow your skills</li>
          <li>Supportive and creative team</li>
        </ul>
      </div>

      {/* Apply Section */}
      <div className="mt-12 text-center">
        <h2 className="text-2xl font-semibold mb-2">Apply Now</h2>
        <p className="text-gray-600 mb-4">
          Send your CV and portfolio to:
        </p>
        <p className="font-medium">careers@dragonnews.com</p>
      </div>
    </div>
  );
};

export default CareerPage;
