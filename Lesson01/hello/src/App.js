import logo from './logo.png';
import './App.css';
import Ttb from './components/Ttb';

function App() {
  return (
    <section className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>TRƯỜNG ĐẠI HỌC NGUYỄN TRÃI</h2>
      </header>
      <div>
        <Ttb email="binhtt2004@gmail.com" phone="0328234399"/>
        <Ttb email="binhtt2004@gmail.com" phone="0328234399"/>
      </div>
    </section>
  );
}

export default App;
