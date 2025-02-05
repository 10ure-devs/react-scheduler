import { FC } from "react";
import { TileProps } from "./types";
import RegularTile from "./Tile";
import PositionsTile from "./PositionsTile";

const Tile: FC<TileProps> = (props) => {
  const { mode } = props;

  if (mode === "positions") {
    return <PositionsTile {...props} />;
  }

  return <RegularTile {...props} />;
};

export default Tile;
