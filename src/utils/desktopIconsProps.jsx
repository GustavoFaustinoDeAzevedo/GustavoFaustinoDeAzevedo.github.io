import { focusWindow, openWindow } from '../actions/windowActions';

// Generate props for a DesktopIcon component
export const getDesktopIconProps = (state, dispatch, id, title, icon) => ({
  id,
  title: state.language.includes('POR') ? title.por : title.eng,
  icon,
  dispatch,
  language: state.language,
  onClick: () => {
    if (title.por === 'Novo' || title.por === 'new') {
      console.log('new');
    } else if (!state.opened.includes(id)) {
      openWindow(dispatch, id);
      focusWindow(dispatch, id);
    }
  },
});
