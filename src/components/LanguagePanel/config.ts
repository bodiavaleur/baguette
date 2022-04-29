import {Language} from '~config/language';
import UsIcon from '~assets/languages/us.svg';
import FrIcon from '~assets/languages/fr.svg';

export const languageIcon = {
  [Language.English]: UsIcon,
  [Language.French]: FrIcon,
};

export const panelLanguages = Object.entries(Language).map(language => {
  const [title, code] = language;

  return {title, code};
});
