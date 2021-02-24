import { Container } from './styles';

export function Profile() {
  return (
    <Container>
      <img src="https://github.com/RafaelCopes.png" alt="Rafael Copes"/>

      <div>
        <strong>Rafael Copes</strong>
        <p>
          <img src="icons/level.svg" alt="Level"/>
          Level 1
        </p>
      </div>
    </Container>
  );
}
