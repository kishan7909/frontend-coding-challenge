import "./App.css";
import { Grid } from "@mui/material";
import Colors from "./components/Colors";

function App() {
  return (
    <div className="App">
      <Grid container>
        <Colors />
      </Grid>
    </div>
  );
}

export default App;
