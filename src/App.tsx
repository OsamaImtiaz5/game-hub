import { Grid, GridItem, Show, useBreakpoint } from "@chakra-ui/react";
import NavBar from "./components/NavBar/NavBar";
import GameGrid from "./components/GameGrid";
// Importing Grid, GridItem, and Show components from Chakra UI to create the layout and control visibility based on screen size.

function App() {
  return (
    <>
      <Grid
        // A Grid component to create a responsive layout
        templateAreas={{
          base: `'nav' 'main'`,
          // For small screens (base), arrange nav and main in a single column
          lg: `'nav nav' 'aside main'`,
          // For large screens (lg and above), arrange nav across two columns, with aside and main in the second row
        }}
      >
        <GridItem
          area="nav"
          // This GridItem is assigned to the 'nav' area of the grid
        >

        <NavBar/> {/*  // Content of the nav area */}

        </GridItem>

         
          <GridItem
            area="aside"
            // This GridItem is assigned to the 'aside' area of the grid
            hideBelow='lg'
            // Chakra provides the hideFrom and hideBelow utilities to hide elements at specific breakpoints.
            bg="gold"
          >
            {/*  // Content of the aside area, only shown on large screens and */}
            Aside
          </GridItem>

        <GridItem
          area="main"
          // This GridItem is assigned to the 'main' area of the grid
       
        >
          <GameGrid/> {/*  // Content of the main area */}
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
// Exporting the App component as the default export
