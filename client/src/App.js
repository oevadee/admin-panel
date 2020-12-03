import Header from "./components/Header";
import Dashboard from "./routes/Dashboard";
import { Admin, Resource } from "react-admin";
import { UserList } from "./users";
import createAdminStore from "./createAdminStore";
import jsonServerProvider from "ra-data-json-server";
import restProvider from "ra-data-simple-rest";
import { createHashHistory } from "history";
import { Provider } from "react-redux";
import PostIcon from "@material-ui/icons/Book";
import UserIcon from "@material-ui/icons/Group";

// // dependency injection
// const dataProvider = restProvider("https://jsonplaceholder.typicode.com");
// dependency injection
const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");
const history = createHashHistory();

function App() {
  return (
    <>
      <Provider
        store={createAdminStore({
          dataProvider,
          history,
        })}
      >
        <Admin dataProvider={dataProvider} history={history} title="My Admin">
          <Resource
            name="posts"
            icon={PostIcon}
          />
          <Resource name="users" list={UserList} icon={UserIcon} />
        </Admin>
      </Provider>
      {/* <Header />
      <Dashboard /> */}
    </>
  );
}

export default App;
