import Contacts from "./Components/Contacts";
import Navbar from "./Components/Navbar";
import "./Styles/App.scss";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddContact from "./Components/Contact/AddContact";
import EditContact from "./Components/Contact/EditContact";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <main className="container-fluid">
          <Navbar />
          <section className="container">
            <div className="py-3">
              <Switch>
                <Route path="/" exact component={Contacts} />
                <Route path="/addContact" component={AddContact} />
                <Route path="/editContact/:id" component={EditContact} />
              </Switch>
            </div>
          </section>
        </main>
      </Router>
    </Provider>
  );
}

export default App;
