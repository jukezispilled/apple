import React, { useState, useEffect } from 'react';

const Phone = () => {
  const [text, setText] = useState('');
  const [showModal, setShowModal] = useState(false); // State to manage modal visibility
  const fullText = "Think Different.";

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100); // Adjust typing speed here

    return () => clearInterval(typingInterval);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 5000); // Show modal 7 seconds after load

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-white">
      <div className='absolute bottom-3 text-gray-400 text-[10px]'>CA: updating...</div>  

      <div className='absolute top-3 left-3 flex items-center z-[50]'>
        <a href="https://x.com/" className='transition ease-in-out duration-150'>
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className='w-10 h-10 md:w-12 md:h-12 md:hover:scale-105 transition ease-in-out duration-150 cursor-pointer' fill="#9ca3af" viewBox="0 0 50 50">
            <path d="M 6.9199219 6 L 21.136719 26.726562 L 6.2285156 44 L 9.40625 44 L 22.544922 28.777344 L 32.986328 44 L 43 44 L 28.123047 22.3125 L 42.203125 6 L 39.027344 6 L 26.716797 20.261719 L 16.933594 6 L 6.9199219 6 z"></path>
          </svg>
        </a>
        <a href="https://t.me/" className='transition ease-in-out duration-150'>
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className='w-10 h-10 md:w-12 md:h-12 md:hover:scale-105 transition ease-in-out duration-150 cursor-pointer' fill="#9ca3af" viewBox="0 0 50 50">
            <path d="M46.137,6.552c-0.75-0.636-1.928-0.727-3.146-0.238l-0.002,0C41.708,6.828,6.728,21.832,5.304,22.445c-0.259,0.09-2.521,0.934-2.288,2.814c0.208,1.695,2.026,2.397,2.248,2.478l8.893,3.045c0.59,1.964,2.765,9.21,3.246,10.758c0.3,0.965,0.789,2.233,1.646,2.494c0.752,0.29,1.5,0.025,1.984-0.355l5.437-5.043l8.777,6.845l0.209,0.125c0.596,0.264,1.167,0.396,1.712,0.396c0.421,0,0.825-0.079,1.211-0.237c1.315-0.54,1.841-1.793,1.896-1.935l6.556-34.077C47.231,7.933,46.675,7.007,46.137,6.552z M22,32l-3,8l-3-10l23-17L22,32z"></path>
          </svg>
        </a>
      </div>

      {/* Image */}
      <img src="/app.png" alt="App" className="w-[70%] max-w-md" />
  
      {/* Text */}
      <p className="text-[42px] -mt-[15%] font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-yellow-500 to-green-500">
        {text}
        <span className="animate-blink">|</span>
      </p>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-[100]">
          <div className="bg-white p-6 rounded-lg mx-[7.5%] border text-center">
            <p className="text-lg font-semibold text-gray-400">To access the full website, please use a laptop/desktop.</p>
            <button
              onClick={() => setShowModal(false)}
              className="mt-4 px-4 py-2 bg-white border text-gray-400 rounded-md"
            >
              OK
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 0.7s infinite;
        }
      `}</style>
    </div>
  );
};

export default Phone;