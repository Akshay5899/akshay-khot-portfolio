import mongoose, { Schema, Document, Model } from 'mongoose';

export interface ILead extends Document {
  email: string;
  source: string;
  createdAt: Date;
}

const LeadSchema: Schema = new Schema({
  email: { type: String, required: true, trim: true, lowercase: true },
  source: { type: String, default: 'newsletter', trim: true },
  createdAt: { type: Date, default: Date.now },
});

export const Lead: Model<ILead> =
  mongoose.models.Lead || mongoose.model<ILead>('Lead', LeadSchema);
