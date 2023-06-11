export default function handler(req: any, res: any) {
  res.status(200).json({
    code: 0,
    success: true,
    result: [
      {
        id: 1,
        title: "iPhone 9",
        description: "An apple mobile which is nothing like apple",
        price: 713700,
        discountPercentage: 12.96,
        country: "c1",
        category: "c01",
        brand: "c001",
        thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
      },
      {
        id: 2,
        title: "iPhone X",
        description:
          "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
        price: 1168700,
        discountPercentage: 17.94,
        country: "c1",
        category: "c01",
        brand: "c001",
        thumbnail: "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
      },
      {
        id: 3,
        title: "Samsung Universe 9",
        description:
          "Samsung's new variant which goes beyond Galaxy to the Universe",
        price: 1623700,
        discountPercentage: 15.46,
        country: "c2",
        category: "c01",
        brand: "c002",
        thumbnail: "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
      },
      {
        id: 4,
        title: "OPPOF19",
        description: "OPPO F19 is officially announced on April 2021.",
        price: 364000,
        discountPercentage: 17.91,
        country: "c2",
        category: "c01",
        brand: "c003",
        thumbnail: "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
      },
      {
        id: 5,
        title: "Huawei P30",
        description:
          "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
        price: 648700,
        discountPercentage: 10.58,
        country: "c2",
        category: "c01",
        brand: "c003",
        thumbnail: "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
      },
      {
        id: 6,
        title: "MacBook Pro",
        description:
          "MacBook Pro 2021 with mini-LED display may launch between September, November",
        price: 2273700,
        discountPercentage: 11.02,
        country: "c1",
        category: "c02",
        brand: "c001",
        thumbnail: "https://i.dummyjson.com/data/products/6/thumbnail.png",
      },
      {
        id: 7,
        title: "Samsung Galaxy Book",
        description:
          "Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched",
        price: 1948700,
        discountPercentage: 0,
        country: "c2",
        category: "c02",
        brand: "c002",
        thumbnail: "https://i.dummyjson.com/data/products/7/thumbnail.jpg",
      },
      {
        id: 8,
        title: "Microsoft Surface Laptop 4",
        description:
          "Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.",
        price: 1948700,
        discountPercentage: 10.23,
        country: "c1",
        category: "c02",
        brand: "c004",
        thumbnail: "https://i.dummyjson.com/data/products/8/thumbnail.jpg",
      },
      {
        id: 9,
        title: "Infinix INBOOK",
        description:
          "Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey – 1 Year Warranty",
        price: 1428700,
        discountPercentage: 11.83,
        country: "c2",
        category: "c02",
        brand: "c004",
        thumbnail: "https://i.dummyjson.com/data/products/9/thumbnail.jpg",
      },
      {
        id: 10,
        title: "HP Pavilion 15-DK1056WM",
        description:
          "HP Pavilion 15-DK1056WM Gaming Laptop 10th Gen Core i5, 8GB, 256GB SSD, GTX 1650 4GB, Windows 10",
        price: 1428700,
        discountPercentage: 0,
        country: "c1",
        category: "c02",
        brand: "c004",
        thumbnail: "https://i.dummyjson.com/data/products/10/thumbnail.jpeg",
      },
      {
        id: 11,
        title: "perfume Oil",
        description:
          "Mega Discount, Impression of Acqua Di Gio by GiorgioArmani concentrated attar perfume Oil",
        price: 16900,
        discountPercentage: 0,
        country: "c1",
        category: "c04",
        brand: "c005",
        thumbnail: "https://i.dummyjson.com/data/products/11/thumbnail.jpg",
      },
      {
        id: 12,
        title: "Brown Perfume",
        description: "Royal_Mirage Sport Brown Perfume for Men & Women - 120ml",
        price: 52000,
        discountPercentage: 15.66,
        country: "c2",
        category: "c04",
        brand: "c005",
        thumbnail: "https://i.dummyjson.com/data/products/12/thumbnail.jpg",
      },
      {
        id: 13,
        title: "Fog Scent Xpressio Perfume",
        description:
          "Product details of Best Fog Scent Xpressio Perfume 100ml For Men cool long lasting perfumes for Men",
        price: 16900,
        discountPercentage: 8.14,
        country: "c1",
        category: "c04",
        brand: "c006",
        thumbnail: "https://i.dummyjson.com/data/products/13/thumbnail.webp",
      },
      {
        id: 14,
        title: "Non-Alcoholic Concentrated Perfume Oil",
        description:
          "Original Al Munakh® by Mahal Al Musk | Our Impression of Climate | 6ml Non-Alcoholic Concentrated Perfume Oil",
        price: 156000,
        discountPercentage: 15.6,
        country: "c1",
        category: "c04",
        brand: "c006",
        thumbnail: "https://i.dummyjson.com/data/products/14/thumbnail.jpg",
      },
      {
        id: 15,
        title: "Eau De Perfume Spray",
        description:
          "Genuine Al-Rehab spray perfume from UAE/Saudi Arabia/Yemen High Quality",
        price: 39000,
        discountPercentage: 10.99,
        country: "c1",
        category: "c04",
        brand: "c007",
        thumbnail: "https://i.dummyjson.com/data/products/15/thumbnail.jpg",
      },
      {
        id: 16,
        title: "Hyaluronic Acid Serum",
        description:
          "L'OrÃ©al Paris introduces Hyaluron Expert Replumping Serum formulated with 1.5% Hyaluronic Acid",
        price: 24700,
        discountPercentage: 13.31,
        country: "c3",
        category: "c03",
        brand: "c005",
        thumbnail: "https://i.dummyjson.com/data/products/16/thumbnail.jpg",
      },
      {
        id: 17,
        title: "Tree Oil 30ml",
        description:
          "Tea tree oil contains a number of compounds, including terpinen-4-ol, that have been shown to kill certain bacteria,",
        price: 15600,
        discountPercentage: 0,
        country: "c3",
        category: "c03",
        brand: "c007",
        thumbnail: "https://i.dummyjson.com/data/products/17/thumbnail.jpg",
      },
      {
        id: 18,
        title: "Oil Free Moisturizer 100ml",
        description:
          "Dermive Oil Free Moisturizer with SPF 20 is specifically formulated with ceramides, hyaluronic acid & sunscreen.",
        price: 52000,
        discountPercentage: 13.1,
        country: "c3",
        category: "c03",
        brand: "c007",
        thumbnail: "https://i.dummyjson.com/data/products/18/thumbnail.jpg",
      },
      {
        id: 19,
        title: "Skin Beauty Serum.",
        description:
          "Product name: rorec collagen hyaluronic acid white face serum riceNet weight: 15 m",
        price: 59800,
        discountPercentage: 10.68,
        country: "c3",
        category: "c03",
        brand: "c005",
        thumbnail: "https://i.dummyjson.com/data/products/19/thumbnail.jpg",
      },
      {
        id: 20,
        title: "Freckle Treatment Cream- 15gm",
        description:
          "Fair & Clear is Pakistan's only pure Freckle cream which helpsfade Freckles, Darkspots and pigments. Mercury level is 0%, so there are no side effects.",
        price: 91000,
        discountPercentage: 16.99,
        country: "c3",
        category: "c03",
        brand: "c007",
        thumbnail: "https://i.dummyjson.com/data/products/20/thumbnail.jpg",
      },
      {
        id: 21,
        title: "Daal Masoor 500 grams",
        description:
          "Fine quality Branded Product Keep in a cool and dry place",
        price: 26000,
        discountPercentage: 0,
        country: "c2",
        category: "c05",
        brand: "c005",
        thumbnail: "https://i.dummyjson.com/data/products/21/thumbnail.png",
      },
      {
        id: 22,
        title: "Elbow Macaroni - 400 gm",
        description:
          "Product details of Bake Parlor Big Elbow Macaroni - 400 gm",
        price: 18200,
        discountPercentage: 15.58,
        country: "c2",
        category: "c05",
        brand: "c007",
        thumbnail: "https://i.dummyjson.com/data/products/22/thumbnail.jpg",
      },
      {
        id: 23,
        title: "Orange Essence Food Flavou",
        description:
          "Specifications of Orange Essence Food Flavour For Cakes and Baking Food Item",
        price: 18200,
        discountPercentage: 0,
        country: "c2",
        category: "c05",
        brand: "c005",
        thumbnail: "https://i.dummyjson.com/data/products/23/thumbnail.jpg",
      },
      {
        id: 24,
        title: "cereals muesli fruit nuts",
        description:
          "original fauji cereal muesli 250gm box pack original fauji cereals muesli fruit nuts flakes breakfast cereal break fast faujicereals cerels cerel foji fouji",
        price: 59800,
        discountPercentage: 16.8,
        country: "c2",
        category: "c05",
        brand: "c008",
        thumbnail: "https://i.dummyjson.com/data/products/24/thumbnail.jpg",
      },
      {
        id: 25,
        title: "Gulab Powder 50 Gram",
        description:
          "Dry Rose Flower Powder Gulab Powder 50 Gram • Treats Wounds",
        price: 91000,
        discountPercentage: 13.58,
        country: "c2",
        category: "c05",
        brand: "c006",
        thumbnail: "https://i.dummyjson.com/data/products/25/thumbnail.jpg",
      },
      {
        id: 26,
        title: "Plant Hanger For Home",
        description:
          "Boho Decor Plant Hanger For Home Wall Decoration Macrame Wall Hanging Shelf",
        price: 53300,
        discountPercentage: 17.86,
        country: "c1",
        category: "c05",
        brand: "c006",
        thumbnail: "https://i.dummyjson.com/data/products/26/thumbnail.jpg",
      },
      {
        id: 27,
        title: "Flying Wooden Bird",
        description:
          "Package Include 6 Birds with Adhesive Tape Shape: 3D Shaped Wooden Birds Material: Wooden MDF, Laminated 3.5mm",
        price: 66300,
        discountPercentage: 15.58,
        country: "c1",
        category: "c05",
        brand: "c008",
        thumbnail: "https://i.dummyjson.com/data/products/27/thumbnail.webp",
      },
      {
        id: 28,
        title: "3D Embellishment Art Lamp",
        description:
          "3D led lamp sticker Wall sticker 3d wall art light on/off button cell operated (included)",
        price: 26000,
        discountPercentage: 16.49,
        country: "c1",
        category: "c05",
        brand: "c008",
        thumbnail: "https://i.dummyjson.com/data/products/28/thumbnail.jpg",
      },
      {
        id: 29,
        title: "Handcraft Chinese style",
        description:
          "Handcraft Chinese style art luxury palace hotel villa mansion home decor ceramic vase with brass fruit plate",
        price: 78000,
        discountPercentage: 15.34,
        country: "c1",
        category: "c05",
        brand: "c006",
        thumbnail: "https://i.dummyjson.com/data/products/29/thumbnail.webp",
      },
      {
        id: 30,
        title: "Key Holder",
        description:
          "Attractive DesignMetallic materialFour key hooksReliable & DurablePremium Quality",
        price: 39000,
        discountPercentage: 0,
        country: "c1",
        category: "c05",
        brand: "c008",
        thumbnail: "https://i.dummyjson.com/data/products/30/thumbnail.jpg",
      },
    ],
  });
}
