"use client";

import React, { useState } from 'react';

const EmailJSDebug = () => {
  const [showDebug, setShowDebug] = useState(false);
  
  const checkConfig = () => {
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
    
    console.log('Production EmailJS Config:', {
      serviceId: serviceId ? `${serviceId.substring(0, 8)}...` : 'MISSING',
      templateId: templateId ? `${templateId.substring(0, 8)}...` : 'MISSING',
      publicKey: publicKey ? `${publicKey.substring(0, 8)}...` : 'MISSING',
      domain: window.location.origin
    });
    
    return {
      serviceId: !!serviceId,
      templateId: !!templateId,
      publicKey: !!publicKey
    };
  };

  const config = checkConfig();
  const allConfigured = config.serviceId && config.templateId && config.publicKey;

  return (
    <div className="mb-6">
      <button
        onClick={() => setShowDebug(!showDebug)}
        className="text-xs text-gray-400 hover:text-gray-300 underline"
      >
        {showDebug ? 'Hide' : 'Show'} EmailJS Debug Info
      </button>
      
      {showDebug && (
        <div className="mt-2 p-3 bg-gray-800 rounded border text-xs">
          <div className="mb-2">
            <strong className="text-white">EmailJS Configuration Status:</strong>
          </div>
          <div className="space-y-1">
            <div className={`${config.serviceId ? 'text-green-400' : 'text-red-400'}`}>
              Service ID: {config.serviceId ? '✓ Set' : '✗ Missing'}
            </div>
            <div className={`${config.templateId ? 'text-green-400' : 'text-red-400'}`}>
              Template ID: {config.templateId ? '✓ Set' : '✗ Missing'}
            </div>
            <div className={`${config.publicKey ? 'text-green-400' : 'text-red-400'}`}>
              Public Key: {config.publicKey ? '✓ Set' : '✗ Missing'}
            </div>
            <div className="text-gray-300">
              Domain: {typeof window !== 'undefined' ? window.location.origin : 'Unknown'}
            </div>
          </div>
          
          {!allConfigured && (
            <div className="mt-2 p-2 bg-red-900 bg-opacity-50 rounded text-red-300">
              <strong>⚠️ Configuration Issue:</strong> Missing environment variables in Vercel.
              <br />
              Add them in Vercel Dashboard → Settings → Environment Variables
            </div>
          )}
          
          <div className="mt-2 text-gray-400">
            Check browser console for detailed error logs when submitting the form.
          </div>
        </div>
      )}
    </div>
  );
};

export default EmailJSDebug;