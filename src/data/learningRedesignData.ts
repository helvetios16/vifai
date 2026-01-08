export interface Participant {
  id: string
  description: string
  interviewer: string
}

export interface Need {
  id: number
  title: string
  description: string
}

export interface Interview {
  user: string
  link: string
}

export interface LowFiPrototype {
  id: number
  src: string
  alt: string
}

export interface UserTest {
  id: number
  userImgSrc: string
  userName: string
  description: string
  interviewLink: string
}

export const participants: Participant[] = [
  {
    id: 'A',
    description:
      'Un estudiante de cuarto ciclo de computación que recién está aprendiendo algoritmos de ordenamiento.',
    interviewer: 'Jose',
  },
  {
    id: 'B',
    description:
      'Un estudiante de computación de tercer año de la carrera que ya culminó el curso.',
    interviewer: 'Johan',
  },
  {
    id: 'C',
    description:
      'Un estudiante de computación de cuarto o quinto año que se encuentra preparándose para entrevistas técnicas.',
    interviewer: 'Sebastian',
  },
  {
    id: 'D',
    description: 'Un estudiante de segundo ciclo que ya vio algunos algoritmos de ordenamiento.',
    interviewer: 'Wilson',
  },
]

export const needs: Need[] = [
  {
    id: 1,
    title: 'Contexto y Relevancia',
    description:
      'Los estudiantes necesitan entender por qué se ordenan datos, en qué contextos reales se aplica y cómo impacta en la eficiencia de sistemas.',
  },
  {
    id: 2,
    title: 'Explicación Abstracta',
    description:
      'Necesitan poder explicar con sus propias palabras cómo funciona un algoritmo, sin depender del código fuente.',
  },
  {
    id: 3,
    title: 'Agrupación por Estrategia',
    description:
      'Requieren detectar similitudes como “divide y vencerás”, “intercambios sucesivos”, “uso de pivotes”, etc., para agrupar algoritmos por estrategia.',
  },
  {
    id: 4,
    title: 'Toma de Decisiones',
    description:
      'Deben aprender a elegir el algoritmo adecuado según el contexto (memoria, tiempo, tipo de datos), lo que requiere abstraer sus ventajas y limitaciones.',
  },
  {
    id: 5,
    title: 'Conexión Cotidiana',
    description:
      'Necesitan analogías como “ordenar cartas”, “organizar libros”, “filtrar por tamaño” para conectar el algoritmo con experiencias cotidianas.',
  },
  {
    id: 6,
    title: 'Experimentación Activa',
    description:
      'Ellos necesitan analizar cómo podrían mejorar la implementación, o si se les ocurre resolver el problema de ordenamiento de otra manera diferente.',
  },
  {
    id: 7,
    title: 'Consolidación del Aprendizaje',
    description:
      'Los estudiantes necesitan consolidar los conocimientos adquiridos mediante pruebas prácticas que les permitan aplicar, evaluar y reflexionar sobre lo aprendido.',
  },
  {
    id: 8,
    title: 'Ver explícitamente cuándo se alcanza el caso base',
    description:
      'Necesitan una señal visual CLARA de cuándo un subarray alcanza tamaño 1 (caso base), porque sin esto no entienden cuándo termina la división y comienza el merge.',
  },
  {
    id: 9,
    title: 'Ver el call stack con numeración de pasos',
    description:
      'Necesitan ver el call stack como una pila vertical que muestra el ORDEN temporal de ejecución (qué llamada ocurre primero, qué llamada retorna primero), porque sin esto no pueden predecir el flujo del algoritmo recursivo.',
  },
]

export const interviews: Interview[] = [
  {
    user: 'A',
    link: 'https://drive.google.com/file/d/1PbS-Kfx3yotUwupkS18m1GR8L-rpPipN/view?usp=sharing',
  },
  {
    user: 'B',
    link: 'https://drive.google.com/file/d/18VA8mWIXK9e8A2vkROYiqmsAjD9y0g_L/view?usp=sharing',
  },
  {
    user: 'C',
    link: 'https://drive.google.com/drive/folders/1HeUkFPXMJ8dusMQJm6LxpGRT_mkMXC-T?usp=sharing',
  }, // No link provided for user C
  {
    user: 'D',
    link: 'https://drive.google.com/file/d/1QhrU-9IXUn_qtmIYLODpYRBS1f1paZIC/view?usp=drive_link',
  },
]

export const lowFiPrototypes: LowFiPrototype[] = [
  {
    id: 1,
    src: '/fidelidad_1.png',
    alt: 'Boceto del prototipo de baja fidelidad 1',
  },
  {
    id: 2,
    src: '/fidelidad_2.png',
    alt: 'Boceto del prototipo de baja fidelidad 2',
  },
  {
    id: 3,
    src: '/fidelidad_3.png',
    alt: 'Boceto del prototipo de baja fidelidad 3',
  },
  {
    id: 4,
    src: '/fidelidad_4.png',
    alt: 'Boceto del prototipo de baja fidelidad 4',
  },
]

export interface HighFiInterview {
  user: string
  link: string
  pending?: boolean
  interviewer?: string
}

export const userTests: UserTest[] = [
  {
    id: 1,
    userImgSrc: '/usuario_a.png',
    userName: 'Lenin',
    description:
      'El usuario no podia explorar todo, habia opciones que se notaban ahi pero no podia interactuar con ellas.',
    interviewLink:
      'https://drive.google.com/drive/folders/1oj7GA2oqlK91Zdpgj2zQBpCBWy4_GBsp?usp=sharing',
  },
  {
    id: 2,
    userImgSrc: '/usuario_b.jpeg',
    userName: 'Jesus',
    description:
      'Al usuario le costo comprender inicialmente el flujo principal, aunque luego lo capto por completo. Le gusto el feedback inmediato dado que le parece simple y claro.',
    interviewLink: 'https://drive.google.com/drive/u/1/folders/10Fjcy2F0-ZjzAXY_sFEIWmXA9hTa4Fjo',
  },
  {
    id: 3,
    userImgSrc: '/usuario_c.png',
    userName: 'Zuka',
    description:
      'Al usuario en la implementacion considero que podia modificar los caso de entrada para probar mas casos.',
    interviewLink: 'https://drive.google.com/drive/u/1/folders/1b-9ch-h6QinQerYCm5krpz8YTrGXP8gd',
  },
  {
    id: 4,
    userImgSrc: '/usuario_d.jpeg',
    userName: 'Kenin',
    description:
      'El usuario preferiria tener tips en el momento de codificar y no buscar en otro lado.',
    interviewLink: 'https://drive.google.com/drive/u/1/folders/1KAYijNQ2IykK8AQy1LKrfZBBRfHJA7U9',
  },
]

export const highFiInterviews: HighFiInterview[] = [
  {
    user: 'Fernando',
    link: 'https://drive.google.com/file/d/1Nmph6Oxrk_1mZZF1rMh2gxwJM20RLepN/view?usp=drive_link',
    interviewer: 'Johan Lizarve',
  },
  {
    user: 'Alex',
    link: 'https://drive.google.com/file/d/1j__Cbe9WMjQbGcWIbCUJpLC2OD7ZTV73/view?usp=drive_link',
    interviewer: 'Sebastian Mendoza',
  },
  {
    user: 'Jose',
    link: 'https://drive.google.com/file/d/1Y4S--rLnyt2uZwgZAb0z30CMNkHsLBef/view?usp=drive_link',
    interviewer: 'Wilson Ramos',
  },
  {
    user: 'Lorenzo',
    link: 'https://drive.google.com/file/d/1I506QBJaoRNf1ytuPlA_tm7RjS5fD1Ht/view?usp=drive_link',
    interviewer: 'Jose Machaca',
  },
]
