import JS from '../../../assets/images/js.png';
import Go from '../../../assets/images/golang.png';
import Java from '../../../assets/images/java.png';
import Py from '../../../assets/images/python.png';
import TypeScript from '../../../assets/images/typeScript.png';
import CP from '../../../assets/images/C++.png';
import { Box } from '@mui/material';

const languageImgs = [JS, Go, Java, Py, TypeScript, CP];
const transformCSS = [
  'rotateX(90deg) translateZ(125px)',
  'translateZ(125px)',
  ' rotateY(90deg) translateZ(125px)',
  'rotateY(180deg) translateZ(125px)',
  'rotateY(-90deg) translateZ(125px)',
  'rotateX(-90deg) translateZ(125px)',
];

export default function Cube() {
  return (
    <Box
      sx={{
        width: '100%',
        mt: '5rem',
        ml: '9rem',
        '-webkit-perspective': '750px',
        display: { xs: 'none', md: 'block' },
      }}
    >
      <Box
        sx={{
          position: 'relative',
          top: '100px',
          margin: '0% auto',
          width: '250px',
          height: '250px',
          animation: 'spin 20s infinite linear',
          transformStyle: 'preserve-3d',
        }}
      >
        {languageImgs.map((language, index) => (
          <Box
            key={index}
            sx={{
              position: 'absolute',
              width: '250px',
              height: '250px',
              border: '1px solid #333',
              borderRadius: '4px',
              transition: '-webkit-transform 2s',
              transform: transformCSS[index],
            }}
          >
            <Box
              component={'img'}
              src={language}
              alt=""
              sx={{
                opacity: 0.8,
                transition: 'opacity 1s',
                width: '100%',
                height: '100%',
              }}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
}
