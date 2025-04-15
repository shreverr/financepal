import { NextFunction, Request, RequestHandler, Response } from "express";
import * as chatService from '../service/chat.service'

export const sendChat: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const response = chatService.getChatResponse(req.body.message)

    response.pipeDataStreamToResponse(res, {
      getErrorMessage: (error: unknown) => { throw error },
    })
  } catch (error) {
    next(error);
  }
};
