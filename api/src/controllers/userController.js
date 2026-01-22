import { clerkClient } from '@clerk/clerk-sdk-node';
import { User } from '../models/userModel.js';

export async function usersync(req, res) {
  try {
    const clerkuserid = req.auth.userId;

    if (!clerkuserid) {
      res.status(404).json({
        success: false,
        message: 'UnAuthenticated User.',
      });

      return;
    }
    const userid = await clerkClient.users.getUser(clerkuserid);

    const existinguser = await User.findOne({ userclerkid: clerkuserid });

    if (!existinguser) {
      await User.create({
        userclerkid: clerkuserid,
        username: userid.fullName,
        emailid: userid.emailAddresses[0].emailAddress || null,
        avatarurl: userid.imageUrl,
        lastsignedin: new Date(userid.lastSignInAt),
        createdat: new Date(userid.createdAt),
      });
    } else {
      await User.updateOne(
        { userclerkid: clerkuserid },
        { $set: { lastsignedin: new Date(userid.lastSignInAt) } },
      );
    }

    res.status(200).json({
      success: true,
      message: 'User Signin',
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: 'Error Occured While User Signin',
    });
  }
}

export function userbookmarks(req, res) {
  try {
    res.json({
      success: true,
      message: 'User bookmarks',
    });
  } catch (error) {
    console.log(error);
  }
}

export function userprofile(req, res) {
  try {
    res.json({
      success: true,
      message: 'User Profile',
    });
  } catch (error) {
    console.log(error);
  }
}

export function userfollowing(req, res) {
  try {
    res.json({
      success: true,
      message: 'User Following',
    });
  } catch (error) {
    console.log(error);
  }
}
