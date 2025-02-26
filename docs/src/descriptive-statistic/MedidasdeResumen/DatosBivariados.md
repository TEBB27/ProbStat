# Datos Bivariados

Los **datos bivariados** corresponden a conjuntos de datos en los que se estudian dos variables simultáneamente para analizar su relación o asociación.

## 1. Definición
Los datos bivariados consisten en pares de valores \((x, y)\), donde cada observación representa una correspondencia entre dos variables. Se usan para analizar tendencias, correlaciones y dependencias.

## 2. Representación Gráfica
- **Diagrama de dispersión:** Muestra la relación entre dos variables en un sistema de coordenadas cartesianas.
- **Diagramas de cajas comparativos:** Permiten visualizar la distribución de cada variable.

## 3. Medidas de Asociación
### a) Covarianza
Indica la dirección de la relación entre dos variables:
\[
Cov(X,Y) = \frac{\sum (x_i - \bar{x})(y_i - \bar{y})}{n - 1}
\]

- **Cov(X,Y) > 0:** Relación positiva.
- **Cov(X,Y) < 0:** Relación negativa.
- **Cov(X,Y) ≈ 0:** No hay relación lineal.

### b) Coeficiente de Correlación de Pearson
Mide la fuerza y dirección de la relación lineal entre dos variables:
\[
 r = \frac{Cov(X,Y)}{s_X s_Y}
\]
Donde:
- \( s_X \) y \( s_Y \) son las desviaciones estándar de \( X \) y \( Y \).
- \( -1 \leq r \leq 1 \).

Valores de \( r \):
- **Cercano a -1:** Correlación negativa fuerte.
- **Cercano a 0:** No hay relación lineal.
- **Cercano a 1:** Correlación positiva fuerte.

## 4. Modelos de Regresión
Se utilizan para predecir valores de una variable en función de otra.
- **Regresión lineal simple:** Modelo de la forma \( Y = a + bX \), donde \( a \) es la intersección y \( b \) la pendiente.
- **Regresión no lineal:** Se emplea cuando la relación no es lineal, usando modelos polinómicos o exponenciales.

## Importancia del Análisis Bivariado
- Permite identificar relaciones y patrones en los datos.
- Es fundamental para la predicción y toma de decisiones.
- Se usa en diversos campos como economía, biología y ciencias sociales.
