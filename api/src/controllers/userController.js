import { clerkClient } from '@clerk/clerk-sdk-node';
import { User } from '../models/userModel.js';

export async function usersync(req, res) {
  try {
    const clerkuserid = req.auth.userId;

    if (!clerkuserid) {
      res.status(404).json({
        success: false,
        message: 'Unauthenticated User.',
      });

      return;
    }
    const userid = await clerkClient.users.getUser(clerkuserid);

    const existinguser = await User.findOne({ userclerkid: clerkuserid });

    const signedindate = new Date(userid.lastSignInAt);
    const signedinexactDate = signedindate.toDateString();

    const createdatdate = new Date(userid.createdAt);
    const createdatexactDate = createdatdate.toDateString();

    if (!existinguser) {
      await User.create({
        userclerkid: clerkuserid,
        username: userid.firstName + ' ' + userid.lastName,
        emailid: userid.emailAddresses[0].emailAddress || null,
        avatarurl: userid.imageUrl,
        lastsignedin: signedinexactDate,
        createdat: createdatexactDate,
      });
    } else {
      await User.updateOne(
        { userclerkid: clerkuserid },
        { $set: { lastsignedin: signedinexactDate } },
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

export async function userstats(req, res) {
  try {
    const clerkuserid = req.auth.userId;
    if (!clerkuserid) {
      res.status(404).json({
        success: false,
        message: 'Unauthenticated user',
      });
      return;
    }

    const user = await User.findOne({ userclerkid: clerkuserid })
      .populate('usercontents')
      .populate('followers')
      .populate('following');
    if (!user) {
      res.status(404).json({
        success: false,
        message: 'User not found',
      });
      return;
    }

    res.json({
      success: true,
      message: user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: 'Something went wrong, plz try again',
    });
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
