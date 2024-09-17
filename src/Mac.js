import { Clock } from "lucide-react";
import { useState, useEffect } from "react";
import { Rnd } from "react-rnd";

const apps = [
  { name: 'Safari', src: 'saf.png' },
  { name: 'Messages', src: 'iMessage.png', notifications: 69 },
  { name: 'iTunes', src: 'itunes.png' },
  { name: 'Notes', src: 'notes.png' },
  { name: 'Phantom', src: 'phan.png' },
];

const notesList = [
  { title: 'Reminder', content: 'DM Cupsey again to get in Trench Grinders', time: 'Today' },
  { title: 'Private Key(seed)', content: 'gather tuna frost magic arrow leisure whale knee honey legend dash frame', time: 'Yesterday' },
  { title: 'To-Do', content: '1. Buy milk\n2. Call Mom\n3. Stop FOMOing\n4. Smoke less weed\n5. F*ck b*tches acquire currency', time: 'Last Week' },
];

const messagesList = [
  { sender: 'Ansem', message: 'we gonna run the Apple shit today?', time: '3:23 PM' },
  { sender: 'Ex GF', message: 'can we please talk?', time: '2:45 PM' },
  { sender: 'Anatoly(founder)', message: 'Apple can be the official meme. Also...', time: '1:23 PM' },
  { sender: 'Mom', message: 'you better get me that G-Wagon...', time: 'Yesterday' },
  { sender: 'Vitalik', message: 'tbh Apple makes me hard. uWu', time: 'Yesterday' },
];

const NotesApp = ({ close }) => (
  <Rnd
    default={{
      x: 100,
      y: 100,
      width: 400,
      height: 600,
    }}
    dragHandleClassName="handle"
    className="bg-white shadow-lg rounded-lg border border-gray-300 overflow-hidden"
  >
    <div className="handle bg-gray-100 p-2 flex justify-between items-center">
      <span className="font-bold">Notes</span>
      <button onClick={close} className="text-white font-bold bg-red-500 rounded-full px-2">x</button>
    </div>
    <div className="p-4 overflow-y-auto h-[calc(100%-40px)]">
      <ul>
        {notesList.map((note, idx) => (
          <li key={idx} className="mb-4">
            <div className="bg-gray-200 p-3 rounded-lg">
              <div className="text-lg font-bold">{note.title}</div>
              <div className="text-sm mt-1" style={{ whiteSpace: 'pre-line' }}>{note.content}</div>
              <div className="text-xs text-gray-500 mt-2">{note.time}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </Rnd>
);

const PhantomWallet = ({ close }) => (
  <Rnd
    default={{
      x: 200,
      y: 200,
      width: 400,
      height: 600,
    }}
    dragHandleClassName="handle"
    className="bg-gray-800 shadow-lg rounded-lg border border-gray-300 overflow-hidden"
  >
    <div className="handle bg-gray-100 p-2 flex justify-between items-center">
      <span className="font-bold">Phantom</span>
      <button onClick={close} className="text-white font-bold bg-red-500 rounded-full px-2">x</button>
    </div>
    <div className="max-w-md mx-auto bg-[#1C1B1F] text-white min-h-screen flex flex-col">
      {/* Header */}
      <header className="flex justify-between items-center p-4 bg-[#17161A]">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
        <h1 className="text-lg font-semibold">Phantom</h1>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        </svg>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-4 space-y-6">
        {/* Balance Display */}
        <div className="bg-gradient-to-br from-purple-700 to-purple-900 rounded-xl text-white p-5 text-center">
          <p className="text-xl mb-2">Balance</p>
          <h2 className="text-3xl font-bold mb-2">$69,420.69</h2>
          <p className="text-sm opacity-75">+0.11% ($69.93)</p>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between mx-[7.5%]">
          <button className="flex-col items-center flex justify-center text-purple-400">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 3.75 9.375v-4.5ZM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 0 1-1.125-1.125v-4.5ZM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 13.5 9.375v-4.5Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 6.75h.75v.75h-.75v-.75ZM6.75 16.5h.75v.75h-.75v-.75ZM16.5 6.75h.75v.75h-.75v-.75ZM13.5 13.5h.75v.75h-.75v-.75ZM13.5 19.5h.75v.75h-.75v-.75ZM19.5 13.5h.75v.75h-.75v-.75ZM19.5 19.5h.75v.75h-.75v-.75ZM16.5 16.5h.75v.75h-.75v-.75Z" />
            </svg>
            Recieve
          </button>
          <button className="flex-col items-center flex justify-center text-purple-400">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
            </svg>
            Send
          </button>
          <button className="flex-col items-center flex justify-center text-purple-400">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3" />
            </svg>
            Swap
          </button>
          <button className="flex-col items-center flex justify-center text-purple-400">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            Buy
          </button>
        </div>

        {/* Assets List */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Your Assets</h3>
          {['SOL', 'AAPL'].map((token) => (
            <div key={token} className="bg-[#2C2B2F] rounded-lg p-4 flex justify-between items-center">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full overflow-hidden mr-3 flex items-center justify-center bg-purple-600">
                  <img 
                    src={token === 'AAPL' ? '/apple.png' : '/sol.png'} 
                    alt={token} 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div>
                  <p className="font-medium">{token}</p>
                  <p className="text-sm text-gray-400">{token === 'AAPL' ? '69M' : '2'}</p>
                </div>
              </div>
              <p className="font-medium">{token === 'AAPL' ? '$4,269' : '$65,151.69'}</p>
            </div>
          ))}
        </div>
      </main>

      {/* Bottom Navigation */}
      <nav className="flex justify-around items-center p-4 bg-[#17161A]">
        <button className="flex-col items-center text-purple-500">
          <div className="w-6 h-6">Wallet Icon</div>
          <span className="text-xs mt-1">Wallet</span>
        </button>
        <button className="flex-col items-center text-gray-400">
          <div className="w-6 h-6">Swap Icon</div>
          <span className="text-xs mt-1">Swap</span>
        </button>
        <button className="flex-col items-center text-gray-400">
          <div className="w-6 h-6">Explore Icon</div>
          <span className="text-xs mt-1">Explore</span>
        </button>
        <button className="flex-col items-center text-gray-400">
          <div className="w-6 h-6">Notifications Icon</div>
          <span className="text-xs mt-1">Notifications</span>
        </button>
      </nav>
    </div>
  </Rnd>
);

export default function Component() {
  const [hoveredApp, setHoveredApp] = useState(null);
  const [openApp, setOpenApp] = useState(null);
  const [utcTime, setUtcTime] = useState(new Date().toUTCString());
  const [openAudioPlayer, setOpenAudioPlayer] = useState(false);
  const [openSafari, setOpenSafari] = useState(false);
  const [openPhantom, setOpenPhantom] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);
  const [openNotes, setOpenNotes] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setUtcTime(new Date().toUTCString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const toggleDropdown = () => {
    setOpenDropdown(!openDropdown);
  };

  const openMessagesApp = () => setOpenApp('Messages');
  const closeMessagesApp = () => setOpenApp(null);

  const openNotesApp = () => setOpenNotes('Notes');
  const closeNotesApp = () => setOpenNotes(null);

  const openAudioPlayerWidget = () => setOpenAudioPlayer(true);
  const closeAudioPlayerWidget = () => setOpenAudioPlayer(false);

  const openSafariApp = () => setOpenSafari(true);
  const closeSafariApp = () => setOpenSafari(false);

  const openPhantomWallet = () => setOpenPhantom(true);
  const closePhantomWallet = () => setOpenPhantom(false);

  return (
    <div className="h-screen w-full bg-gradient-to-b from-blue-300 to-blue-600 flex flex-col relative overflow-hidden">
      {/* Top Menu Bar */}
      <div className="bg-gray-200 bg-opacity-80 backdrop-blur-sm text-black flex items-center px-4 h-6 text-xs">
      <span className="font-semibold mr-4 relative">
        <img
          src="app.png"
          className="size-10 cursor-pointer"
          alt="App Icon"
          onClick={toggleDropdown}
        />
        {openDropdown && (
          <div className="absolute top-full left-0 mt-2 bg-white border border-gray-300 rounded shadow-lg w-40">
            <div className="grid p-3 space-y-1.5">
              <div className="text-center"><span className="font-extrabold">AAPL</span> <span className="font-semibold text-gray-600">Apple</span></div>
              <div>
                <div className="">Token Supply</div>
                <div className="text-[10px] font-semibold text-gray-600">1,000,000,000</div>
              </div>
              <div>
                <div className="">Mint</div>
                <div className="text-[10px] font-semibold text-gray-600">Revoked</div>
              </div>
              <div>
                <div className="">Freeze</div>
                <div className="text-[10px] font-semibold text-gray-600">Unfreezable</div>
              </div>
              <div>
                <div className="">Tax</div>
                <div className="text-[10px] font-semibold text-gray-600">0% Tax</div>
              </div>
              <div className="">
                <div className="">Liquidity</div>
                <div className="flex text-[10px] font-semibold text-gray-600 items-center gap-[2px]">
                  100%
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="size-[10.5px]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        )}
      </span>
        <a href="https://x.com/applesolanalol">
          <span className="mr-4">Twitter</span>
        </a>
        <a href="https://t.me/AAPLPORTAL">
          <span className="mr-4">Telegram</span>
        </a>
        <span className="mr-4">CA: 5R1zZPj9YzXEdLSg4Gf7n8CyyoYw2mM3dxQnxdu1pump</span>
        <div className="ml-auto flex items-center space-x-4">
          <Clock className="h-4 w-4" />
          <span>{utcTime} UTC</span>
        </div>
      </div>

      <img src="app.png" className="absolute inset-0 m-auto max-w-full max-h-full" alt="App Icon" />

      {/* Main Content Area */}
      <div className="flex-grow relative">
        {openApp === 'Messages' && (
          <Rnd
            default={{
              x: 100,
              y: 100,
              width: 320,
              height: 400,
            }}
            dragHandleClassName="handle"
            className="bg-white shadow-lg rounded-lg border border-gray-300 overflow-hidden"
          >
            <div className="handle bg-gray-100 p-2 flex justify-between items-center">
              <span className="font-bold">Messages</span>
              <button onClick={closeMessagesApp} className="text-white font-bold bg-red-500 rounded-full px-2">x</button>
            </div>
            <div className="p-4 overflow-y-auto h-[calc(100%-40px)]">
              <ul>
                {messagesList.map((msg, idx) => (
                  <li key={idx} className="mb-4">
                    <div className="bg-gray-200 p-3 rounded-lg">
                      <div className="text-sm font-bold">{msg.sender}</div>
                      <div className="text-sm">{msg.message}</div>
                      <div className="text-xs text-gray-500">{msg.time}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Rnd>
        )}

      <div className="flex-grow relative">
        {openNotes === 'Notes' && (
          <NotesApp close={closeNotesApp} />
        )}
      </div>

        {openAudioPlayer && (
          <Rnd
            default={{
              x: 200,
              y: 200,
              width: 300,
              height: 125,
            }}
            dragHandleClassName="handle"
            className="bg-white shadow-lg rounded-lg border border-gray-300 overflow-hidden"
          >
            <div className="handle bg-gray-100 p-2 flex justify-between items-center">
              <span className="font-bold">Music</span>
              <button onClick={closeAudioPlayerWidget} className="text-white font-bold bg-red-500 rounded-full px-2">x</button>
            </div>
            <div className="p-4 flex items-center">
              <audio controls className="w-full" autoPlay>
                <source src="https://ia804608.us.archive.org/4/items/cover_20240511_2247/Rick%20James%20-%20Street%20Songs%20%28Deluxe%20Edition%29%20%281981%29%20%5B16B-44.1kHz%5D/Disc%201/01.%20Give%20It%20To%20Me%20Baby.mp3" type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </div>
          </Rnd>
        )}

        {openSafari && (
          <Rnd
            default={{
              x: 150,
              y: 150,
              width: 800,
              height: 600,
            }}
            dragHandleClassName="handle"
            className="bg-white shadow-lg rounded-lg border border-gray-300 overflow-hidden"
          >
            <div className="handle bg-gray-100 p-2 flex justify-between items-center">
              <span className="font-bold">Safari</span>
              <button onClick={closeSafariApp} className="text-white font-bold bg-red-500 rounded-full px-2">x</button>
            </div>
            <div className="h-[calc(100%-40px)]">
              <iframe
                src="https://pump.fun/5R1zZPj9YzXEdLSg4Gf7n8CyyoYw2mM3dxQnxdu1pump" // Replace with your site link
                className="w-full h-full border-0"
                title="Safari Browser"
              />
            </div>
          </Rnd>
        )}

        {openPhantom && (
          <PhantomWallet close={closePhantomWallet} />
        )}
      </div>

      {/* Simplified Dock */}
      <div className="flex justify-center items-end h-[66px] bg-white bg-opacity-40 backdrop-blur-sm rounded-t-lg mx-[30%] mb-1">
        {apps.map((app) => (
          <div
            key={app.name}
            className="relative flex flex-col items-center mx-2"
            onMouseEnter={() => setHoveredApp(app.name)}
            onMouseLeave={() => setHoveredApp(null)}
            onClick={() => {
              if (app.name === 'Messages') {
                openMessagesApp();
              } else if (app.name === 'iTunes') {
                openAudioPlayerWidget();
              } else if (app.name === 'Safari') {
                openSafariApp();
              } else if (app.name === 'Phantom') {
                openPhantomWallet();
              } else if (app.name === 'Notes') {
                openNotesApp();
              } else {
                console.log(app.name);
              }
            }}
          >
            <div className="w-12 h-12 flex items-center justify-center mb-2">
              <img src={app.src} alt={app.name} className="size-12" />
            </div>
            {app.notifications && (
              <div className="absolute -top-2 -right-2 size-[21.5px] bg-red-600 text-white text-xs flex items-center justify-center rounded-lg">
                {app.notifications}
              </div>
            )}
            {hoveredApp === app.name && (
              <span className="text-xs text-white bg-black bg-opacity-75 px-2 py-1 rounded absolute -top-8">
                {app.name}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}