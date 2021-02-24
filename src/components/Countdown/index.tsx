import { useState, useCallback, useEffect } from 'react';
import { useChallenges } from '../../contexts/ChallengesContext';

import { CountdownClock, CountdownButton } from './styles';

let countdownTimeout: NodeJS.Timeout;

export function Countdown() {
  const [time, setTime] = useState(0.1 * 60);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  const { startNewChallenge } = useChallenges();

  const startCountdown = useCallback(() => {
    setIsActive(true);
  }, []);

  const resetCountdown = useCallback(() => {
    clearTimeout(countdownTimeout);
    setIsActive(false);
    setTime(0.1 * 60);
  }, []);

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      setHasFinished(true);
      setIsActive(false);
      startNewChallenge();
    }
  }, [isActive, time]);

  return (
    <>
      <CountdownClock>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>

        <span>:</span>

        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </CountdownClock>

      {hasFinished ? (
        <CountdownButton
          disabled
        >
         Ciclo encerrado
        </CountdownButton>
      ) : (
        <>
          {isActive ? (
            <CountdownButton
              type="button"
              onClick={resetCountdown}
              isActive={Number(!!isActive)}
            >
              Abandonar ciclo
            </CountdownButton>
          ) : (
            <CountdownButton
              type="button"
              onClick={startCountdown}
              isActive={Number(!!isActive)}
            >
              Iniciar um ciclo
            </CountdownButton>
          )}
        </>
      )}
    </>

  );
}
