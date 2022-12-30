import { Request, Response } from 'express';

const callSuccess = (req: Request, res: Response) => {
  res.json({
    data: 'success'
  });
};

export default {
  callSuccess,
};
