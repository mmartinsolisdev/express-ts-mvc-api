import express from 'express';
import memberController from '../controllers/member';


const router = express.Router();

// Rutas Members
router.get('/getMembers', memberController.getMembers);
router.get('/getMember/:id', memberController.getMember);
router.post('/saveMember', memberController.saveMember);
router.put('/updateMember/:id', memberController.updateMember);


/*export default {
  router
}*/

export { router as Routes }
