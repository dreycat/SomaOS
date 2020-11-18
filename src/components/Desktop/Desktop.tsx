import React, { FC } from 'react';

import Taskbar from '../Taskbar';
import AudioPlayerApp from '../Apps/AudioPlayerApp';
import ConsoleApp from '../Apps/ConsoleApp';
import ToDoApp from '../Apps/ToDoApp';
import MinesApp from '../Apps/MinesApp';
import SettingsApp from '../Apps/SettingsApp';
import DungeonApp from '../Apps/DungeonApp';
import ExplorerApp from '../Apps/ExplorerApp';
import ScreensaverApp from '../Apps/ScreensaverApp';
import ContexMenu from '../ContextMenu';
import styles from './Desktop.module.css';
import NotepadApp from '../Apps/NotepadApp';
import VideoPlayerApp from '../Apps/VideoPlayerApp';

const Desktop: FC = () => (
  <div className={styles.main}>
    <Taskbar />
    <ExplorerApp />
    <AudioPlayerApp />
    <ConsoleApp />
    <ToDoApp />
    <MinesApp />
    <SettingsApp />
    <DungeonApp />
    <ScreensaverApp />
    <ContexMenu />
    <NotepadApp />
    <VideoPlayerApp />
  </div>
);

export default Desktop;
