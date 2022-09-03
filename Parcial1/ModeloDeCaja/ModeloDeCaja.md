# Modelo de Caja

El modelo de caja es esencialmente una caja que envuelve cada elemento HTML. Consiste en: márgenes, bordes, relleno y el contenido real. La siguiente imagen ilustra el modelo de caja:

![Modelo de Caja](https://lenguajecss.com/css/modelo-de-cajas/que-es/modelo-de-cajas.png)

Es la manera en que se representan todos los elementos html en una página. Cada elemento genera una caja, el comportamiento de esa caja depende de su clasificación: si es de línea o de bloque.

A todas las cajas se les puede aplicar las siguientes propiedades: `width`, `height`, `padding`, `margin`, `border`, `background`. Lo particular de este concepto es que por defecto el width se refiere al ancho del contenido de un elemento (no al ancho total, de borde a borde). 

> **Contenido:** (o content box) El área donde se muestra el contenido, cuyo tamaño puede cambiarse utilizando propiedades como `width` y `height`.\
> **Relleno:** (o padding box) El relleno es espacio en blanco alrededor del contenido; es posible controlar su tamaño usando la propiedad `padding` y otras propiedades relacionadas.\
> **Borde:** (o border box) El borde de la caja envuelve el contenido y el de relleno. Es posible controlar su tamaño y estilo utilizando la propiedad `border` y otras propiedades relacionadas.\
> **Margen:** (o margin box) El margen es la capa más externa. Envuelve el contenido, el relleno y el borde como espacio en blanco entre la caja y otros elementos. Es posible controlar su tamaño usando la propiedad `margin` y otras propiedades relacionadas.