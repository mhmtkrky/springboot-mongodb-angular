# Project

## Backend

### Installation


```bash
docker pull mongo
docker run --name mongodb -p 27017:27017 mongo
maven clean build
```

#### Project Path

```bash
src    
│
└───main
   │
   │
   └───java
       │
       │
       └───com.crud.crud
       |       └───config
       |       └───constraints
       |       └───controller
       |       └───entity
       |       └───enums
       |       └───eventsi
       |       └───exception
       |       └───model
       |       └───repository
       |       └───service
       └───resource      
```

##### Config

```python
Swagger konfigurasyon işlemlerinin tanımlandığı alandır.
```

##### Constraints

```python
Veri tablolarına ait kısıtlamaların tanımlandığı alandır.
```
##### Controller

```python
Servis uçlarının bulunduğu alandır. Bu alan içerisinde bulunan BaseController dosyasıyla crud işlemler gerçekleştirilir.
```

##### Entity

```python
Veri tablolarının tanımlandığı alandır.
```

##### Enum

```python
Enum tanımlamalarını yapıldığı alandır.
```

#### Event

```python
Tablolarının id alanlarının sequence olarak oluşturulması için tanımlanan alandır. Her veri tablosına ait event oluşturularak yeni kayıtlarda sequence olarak id üretilmesini sağlamaktadır.
```

#### Model

```python
Productların register edilmesinde kullanılan ara modeldir.
```

##### Service

```python
Logic işlemlerinin gerçekleştirildiği alandır. BaseService ile tüm işlemler tek sınıf üzerinden yapılmaktadır.
```

### Used
* Java 11
* Spring Boot
* MongoDB
* Lombok
* Swagger

### How To Use

Uygulama 8002 portu üzerinde çalışmaktadır.

#### project urls
```python
---------------------------------
http://localhost:8002/api/product/
(Post(Create) ,
        "body" = {
            "name": "",
            "description": "",
            "url": "",
            "apiType": ""
        }
)
, Put (Edit) , 
        "body" = {
            "name": "",
            "description": "",
            "url": "",
            "apiType": "",
            "id": "",
            "createdAt": "",
            "updatedAt": ""
        }
),
, (Get(GetList))

---------------------------------
http://localhost:8002/api/product/{id}
(Delete (Delete) , PathVariable {id}


---------------------------------
http://localhost:8002/api/application/ 
(Post (Create) ,
            "body" = {
                "name": "",
                "description": ""
            }
)
, Put (Edit) ,
            "body" = {
                "name": "",
                "description": "",
                "id": "",
                "createdAt": "",
                "updatedAt": "",
                "productList": [{}]
            }
), 
, (Get(GetList))


---------------------------------
http://localhost:8002/api/application/{id}
(Delete (Delete) , PathVariable {id}


---------------------------------
http://localhost:8002/api/product/redirect
(Post ,
          "body" =  {
              "productId": "",
              "applicationId": ""
          }
)

---------------------------------
http://localhost:8002/api/product/deleteRegistered (Post { body: RegisterProduct} )
(Post ,
          "body": {
              "productId": "",
              "applicationId": ""
          }
)
```
ile ilgili işlemler yapılabilir. Body kısımları örnek olarak gösterilmiştir. ProductEntity ve ApplicaonEntity alanları ile erişim sağlanmaktadır.


## FrontEnd

### Installation

```bash
npm install
```

### Project Path
```bash
src    
│
└───app
   │
   └───component
       │
       └───product
       |         └───model
       |         └───service
       |         └───view
       |         |       └───product-create
       |         |       └───product-edit
       |         |       └───product-list
       |         └───routing/module
       └───application
       |          └───model
       |          └───service
       |          └───view
       |          |       └───application-create
       |          |       └───application-edit
       |          |       └───application-list
       |          └───routing/module
       └───product-redirect-application
                  └───model
                  └───service
                  └───view
                  |       └───product-redirect-set
                  |       └───product-redirect-list
                  └───routing/module 
```

##### View

```python
Ekran kodlarının bulunduğu alan.
```

##### Service

```python
Backend-frontend bağlantısını gerçekleştiren servisin tanımlandığı alan.
```

##### Model

```python
Veri modellerinin bulunduğu alandır.
```

### Route

Her veri modeli için ayrı ayrı route ve modül mekanizması oluşturulmuştur.Her route içerisinde ilgili ayarlamalar bulunmaktadır.
Ana router içerisinde ilgili path'e göre lazy olarak ilgili modül yüklenmektedir.

#### App Module
```python
const routes: Route[] = [
  { path: 'product', loadChildren: () => import('./../app/components/product/product.module').then(m => m.ProductModule) },
  { path: 'application', loadChildren: () => import('./../app/components/application/application.module').then(m => m.ApplicationModule) },
  { path: 'product-redirect', loadChildren: () => import('./../app/components/product-redirect-application/product-redirect.module').then(m => m.ProductRedirectModule) },
]
```
#### Product Route Module
   
   ```python
   const routes: Routes = [
     {
       path: '',
       component: ProductComponent,
       children: [{
         path: 'list',
         component: ProductListComponent
       },
       {
         path: 'create',
         component: ProductCreateComponent
       },
       {
         path: 'edit/:id',
         component: ProductEditComponent
       }]
     }
   ];
   ```

#### Application Route Module
   
   ```python
   const routes: Routes = [
     {
       path: '',
       component: ApplicationComponent,
       children: [{
         path: 'list',
         component: ApplicationListComponent
       },
       {
         path: 'create',
         component: ApplicationCreateComponent
       },
       {
         path: 'edit/:id',
         component: ApplicationEditComponent
       }]
     }
   ];
   ```

#### Product Redirect Route Module
   
   ```python
   const routes: Routes = [
     {
       path: '',
       component: ProductRedirectComponent,
       children: [{
         path: 'list/:id',
         component: ProductRedirectListComponent
       },
       {
         path: 'set/:id',
         component: ProductRedirectSetComponent
       }]
     }
   ];
   ```

### How to Use
 
 Uygulama 4200 portu üzerinde çalışmaktadır.

   ```python
   ng serve
   ```
Ekranlar birbiriyle 'routeLink' üzerinden iletişim kurmaktadır. Her bir route kendi modülü içerisinde çözülerek ilgili ekrana yönlendirilir.

Application ekranı üzerinden herhangi bir Product nesnesi register edilebilir.

### Used
Npm 6.13.7
Node v15.0.1
Boostrap
FormlyModule
HttpClientModule
Angular




