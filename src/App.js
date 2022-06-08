import Test from "./Test";
import { UserAuthContextProvider } from "./context/UserAuthContext";

function App() {
  return (
    <UserAuthContextProvider>
      <div className="App">
        <Test />
      </div>
    </UserAuthContextProvider>
  );
}

export default App;
