import jwt from 'jsonwebtoken';

const verifyToken = (req, res, next) => {
  // const token = req.header('Authorization')?.split(' ')[1]; 
  const token = req.cookies.jwt
const secret =process.env.JWT_SECRET;
  if (!token) {
    console.log("wrong token")
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }
 console.log('token verified')
  try {
    const decoded = jwt.verify(token, secret);
    req.user = decoded; // Store the decoded token payload (e.g., userId) in the request object
    next(); // Proceed to the next middleware or route handler
  } catch (err) {
    res.status(400).json({ message: 'Invalid token.' });
  }
};

export default verifyToken;
