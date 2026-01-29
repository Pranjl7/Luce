import { Content } from '../models/contentModel.js';
import { User } from '../models/userModel.js';

export async function fetchcontent(req, res) {
  try {
    const content = await Content.find({}).populate('author');
    res.status(200).json({
      success: true,
      message: content,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: 'Something went wrong, plz try again',
    });
  }
}

export async function fetchcontentpage(req, res) {
  try {
    const useremailid = req.params.useremailid;
    const contenttitle = req.params.contenttitle;

    if (!useremailid || !contenttitle) {
      res.status(404).json({
        success: false,
        message: 'No Page Credentials Received',
      });
      return;
    }

    const user = await User.findOne({ emailid: useremailid }).populate('usercontents');
    if (!user) {
      res.status(404).json({
        success: false,
        message: 'User not found',
      });
      return;
    }

    res.status(200).json({
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
