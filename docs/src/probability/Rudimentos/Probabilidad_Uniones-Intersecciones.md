# Uniones e Intersecciones

En probabilidad, las *uniones e intersecciones* permiten describir la relación entre distintos eventos dentro de un espacio muestral. Estas operaciones se basan en los principios de la teoría de conjuntos.

## 1. Unión de Eventos ($P(A \cup B)$)
La unión de dos eventos \( A \) y \( B \) representa el conjunto de resultados que pertenecen a al menos uno de los eventos. Matemáticamente, se expresa como:

$P(A \cup B) = P(A) + P(B) - P(A \cap B)$

### Caso de Eventos Mutuamente Excluyentes
Si los eventos \( A \) y \( B \) son *mutuamente excluyentes* (es decir, no tienen elementos en común), entonces:

$P(A \cup B) = P(A) + P(B)$

## 2. Intersección de Eventos ($P(A \cap B)$)
La intersección de \( A \) y \( B \) representa el conjunto de resultados que pertenecen a ambos eventos simultáneamente. Su probabilidad depende de si los eventos son dependientes o independientes.

### a) Eventos Independientes
Dos eventos son *independientes* si la ocurrencia de uno no afecta la del otro. En este caso, la probabilidad conjunta se calcula como:

$P(A \cap B) = P(A) \times P(B)$

### b) Eventos Dependientes
Si los eventos son *dependientes*, es necesario ajustar la probabilidad de \( B \) considerando que \( A \) ha ocurrido:

$P(A \cap B) = P(A) \times P(B | A)$

## 3. Ejemplos de Aplicación
- *Juegos de cartas:* Probabilidad de obtener dos cartas de la misma pinta.
- *Producción industrial:* Probabilidad de que dos máquinas fallen simultáneamente.
- *Salud pública:* Probabilidad de que una persona tenga dos enfermedades a la vez.

---
El análisis de uniones e intersecciones es clave en la modelización de eventos aleatorios y en la resolución de problemas probabilísticos.