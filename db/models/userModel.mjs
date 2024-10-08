import mongoose from 'mongoose';

const Schema = mongoose.Schema;

// Define the user and log schema
const userSchema = {
  _id: {
    type: String,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: false,
  },
  /*
  // appends logs to user ^
  logs: { 
    action: {
      type: {
        type: String,
      },
      quantity: {
        type: String,
      },
    },
    date: {
      type: Date,
    },
  },
  */
}

// Create the model
const user = mongoose.model('user', userSchema);

// Function to add a new log
function add(userInfo) {
  // Create a new log instance
  const currentUser = new user({ 
    username: {
      type: userInfo.name,
    },
    password: {
      type: userInfo.password,
    },
  });

  /*
      _id: {
      type: id,
    },
    username: {
      type: name,
    },
    password: {
      type: password,
    },
    logs: {
      action: {
      type: type,
      quantity: quantity,
    },
      date: date,
    }
  });
  */

  save(currentUser);
}

  // Save the log instance to the database
  async function save(currentUser) {
    try {
      await currentUser.save();
      console.log('User saved successfully');
    } catch (err) {
      console.error('Error saving user:', err);
    }
  }

export default add;