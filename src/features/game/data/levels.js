export const levels = [
  {
    id: 1,
    name: "Bedroom",
    difficulty: "easy",
    image: "/images/levels/bedroom/bedroom.png",
    objects: [
      { id: "bed", word: "BED", translation: "cama", top: 60, left: 45 },
      { id: "chair", word: "CHAIR", translation: "silla", top: 65, left: 80 },
      { id: "window", word: "WINDOW", translation: "ventana", top: 30, left: 20 },
      { id: "lamp", word: "LAMP", translation: "lámpara", top: 43, left: 46 }
    ]
  },
  {
    id: 2,
    name: "Kitchen",
    difficulty: "easy",
    image: "/images/levels/kitchen/kitchen.png",
    objects: [
      { id: "table", word: "TABLE", translation: "mesa", top: 65, left: 50 },
      { id: "chair", word: "CHAIR", translation: "silla", top: 70, left: 75 },
      { id: "plate", word: "PLATE", translation: "plato", top: 57, left: 47 },
      { id: "cup", word: "CUP", translation: "taza", top: 55, left: 62 }
    ]
  },
  {
    id: 3,
    name: "Classroom",
    difficulty: "medium",
    image: "/images/levels/classroom/classroom.png",
    objects: [
      { id: "desk", word: "DESK", translation: "escritorio", top: 65, left: 52 },
      { id: "chair", word: "CHAIR", translation: "silla", top: 70, left: 75 },
      { id: "book", word: "BOOK", translation: "libro", top: 55, left: 55 },
      { id: "board", word: "BOARD", translation: "pizarrón", top: 30, left: 78 }
    ]
  },
  {
    id: 4,
    name: "Street",
    difficulty: "medium",
    image: "/images/levels/street/street.png",
    objects: [
      { id: "car", word: "CAR", translation: "auto", top: 80, left: 50 },
      { id: "bus", word: "BUS", translation: "autobús", top: 60, left: 22 },
      { id: "tree", word: "TREE", translation: "árbol", top: 40, left: 78 },
      { id: "road", word: "ROAD", translation: "calle", top: 90, left: 50 }
    ]
  },
  {
    id: 5,
    name: "Park",
    difficulty: "hard",
    image: "/images/levels/park/park.png",
    objects: [
      { id: "tree", word: "TREE", translation: "árbol", top: 35, left: 25 },
      { id: "bench", word: "BENCH", translation: "banco", top: 70, left: 28 },
      { id: "ball", word: "BALL", translation: "pelota", top: 72, left: 55 },
      { id: "bicycle", word: "BICYCLE", translation: "bicicleta", top: 80, left: 78 }
    ]
  }
];
