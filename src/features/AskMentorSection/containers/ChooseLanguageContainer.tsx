import { Grid } from '@mui/material';
import ChooseLanguageCard from '../components/ChooseLangaugeCard';
import { LanguageType } from '../../store/questionSliceTypes';
import { chooseLanguageData } from '../../../shared/utils/chooseLanguageData';

export default function ChooseLanguageContainer({
  chosenLanguage,
  setChosenLanguage,
}: {
  chosenLanguage: string;
  setChosenLanguage: React.Dispatch<React.SetStateAction<LanguageType>>;
}) {
  return (
    <Grid container spacing={2} sx={{ mx: { lg: 'auto' } }}>
      {chooseLanguageData.map((card) => (
        <Grid key={card.name} item xs={4} sm={6} md={4}>
          <ChooseLanguageCard {...card} setChosenLanguage={setChosenLanguage} chosenLanguage={chosenLanguage} />
        </Grid>
      ))}
    </Grid>
  );
}
