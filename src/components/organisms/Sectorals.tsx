import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

const sectorals: { title: string; desciption: string }[] = [
  {
    title: "Pertanian dan Kehutanan",
    desciption: "Informasi iklim untuk sektor pertanian dan kehutanan."
  },

  { 
    title: "Sumber daya Air dan Penanggulangan Bencana",
    desciption: "Informasi iklim untuk sektor sumber daya air dan penanggulangan bencana."
  },
  { 
    title: "Kesehatan",
    desciption: "Informasi iklim untuk sektor kesehatan."
  },
  { 
    title: "Energi",
    desciption: "Informasi iklim untuk sektor energi."
  },
  { title: "Perencanaan dan Pembangunan",
    desciption: "Informasi iklim untuk sektorencanaan dan pembangunan."
  },
]

export function Sectorals() {
  return (
    <div className="flex flex-row gap-5">
      {sectorals.map((sectoral, index) => {
        return (
          <Card key={index} className="w-full max-w-sm">
            <CardHeader className="text-center">
              <CardTitle>{sectoral.title}</CardTitle>
              <CardDescription>{sectoral.desciption}</CardDescription>
            </CardHeader>
          </Card>
        )
      })}
    </div>
  )
}