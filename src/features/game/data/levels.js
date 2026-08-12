export const levels = [
  {
    id: 1,
    name: "Bedroom",
    difficulty: "easy",
    image: "/images/levels/bedroom/bedroom.png",
    objects: [
      { id: "bed", word: "BED", translation: "cama", top: 60, left: 45, width: 35, height: 25 },
      { id: "chair", word: "CHAIR", translation: "silla", top: 65, left: 80, width: 15, height: 25 },
      { id: "window", word: "WINDOW", translation: "ventana", top: 30, left: 20, width: 20, height: 30 },
      { id: "lamp", word: "LAMP", translation: "lámpara", top: 43, left: 46, width: 10, height: 15 }
    ]
  },
  {
    id: 2,
    name: "Kitchen",
    difficulty: "easy",
    image: "/images/levels/kitchen/kitchen.png",
    objects: [
      { id: "table", word: "TABLE", translation: "mesa", top: 65, left: 50, width: 40, height: 25 },
      { id: "oven", word: "OVEN", translation: "horno", top: 70, left: 75, width: 20, height: 30 },
      { id: "plate", word: "PLATE", translation: "plato", top: 57, left: 47, width: 12, height: 8 },
      { id: "cup", word: "CUP", translation: "taza", top: 55, left: 62, width: 10, height: 10 }
    ]
  },
  {
    id: 3,
    name: "Classroom",
    difficulty: "medium",
    image: "/images/levels/classroom/classroom.png",
    objects: [
      { id: "desk", word: "DESK", translation: "escritorio", top: 65, left: 52, width: 35, height: 25 },
      { id: "clock", word: "CLOCK", translation: "reloj", top: 15, left: 50, width: 15, height: 15 },
      { id: "book", word: "BOOK", translation: "libro", top: 55, left: 55, width: 12, height: 12 },
      { id: "board", word: "BOARD", translation: "pizarrón", top: 30, left: 78, width: 30, height: 25 }
    ]
  },
  {
    id: 4,
    name: "Street",
    difficulty: "medium",
    image: "/images/levels/street/street.png",
    objects: [
      { id: "car", word: "CAR", translation: "auto", top: 80, left: 50, width: 35, height: 20 },
      { id: "bus", word: "BUS", translation: "autobús", top: 60, left: 22, width: 35, height: 30 },
      { id: "tree", word: "TREE", translation: "árbol", top: 40, left: 78, width: 20, height: 40 },
      { id: "road", word: "ROAD", translation: "calle", top: 90, left: 50, width: 100, height: 20 }
    ]
  },
  {
    id: 5,
    name: "Park",
    difficulty: "medium",
    image: "/images/levels/park/park.png",
    objects: [
      { id: "sun", word: "SUN", translation: "sol", top: 15, left: 80, width: 15, height: 15 },
      { id: "bench", word: "BENCH", translation: "banco", top: 70, left: 28, width: 30, height: 20 },
      { id: "ball", word: "BALL", translation: "pelota", top: 72, left: 55, width: 10, height: 10 },
      { id: "bicycle", word: "BICYCLE", translation: "bicicleta", top: 80, left: 78, width: 25, height: 25 }
    ]
  },
  {
    id: 6,
    name: "Bathroom",
    difficulty: "hard",
    image: "/images/levels/bathroom/bathroom.png",
    objects: [
      { id: "mirror", word: "MIRROR", translation: "espejo", top: 35, left: 50, width: 25, height: 25 },
      { id: "towel", word: "TOWEL", translation: "toalla", top: 45, left: 20, width: 15, height: 30 },
      { id: "soap", word: "SOAP", translation: "jabón", top: 55, left: 35, width: 10, height: 10 },
      { id: "toothbrush", word: "TOOTHBRUSH", translation: "cepillo de dientes", top: 55, left: 65, width: 8, height: 15 }
    ]
  },
  {
    id: 7,
    name: "Living Room",
    difficulty: "hard",
    image: "/images/levels/living_room/living_room.png",
    objects: [
      { id: "sofa", word: "SOFA", translation: "sofá", top: 65, left: 50, width: 40, height: 25 },
      { id: "television", word: "TELEVISION", translation: "televisor", top: 50, left: 80, width: 25, height: 20 },
      { id: "rug", word: "RUG", translation: "alfombra", top: 85, left: 50, width: 50, height: 15 },
      { id: "painting", word: "PAINTING", translation: "cuadro", top: 30, left: 50, width: 25, height: 20 }
    ]
  },
  {
    id: 8,
    name: "Supermarket",
    difficulty: "hard",
    image: "/images/levels/supermarket/supermarket.png",
    objects: [
      { id: "cart", word: "CART", translation: "carrito", top: 75, left: 50, width: 25, height: 30 },
      { id: "apple", word: "APPLE", translation: "manzana", top: 55, left: 30, width: 10, height: 10 },
      { id: "bread", word: "BREAD", translation: "pan", top: 55, left: 70, width: 15, height: 12 },
      { id: "milk", word: "MILK", translation: "leche", top: 35, left: 70, width: 10, height: 15 }
    ]
  },
  {
    id: 9,
    name: "Beach",
    difficulty: "hard",
    image: "/images/levels/beach/beach.png",
    objects: [
      { id: "sand", word: "SAND", translation: "arena", top: 85, left: 50, width: 100, height: 25 },
      { id: "ocean", word: "OCEAN", translation: "océano", top: 45, left: 50, width: 100, height: 20 },
      { id: "umbrella", word: "UMBRELLA", translation: "sombrilla", top: 55, left: 30, width: 30, height: 35 },
      { id: "shell", word: "SHELL", translation: "concha", top: 85, left: 20, width: 10, height: 10 }
    ]
  },
  {
    id: 10,
    name: "Hospital",
    difficulty: "hard",
    image: "/images/levels/hospital/hospital.png",
    objects: [
      { id: "doctor", word: "DOCTOR", translation: "doctor", top: 50, left: 45, width: 20, height: 40 },
      { id: "hospital_bed", word: "BED", translation: "cama de hospital", top: 70, left: 70, width: 40, height: 30 },
      { id: "stethoscope", word: "STETHOSCOPE", translation: "estetoscopio", top: 45, left: 40, width: 10, height: 15 },
      { id: "ambulance", word: "AMBULANCE", translation: "ambulancia", top: 40, left: 20, width: 25, height: 20 }
    ]
  }
];
