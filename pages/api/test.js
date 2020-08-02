import { NextApiRequest, NextApiResponse } from "next";

export default function tester(req, res) {
  res.end(
    JSON.stringify([
      {
        name: "BMW ",
        description:
          "Bayerische Motoren Werke AG, commonly known as Bavarian Motor Works, BMW or BMW AG, is a German automobile, motorcycle and engine manufacturing company founded in 1916. BMW is headquartered in Munich, Bavaria. It also owns and produces Mini cars, and is the parent company of Rolls-Royce Motor Cars",
      },
      {
        name: "Mercedes ",
        description:
          "Mercedes-Benz is both a German automotive marque and, from late 2019 onwards, a subsidiary of Daimler AG. Mercedes-Benz is known for producing luxury vehicles and commercial vehicles. The headquarters is in Stuttgart, Baden-Württemberg. The name first appeared in 1926 under Daimler-Benz",
      },
      {
        name: "Audi ",
        description:
          "Audi AG is a German automobile manufacturer that designs, engineers, produces, markets and distributes luxury vehicles. Audi is a member of the Volkswagen Group and has its roots at Ingolstadt, Bavaria, Germany. Audi-branded vehicles are produced in nine production facilities worldwide-Benz is both a German automotive marque and, from late 2019 onwards, a subsidiary of Daimler AG. Mercedes-Benz is known for producing luxury vehicles and commercial vehicles. The headquarters is in Stuttgart, Baden-Württemberg. The name first appeared in 1926 under Daimler-Benz",
      },
       
        


    ])
  );
}
