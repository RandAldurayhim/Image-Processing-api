# Image-Processing-api


## Provided endpoint

After installing the dependencies, building and executing the project, the endpoint will be available as demonstrated below:

### Path

`/api/images`

### Query string parameters

| Query string param    | Description |
|-------------|---------------|
| fileName    | Any image available in the `images/full` folder   |
| width    | Custom image width         |
| height | Custom image height        |

### Full example

Considering the app running at port 3000 on your local environment, you can access the following endpoints


* Getting the encenadaport image with 100x100size - [http://localhost:3000/api/images?hieght=100&width=100&fileName=encenadaport]



## Getting started

To get this project up and running one will need to:

### Install dependencies



```bash
npm install
```


### Build the application

```bash
npm run start
```




### Linter


```bash
npm run lint
```
### Prettier

```bash
npm run prettier
```

### Typescript transpiling

The backend code is delivered through the `./src` folder, and the transformed output is placed under `./dist.
You can execute the command below:

```bash
npm run build
```


### Executing Jest test

```bash
npm run test
```

### Linter & Prettier & Build & Typescript

```bash
npm run all
```