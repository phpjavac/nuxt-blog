const mongoose = require('mongoose')
const { Document, Schema, Types } = require('mongoose')

/** Article schema declaration */
const articleSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      default: '/sites/upload/cover-2.jpg',
    },
    tags: {
      type: [String],
      default: [],
    },
    views: {
      type: Number,
      default: 0,
    },
    updated_at: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: false,
    },
  }
);

// Transform document to JSON
articleSchema.set('toJSON', {
  versionKey: false,
  transform(_, ret) {
    ret.id = ret._id;
    delete ret._id;
  },
});

module.exports = mongoose.model('Article', articleSchema);
