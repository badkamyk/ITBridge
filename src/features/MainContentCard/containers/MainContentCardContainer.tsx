import Box from '@mui/material/Box';
import BugReportIcon from '@mui/icons-material/BugReport';
import CodeIcon from '@mui/icons-material/Code';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import BackgroundSVG from '../components/BackgroundSVG';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import MainCard from '../components/MainCard';

const cardInfo = [
  {
    title: 'Problem with your code',
    description: "You're tired of looking at your code and not knowing what to do next",
    icon: (
      <BugReportIcon className="card-svg" sx={{ fontSize: 50, transition: 'transform .3s', color: 'primary.main' }} />
    ),
  },
  {
    title: 'Choose your programming language',
    description: 'Our mentors are experts in multiple programming languages',
    icon: <CodeIcon className="card-svg" sx={{ fontSize: 50, transition: 'transform .3s', color: 'primary.main' }} />,
  },
  {
    title: 'Ask a question',
    description: 'Feel free to ask any question you have about your code',
    icon: (
      <QuestionMarkIcon
        className="card-svg"
        sx={{ fontSize: 50, transition: 'transform .3s', color: 'primary.main' }}
      />
    ),
  },
  {
    title: 'Get an answer',
    description: 'You will get an answer from our mentors within 24 hours',
    icon: (
      <QuestionAnswerIcon
        className="card-svg"
        sx={{ fontSize: 50, transition: 'transform .3s', color: 'primary.main' }}
      />
    ),
  },
];
export default function MainContentCardContainer() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
        position: 'relative',
        pt: { xs: 2, sm: 8 },
      }}
    >
      <BackgroundSVG />
      {cardInfo.map((card, index) => {
        return <MainCard key={card.title + index} title={card.title} description={card.description} icon={card.icon} />;
      })}
    </Box>
  );
}
