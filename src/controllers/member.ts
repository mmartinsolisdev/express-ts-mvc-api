import { Member, IMember } from '../models/member';
import { Request, Response } from 'express';


const getMember = async (req: Request, res: Response) => {
  const query = { "_id": req.params.id }
  let member = await Member.findOne(query).exec()
  if (member) {
    return res.status(200).json({ member: member });
  }
  return res.status(404).json({ message: 'User not found' });
}



const getMembers = async (req: Request, res: Response) => {
  let members = await Member.find().exec()
  //console.log(members)
  if (members) {
    return res.status(200).json({ members: members });
  }
  return res.status(404).json({ message: 'User not found' });
}



const saveMember = async (req: Request, res: Response) => {
  let member: IMember = new Member({
    name: req.body.name,
    lastname: req.body.lastname,
    birthdate: req.body.birthdate,
    sex: req.body.sex,
    comments: req.body.comments,
    email: req.body.email,
    cellphone: req.body.cellphone,
    homephone: req.body.homephone,
    address: req.body.address,
    status: req.body.status,
    picture: req.body.picture,
    emergencyContact: req.body.emergencyContact,
    relationship: req.body.relationship,
    contactEmail: req.body.contactEmail,
    contactCellPhone: req.body.contactCellPhone,
    contactHomePhone: req.body.contactHomePhone,
    medicalInformation: req.body.medicalInformation
  })
  let newMember = await member.save()
  //console.log(newMember)
  if (newMember) {
    return res.status(200).json({ member: 'Member created', newMember });
  }
  return res.status(500).json({ message: 'Error to create Member' });
}



const updateMember = async (req: Request, res: Response) => {
  const query = { '_id': req.params.id }
  const update = req.body
  try {
    let data = await Member.findOneAndUpdate(query, update, { new: true })
    if (data !== null) {
      return res.status(200).json({ member: 'Member information updated', data });
    }
    return res.status(404).json({ message: 'Member not found' });
  } catch (error) {
    console.error(error)
    return res.status(500).json({ Error: 'unexpected error' });
  }
}




export default {
  getMember,
  getMembers,
  saveMember,
  updateMember
}
