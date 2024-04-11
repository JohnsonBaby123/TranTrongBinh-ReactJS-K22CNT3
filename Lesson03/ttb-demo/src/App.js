import './App.css';
import TTB_ClassComp from './components/TTB_ClassComp';
import TTB_FuncDemo from './components/TTB_FuncDemo';

function App() {

  // Khai báo biến đối tượng
  const users = {
    userName:"k22cnt3",
    password:"123456a@",
    fistName:"Tran Trong",
    lastName:"Binh"
  }

  // Khai báo đối tượng hàm
  function formatName(user){
    return <h2>Xin chào, {user.fistName} {user.lastName}</h2>;
  }
  return (
    <div className="App">
      {/* Biểu thức jsx  */}
      <div>
          <p> FullName: {users.fistName} {users.lastName}</p>
          {formatName(users)}
      </div>

      {/* Sử dụng functiono component  */}
      <div>
        <TTB_FuncDemo />
        {/* Sử dung Func_Comp có props  */}
        <TTB_FuncDemo userName="TTB" fullName="Tran Trong Binh" age="20" />
      </div>

      {/* Sử dụng class component  */}
      <div>
        {/* dùng không sử dụng props */}
        <TTB_ClassComp /> 
        {/* Sử dụng props  */}
        <TTB_ClassComp company="Fit-NTU - K22CNT3" course="ReactJs" />
        <TTB_ClassComp company="Fit-NTU - K22CNT4" course="ReactJs 1" />
        <TTB_ClassComp company="Fit-NTU - K22CNT3" course="ReactJs 2" />
        <TTB_ClassComp company="Fit-NTU - K22CNT6" course="ReactJs 3" />
      </div>
    </div>
  );
}

export default App;
