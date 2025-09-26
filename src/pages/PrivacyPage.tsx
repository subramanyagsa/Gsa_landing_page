import React from 'react';

const PrivacyPage = () => {
  return (
    <main className="py-16 md:py-24">
      <div className="container px-4 md:px-6 max-w-3xl mx-auto">
        <article className="prose prose-invert lg:prose-xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight">Privacy Policy</h1>
          <p>Last updated: {new Date().toLocaleDateString()}</p>

          <p>This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Collecting and Using Your Personal Data</h2>
          <p>While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to: Email address, First name and last name, Phone number, Usage Data.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Use of Your Personal Data</h2>
          <p>The Company may use Personal Data for the following purposes: to provide and maintain our Service, to manage Your Account, for the performance of a contract, to contact You, to provide You with news, special offers and general information about other goods, services and events which we offer.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Security of Your Personal Data</h2>
          <p>The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While We strive to use commercially acceptable means to protect Your Personal Data, We cannot guarantee its absolute security.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, You can contact us by email.</p>
        </article>
      </div>
    </main>
  );
};

export default PrivacyPage;