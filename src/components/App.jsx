import MainSection from "./MainSection";
import PizzaStageSection from "./PizzaStageSection";
import PlaceOrder from "./PlaceOrder";
import { Provider } from "react-redux";
import store from "../redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="p-2">
        <h1 className="my-2 text-center font-bold">Pizza Shop</h1>
        <PlaceOrder />
        <PizzaStageSection />
        <MainSection />
        <hr />
        <h1 className="my-2 text-center font-bold">
        Developed By:<span>Mukesh Kumar,(Sr.Software Developer)</span> <br/>
        <span>Any Assignment Developed then contact me</span>
        <br/>
        Mobile No:<span>8581082579</span>
        <br/>
        Email_Id:<span>sahumukesh8581@gmail.com</span>
        <br/>
        Tech Stack:<span>React Js,Node Js,MongoDb,Redux,Express,SQL Server,HTML,CSS,JavaScript</span>
        </h1>
      </div>
    </Provider>
  );
}

export default App;
