import { CurrentTime } from '.';
import './styles/InfoPanel.scss';

export const InfoPanel = () => {
  return (
    <div className="info-panel">
      <CurrentTime />
    </div>
  );
};
