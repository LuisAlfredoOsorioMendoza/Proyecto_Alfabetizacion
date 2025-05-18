// redNeuronalSimulada.js

/**
 * Simula una red neuronal que clasifica palabras en tres categorías:
 * "Simple", "Media" y "Compleja" según la longitud.
 * @param {string} entrada - Palabra o sílaba ingresada.
 * @returns {string} Clasificación de complejidad.
 */
function redNeuronalSimulada(entrada) {
  const longitud = entrada.trim().length;

  if (longitud >= 6) return "Compleja";
  if (longitud >= 4) return "Media";
  return "Simple";
}

/**
 * Devuelve un mensaje de retroalimentación basado en la clasificación.
 * @param {string} tipo - "Simple", "Media" o "Compleja"
 * @returns {string} Mensaje para el usuario.
 */
function retroalimentacionRed(tipo) {
  switch (tipo) {
    case "Compleja": return "🧠 ¡Buena elección! Palabra desafiante.";
    case "Media": return "👍 Bien hecho. Palabra de dificultad media.";
    case "Simple": return "👶 Vamos avanzando paso a paso.";
    default: return "❓ Clasificación desconocida.";
  }
}
