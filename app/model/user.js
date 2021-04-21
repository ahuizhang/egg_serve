'use strict';
module.exports = app => {
  const mongoose = app.mongoose;
  const UserSchema = new mongoose.Schema({
    mobile: { type: String, unique: true, required: true },
    password: { type: String, unique: true },
    realName: { type: String, unique: true },
    avatar: { type: String, default: 'https://pixabay.com/zh/vectors/smiley-emoticon-happy-face-icon-1635449/' },
    extra: { type: mongoose.Schema.Types.Mixed },
    createdAt: { type: Date, default: Date.now },
  });
  return mongoose.model('User', UserSchema);
};
