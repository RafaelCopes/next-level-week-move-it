import { useChallenges } from '../../contexts/ChallengesContext';

import { Container } from './styles';

export function CompletedChallenges() {
  const { challengesCompleted } = useChallenges();

  return (
    <Container>
      <span>Desafios completos</span>
      <span>{challengesCompleted}</span>
    </Container>
  );
}
