import mongoose from 'mongoose';

const OrgSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  cep: {
    type: Number,
    required: true,
  },
  latitude: {
    type: Number,
    required: true,
  },
  longitude: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ["ONG", "CLINIC"],
    required: true,
  }
});

export default mongoose.model('Org', OrgSchema);