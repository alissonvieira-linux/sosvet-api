import mongoose from 'mongoose';

const IncidentSchema = new mongoose.Schema({
  org_id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    required: true,
  }
});

export default mongoose.model('Incident', IncidentSchema);