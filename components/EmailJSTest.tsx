"use client";

import React from 'react';
import emailjs from '@emailjs/browser';

const EmailJSTest = () => {
  const testEmailJS = async () => {
    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      console.log('Testing EmailJS with:', {
        serviceId,
        templateId,
        publicKey: publicKey ? 'Set' : 'Missing'
      });

      if (!serviceId || !templateId || !publicKey) {
        console.error('Missing EmailJS configuration');
        return;
      }

      // Initialize EmailJS
      emailjs.init(publicKey);

      // Test parameters
      const testParams = {
        from_name: 'Test User',
        from_email: 'test@example.com',
        subject: 'Test Email from Portfolio',
        message: 'This is a test message to verify EmailJS integration.',
        project_type: 'Testing',
        to_name: 'Limo Kiprono',
        reply_to: 'test@example.com'
      };

      const response = await emailjs.send(serviceId, templateId, testParams);
      console.log('Test email sent successfully:', response);
      alert('Test email sent successfully! Check your inbox.');
    } catch (error) {
      console.error('Test email failed:', error);
      alert('Test email failed. Check console for details.');
    }
  };

  return (
    <div className="p-4 bg-yellow-500 bg-opacity-20 border border-yellow-500 rounded-lg">
      <h3 className="text-yellow-300 font-semibold mb-2">EmailJS Test (Development Only)</h3>
      <p className="text-yellow-200 text-sm mb-3">
        Click the button below to test EmailJS configuration. Check browser console for details.
      </p>
      <button
        onClick={testEmailJS}
        className="bg-yellow-500 hover:bg-yellow-400 text-black px-4 py-2 rounded font-semibold"
      >
        Test EmailJS
      </button>
    </div>
  );
};

export default EmailJSTest;