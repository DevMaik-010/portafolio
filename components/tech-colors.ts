/* Colores únicos en morado con buen contraste en ambos modos */
export const techColors: Record<string, { bg: string; text: string; border: string }> = {
  // Frontend
  "Next.js": {
    bg: "bg-purple-100/60 dark:bg-purple-900/40",
    text: "text-purple-900 dark:text-purple-100",
    border: "border-purple-300/60 dark:border-purple-600/60",
  },
  React: {
    bg: "bg-purple-100/60 dark:bg-purple-900/40",
    text: "text-purple-900 dark:text-purple-100",
    border: "border-purple-300/60 dark:border-purple-600/60",
  },
  TypeScript: {
    bg: "bg-purple-100/60 dark:bg-purple-900/40",
    text: "text-purple-900 dark:text-purple-100",
    border: "border-purple-300/60 dark:border-purple-600/60",
  },

  // Backend
  FastAPI: {
    bg: "bg-purple-100/60 dark:bg-purple-900/40",
    text: "text-purple-900 dark:text-purple-100",
    border: "border-purple-300/60 dark:border-purple-600/60",
  },
  "Spring Boot": {
    bg: "bg-purple-100/60 dark:bg-purple-900/40",
    text: "text-purple-900 dark:text-purple-100",
    border: "border-purple-300/60 dark:border-purple-600/60",
  },
  "Express.js": {
    bg: "bg-purple-100/60 dark:bg-purple-900/40",
    text: "text-purple-900 dark:text-purple-100",
    border: "border-purple-300/60 dark:border-purple-600/60",
  },
  Python: {
    bg: "bg-purple-100/60 dark:bg-purple-900/40",
    text: "text-purple-900 dark:text-purple-100",
    border: "border-purple-300/60 dark:border-purple-600/60",
  },
  Java: {
    bg: "bg-purple-100/60 dark:bg-purple-900/40",
    text: "text-purple-900 dark:text-purple-100",
    border: "border-purple-300/60 dark:border-purple-600/60",
  },

  // Databases
  PostgreSQL: {
    bg: "bg-purple-100/60 dark:bg-purple-900/40",
    text: "text-purple-900 dark:text-purple-100",
    border: "border-purple-300/60 dark:border-purple-600/60",
  },
  MySQL: {
    bg: "bg-purple-100/60 dark:bg-purple-900/40",
    text: "text-purple-900 dark:text-purple-100",
    border: "border-purple-300/60 dark:border-purple-600/60",
  },
  Oracle: {
    bg: "bg-purple-100/60 dark:bg-purple-900/40",
    text: "text-purple-900 dark:text-purple-100",
    border: "border-purple-300/60 dark:border-purple-600/60",
  },
  MongoDB: {
    bg: "bg-purple-100/60 dark:bg-purple-900/40",
    text: "text-purple-900 dark:text-purple-100",
    border: "border-purple-300/60 dark:border-purple-600/60",
  },
  Redis: {
    bg: "bg-purple-100/60 dark:bg-purple-900/40",
    text: "text-purple-900 dark:text-purple-100",
    border: "border-purple-300/60 dark:border-purple-600/60",
  },

  // APIs & Tools
  "REST API": {
    bg: "bg-purple-100/60 dark:bg-purple-900/40",
    text: "text-purple-900 dark:text-purple-100",
    border: "border-purple-300/60 dark:border-purple-600/60",
  },
  GraphQL: {
    bg: "bg-purple-100/60 dark:bg-purple-900/40",
    text: "text-purple-900 dark:text-purple-100",
    border: "border-purple-300/60 dark:border-purple-600/60",
  },
  WebSockets: {
    bg: "bg-purple-100/60 dark:bg-purple-900/40",
    text: "text-purple-900 dark:text-purple-100",
    border: "border-purple-300/60 dark:border-purple-600/60",
  },
  JWT: {
    bg: "bg-purple-100/60 dark:bg-purple-900/40",
    text: "text-purple-900 dark:text-purple-100",
    border: "border-purple-300/60 dark:border-purple-600/60",
  },

  // Security & DevOps
  "Sentinel Guard": {
    bg: "bg-purple-100/60 dark:bg-purple-900/40",
    text: "text-purple-900 dark:text-purple-100",
    border: "border-purple-300/60 dark:border-purple-600/60",
  },
  "Sentri Cloud": {
    bg: "bg-purple-100/60 dark:bg-purple-900/40",
    text: "text-purple-900 dark:text-purple-100",
    border: "border-purple-300/60 dark:border-purple-600/60",
  },
  Docker: {
    bg: "bg-purple-100/60 dark:bg-purple-900/40",
    text: "text-purple-900 dark:text-purple-100",
    border: "border-purple-300/60 dark:border-purple-600/60",
  },
  Kubernetes: {
    bg: "bg-purple-100/60 dark:bg-purple-900/40",
    text: "text-purple-900 dark:text-purple-100",
    border: "border-purple-300/60 dark:border-purple-600/60",
  },

  // Default fallback
  default: {
    bg: "bg-purple-100/60 dark:bg-purple-900/40",
    text: "text-purple-900 dark:text-purple-100",
    border: "border-purple-300/60 dark:border-purple-600/60",
  },
}

export function getTechColor(tech: string): (typeof techColors)[keyof typeof techColors] {
  return techColors[tech] || techColors.default
}
