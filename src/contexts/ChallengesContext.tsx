import { createContext, useState, useContext } from 'react';
import challenges from '../../challenges.json';

interface ChallengesProviderProps {
  children: React.ReactNode;
}

interface Challenge {
  type: 'body' | 'eye';
  description: string;
  amount: number;
};

interface ChallengesContextData {
  level: number;
  currentExperience: number;
  experienceToNextLevel: number;
  challengesCompleted: number;
  activeChallenge: Challenge;
  levelup(): void;
  startNewChallenge(): void;
  resetChallenge(): void;
}

const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({ children }: ChallengesProviderProps) {
  const [level, setLevel] = useState(0);
  const [currentExperience, setCurrentExperience] = useState(0);
  const [challengesCompleted, setChallengesCompleted] = useState(0);

  const [activeChallenge, setActiveChallenge] = useState(null);

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

  function levelup() {
    setLevel(level + 1);
  }

  function startNewChallenge() {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengeIndex];

    setActiveChallenge(challenge);
  }

  function resetChallenge() {
    setActiveChallenge(null);
  }

  return (
    <ChallengesContext.Provider
      value={{
        level,
        levelup,
        currentExperience,
        experienceToNextLevel,
        challengesCompleted,
        startNewChallenge,
        activeChallenge,
        resetChallenge
      }}
    >
      {children}
    </ChallengesContext.Provider>
  );
}

export function useChallenges(): ChallengesContextData {
  const context =  useContext(ChallengesContext);

  if (!context) {
    throw new Error('useChaççenges must be used within an ChallengesProvider');
  }

  return context;
}

