export default function handler(req: any, res: any) {
  res.status(200).json({
    code: 0,
    success: true,
    result: [
      {
        id: 1,
        title: "타이틀",
        imageUrl: "jpg",
        price: "5,000",
        salePoint: "50%",
      },
      {
        id: 2,
        title: "타이틀",
        imageUrl: "jpg",
        price: "5,000",
        salePoint: "50%",
      },
    ],
  });
}
