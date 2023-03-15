import Box from '@mui/material/Box';
import JavascriptIcon from '@mui/icons-material/Javascript';
import BackgroundSVG from '../components/BackgroundSVG';
import MainCard from '../components/MainCard';

const cardInfo = [
  {
    title: 'React',
    description: 'We will start with the basics of React and then move on to more advanced topics',
    icon: (
      <JavascriptIcon className="card-svg" sx={{ fontSize: 50, transition: 'transform .3s', color: 'primary.main' }} />
    ),
  },
  {
    title: 'Angular',
    description: 'Angular lessons will be taught by a senior developer with 10+ years of experience',
    icon: (
      <JavascriptIcon className="card-svg" sx={{ fontSize: 50, transition: 'transform .3s', color: 'primary.main' }} />
    ),
  },
  {
    title: 'Svelte',
    description: 'Modern approach to building web applications, with less boilerplate and a smaller learning curve',
    icon: (
      <JavascriptIcon className="card-svg" sx={{ fontSize: 50, transition: 'transform .3s', color: 'primary.main' }} />
    ),
  },
  {
    title: 'Vue',
    description: 'Lessons are structured in a way that will help you learn Vue in a short period of time',
    icon: (
      <JavascriptIcon className="card-svg" sx={{ fontSize: 50, transition: 'transform .3s', color: 'primary.main' }} />
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
