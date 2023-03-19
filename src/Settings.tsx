import '@releaseband/durian/dist/style.css';

import { SettingsUI } from '@releaseband/durian';
// TODO: сделать нормальный экспорт типа в библиотеке
import { SettingsProps as DURSettings } from '@releaseband/durian/dist/ui/Settings';

export type SettingsProps = DURSettings;

const Settings: React.FC<SettingsProps> = ({ cheatsURL, serverURL }) => {
  return <SettingsUI serverURL={serverURL} cheatsURL={cheatsURL} />;
};

export default Settings;
