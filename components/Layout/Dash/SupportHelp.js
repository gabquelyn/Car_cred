import React from 'react';

const SupportHelpCenterPage = () => {
  const handleContactSupport = () => {
    // Implement your logic for contacting support here
  };

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Support and Help Center</h2>
      <div className="mb-4 bg-white-500 p-6 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">Documentation and Tutorials</h3>
        <p>Access our comprehensive documentation and helpful tutorials to learn how to use CarCheck effectively.</p>
        {/* Add links to documentation and tutorials */}
      </div>
      <div className="mb-4 bg-white-500 p-6 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">Frequently Asked Questions</h3>
        <p>Find answers to commonly asked questions in our FAQ section.</p>
        {/* Add FAQ section with questions and answers */}
      </div>
      <div className="mb-4 bg-white-500 p-6 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">Help Desk</h3>
        <p>Contact our support team directly through our help desk for any assistance or inquiries you may have.</p>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
          onClick={handleContactSupport}
        >
          Contact Support
        </button>
        <p>Our support team will respond to your inquiry as soon as possible.</p>
      </div>
      <div className='bg-white-500 p-6 rounded-lg'>
        <h3 className="text-lg font-semibold mb-2">Troubleshooting Resources and Guides</h3>
        <p>Explore our troubleshooting resources and guides to resolve common issues or technical difficulties.</p>
        <ul>
          <li>Step-by-step troubleshooting guides</li>
          <li>Video tutorials for common problems</li>
          <li>Community forums for sharing experiences and getting help</li>
          <li>Knowledge base with articles and tips</li>
        </ul>
      </div>
    </div>
  );
};

export default SupportHelpCenterPage;
