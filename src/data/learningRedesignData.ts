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

export const insights: string[] = [
  '“Visualización” como primer recurso de aprendizaje → De B y C: prefieren representaciones gráficas y videos antes que texto o código.',
  '“Recursión” como punto de confusión crítica → De A y C: la recursión les resulta confusa sin ver el call stack o el flujo de llamadas.',
  'Necesidad de “interacción paso a paso” → De A y C: necesitan avanzar y retroceder entre pasos del algoritmo para entender los cambios.',
  '“Código editable” para experimentar y aprender del error → De C: modifica el código para entender cómo cambian los resultados; quiere feedback inmediato.',
  'Nivel de Experiencia Determina Estrategia de Aprendizaje ->',
  '“Conexión entre código y visualización” simultánea → De B y C: requieren ver el código y la representación visual al mismo tiempo para comprender el flujo.',
  '“Comprensión de complejidad” como reto posterior al aprendizaje básico → De B: considera la eficiencia y complejidad esenciales para entender el valor del algoritmo.',
  '“Apoyo textual o asistido por IA” para aclarar dudas → De D: considera útiles los LLMs (como ChatGPT) para resolver preguntas específicas o reforzar conceptos.',
  '“Aprendizaje activo” mediante práctica y experimentación → De D: usar ejemplos o materiales físicos refuerza la comprensión; de C: escribir y probar código propio.',
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
