// src/components/OTPForm.jsx
import React, { useState, useRef } from 'react';

const OTPForm = () => {
  const [otp, setOtp] = useState(Array(4).fill(''));
  const [status, setStatus] = useState('');
  const inputRefs = useRef([]);

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (/^[0-9]$/.test(value) || value === '') {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      if (value && index < 3) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const enteredOtp = otp.join('');
    if (enteredOtp === '1234') {
      setStatus('success');
    } else {
      setStatus('error');
    }
  };

  const handleResend = () => {
    console.log('Resend OTP');
  };

  const getInputBorderColor = () => {
    if (status === 'success') return 'border-green-500';
    if (status === 'error') return 'border-red-500';
    return 'border-zinc-400';
  };

  const getButtonStyles = () => {
    if (status === 'success') return 'bg-green-500';
    if (status === 'error') return 'bg-red-500';
    return 'bg-blue-900';
  };
  const handleImageClick = () => {
    window.location.href = 'https://www.chaicode.com';
  };

  return (
    <div className="grid grid-rows-4 p-0 m-0 bg-blue-500 w-screen h-screen text-center">
      <div className="bg-transparent mt-10 mx-4 text-center">
        <h1 className="text-white text-4xl font-bold">Chai Aur Code!</h1>
      </div>
      <div className="row-span-2 mx-6 md:mx-80 rounded-3xl">
        <form onSubmit={handleSubmit} className="bg-white  rounded-2xl mt-4 p-12 gap-3">
          <h2 className="text-2xl text-center text-zinc-800 font-semibold mb-4">
            Mobile Phone Verification
          </h2>
          <h3 className="text-gray-400 mb-2 text-xl text-center">
            Enter the 4-Digit Verification code that was sent
            <br />
            to your Mobile Number.
          </h3>
          <div className="flex justify-center mb-4">
            {otp.map((value, index) => (
              <input
                key={index}
                type="text"
                value={value}
                onChange={(e) => handleChange(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                ref={(el) => (inputRefs.current[index] = el)}
                className={`border ${getInputBorderColor()} bg-white text-black border-zinc-400 p-2 mr-2 rounded w-10 text-center`}
                maxLength="1"
              />
            ))}
          </div>
          <button
            type="submit"
            className={`${getButtonStyles()} w-60 text-white py-2 px-4 rounded`}
          >
            {status === 'success' ? 'Verification Successfull!' : status === 'error' ? 'Verification Failed' : 'Verify Account'}
          </button>
          {status === 'success' && <p className="text-green-500 mt-4">OTP is correct!</p>}
          {status === 'error' && <p className="text-red-500 mt-4">Incorrect OTP. Please try again.</p>}
          <h3 className="text-gray-400 mt-4 text-center">
            Didn't receive Code?{' '}
            <button type="button" onClick={handleResend} className="text-blue-900  bg-transparent underline">
              Resend
            </button>
          </h3>
        </form>
      </div>
      <div className="bg-transparent absolute bottom-8 right-5">
        <img src=".\chai.png" alt="chai"  onClick={handleImageClick} className="w-36 h-24 rounded" />
      </div>
    </div>
  );
};

export default OTPForm;
