import { Box, Grid, GridItem } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <Navbar />
      <Grid templateColumns="repeat(10, 10fr)">
        <GridItem colSpan={2} h={"100vh"}>
          <aside>
            <Sidebar />
          </aside>
        </GridItem>
        <GridItem colSpan={8}>
          <main>
            <HomePage />
          </main>
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
