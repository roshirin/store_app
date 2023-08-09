import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './styles/CurrentTime.scss';

export const CurrentTime = () => {
  const { t } = useTranslation();
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const beautifyTime = (num: number) => (num < 10 ? `0${num}` : num);

  const weekDayNumber = currentTime.getDay();
  const weekDay = t(`weekDays.${weekDayNumber}`);

  const monthNumber = currentTime.getMonth();
  const month = t(`months.${monthNumber}`);

  const date = beautifyTime(currentTime.getDate());
  const year = currentTime.getFullYear();
  const hours = beautifyTime(currentTime.getHours());
  const minutes = beautifyTime(currentTime.getMinutes());

  return (
    <>
      <div>
        <div>{`${weekDay}`}</div>
        <div>{`${date} ${month} ${year}`}</div>
      </div>

      <div>
        <i className="fa-regular fa-clock clock-icon"></i>
        {`${hours}`}
        <span className="blinking-colon">:</span>
        {`${minutes}`}
      </div>
    </>
  );
};
