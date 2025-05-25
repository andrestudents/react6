import { useState } from 'react';

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(0);

  const handleClick = (value) => setInput((prev) => prev + value);
  const handleClear = () => { setInput(''); setResult(0); };
  const handleCalculate = () => {
    try {
      setResult(eval(input));
    } catch {
      setResult('Error');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-400 p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80">
        <h1 className="text-2xl font-bold mb-4 text-center">Kalkulator</h1>
        <input
          type="text"
          value={input}
          readOnly
          className="w-full p-2 mb-2 border rounded text-lg"
        />
        <div className="text-right mb-4 text-xl font-semibold">= {result}</div>
        <div className="grid grid-cols-4 gap-3">
          {/* Tombol */}
          <button onClick={handleClear} className="bg-red-400 p-2 rounded">C</button>
          <button onClick={() => handleClick('1')} className="bg-blue-200 p-2 rounded">1</button>
          <button onClick={() => handleClick('2')} className="bg-blue-200 p-2 rounded">2</button>
          <button onClick={() => handleClick('3')} className="bg-blue-200 p-2 rounded">3</button>
          <button onClick={() => handleClick('+')} className="bg-green-300 p-2 rounded">+</button>
          <button onClick={() => handleClick('4')} className="bg-blue-200 p-2 rounded">4</button>
          <button onClick={() => handleClick('5')} className="bg-blue-200 p-2 rounded">5</button>
          <button onClick={() => handleClick('6')} className="bg-blue-200 p-2 rounded">6</button>
          <button onClick={() => handleClick('-')} className="bg-green-300 p-2 rounded">-</button>
          <button onClick={() => handleClick('7')} className="bg-blue-200 p-2 rounded">7</button>
          <button onClick={() => handleClick('8')} className="bg-blue-200 p-2 rounded">8</button>
          <button onClick={() => handleClick('9')} className="bg-blue-200 p-2 rounded">9</button>
          <button onClick={() => handleClick('*')} className="bg-green-300 p-2 rounded">×</button>
          <button onClick={() => handleClick('/')} className="bg-green-300 p-2 rounded">÷</button>
          <button onClick={() => handleClick('0')} className="bg-blue-200 p-2 rounded">0</button>
        </div>
        <button onClick={handleCalculate} className="w-full mt-3 bg-yellow-400 p-2 rounded col-span-2">=</button>
      </div>
    </div>
  );
}

export default App;

// import { useState } from 'react';

// function App() {
//   const [input, setInput] = useState('');
//   const [result, setResult] = useState(0);

//   const handleClick = (value) => setInput((prev) => prev + value);
//   const handleClear = () => { setInput(''); setResult(0); };
//   const handleCalculate = () => {
//     try {
//       setResult(eval(input));
//     } catch {
//       setResult('Error');
//     }
//   };

//   // 👉 Ini array tombol-tombol kalkulator
//   const buttons = [
//     { label: 'C', action: handleClear, className: 'bg-red-400' },
//     { label: '1', action: () => handleClick('1'), className: 'bg-blue-200' },
//     { label: '2', action: () => handleClick('2'), className: 'bg-blue-200' },
//     { label: '+', action: () => handleClick('+'), className: 'bg-green-300' },
//     { label: '3', action: () => handleClick('3'), className: 'bg-blue-200' },
//     { label: '4', action: () => handleClick('4'), className: 'bg-blue-200' },
//     { label: '-', action: () => handleClick('-'), className: 'bg-green-300' },
//     { label: '5', action: () => handleClick('5'), className: 'bg-blue-200' },
//     { label: '6', action: () => handleClick('6'), className: 'bg-blue-200' },
//     { label: '*', action: () => handleClick('*'), className: 'bg-green-300' },
//     { label: '7', action: () => handleClick('7'), className: 'bg-blue-200' },
//     { label: '8', action: () => handleClick('8'), className: 'bg-blue-200' },
//     { label: '/', action: () => handleClick('/'), className: 'bg-green-300' },
//     { label: '9', action: () => handleClick('9'), className: 'bg-blue-200' },
//     { label: '0', action: () => handleClick('0'), className: 'bg-blue-200' },
//     { label: '=', action: handleCalculate, className: 'bg-yellow-400 col-span-2' },
//   ];

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
//       <div className="bg-white p-6 rounded-lg shadow-lg w-80">
//         <h1 className="text-2xl font-bold mb-4 text-center">Kalkulator</h1>
//         <input
//           type="text"
//           value={input}
//           readOnly
//           className="w-full p-2 mb-2 border rounded text-lg"
//         />
//         <div className="text-right mb-4 text-xl font-semibold">= {result}</div>

//         {/* 👉 Loop tombol dari array */}
//         <div className="grid grid-cols-4 gap-2">
//           {buttons.map((btn, index) => (
//             <button
//               key={index}
//               onClick={btn.action}
//               className={`${btn.className} p-2 rounded`}
//             >
//               {btn.label}
//             </button>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;

