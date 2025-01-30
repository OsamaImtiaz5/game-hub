import { Grid, GridItem, HStack } from "@chakra-ui/react";
import GameGrid from "./components/GameGrid";
import GenersList from "./components/GenersList";
import NavBar from "./components/NavBar/NavBar";
import { useState } from "react";
import { Genre } from "./components/hooks/useGeners";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import { Platform } from "./components/hooks/usePlatforms";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}
// Importing Grid, GridItem, and Show components from Chakra UI to create the layout and control visibility based on screen size.

function App() {
  // const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  // const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
  //   null
  // ); here we do refactoring as we have to make states vairable again and again for each query

  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
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
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
          // For large screens (lg and above), set the first column to 200px and the second column to 1fr (remaining space)
        }}
      >
        <GridItem
          area="nav"
          // This GridItem is assigned to the 'nav' area of the grid
        >
          <NavBar
            onSearch={(searchText) =>
              setGameQuery({ ...gameQuery, searchText })
            }
          />{" "}
          {/*  // Content of the nav area */}
        </GridItem>

        <GridItem
          area="aside"
          // This GridItem is assigned to the 'aside' area of the grid
          hideBelow="lg"
          // Chakra provides the hideFrom and hideBelow utilities to hide elements at specific breakpoints.
          // bg="gold"
          px={5}
        >
          {/*  // Content of the aside area, only shown on large screens and */}
          <GenersList
            selectedGenre={gameQuery.genre}
            onSelectedGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
          />
        </GridItem>

        <GridItem
          area="main"
          // This GridItem is assigned to the 'main' area of the grid
        >
          <HStack paddingLeft={2} spaceX={4}>
            <PlatformSelector
              onSelectedPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platform })
              }
              selectedPlatform={gameQuery.platform}
            />
            <SortSelector
              selectedSortOrder={gameQuery.sortOrder}
              onSelectSortOrder={(sortOrder) =>
                setGameQuery({ ...gameQuery, sortOrder })
              }
            />
          </HStack>
          <GameGrid gameQuery={gameQuery} />{" "}
          {/*  // Content of the main area */}
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
// Exporting the App component as the default export
