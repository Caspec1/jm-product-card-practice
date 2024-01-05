# JM-Product-Card

Este es un paquete de pruebas de despliegue a NPM

### Javier miranda

## Ejemplo

```
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from 'jm-product-card-practice'
```

````
<ProductCard  product={product} initialValues={{count: 4, maxCount: 10}}>
        {(args) => (
          <>
            <ProductImage />
            <ProductTitle  />
            <ProductButtons />
          </>
        )}
      </ProductCard>
````
