# Contraste para Diferencia de Proporciones

El **contraste para diferencia de proporciones** es una técnica estadística que nos permite comparar las proporciones de dos poblaciones y determinar si la diferencia entre ellas es estadísticamente significativa. Esto es útil en situaciones donde queremos evaluar si un cambio, tratamiento o intervención tiene un efecto real en la proporción de éxito. Por ejemplo:
- ¿La proporción de personas que prefieren un producto es mayor en una ciudad que en otra?
- ¿La proporción de estudiantes que aprueban un examen es diferente entre dos grupos?

---

## Condiciones para que el Contraste Funcione

Para que el contraste para diferencia de proporciones sea válido, se deben cumplir ciertas condiciones:

1. **Muestras Independientes**: Las dos muestras deben ser independientes entre sí. Esto significa que los datos de una muestra no deben influir en los datos de la otra.
2. **Tamaño de las Muestras**:
   - Las muestras deben ser lo suficientemente grandes para que la distribución de las proporciones muestrales sea aproximadamente normal. Esto se cumple si:
     - n₁p₁ ≥ 10, n₁(1 - p₁) ≥ 10,
     - n₂p₂ ≥ 10, n₂(1 - p₂) ≥ 10,
     donde n₁ y n₂ son los tamaños de las muestras, y p₁ y p₂ son las proporciones muestrales.

---

## Ejemplo: Contraste para Diferencia de Proporciones

Supongamos que queremos comparar la proporción de personas que prefieren un producto en dos ciudades diferentes. Tenemos los siguientes datos:
- **Ciudad A**: 
  - Tamaño de la muestra (n₁) = 200.
  - Número de personas que prefieren el producto (x₁) = 120.
  - Proporción muestral (p̂₁) = x₁ / n₁ = 120 / 200 = 0.6.
- **Ciudad B**: 
  - Tamaño de la muestra (n₂) = 150.
  - Número de personas que prefieren el producto (x₂) = 75.
  - Proporción muestral (p̂₂) = x₂ / n₂ = 75 / 150 = 0.5.

Queremos probar si hay una diferencia significativa en la proporción de personas que prefieren el producto entre las dos ciudades, con un nivel de significancia del 5 %.

### Paso 1: Plantear las hipótesis
- **Hipótesis nula (H₀)**: p₁ = p₂ (no hay diferencia entre las proporciones).
- **Hipótesis alternativa (H₁)**: p₁ ≠ p₂ (hay diferencia entre las proporciones).

### Paso 2: Calcular el estadístico de prueba
Usamos la prueba Z para diferencia de proporciones. El estadístico de prueba (Z) se calcula como:

$$
Z = \frac{\hat{p}_1 - \hat{p}_2}{\sqrt{\hat{p}(1 - \hat{p}) \cdot \left( \frac{1}{n_1} + \frac{1}{n_2} \right)}},
$$

donde:
 p̂ = (x₁ + x₂) / (n₁ + n₂) 

(p̂ es el estimador combinado de proporciones; x₁ y x₂ son los éxitos en cada muestra; n₁ y n₂ son los tamaños de las muestras.)

Sustituyendo los valores:

$$
\hat{p} = \frac{120 + 75}{200 + 150} = \frac{195}{350} \approx 0.557.
$$

Ahora, calculamos Z:

$$
Z = \frac{0.6 - 0.5}{\sqrt{0.557 \cdot (1 - 0.557) \cdot \left( \frac{1}{200} + \frac{1}{150} \right)}}.
$$

Simplificando:

$$
Z = \frac{0.1}{\sqrt{0.557 \cdot 0.443 \cdot \left( 0.005 + 0.00667 \right)}}.
$$

$$
Z = \frac{0.1}{\sqrt{0.557 \cdot 0.443 \cdot 0.01167}}.
$$

$$
Z = \frac{0.1}{\sqrt{0.00286}} \approx \frac{0.1}{0.0535} \approx 1.87.
$$

### Paso 3: Determinar el valor crítico
Para un nivel de significancia del 5 % (dos colas), el valor crítico de la distribución normal estándar es **±1.96**.

### Paso 4: Tomar la decisión
Como |Z| = 1.87 < 1.96, no rechazamos la hipótesis nula. Concluimos que **no hay evidencia suficiente** para afirmar que existe una diferencia significativa en la proporción de personas que prefieren el producto entre las dos ciudades.

---

## Chiste Estadístico

¿Qué le dijo la proporción de la Ciudad A a la proporción de la Ciudad B?  
"Oye, ¿por qué siempre estás tan abajo? ¡Deberías subir un poco para que podamos encontrarnos en el intervalo de confianza!" 😆

---

## Resumen

- El **contraste para diferencia de proporciones** nos permite comparar las proporciones de dos poblaciones y determinar si la diferencia es estadísticamente significativa.
- Las condiciones clave incluyen **muestras independientes** y un **tamaño de muestra adecuado** para que la distribución de las proporciones sea aproximadamente normal.
- El contraste se basa en el cálculo de un estadístico de prueba (Z) y la comparación con un valor crítico.
- Esta técnica es fundamental para evaluar el impacto de tratamientos, intervenciones o diferencias entre grupos en términos de proporciones.

Con esta herramienta, puedes tomar decisiones basadas en datos y evaluar si las diferencias observadas en proporciones son reales o simplemente producto del azar. ¡Sigue practicando y dominarás el contraste para diferencia de proporciones en poco tiempo! 📊✨