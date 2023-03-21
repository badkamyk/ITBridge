import { Grid } from '@mui/material';
import MentorCard from '../components/MentorCard';
import BoldHeader from '../../../shared/ui/Header/BoldHeader';

const cardData = [
  {
    name: 'John Doe',
    description: 'Netflix developer with 10+ years of experience',
    url: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png',
  },
  {
    name: 'Elisabeth Smith',
    description: 'Algorithms specialist working at Google',
    url: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png',
  },
  {
    name: 'Jesse Green',
    description: 'Airbnb developer with 15+ years of experience',
    url: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-mcguire.png',
  },
  {
    name: 'Walter Young',
    description: 'Software engineer working at Meta',
    url: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png',
  },
  {
    name: 'Franklin White',
    description: 'Twitter Frontend developer',
    url: 'https://plus.unsplash.com/premium_photo-1664036154109-31e0624d29c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHBob3RvJTIwZmFjZSUyMG1hbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
  },
];

export default function MentorCardContainer() {
  return (
    <>
      <BoldHeader variant="h2" text={'Our Mentors'} />
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
