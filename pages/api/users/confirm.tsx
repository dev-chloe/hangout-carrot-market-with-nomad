import client from "@/libs/server/client";
import withHandler, { ResponseType } from "@/libs/server/withHandler";
import { withIronSessionApiRoute } from "iron-session/next";
import { NextApiRequest, NextApiResponse } from "next";

async function handler (
  req:NextApiRequest, 
  res:NextApiResponse<ResponseType>,
) {
  const { token } = req.body;
  const exists = await client.token.findUnique({
    where: {
      payload: token,
    },
    // include: {user: true} > 연관된 테이블에서의 정보도 볼 수 있게 해 줌
  })
  if (!exists) res.status(404).end();
  req.session.user = {
    id: exists?.userId
  }
  await req.session.save();
  res.status(200).end();
}

export default withIronSessionApiRoute(withHandler("POST", handler), {
  cookieName: "carrotsession",
  password: `${process.env.IRON_PASSWORD}`
}) ;