const { db, admin } = require('./config');

// Create a new user
async function createUser(email, password) {
    try {
        console.log(`Creating user with email: ${email}`);
        const userRecord = await admin.auth().createUser({
            email,
            password
      });
  
      await db.collection('users').doc(userRecord.uid).set({
        email,
        createdAt: admin.firestore.FieldValue.serverTimestamp()
      });
  
      return { success: true, uid: userRecord.uid };
    } catch (error) {
        console.error('Error creating user:', error);
      return { success: false, error: error.message };
    }
}

// Login a user
async function loginUser(email, password) {
    try {
        const response = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.FIREBASE_API_KEY}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email,
            password,
            returnSecureToken: true
        })
        });

        const data = await response.json();

        if (!response.ok) {
        throw new Error(data.error.message);
        }

        return {
        success: true,
        user: {
            uid: data.localId,
            email: data.email,
        },
        token: data.idToken
        };
    } catch (error) {
        return { success: false, error: error.message };
    }
}

module.exports = { createUser, loginUser };