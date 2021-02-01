# Getting Started 

`npm i`  for install
Run `npm run start` for a dev server. 
Navigate to `http://localhost:4200/`.


# Notas del desarrollador:

He decidido adaptarme a la estructura del proyecto modificando lo minimo. He tenido dudas cuando se pedia que se hiciera minimo un modulo a parte del login y registro, ya que no entendí si se queria un modulo para los 2 componentes o uno de cada. Al final me he decantado por un modulo para ambos "auth.module.ts" Aun que no he creado ninguna ruta nueva para este que seria lo común. Como "/auth" por ejemplo.

Al pedir los "ships" a la API, al no especificar como se deben pedir las diferentes páginas que este endpoint contiene, las he pedido todas. Lo correcto realmente és ir lanzando acciones de Redux conforme el usuario va clicando en las diferentes páginas del paginador, mientras tanto, los Effects escuchan estas acciones y van llamando al service para pedir las "pages".

En cuanto a la saturación del servidor he intentado implementar algunas herramientas que proporciona Ngrx pero necesito más tiempo para poder terminarlo, asi que he implementado algo sencillo pero que funciona "store-cache.ts". Simplemente voy guardando el store en el localStorage cada vez que se piden naves y lo cargo cuando se inicializa el state en el reducer. He pensado también con ShareReplay y ReplaySubject que es lo que siempre he utilizado, pero en este caso rompería el patrón de diseño Redux porque necesita suscribirse a estos Subject en lugar de al Store. PAra hacerlo realmente bien hay que tener en cuenta la frequencia en la que cambian los datos de la API y el tamaño de los mismos. Si la frequencia es corta pues se deberia añadir un tiempo corto de cache o pedir solo los modificados en caso de que los datos sean muy grandes.

También se puede configurar/contratar un CDN para que las solicitudes de usuarios sean mas rápidas y un sistema Redis para cachear lecturas a la base de datos (he trabajado con ambos servicios).



