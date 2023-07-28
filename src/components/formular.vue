<template>
<form action="/procesare_formular.php" method="post">
    <div class="box">
        <div class="contact form">
          <h3>Lasă-ne un mesaj!</h3>
          <!-- <form id="myForm" method="post" action="https://formspree.io/f/xoqzlogo"> -->
            <div class="formbox">
            <div class="row50">
                <div class="inputbox">
                  <span>Nume, Prenume</span>
                  <input type="text" name="name" placeholder="Ionescu" required>
                </div>

                <div class="inputbox">
                    <span>E-mail</span>
                    <input type="mail" name="email" placeholder="ionescuion@gmail.com" required>
                    </div>
                <div>
                    <div class="sex-loc">
                <div class="inputbox">
           
                        <div class="inputbox">
                            <select id="oras" name="oras" required>
                                <option value="Chisinau">Sex</option>
                                <option value="Balti">Feminin</option>
                                <option value="Orhei">Masculin</option>
                                <option value="Orhei">Prefer sa nu spun</option>
                                <option value="Orhei">Altceva</option>
                            </select>
                        </div>
                </div>
                <div class="inputbox">
                    <select id="oras" name="oras" required>
                        <option value="Rîșcani">Rîșcani</option>
                        <option value="Aneni noi">Aneni noi</option>
                        <option value="Balti">Balti</option>
                        <option value="Briceni">Briceni</option>
                        <option value="Cantemir">Cantemir</option>
                        <option value="Calarasi">Calarasi</option>
                        <option value="Causeni">Causeni</option>
                        <option value="Cimislia">Cimislia</option>
                        <option value="Criuleni">Criuleni</option>
                        <option value="Chisinau">Chisinau</option>
                        <option value="Donduseni">Donduseni</option>
                        <option value="Balti">Balti</option>
                        <option value="Orhei">Orhei</option>
                        <option value="Rabnita">Rabnita</option>
                        <option value="Soroca">Soroca</option>
                        <option value="Straseni">Straseni</option>
                        <option value="Ceadar-Lunga">Ceadar-Lunga</option>
                        <option value="Hancesti">Hancesti</option>
                        <option value="Durlesti">Durlesti</option>
                        <option value="Ungheni">Ungheni</option>
                        <option value="Vulcanesti">Vulcanesti</option>
                        <option value="Edinet">Edinet</option>
                        <option value="Slobozia">Slobozia</option>
                        <option value="Drochia">Drochia</option>
                    </select>
                </div>
            </div>
                    </div>
                    </div>
                  </div>
    
            <div class="row100">
              <div class="inputbox">
                <span>Message</span>
                <textarea name="message" placeholder="Lăsați mesajul dvs aici" required></textarea>
              </div>
            </div>
    

                  <div class="inputbox">
                    <input type="submit" value="Trimite">
                  </div>
               </div>

         <!-- </form> -->
        </div>
    </form>
    </template>
    <script> 

    export default {
      name: "myFormular"
    }
    </script>
    <style>

</style>
