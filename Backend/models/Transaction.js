
import mongoose from 'mongoose';

const TransactionSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  status: {
    type: String,
    enum: ['pending', 'completed', 'failed', 'refunded'],
    default: 'pending'
  },
  tokens: {
    type: Number,
    required: true
  },
  amount: {
    type: Number,
    required: true 
  },
  details: {
    type: String
  },
  packageId: {
    type: String
  },
  stripeSessionId: {
    type: String,
    required: true
  },
  paymentId: {
    type: String, // Changed from required to optional
  },
  date: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

export default mongoose.model('Transaction', TransactionSchema);