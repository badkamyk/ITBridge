import { Box, Button, Modal, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export default function FormModal({ isModal, setIsModal }: { isModal: boolean; setIsModal: (value: boolean) => void }) {
  return (
    <Modal
      data-testid="FormModal"
      open={isModal}
      onClose={() => setIsModal(false)}
      aria-labelledby="modal-title"
      aria-describedby="Your form has been sent"
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          bgcolor: 'background.paper',
          border: '1px solid #000',
          boxShadow: 24,
          p: 3,
          textAlign: 'center',
          width: { xs: '80%', sm: '50%', md: '30%' },
        }}
      >
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Your form has been sent
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          We will contact you as soon as possible
        </Typography>
        <Button onClick={() => setIsModal(false)} sx={{ position: 'absolute', top: 0, right: 0 }}>
          <CloseIcon />
        </Button>
      </Box>
    </Modal>
  );
}
