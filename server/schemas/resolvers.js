// import user model
const { User } = require('../models');
// import sign token function from auth
const { signToken } = require('../utils/auth');

const resolvers = {
  // get a single user by either their id or their username
  Query: {
    user: async (parent, { userId }) => {
        return User.findOne({ _id: userId })
    }
  },

  Mutation: {
    addUser: async(parent, { username, email, password }) => {
        // create a user, sign a token, and send it back (to client/src/components/SignUpForm.js)
        const user = User.create({ username, email, password });
        const token = signToken(user);
        return { token, user };
    },
    // login a user, sign a token, and send it back (to client/src/components/LoginForm.js)
    login: async(parent, { email, password }) => {
        const user = await User.findOne({email});

        if (!user) {
            throw AuthenticationError
        }
        const correctPw = await profile.isCorrectPassword(password);
        if (!correctPw) {
            throw AuthenticationError
        }

        const token = signToken(user);
        return { token, user };
    },
    // save a book to a user's `savedBooks` field by adding it to the set (to prevent duplicates)
    saveBook: async(parent, {user, book}) => {
        return User.findOneAndUpdate({ _id: user._id },
            {
                $addToSet: {savedBooks: book},
            },
            {
                new: true,
                runValidators: true,
            });
    },
    removeBook: async(parent, { user, book }) => {
        return User.findOneAndUpdate({_id: user._id},
            { $pull: { savedBooks: { savedBooks: book }}}, {new: true});
    }
  }
  
  // remove a book from `savedBooks`
};

module.exports = resolvers;