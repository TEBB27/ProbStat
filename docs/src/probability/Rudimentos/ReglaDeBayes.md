# Probabilidad: Regla de Bayes

La *Regla de Bayes* es un principio fundamental en probabilidad que permite actualizar nuestras creencias sobre un evento en función de nueva información. Se utiliza para calcular probabilidades condicionales cuando se conocen las probabilidades inversas.

## 1. Fórmula de la Regla de Bayes
Dada una partición del espacio muestral en eventos mutuamente excluyentes $( B_1, B_2, ..., B_n )$, y un evento $A$ con probabilidad positiva, la Regla de Bayes se expresa como:

$P(B_i | A) = \frac{P(A | B_i) P(B_i)}{\sum_{j=1}^{n} P(A | B_j) P(B_j)}$

Donde:
- $P(B_i | A)$ es la probabilidad de que haya ocurrido $B_i$ dado que se observó $A$.
- $P(A | B_i)$ es la probabilidad de que ocurra $A$ dado que ocurrió $B_i$.
- $P(B_i)$ es la probabilidad previa de $B_i$.
- $\sum_{j=1}^{n} P(A | B_j) P(B_j)$ es la probabilidad total de que ocurra $A$, considerando todas las posibles causas $B_j$.

## 2. Intuición
La Regla de Bayes permite *invertir* una probabilidad condicional. Es útil cuando conocemos cómo se comporta $A$ bajo distintas condiciones $B_i$, y queremos inferir qué tan probable es cada una de esas condiciones después de observar $A$.

## 3. Aplicaciones
- *Diagnóstico médico:* Determinar la probabilidad de que un paciente tenga una enfermedad dado un resultado positivo en una prueba.
- *Clasificación en machine learning:* Modelos como Naïve Bayes usan esta regla para categorizar datos.
- *Finanzas:* Evaluación del riesgo de impago de un crédito basándose en el historial del cliente.
- *Filtrado de spam:* Probabilidad de que un correo sea spam dado el uso de ciertas palabras clave.

## 4. Ejemplo práctico
Un test de una enfermedad detecta correctamente a los enfermos el 98% de las veces $P(positivo | enfermo) = 0.98$, pero también da falsos positivos el 5% de las veces $P(positivo | sano) = 0.05$. Si la probabilidad de estar enfermo en la población es del 1% $P(enfermo) = 0.01$, ¿cuál es la probabilidad de estar enfermo dado que el test es positivo?

Usamos la Regla de Bayes:

$P(enfermo | positivo) = \frac{P(positivo | enfermo) P(enfermo)}{P(positivo | enfermo) P(enfermo) + P(positivo | sano) P(sano)}$

Sustituyendo valores:

$P(enfermo | positivo) = \frac{(0.98)(0.01)}{(0.98)(0.01) + (0.05)(0.99)} = \frac{0.0098}{0.0098 + 0.0495} = 0.165$

Esto significa que, a pesar de un test positivo, la probabilidad de estar enfermo es solo del *16.5%*, debido a la baja prevalencia de la enfermedad y la tasa de falsos positivos.

---
La Regla de Bayes es una herramienta poderosa para tomar decisiones bajo incertidumbre, permitiendo mejorar la precisión en inferencias basadas en evidencia. 🚀