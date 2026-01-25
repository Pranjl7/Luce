import { Content } from '../models/contentModel.js';

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

export async function fetchcontentpage(req, res){
  try {
    
  } catch (error) {
    console.log(error)
    res.status(500).json({
      success: false,
      message: 'Something went wrong, plz try again',
    });
  }
}