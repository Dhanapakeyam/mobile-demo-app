import './App.css';

function App() {
  return (
    <div className="App">
      <Phone />
    </div>
  );
}

function Phone() {
  const mobileData = {
    "model": "OnePlus 9 5G",
    "img": "https://m.media-amazon.com/images/I/61fy+u9uqPL._SX679_.jpg",
    "company": "Oneplus"
  };
  return (
    <div className='phone-container'>
      <img className='phone-picture' src={mobileData.img} alt={mobileData.model} />
      <p className='phone-name'>{mobileData.model}</p>
      <p className='phone-company'>{mobileData.company}</p>
    </div>
  )
}
export default App;
