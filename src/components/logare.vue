<!-- <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="CSS/style.css" />
    <link rel="stylesheet" href="./logare.css" />
    <link rel="icon" href="Img/logo.png" />
    <title>YouthPath</title>
  </head> -->
<template> 
  <body>
    <div id="login-form-wrap">
      <h2>Login</h2>
      <form id="login-form">
        <p>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Nume"
            required
          /><i class="validation"><span></span><span></span></i>
        </p>
        <p>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Prenume"
            required
          /><i class="validation"><span></span><span></span></i>
        </p>
        <p>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Adresa de email"
            required
          /><i class="validation"><span></span><span></span></i>
        </p>
        <p>
          <input type="submit" id="login" value="Login" />
        </p>
      </form>
    </div>
  </body>
<!-- </html> -->
</template>
<script>
  export default {
   name: "myFooter"
  }
 </script> 
<style>
body {
    background-color: rgb(254, 252, 252);
    font-size: 1.6rem;
    font-family: "Open Sans", sans-serif;
    color: #2b3e51;
  }
  
  h2 {
    font-weight: 300;
    text-align: center;
  }
  
  p {
    position: relative;
  }
  
  a,
  a:link,
  a:visited,
  a:active {
    color: #3ca9e2;
    -webkit-transition: all 0.2s ease;
    transition: all 0.2s ease;
  }
  a:focus, a:hover,
  a:link:focus,
  a:link:hover,
  a:visited:focus,
  a:visited:hover,
  a:active:focus,
  a:active:hover {
    color: #329dd5;
    -webkit-transition: all 0.2s ease;
    transition: all 0.2s ease;
  }
  
  #login-form-wrap {
    background-color: rgb(254, 252, 252);
    width: 35%;
    margin: 200px auto;
    text-align: center;
    padding: 20px 0 0 0;
    border-radius: 4px;
    box-shadow: 0px 30px 50px 0px rgba(0, 0, 0, 0.2);
  }
  
  #login-form {
    padding: 30px 60px;
  }
  
  input {
    display: block;
    box-sizing: border-box;
    width: 100%;
    outline: none;
    height: 60px;
    line-height: 60px;
    border-radius: 4px;
  }
  
  input[type="text"],
  input[type="email"] {
    width: 100%;
    padding: 0 0 0 10px;
    margin: 0;
    color: #8a8b8e;
    border: 1px solid #c2c0ca;
    font-style: normal;
    font-size: 16px;
    -webkit-appearance: none;
       -moz-appearance: none;
            appearance: none;
    position: relative;
    display: inline-block;
    background: none;
  }
  input[type="text"]:focus,
  input[type="email"]:focus {
    border-color: #45668e;
  }
  input[type="text"]:focus:invalid,
  input[type="email"]:focus:invalid {
    color: #cc1e2b;
    border-color: #cc1e2b;
  }
  input[type="text"]:valid ~ .validation,
  input[type="email"]:valid ~ .validation {
    display: block;
    border-color: #0C0;
  }
  input[type="text"]:valid ~ .validation span,
  input[type="email"]:valid ~ .validation span {
    background: #0C0;
    position: absolute;
    border-radius: 6px;
  }
  input[type="text"]:valid ~ .validation span:first-child,
  input[type="email"]:valid ~ .validation span:first-child {
    top: 30px;
    left: 14px;
    width: 20px;
    height: 3px;
    -webkit-transform: rotate(-45deg);
            transform: rotate(-45deg);
  }
  input[type="text"]:valid ~ .validation span:last-child,
  input[type="email"]:valid ~ .validation span:last-child {
    top: 35px;
    left: 8px;
    width: 11px;
    height: 3px;
    -webkit-transform: rotate(45deg);
            transform: rotate(45deg);
  }
  
  .validation {
    display: none;
    position: absolute;
    content: " ";
    height: 60px;
    width: 30px;
    right: 15px;
    top: 0px;
  }
  
  input[type="submit"] {
    border: none;
    display: block;
    background-color: #45668e;
    color: #fff;
    font-weight: bold;
    text-transform: uppercase;
    cursor: pointer;
    -webkit-transition: all 0.2s ease;
    transition: all 0.2s ease;
    font-size: 18px;
    position: relative;
    display: inline-block;
    cursor: pointer;
    text-align: center;
  }
  input[type="submit"]:hover {
    background-color: #45668e;
    -webkit-transition: all 0.2s ease;
    transition: all 0.2s ease;
  }
</style>
  