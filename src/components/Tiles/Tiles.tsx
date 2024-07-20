import { FC, useCallback } from "react";
import { Tile } from "..";
import { PlacedTiles, TilesProps } from "./types";

const Tiles: FC<TilesProps> = ({ data, zoom, hasAParentSection, onTileClick }) => {
  const placeTiles = useCallback((): PlacedTiles => {
    let rows = 0;
    return data
      .map((person, personIndex) => {
        console.log("person: ", person);
        if (personIndex > 0) {
          rows += Math.max(data[personIndex - 1].data.length, 1);
        }
        return person.data.map((projectsPerRow, rowIndex) =>
          projectsPerRow.map((project) => (
            <Tile
              key={project.id}
              row={rowIndex + rows}
              data={project}
              zoom={zoom}
              onTileClick={onTileClick}
            />
          ))
        );
      })
      .flat(2);
  }, [data, onTileClick, zoom]);
  console.log(`Tiles ${hasAParentSection}: `, data);
  return <div>{placeTiles()}</div>;
};

export default Tiles;
