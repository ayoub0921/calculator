import { useState } from "react";



function App() {
  const [result, setRresult] = useState('');

  const handlClickBtn = (e) => {
    setRresult(result.concat(e.target.name))
  }

  const handleReset = () => {
    setRresult('');
  }

  const handleDelete = () => {
    setRresult(result.slice(0, -1))
  }

  const handleResult = () => {
    try {
      setRresult(eval(result).toString())
    } catch (error) {
      setRresult('error')
    }
  }
  return (
    <>
      <div className="flex h-screen">
        <div className="m-auto text-center p-10 w-[500px]">
          <div className="mt-4">
            <input type="text" value={result} />
            <div className="buttons">
              <button onClick={handlClickBtn} name='7'>7</button>
              <button onClick={handlClickBtn} name='8'>8</button>
              <button onClick={handlClickBtn} name='9'>9</button>
              <button className="highlight" onClick={handleDelete}>Del</button>
              <button onClick={handlClickBtn} name='4'>4</button>
              <button onClick={handlClickBtn} name='5'>5</button>
              <button onClick={handlClickBtn} name='6'>6</button>
              <button className="highlight" onClick={handlClickBtn} name='+'>&#43;</button>
              <button onClick={handlClickBtn} name='1'>1</button>
              <button onClick={handlClickBtn} name='2'>2</button>
              <button onClick={handlClickBtn} name='3'>3</button>
              <button className="highlight" onClick={handlClickBtn} name='-'>&#45;</button>
              <button className="highlight" onClick={handlClickBtn} name='.'>&#x60C;</button>
              <button onClick={handlClickBtn} name='0'>0</button>
              <button className="highlight" onClick={handlClickBtn} name='/'>&#x2f;</button>
              <button className="highlight" onClick={handlClickBtn} name='*'>&times;</button>
              <button className="col-span-2 highlight" onClick={handleReset}>Reset</button>
              <button onClick={handleResult} className="col-span-2 highlight">=</button>
            </div>
          </div>
        </div>
      </div>
      <footer className="text-center bg-blue-900 p-3 text-white">
        Created by ❤️ And ☕ All Right Riserved &copy; <a href="https://ayoubguidi.com">Ayoub™</a>
      </footer>
    </>
  );
}

export default App;
