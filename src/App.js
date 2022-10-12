import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import { Grid } from "@mui/material";
import Colors from "./components/Colors";

function App() {
  return (
    <div className="App">
      <Header />
      <Grid container>
        <Colors />
      </Grid>
    </div>
  );
}

export default App;
