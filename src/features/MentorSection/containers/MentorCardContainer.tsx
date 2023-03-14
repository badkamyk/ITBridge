import { Grid } from '@mui/material';
import MentorCard from '../components/MentorCard';
import BoldHeader2 from '../../../shared/ui/Header/BoldHeader';

const cardData = [
  {
    name: 'John Doe',
    title: 'React.js specialist',
    description: "He's a senior developer with 10+ years of experience",
    url: 'https://images.unsplash.com/photo-1616766098946-e4fabb7d6da0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  },
  {
    name: 'Chad Smith',
    title: 'Angular.js specialist',
    description: "He's a senior developer with 10+ years of experience",
    url: 'https://images.unsplash.com/photo-1616766098946-e4fabb7d6da0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  },
  {
    name: 'Jesse Green',
    title: 'Vue.js specialist',
    description: "He's a senior developer with 10+ years of experience",
    url: 'https://images.unsplash.com/photo-1616766098946-e4fabb7d6da0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  },
  {
    name: 'Walter Young',
    title: 'React.js specialist',
    description: "He's a senior developer with 10+ years of experience",
    url: 'https://images.unsplash.com/photo-1616766098946-e4fabb7d6da0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  },
  {
    name: 'Franklin White',
    title: 'React.js specialist',
    description: "He's a senior developer with 10+ years of experience",
    url: 'https://images.unsplash.com/photo-1616766098946-e4fabb7d6da0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  },
];

export default function MentorCardContainer() {
  return (
    <>
      <BoldHeader2 text={'Our Mentors'} />
      <Grid container spacing={4} justifyContent={'center'} sx={{ px: 3, mt: 3 }}>
        {cardData.map((card) => (
          <Grid key={card.name} item xs={12} sm={6} md={2}>
            <MentorCard {...card} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
