const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  description: {
    type: String,
  },
  content: {
    data: Buffer,
    contentType: String,
    required: true,
  },
});

// public string? Description { get; set; }

// public byte[] Content { get; set; }

// public PostType Type { get; set; }

// public virtual ICollection<PostLikeEntity> PostLikes { get; set; }

// public virtual ICollection<CommentEntity> Comments { get; set; }

// [NotMapped]
// public int Likes => this.PostLikes.Count;
