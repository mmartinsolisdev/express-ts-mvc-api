import mongoose, { model, Schema, Model, Document } from 'mongoose';

export interface IMember extends Document {
  name: string;
  lastname: string;
  birthdate: String;
  sex: String;
  comments: String;
  email: String;
  cellphone: Number;
  homephone: Number;
  address: String;
  status: Boolean;
  picture: String;
  emergencyContact: String;
  relationship: String;
  contactEmail: String;
  contactCellPhone: Number;
  contactHomePhone: Number;
  medicalInformation: String;
  age: Number;
}

const MemberSchema: Schema = new Schema({
  name: {type: String, required: true},
  lastname: {type: String, required: true},
  birthdate: String,
  sex: String,
  comments: String,
  email: String,
  cellphone: Number,
  homephone: Number,
  address: String,
  status: Boolean,
  picture: String,
  emergencyContact: String,
  relationship: String,
  contactEmail: String,
  contactCellPhone: Number,
  contactHomePhone: Number,
  medicalInformation: String,
  age: Number
});

//export const Member: Model<IMember> = model('Members', MemberSchema)
export const Member = model<IMember>('Members', MemberSchema);
