import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import TaskAltIcon from '@mui/icons-material/TaskAlt';

type ChooseLanguageCardProps = {
  setChosenLanguage: React.Dispatch<React.SetStateAction<string>>;
  chosenLanguage: string | undefined;
  name: string;
  image: string;
};
export default function ChooseLanguageCard({
  setChosenLanguage,
  chosenLanguage,
  name,
  image,
}: ChooseLanguageCardProps) {
  const isChosen = chosenLanguage === name;
  return (
    <Card sx={{ maxWidth: 345 }} onClick={() => setChosenLanguage(name)}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt={`${name} logo`}
          sx={{ objectFit: 'contain', bgcolor: isChosen ? 'grey.300' : 'white', bgColor: 'transparent', p: 1 }}
        />
        {isChosen && <TaskAltIcon sx={{ position: 'absolute', top: 5, right: 5, color: 'green' }} />}
      </CardActionArea>
    </Card>
  );
}
