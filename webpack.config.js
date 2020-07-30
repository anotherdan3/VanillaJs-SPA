// Nos permite acceder a donde estamos en las carpetas. Ya sea en local o en la nube
const path = require("path");
//Dependencia necesaria para trabajar con HTML
const HtmlWebpackPlugin = require("html-webpack-plugin");

//Configuracion de lo que va suceder. Modulo para exportar.
module.exports = {
  entry: "./src/index.js", //Punto de entrada. Donde debe buscar el Codigo
  output: {
    //Punto de salida. A donde se envia el codigo
    path: path.resolve(__dirname, "dist"), //Carpeta a donde se exportara el proyecto
    filename: "main.js", //ombre del archivo final para produccion.
  },
  resolve: {
    extensions: [".js"], //Extensiones a utilizar.
  },
  module: {
    //El modulo con las reglas a usar
    rules: [
      {
        //Estructura de bable
        test: /\.js?$/, //Nos permite identificar los archivos en nuestro entorno
        exclude: /node_modules/, //Excluir la carpeta node modules
        use: {
          loader: "babel-loader", //Utilizar un loader como configuracion establecida.
        },
      },
    ],
  },
  plugins: [
    //Todos los plugins a utilizar
    new HtmlWebpackPlugin([
      //Para trabajar con html
      {
        inject: true, //Como vamos a inyectar un valor a un archivo html
        template: "./public/index.html", //Direccion del template principal
        filename: "./index.html", //El nombre que tendra el archivo
      },
    ]),
  ],
};
