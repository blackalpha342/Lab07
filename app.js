* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
header img{
    width: 150px;
    height: 150px;
    object-fit: cover;
    object-position: center;
    margin-top: -30px;
    margin-bottom: -30px;
}
header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #233D4D;
}
.menu ul {
    display: flex;
    align-items: center;
}
.menu ul li{
    color: white;
    list-style: none;
    margin-right: 45px;
}
main{
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #FCCA46;
}
main img{
    width: 500px;
    
}
main div{
    padding: 100px;
}
main div p{
    font-size: 30px;
    text-align: center;
    font-family: Poppins;
}
.seccion-destacados{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 100px;
}
.seccion-destacados h2{
    padding: 100px;
}
.contenedor {
    display: flex;
    flex-wrap: wrap; 
    gap: 20px; 
    justify-content: center; 
    margin-left: 300px;
    margin-right: 300px;
  }

  
  .producto {
    width: 250px; 
    border: 1px solid #ddd; 
    border-radius: 10px; 
    overflow: hidden; 
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 
    background-color: #fff;
    text-align: center; 
  }

  /* Estilo para la imagen del producto */
  .producto img {
    width: 100%; 
    height: 200px; 
    object-fit: cover; 
  }

  /* Estilo para la descripción del producto */
  .producto .descripcion {
    padding: 15px;
    font-size: 14px;
    color: #555;
  }

  /* Estilo para el botón */
  .producto .boton {
    display: block;
    width: 80%;
    margin: 20px auto;
    padding: 10px;
    background-color: #FE7F2D; 
    color: black;
    border: none;
    border-radius: 5px;
    text-transform: uppercase;
    cursor: pointer;
    font-weight: bold;
    text-decoration: none; 
    transition: background-color 0.3s ease;
  }

  
  .producto .boton:hover {
    background-color: #619B8A;
  }

 
  .club {
    background-color: #FCCA46;
    display: flex;
    flex-wrap: wrap; 
    justify-content: space-between; 
    gap: 20px; 
    padding: 200px;
  }

  .col-izquierda {
    flex: 1; 
    max-width: 45%; 
  }

  .col-izquierda img {
    width: 100%; /* Hace que la imagen ocupe el 100% del contenedor */
    height: auto; 
    border-radius: 8px; 
  }

  /* Estilo de la columna derecha (texto, lista y botón) */
  .col-derecha {
    flex: 1;
    max-width: 45%; /* Máximo de 45% de ancho */
  }

  .col-derecha h2 {
    font-size: 24px;
    color: #333;
  }

  .col-derecha p {
    font-size: 16px;
    color: #666;
    margin-bottom: 15px;
  }

  .col-derecha ul {
    list-style-type: disc;
    padding-left: 20px;
    margin-bottom: 20px;
  }

  .col-derecha button {
    padding: 10px 20px;
    background-color: #FE7F2D; /* Color de fondo azul */
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    text-transform: uppercase;
    transition: background-color 0.3s;
  }

  .col-derecha button:hover {
    background-color: #619B8A; /* Cambio de color al pasar el ratón */
  }
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
  }

  /* Estilos para el Footer */
  footer {
    background-color: #333; /* Fondo oscuro */
    color: #fff; /* Texto blanco */
    padding: 40px 20px; /* Espaciado interno */
    text-align: center; /* Centrado de texto */
  }

  footer h3 {
    font-size: 24px;
    margin-bottom: 20px;
    font-weight: bold;
  }

  footer p {
    font-size: 16px;
    margin: 10px 0;
  }

  footer .contact-info {
    margin-bottom: 20px;
  }

  footer .contact-info span {
    display: block;
    margin-bottom: 10px;
  }

  footer .social-links {
    margin: 20px 0;
  }

  footer .social-links a {
    color: #fff;
    font-size: 20px;
    margin: 0 10px;
    text-decoration: none;
    transition: color 0.3s;
  }

  footer .social-links a:hover {
    color: #007bff; /* Color azul en hover */
  }

  /* Responsividad */
  @media (max-width: 768px) {
    footer {
      padding: 30px 10px;
    }

    footer h3 {
      font-size: 20px;
    }

    footer p {
      font-size: 14px;
    }

    footer .social-links a {
      font-size: 18px;
    }
  }
