# Distribución Normal

La distribución normal es una de las distribuciones de probabilidad más importantes en estadística y probabilidad. Se utiliza en una gran variedad de campos debido a sus propiedades matemáticas y a su aplicabilidad en situaciones del mundo real.

## Definición

La distribución normal es una distribución de probabilidad continua definida por la siguiente función de densidad de probabilidad (PDF):

$$ f(x) = \frac{1}{\sigma \sqrt{2\pi}} e^{-\frac{(x - \mu)^2}{2\sigma^2}} $$

donde:
- <span>&mu;</span> es la media de la distribución.
- <span>&sigma;</span> es la desviación estándar.
- <span>&sigma;</span><sup>2</sup> es la varianza.
- <span>e</span> es la base del logaritmo natural.
- <span>&pi;</span> es la constante pi.

## Propiedades

1. **Forma de campana**: La distribución normal tiene una forma simétrica de campana alrededor de la media <span>&mu;</span>.
2. **Simetría**: La distribución es perfectamente simétrica en torno a su media.
3. **Media, mediana y moda**: En una distribución normal, la media, la mediana y la moda son iguales.
4. **Regla empírica (68-95-99.7)**: Aproximadamente:
   - El 68% de los valores se encuentran dentro de una desviación estándar de la media.
   - El 95% de los valores están dentro de dos desviaciones estándar.
   - El 99.7% de los valores están dentro de tres desviaciones estándar.

## Distribución Normal Estándar

La distribución normal estándar es un caso especial de la distribución normal donde la media es 0 y la desviación estándar es 1. Su función de densidad de probabilidad es:

$$ f(z) = \frac{1}{\sqrt{2\pi}} e^{-\frac{z^2}{2}} $$

donde \( z \) es la variable tipificada definida como:

$$ z = \frac{x - \mu}{\sigma} $$

Esta transformación es útil para comparar diferentes distribuciones normales y calcular probabilidades usando la tabla de la distribución normal estándar.

## Aplicaciones

La distribución normal se encuentra en muchas áreas de la ciencia y la ingeniería, incluyendo:

- **Estadística inferencial**: Pruebas de hipótesis y estimaciones de intervalos de confianza.
- **Procesos industriales**: Control de calidad y análisis de variabilidad en manufactura.
- **Finanzas**: Modelado de retornos de inversiones.
- **Ciencias naturales y sociales**: Modelos de distribución de fenómenos naturales y comportamientos humanos.

## Ejemplo Práctico

Supongamos que la altura de los adultos en cierta población sigue una distribución normal con una media de 170 cm y una desviación estándar de 10 cm. La probabilidad de que una persona al azar mida menos de 160 cm se puede calcular usando la distribución normal estándar:

$$ z = \frac{160 - 170}{10} = -1 $$

Luego, usando una tabla de la distribución normal estándar, encontramos que:

$$ P(Z < -1) \approx 0.1587 $$

Esto significa que aproximadamente el 15.87% de la población mide menos de 160 cm.

## Conclusión

La distribución normal es fundamental en estadística debido a sus propiedades matemáticas y su amplia aplicabilidad. Comprender su función de densidad, propiedades y usos permite un análisis profundo de datos en diversas disciplinas.


## Tabla de Distribución Normal

<div style="display: flex; justify-content: center; align-items: center; margin: 20px 0;">
    <iframe src="https://drive.google.com/file/d/1-D_h5HQgc7SxmuBQOdI6adua3Js9jSZ8/preview" style="width: 100%; max-width: 800px; height: 600px; border: 1px solid #ccc; border-radius: 8px;"></iframe>
</div>

## Diapositivas

<div style="display: flex; justify-content: center; align-items: center; margin: 20px 0;">
    <iframe src="https://drive.google.com/file/d/1EpluTvf8ZrhVh7lhL52NOb1KrHV7oXwD/preview" style="width: 100%; max-width: 800px; height: 600px; border: 1px solid #ccc; border-radius: 8px;"></iframe>
</div>

## Tabla Interactiva

<NormalDistributionChart :mean="0" :stdDev="1" />

