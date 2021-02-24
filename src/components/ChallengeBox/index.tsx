import { useChallenges } from '../../contexts/ChallengesContext';

import { Container, InicializeChallenge, ActiveChallenge, ChallengeButton } from './styles';

export function ChallengeBox() {
  const { activeChallenge, resetChallenge } = useChallenges();

  return (
    <Container>
      {activeChallenge ? (
        <ActiveChallenge>
          <header>Ganhe {activeChallenge.amount} xp</header>

          <main>
            <img src={`icons/${activeChallenge.type}.svg`} />

            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>

            <footer>
              <ChallengeButton
                type="button"
                failed={Number(!!true)}
                onClick={resetChallenge}
              >
                Falhei
              </ChallengeButton>

              <ChallengeButton
                type="button"
                succeeded={Number(!!true)}
              >
                Completei
              </ChallengeButton>
            </footer>
          </main>
        </ActiveChallenge>
      ) : (
        <InicializeChallenge>
          <strong>
            Finalize um ciclo para receber um desafio
          </strong>
          <p>
            <img src="icons/level-up.svg" alt="Level Up"/>
            Avance de level completando desafios
          </p>
        </InicializeChallenge>
      )}
    </Container>
  );
}
