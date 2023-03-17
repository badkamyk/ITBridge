import './App.css';
import HeroHeader from './features/Hero/components/HeroHeader';
import MainContentCardContainer from './features/MainContentCard/containers/MainContentCardContainer';
import TableSection from './features/ComparisonSection/components/Table';
import MentorCardContainer from './features/MentorSection/containers/MentorCardContainer';
import LanguageSectionContainer from './features/LanguagesSection/containers/LanguageSectionContainer';

function App() {
  return (
    <>
      <HeroHeader />
      <MainContentCardContainer />
      <TableSection />
      <MentorCardContainer />
      <LanguageSectionContainer />
    </>
  );
}

export default App;
