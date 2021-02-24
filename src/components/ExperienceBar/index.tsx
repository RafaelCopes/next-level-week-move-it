import { useChallenges } from '../../contexts/ChallengesContext';

import { Container } from './styles';

export function ExperienceBar() {
  const { currentExperience, experienceToNextLevel } = useChallenges();

  const percentToNextLevel = Math.floor(currentExperience * 100) / experienceToNextLevel;

  return (
    <Container>
      <span>0 xp</span>
      <div>
        <div style={{width: `${percentToNextLevel}%`}} />

        <span style={{left: `${percentToNextLevel}%`}}>{currentExperience} xp</span>
      </div>
      <span>{experienceToNextLevel} xp</span>
    </Container>
  );
}
