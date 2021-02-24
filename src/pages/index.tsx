import Head from 'next/head';

import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ChallengeBox } from "../components/ChallengeBox";

import { Section } from './styles';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Início | Move.it</title>
      </Head>

      <ExperienceBar />

      <Section>
        <div>
          <Profile />
          <CompletedChallenges />
          <Countdown />
        </div>

        <div>
          <ChallengeBox />
        </div>
      </Section>
    </div>
  );
}
