// import logo from './logo.png';
import './App.css';
import Class_TranTrongBinh from './components/Class_TranTrongBinh';
import Func_JSX_TranTrongBinh from './components/Func_JSX_TranTrongBinh';
function App() {
  return (
    <section className="App">
        <h1>Demo JSX</h1>
        {/* function component demo  */}
        <Func_JSX_TranTrongBinh />
        <Func_JSX_TranTrongBinh fullName="Tran Trong Binh" age="20" />

        <Class_TranTrongBinh />
        <hr/>
        <Class_TranTrongBinh info="Hoc ReactJS" time="11" />
    </section>
  );
}

export default App;
