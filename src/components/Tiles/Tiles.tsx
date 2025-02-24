import { FC, useCallback } from "react";
import { Tile } from "..";
import { PlacedTiles, TilesProps } from "./types";
import PositionsTile from "./Tile/PositionsTile";

const Tiles: FC<TilesProps> = ({ data, zoom, hasAParentSection, onTileClick, mode }) => {
  const placeTiles = useCallback((): PlacedTiles => {
    let rows = 0;
    return data
      .map((person, personIndex) => {
        if (personIndex > 0) {
          rows += Math.max(data[personIndex - 1].data.length, 1);
        }
        return person.data.map((projectsPerRow, rowIndex) => {
          // Sort by ascending start date so the tile on the right (later) is rendered last
          const sortedProjects = [...projectsPerRow].sort((a, b) => {
            return new Date(a.startDate).getTime() - new Date(b.startDate).getTime();
          });
          return sortedProjects.map((project) => {
            // Choose which Tile component to render based on mode
            const TileComponent = mode === "positions" ? PositionsTile : Tile;
            return (
              <TileComponent
                key={project.id}
                row={rowIndex + rows}
                data={project}
                zoom={zoom}
                onTileClick={onTileClick}
                mode={mode}
              />
            );
          });
        });
      })
      .flat(2);
  }, [data, onTileClick, zoom, mode]);

  return <div>{placeTiles()}</div>;
};

export default Tiles;
