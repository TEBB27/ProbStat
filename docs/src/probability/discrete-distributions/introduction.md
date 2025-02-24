# Introducción a las Distribuciones Discretas

En probabilidad y estadística, una **distribución de probabilidad discreta** describe la probabilidad de ocurrencia de cada posible valor de una variable aleatoria discreta. Una variable aleatoria es discreta si puede tomar un número finito o numerable de valores, a diferencia de una variable continua, que puede asumir cualquier valor dentro de un intervalo.

## Características de las Distribuciones Discretas

1. **Conjunto de valores posibles**: La variable aleatoria solo puede tomar valores específicos, generalmente números enteros. Ejemplos incluyen el número de llamadas recibidas en una central telefónica o la cantidad de veces que aparece una cara en un número fijo de lanzamientos de una moneda.
2. **Función de Masa de Probabilidad (PMF, por sus siglas en inglés)**: Define la probabilidad de que la variable tome un valor específico. Se expresa como:
   $$ P(X = x) = f(x) $$
   donde $f(x)$ es la función de masa de probabilidad. Esto significa que para cada posible valor de $X$, existe una probabilidad asignada.
3. **Propiedades**:
   - $0 \leq P(X = x) \leq 1$ para todo $x$, es decir, las probabilidades siempre están dentro del rango válido.
   - La suma de todas las probabilidades es igual a 1:
     $$ \sum P(X = x) = 1 $$
     Esto garantiza que el modelo representa una distribución de probabilidad válida.

## Ejemplos de Distribuciones Discretas

A continuación, se describen algunas de las distribuciones de probabilidad discreta más utilizadas:

### **Distribución Bernoulli**
Modela experimentos con dos posibles resultados: éxito (1) o fracaso (0). Se usa, por ejemplo, para modelar el resultado de un lanzamiento de moneda.
- PMF: $$ P(X = x) = p^x (1 - p)^{1 - x}, \quad x \in \{0,1\} $$
- Esperanza matemática: $E[X] = p$
- Varianza: $Var(X) = p(1 - p)$

### **Distribución Binomial**
Modela el número de éxitos en una cantidad fija de ensayos independientes de Bernoulli.
- PMF: $$ P(X = k) = \binom{n}{k} p^k (1 - p)^{n - k}, \quad k = 0,1,2, \dots, n $$
- Esperanza matemática: $E[X] = np$
- Varianza: $Var(X) = np(1 - p)$

### **Distribución de Poisson**
Modela el número de eventos que ocurren en un intervalo de tiempo o espacio fijo, asumiendo que ocurren de manera independiente y a una tasa promedio constante.
- PMF: $$ P(X = k) = \frac{e^{-\lambda} \lambda^k}{k!}, \quad k = 0,1,2,\dots $$
- Esperanza matemática: $E[X] = \lambda$
- Varianza: $Var(X) = \lambda$

### **Distribución Geométrica**
Modela el número de intentos hasta el primer éxito en ensayos de Bernoulli independientes.
- PMF: $$ P(X = k) = (1 - p)^{k-1} p, \quad k = 1,2,3,\dots $$
- Esperanza matemática: $E[X] = \frac{1}{p}$
- Varianza: $Var(X) = \frac{1 - p}{p^2}$

## Aplicaciones de las Distribuciones Discretas
Las distribuciones discretas son fundamentales en la teoría de la probabilidad y tienen aplicaciones en diversas áreas como:
- **Control de calidad**: La distribución binomial se usa para modelar defectos en lotes de producción.
- **Gestión de colas**: La distribución de Poisson se aplica en la modelización de llegadas de clientes a un sistema de atención.
- **Biología y medicina**: La distribución geométrica puede utilizarse para modelar el número de intentos hasta que un tratamiento tiene éxito.

Estas distribuciones proporcionan herramientas esenciales para modelar fenómenos del mundo real y realizar inferencias estadísticas con base en datos discretos.
