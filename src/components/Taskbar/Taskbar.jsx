import React, { useEffect, useState } from 'react';
import StartMenu from './StartMenu';
import TaskbarItems from './TaskbarItens';
import LanguageSelector from './LanguageSelector';
import Clock from './Clock';
import { useRefs } from '../../contexts/RefsContext';

const Taskbar = ({
  language,
  desktopIconsData,
  focusedWindow,
  openedWindows,
  minimizedWindows,
  onWindowMinimize,
  onWindowRestore,
  onChangeLanguage,
  history,
}) => {
  const { languageList, languageButton } = useRefs([
    'languageList',
    'languageButton',
  ]);

  const [windowsVisibility, setWindowsVisibility] = useState({
    startMenu: false,
    languageMenu: false,
  });

  // useClickOutside(languageButton, () => {
  //   toggleOpenMenuAnimation(languageList, windowsVisibility.languageMenu);
  //   toggleWindowVisibility('languageMenu');
  // });

  const toggleWindowVisibility = (window) => {
    setWindowsVisibility((prev) => ({
      ...prev,
      [window]: !prev[window],
    }));
  };

  return (
    <nav className="taskbar">
      <StartMenu
        language={language}
        isVisible={windowsVisibility.startMenu}
        toggleWindowVisibility={toggleWindowVisibility}
        history={history}
      />
      <TaskbarItems
        desktopIconsData={desktopIconsData}
        focusedWindow={focusedWindow}
        openedWindows={openedWindows}
        minimizedWindows={minimizedWindows}
        onWindowMinimize={onWindowMinimize}
        onWindowRestore={onWindowRestore}
      />
      <section className="taskbar-right">
        <LanguageSelector
          language={language}
          languageButton={languageButton}
          languageList={languageList}
          windowsVisibility={windowsVisibility}
          isVisible={windowsVisibility.languageMenu}
          toggleWindowVisibility={toggleWindowVisibility}
          onChangeLanguage={onChangeLanguage}
        />
        <Clock />
      </section>
    </nav>
  );
};

export default Taskbar;
