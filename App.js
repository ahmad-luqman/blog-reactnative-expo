import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

// Import screens
import IndexScreen from "./src/screens/IndexScreen";
// import ShowScreen from "./src/screens/ShowScreen";
// import CreateScreen from "./src/screens/CreateScreen";
// import EditScreen from "./src/screens/EditScreen";

// Create a stack navigator
const navigator = createStackNavigator(
  {
    Index: IndexScreen,
    // Show: ShowScreen,
    // Create: CreateScreen,
    // Edit: EditScreen,
  },
  {
    initialRouteName: "Index",
    defaultNavigationOptions: {
      title: "Blogs",
    },
  }
);

// Create an app container
export default createAppContainer(navigator);
