import { useCallback } from 'react';
import { Experience } from './components/Experience';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Journey } from './components/Journey';
import { Overview } from './components/Overview';
import { RaceStages } from './components/RaceStages';
import { RegistrationInfo } from './components/RegistrationInfo';
import { Rewards } from './components/Rewards';

const VIEW_TEAMS_SHEET_URL =
  'https://docs.google.com/spreadsheets/d/1MHFhsPbjdYo1t8LgFs0Avb7uRzvuaRyV/edit?usp=sharing&ouid=110848015832660324403&rtpof=true&sd=true';
export default function App() {
  const openTeamsSheet = useCallback(() => {
    window.open(VIEW_TEAMS_SHEET_URL, '_blank', 'noopener,noreferrer');
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero onViewTeams={openTeamsSheet} />
        <Overview />
        <Journey />
        <RaceStages />
        <Rewards />
        <Experience />
        <FinalCTA />
        <RegistrationInfo />
      </main>
      <Footer />
    </>
  );
}
