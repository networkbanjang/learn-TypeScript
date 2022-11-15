import { Cat } from './cats.mocking'
import { Request as Req, Response as Res } from 'express';
import express from 'express'

export const getTest = (req: Req, res: Res) => {
  res.send({ 이름: Cat[0] })
};

export const postTest = (req: Req, res: Res) => {  //req.body
  const test = req.body
  res.status(200).send(test)   //status 넣어서 send하기 

}

