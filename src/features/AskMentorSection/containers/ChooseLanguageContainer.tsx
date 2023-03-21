import { Grid } from '@mui/material';
import ChooseLanguageCard from '../components/ChooseLangaugeCard';
import { useState } from 'react';

const chooseLanguageData = [
  {
    name: 'JavaScript',
    image: './src/assets/images/js-logo.png',
  },
  {
    name: 'TypeScript',
    image: './src/assets/images/typescript.svg',
  },
  {
    name: 'Python',
    image: './src/assets/images/python.png',
  },
  {
    name: 'Java',
    image: './src/assets/images/java-logo-1.png',
  },
  {
    name: 'C++',
    image: './src/assets/images/C++.png',
  },
  {
    name: 'Go',
    image: './src/assets/images/golang-logo.png',
  },
];

export default function ChooseLanguageContainer() {
  const [chosenLanguage, setChosenLanguage] = useState('');
  return (
    <Grid container spacing={2}>
      {chooseLanguageData.map((card) => (
        <Grid key={card.name} item xs={4} sm={6} md={4}>
          <ChooseLanguageCard {...card} setChosenLanguage={setChosenLanguage} chosenLanguage={chosenLanguage} />
        </Grid>
      ))}
    </Grid>
  );
}
