import { NextApiRequest, NextApiResponse } from "next";

// eslint-disable-next-line import/no-anonymous-default-export
export default (request: NextApiRequest, response: NextApiResponse) => {
  const users = [
    { id: 1, name: 'Alfiado' },
    { id: 2, name: 'Constantino' },
    { id: 3, name: 'Ngana' },
  ]

  return response.json(users)
}