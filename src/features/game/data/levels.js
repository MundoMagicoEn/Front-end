export const levels = [
  {
    id: 1,
    name: "Bedroom",
    difficulty: "easy",
    image: "/images/levels/bedroom/bedroom.png",
    objects: [
      // Bed: large piece in center-bottom
      { id: "bed",    word: "BED",    translation: "cama",     top: 68, left: 50, width: 45, height: 22 },
      // Chair: right side
      { id: "chair",  word: "CHAIR",  translation: "silla",    top: 72, left: 82, width: 14, height: 22 },
      // Window: upper-left area
      { id: "window", word: "WINDOW", translation: "ventana",  top: 28, left: 20, width: 18, height: 24 },
      // Lamp: center, on the nightstand
      { id: "lamp",   word: "LAMP",   translation: "lámpara",  top: 44, left: 47, width: 8,  height: 16 }
    ]
  },
  {
    id: 2,
    name: "Kitchen",
    difficulty: "easy",
    image: "/images/levels/kitchen/kitchen.png",
    objects: [
      // Table: large surface center-bottom
      { id: "table", word: "TABLE", translation: "mesa",   top: 72, left: 50, width: 40, height: 18 },
      // Oven: right side, lower area
      { id: "oven",  word: "OVEN",  translation: "horno",  top: 68, left: 78, width: 18, height: 26 },
      // Plate: on the table center-left
      { id: "plate", word: "PLATE", translation: "plato",  top: 61, left: 44, width: 10, height: 8  },
      // Cup: on the table, right of plate
      { id: "cup",   word: "CUP",   translation: "taza",   top: 58, left: 60, width: 8,  height: 9  }
    ]
  },
  {
    id: 3,
    name: "Classroom",
    difficulty: "medium",
    image: "/images/levels/classroom/classroom.png",
    objects: [
      // Desk: large surface center-bottom
      { id: "desk",  word: "DESK",  translation: "escritorio", top: 70, left: 52, width: 38, height: 20 },
      // Clock: upper center wall
      { id: "clock", word: "CLOCK", translation: "reloj",      top: 14, left: 50, width: 12, height: 13 },
      // Book: on the desk
      { id: "book",  word: "BOOK",  translation: "libro",      top: 60, left: 57, width: 10, height: 11 },
      // Board: upper-right wall
      { id: "board", word: "BOARD", translation: "pizarrón",   top: 30, left: 79, width: 28, height: 22 }
    ]
  },
  {
    id: 4,
    name: "Street",
    difficulty: "medium",
    image: "/images/levels/street/street.png",
    objects: [
      // Car: bottom center on the road
      { id: "car",  word: "CAR",  translation: "auto",    top: 80, left: 50, width: 30, height: 16 },
      // Bus: left side, mid-height
      { id: "bus",  word: "BUS",  translation: "autobús", top: 58, left: 22, width: 32, height: 26 },
      // Tree: right side, upper-mid
      { id: "tree", word: "TREE", translation: "árbol",   top: 42, left: 80, width: 16, height: 38 },
      // Road: very bottom strip
      { id: "road", word: "ROAD", translation: "calle",   top: 92, left: 50, width: 90, height: 14 }
    ]
  },
  {
    id: 5,
    name: "Park",
    difficulty: "medium",
    image: "/images/levels/park/park.png",
    objects: [
      // Sun: upper-right corner
      { id: "sun",     word: "SUN",     translation: "sol",        top: 16, left: 79, width: 14, height: 14 },
      // Ball: center-left on the grass
      { id: "ball",    word: "BALL",    translation: "pelota",     top: 62, left: 42, width: 8,  height: 8  },
      // Bench: right side, lower
      { id: "bench",   word: "BENCH",   translation: "banco",      top: 74, left: 68, width: 26, height: 16 },
      // Bicycle: lower-left, separate zone from bench
      { id: "bicycle", word: "BICYCLE", translation: "bicicleta",  top: 83, left: 18, width: 22, height: 22 }
    ]
  },
  {
    id: 6,
    name: "Bathroom",
    difficulty: "hard",
    image: "/images/levels/bathroom/bathroom.png",
    objects: [
      // Mirror: upper-center above sink
      { id: "mirror",     word: "MIRROR",     translation: "espejo",              top: 30, left: 50, width: 22, height: 22 },
      // Towel: right-side towel bar
      { id: "towel",      word: "TOWEL",      translation: "toalla",              top: 50, left: 83, width: 12, height: 28 },
      // Soap: left of faucet on counter
      { id: "soap",       word: "SOAP",       translation: "jabón",               top: 58, left: 38, width: 9,  height: 8  },
      // Toothbrush: cup right of faucet
      { id: "toothbrush", word: "TOOTHBRUSH", translation: "cepillo de dientes",  top: 58, left: 60, width: 7,  height: 12 }
    ]
  },
  {
    id: 7,
    name: "Living Room",
    difficulty: "hard",
    image: "/images/levels/living_room/living_room.png",
    objects: [
      // Sofa: center-left, lower
      { id: "sofa",       word: "SOFA",       translation: "sofá",      top: 66, left: 35, width: 38, height: 22 },
      // Television: right side on the stand
      { id: "television", word: "TELEVISION", translation: "televisor", top: 52, left: 82, width: 22, height: 18 },
      // Rug: circular rug on the floor center
      { id: "rug",        word: "RUG",        translation: "alfombra",  top: 84, left: 50, width: 36, height: 16 },
      // Painting: upper-left wall
      { id: "painting",   word: "PAINTING",   translation: "cuadro",    top: 28, left: 47, width: 22, height: 18 }
    ]
  },
  {
    id: 8,
    name: "Supermarket",
    difficulty: "hard",
    image: "/images/levels/supermarket/supermarket.png",
    objects: [
      { id: "cart",  word: "CART",  translation: "carrito",  top: 80, left: 88, width: 10, height: 15 },
      { id: "apple", word: "APPLE", translation: "manzana",  top: 66, left: 35, width: 6,  height: 6 },
      { id: "bread", word: "BREAD", translation: "pan",      top: 62, left: 18, width: 8,  height: 6 },
      { id: "milk",  word: "MILK",  translation: "leche",    top: 32, left: 74, width: 3,  height: 5 }
    ]
  },
  {
    id: 9,
    name: "Beach",
    difficulty: "hard",
    image: "/images/levels/beach/beach.png",
    objects: [
      // Ocean: the turquoise water in the upper-center
      { id: "ocean",    word: "OCEAN",    translation: "océano",   top: 38, left: 55, width: 40, height: 18 },
      // Umbrella: right-center large striped umbrella
      { id: "umbrella", word: "UMBRELLA", translation: "sombrilla", top: 58, left: 68, width: 24, height: 28 },
      // Shell: lower-left pink shell
      { id: "shell",    word: "SHELL",    translation: "concha",    top: 83, left: 16, width: 10, height: 10 },
      // Sand: lower strip far from the shell/umbrella areas
      { id: "sand",     word: "SAND",     translation: "arena",     top: 92, left: 50, width: 50, height: 12 }
    ]
  },
    {
      id: 10,
      name: "Hospital",
      difficulty: "hard",
      image: "/images/levels/hospital/hospital.png",
      objects: [
        // Doctor: target only the doctor's head/face to avoid overlapping with the stethoscope
        { id: "doctor",       word: "DOCTOR",       translation: "doctor",           top: 35, left: 48, width: 12, height: 12 },
        // Hospital Bed: large bed center-right
        { id: "hospital_bed", word: "BED",           translation: "cama de hospital", top: 72, left: 65, width: 36, height: 26 },
        // Stethoscope: on doctor's chest/neck, now completely separate from the doctor's head hitbox
        { id: "stethoscope",  word: "STETHOSCOPE",   translation: "estetoscopio",     top: 52, left: 48, width: 10, height: 10 },
        // Ambulance: visible through window upper-left
        { id: "ambulance",    word: "AMBULANCE",     translation: "ambulancia",       top: 40, left: 20, width: 22, height: 16 }
      ]
    },
    {
      id: 11,
      name: "Restaurant",
      difficulty: "hard",
      image: "/images/levels/restaurant/restaurant.png",
      objects: [
        { id: "menu",   word: "MENU",   translation: "menú",     top: 70, left: 30, width: 40, height: 25 },
        { id: "waiter", word: "WAITER", translation: "mesero",   top: 30, left: 45, width: 15, height: 35 },
        { id: "fork",   word: "FORK",   translation: "tenedor",  top: 72, left: 20, width: 8,  height: 18 },
        { id: "knife",  word: "KNIFE",  translation: "cuchillo", top: 72, left: 70, width: 8,  height: 18 }
      ]
    },
    {
      id: 12,
      name: "Museum",
      difficulty: "hard",
      image: "/images/levels/museum/museum.png",
      objects: [
        { id: "dinosaur", word: "DINOSAUR", translation: "dinosaurio", top: 50, left: 60, width: 40, height: 40 },
        { id: "painting", word: "PAINTING", translation: "pintura",    top: 50, left: 15, width: 25, height: 25 },
        { id: "statue",   word: "STATUE",   translation: "estatua",    top: 25, left: 5,  width: 15, height: 25 },
        { id: "guard",    word: "GUARD",    translation: "guardia",    top: 40, left: 90, width: 8,  height: 20 }
      ]
    },
    {
      id: 13,
      name: "Library",
      difficulty: "hard",
      image: "/images/levels/library/library.png",
      objects: [
        { id: "bookshelf", word: "BOOKSHELF", translation: "estantería", top: 30, left: 50, width: 40, height: 30 },
        { id: "librarian", word: "LIBRARIAN", translation: "bibliotecario", top: 40, left: 35, width: 15, height: 15 },
        { id: "desk",      word: "DESK",      translation: "escritorio", top: 75, left: 25, width: 20, height: 15 },
        { id: "computer",  word: "COMPUTER",  translation: "computadora", top: 40, left: 85, width: 12, height: 12 }
      ]
    },
    {
      id: 14,
      name: "Cinema",
      difficulty: "hard",
      image: "/images/levels/cinema/cinema.png",
      objects: [
        { id: "screen",  word: "SCREEN",  translation: "pantalla", top: 20, left: 50, width: 40, height: 25 },
        { id: "popcorn", word: "POPCORN", translation: "palomitas", top: 65, left: 35, width: 5,  height: 10 },
        { id: "ticket",  word: "TICKET",  translation: "boleto",   top: 85, left: 50, width: 10, height: 5 },
        { id: "seat",    word: "SEAT",    translation: "asiento",  top: 80, left: 80, width: 20, height: 30 }
      ]
    },
    {
      id: 15,
      name: "Airport",
      difficulty: "hard",
      image: "/images/levels/airport/airport.png",
      objects: [
        { id: "airplane", word: "AIRPLANE", translation: "avión",    top: 35, left: 65, width: 30, height: 15 },
        { id: "suitcase", word: "SUITCASE", translation: "maleta",   top: 70, left: 60, width: 8,  height: 15 },
        { id: "pilot",    word: "PILOT",    translation: "piloto",   top: 65, left: 35, width: 10, height: 25 },
        { id: "passport", word: "PASSPORT", translation: "pasaporte", top: 78, left: 88, width: 5,  height: 5 }
      ]
    }
  ];
