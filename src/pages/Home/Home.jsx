import React, { useState } from 'react';

const Home = () => {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');
  const [cards, setCards] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input1 && input2 && input3) {
      const newCard = { input1, input2, input3 };
      setCards([...cards, newCard]);
      setInput1('');
      setInput2('');
      setInput3('');
    } else {
      alert(' Iltimos, barcha maʼlumotlarni toʻldiring');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={input1} 
          onChange={(e) => setInput1(e.target.value)} 
          placeholder="Ma'lumot krit 1" 
        />
        <input 
          type="text" 
          value={input2} 
          onChange={(e) => setInput2(e.target.value)} 
          placeholder="Ma'lumot krit 2" 
        />
        <input 
          type="text" 
          value={input3} 
          onChange={(e) => setInput3(e.target.value)} 
          placeholder="Ma'lumot krit 3" 
        />
        <button type="submit">Make a Card</button>
      </form>
      <div>
        {cards.map((card, index) => (
          <div key={index} className="card">
            <p>{card.input1}</p>
            <p>{card.input2}</p>
            <p>{card.input3}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
