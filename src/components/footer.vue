<template>
<footer>
    <section class="contain">
      <div class="Contact">
        <h3>Contact</h3>
        <p>
          Adresa: youthpath@gmail.com<br />
          Phone: 068745638
        </p>
      </div>
    </section>
    <section class="copyright">
      Copyright &copy;Girls Go IT SummerCamp 2023 HTML
    </section>
  </footer>

  
</template>

   <script>
   export default {
    name: "myFooter"
   }
  </script> 

  
<style>
      footer {
        background-color: black;
        color: white;
        display: flex;
        flex-direction: column;
      }
      .contain {
        display: flex;
        text-align: center;
        font-size: 20px;
      }
      .Contact {
        flex-grow: 1;
        flex-basis: 70%;
      }

      .Contact p {
        text-align: center;
        font-size: 15px;
      }

      .contain h3 {
        margin-bottom: 20px;
        font-size: 20px;
      }
      .copyright {
        padding: 15px 0;
        text-align: center;
        border-top: 1px solid white;
      }
      
    </style>
   