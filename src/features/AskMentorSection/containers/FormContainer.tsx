import { useState } from 'react';
import ChooseLanguageContainer from './ChooseLanguageContainer';
import AskMentorForm from '../components/AskMentorForm';
import { LanguageType } from '../../store/questionSliceTypes';

export default function FormCardsWrapper() {
  const [chosenLanguage, setChosenLanguage] = useState<LanguageType>('js');
  return (
    <>
      <ChooseLanguageContainer chosenLanguage={chosenLanguage} setChosenLanguage={setChosenLanguage} />
      <AskMentorForm chosenLanguage={chosenLanguage} />
    </>
  );
}
