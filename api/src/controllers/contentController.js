import { Content } from '../models/contentModel.js';
import { User } from '../models/userModel.js';

export async function createcontent(req, res) {
  try {
    const clerkuserid = req.auth.userId;

    if (!clerkuserid) {
      res.status(404).json({
        success: false,
        message: 'Unauthenticated User.',
      });
      return;
    }

    const userobject = await User.findOne({ userclerkid: clerkuserid });
    if (!userobject) {
      res.status(404).json({
        success: false,
        message: 'User not found',
      });
      return;
    }

    const { tags, title, content } = req.body;

    const thumbnail = req.files?.thumbnail?.[0]?.path || null;
    const contentimage = req.files?.contentimage?.[0]?.path || null;

    const date = new Date().getDate();
    const months = [
      'jan',
      'feb',
      'mar',
      'apr',
      'may',
      'jun',
      'jul',
      'aug',
      'sep',
      'oct',
      'nov',
      'dec',
    ];
    const month = months[new Date().getMonth()];
    const year = new Date().getFullYear();

    const presentdate = `${date}-${month}-${year}`;

    const result = await Content.create({
      thumbnail,
      tags,
      title,
      contentimage,
      content,
      createdat: presentdate,
      author: userobject._id,
    });

    if (!result) {
      res.status(404).json({
        success: false,
        message: 'Unable to create content',
      });
      return;
    }

    await User.updateOne({ userclerkid: clerkuserid }, { $push: { usercontents: result._id } });

    res.status(200).json({
      success: true,
      message: 'Content Created Successfully.',
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: 'Something went wrong, plz try again',
    });
  }
}
