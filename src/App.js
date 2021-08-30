import React, { useState, useMemo } from "react";
// useMemo() : se giup minh ghi nho lai ket qua tra ve
function expensiveFunction(number) {
  console.log("Bat dau");

  const start = new Date();

  // doi o day 3s
  while (new Date() - start < 3000);
  // 3s -> 3000
  console.log("Ket thuc", new Date() - start, "ms");

  return number * number;
}

function App() {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(20);

  // dung nen lam dung useMemo()
  const number = useMemo(() => {
    expensiveFunction(num);
  }, [num]);
  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>+</button>

      <p>Number: {number}</p>
    </>
  );
}

export default App;
