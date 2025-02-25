export default function handler(req, res) {
    res.status(200).json({ 
      message: '你好，这是一个自定义 API！',
      time: new Date().toISOString()
    });
  }