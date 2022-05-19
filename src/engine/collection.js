//Material collection
let dbMaterial = {
  35001: {
    Name: "Aterramento GD-12",
    Tag: 35001,
    Materials: [
      {
        Count: 2,
        Unit: "UN",
        Material: "SS316",
        Name: "Earth Boss",
        Id: 350001,
      },
      { Count: 2, Unit: "UN", Material: "SS316", Name: "M10 Nut", Id: 350002 },
      {
        Count: 2,
        Unit: "UN",
        Material: "SS316",
        Name: "M10 Flat Washer",
        Id: 350003,
      },
      {
        Count: 1,
        Unit: "UN",
        Material: "SS316",
        Name: "M10 Star Washer",
        Id: 350004,
      },
      { Count: 1, Unit: "UN", Material: "SS316", Name: "M10 Stud", Id: 350005 },
      {
        Count: 1,
        Unit: "UN",
        Material: "COPPER",
        Name: "Crimp Lug 10-70mm²",
        Id: 350006,
      },
      {
        Count: 2,
        Unit: "M",
        Material: "COPPER",
        Name: "Cable 16mm²",
        Id: 350007,
      },
    ],
  },
  35002: {
    Name: "Aterramento GD-15",
    Tag: 35002,
    Materials: [
      { Count: 1, Unit: "UN", Material: "SS316", Name: "M10 Nut", Id: 350002 },
      {
        Count: 2,
        Unit: "UN",
        Material: "SS316",
        Name: "M10 Flat Washer",
        Id: 350003,
      },
      {
        Count: 1,
        Unit: "UN",
        Material: "SS316",
        Name: "M10 Star Washer",
        Id: 350004,
      },
      { Count: 1, Unit: "UN", Material: "SS316", Name: "M10 Stud", Id: 350005 },
      {
        Count: 1,
        Unit: "UN",
        Material: "COPPER",
        Name: "Crimp Lug 10-70mm²",
        Id: 350006,
      },
      {
        Count: 1,
        Unit: "UN",
        Material: "COPPER",
        Name: "Flat Bar 50x5mm",
        Id: 350007,
      },
    ],
  },
  35003: {
    Name: "Anel de Equipotêncialização GD-01",
    Tag: 35003,
    Materials: [
      {
        Count: 1,
        Unit: "PÇ",
        Material: "COPEER",
        Name: 'Haste de Aterramento 5/8" X 3000mm',
        Id: 350002,
      },
      {
        Count: 1,
        Unit: "PÇ",
        Material: "PVC",
        Name: "Caixa de Inspeção de Aterramento",
        Id: 350003,
      },
      {
        Count: 1,
        Unit: "PÇ",
        Material: "SS316",
        Name: "Conector de Aterramento GTDU2C 3/8” IPS 8-4",
        Id: 350004,
      },
    ],
  },
  34001: {
    Name: "Junction Box PW-01",
    Tag: 34001,
    Materials: [
      {
        Count: 1,
        Unit: "PÇ",
        Material: "SS316",
        Name: "Junction Box IP65 300x300x300mm",
        Id: 360002,
      },
      {
        Count: 1,
        Unit: "PÇ",
        Material: "PVC",
        Name: "Prensa Cabo M25mm",
        Id: 360003,
      },
      {
        Count: 1,
        Unit: "PÇ",
        Material: "SS316",
        Name: "Parafuso de Fixação",
        Id: 360004,
      },
      {
        Count: 1,
        Unit: "PÇ",
        Material: "SS316",
        Name: "Porca Sextavada M10",
        Id: 360005,
      },
      {
        Count: 1,
        Unit: "PÇ",
        Material: "SS316",
        Name: "Arruela Plana M10",
        Id: 360006,
      },
    ],
  },
};

//Export parser material function
export default dbMaterial;
