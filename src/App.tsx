import "./App.css";
import { Stack } from "@mui/material";
import { Header } from "./Components/Header/Header";
import { LeftBar } from "./Components/LeftBar/LeftBar";
import { AppRoutes } from "./routes/AppRoutes";
import { RightBar } from "./Components/RightBar/RightBar";
import { Suspense } from "react";
import { Loader } from "./Components/Loader/Loader";

function App() {
  return (
    <>
      <Header />
      <Stack direction="row" className="App">
        <LeftBar />
        <Suspense fallback={<Loader />}>
          <AppRoutes />
        </Suspense>
        <RightBar />
      </Stack>
    </>
  );
}

export default App;
