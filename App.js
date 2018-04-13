import { StackNavigator } from "react-navigation";
import Images from "./Home";
import Images from "./Images";

const App = StackNavigator({
  First: { screen: Home },
  Second: { screen: Images },
  Info: { screen: DetailedInfo }
});

export default App;
