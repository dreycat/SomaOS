import React, { FC } from 'react';

import Icon from '../Icon';
import Window from '../Window';
import useWindow from '../../hooks/useWindow';
import useIcon from '../../hooks/useIcon';

import { Coords } from '../../interfaces/coords';

interface IProps {
  name: string;
  icon: React.ReactNode;
  defaultWindowPosition: Coords;
  defaultIconPosition: Coords;
}

const Application: FC<IProps> = ({ name, icon, defaultWindowPosition, defaultIconPosition, children }) => {
  const { isOpen, handleOpen, onClose, storeWindowCoords, saveWindowPosition } = useWindow(
    defaultWindowPosition,
    `${name.toLocaleLowerCase()}_window`
  );
  const { storeIconCoords, saveIconPosition } = useIcon(defaultIconPosition, `${name.toLocaleLowerCase()}_icon`);
  return (
    <>
      <Window
        isOpen={isOpen}
        title={name}
        top={storeWindowCoords.top}
        left={storeWindowCoords.left}
        onClose={onClose}
        onSave={saveWindowPosition}
      >
        {children}
      </Window>
      <Icon
        title={name}
        top={storeIconCoords.top}
        left={storeIconCoords.left}
        onClick={handleOpen}
        onSave={saveIconPosition}
      >
        {icon}
      </Icon>
    </>
  );
};

export default Application;