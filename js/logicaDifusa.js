// logicaDifusa.js

/**
 * Evalúa el nivel de coincidencia entre una respuesta y su objetivo
 * y devuelve un grado de confianza difusa entre 0 y 1.
 *
 * @param {string} respuesta - Entrada del usuario.
 * @param {string} objetivo - Palabra o valor esperado.
 * @returns {number} Grado de confianza (entre 0 y 1).
 */
function evaluarConfianza(respuesta, objetivo) {
  respuesta = respuesta.trim().toUpperCase();
  objetivo = objetivo.trim().toUpperCase();

  if (respuesta === objetivo) return 1.0;
  if (respuesta.length === 0) return 0.0;

  let coincidencias = 0;
  const minLen = Math.min(respuesta.length, objetivo.length);

  for (let i = 0; i < minLen; i++) {
    if (respuesta[i] === objetivo[i]) coincidencias++;
  }

  return parseFloat((coincidencias / objetivo.length).toFixed(2));
}

/**
 * Devuelve una interpretación textual del grado de confianza.
 * @param {number} grado - Valor de 0 a 1.
 * @returns {string} Rango lingüístico.
 */
function interpretarConfianza(grado) {
  if (grado >= 0.9) return "✅ Correcto";
  if (grado >= 0.6) return "🟡 Casi correcto";
  if (grado >= 0.3) return "🔸 Lejos";
  return "❌ Incorrecto";
}
