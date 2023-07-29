<template>
<section class="bigS">
      <img src="Img/studentw.png" alt="Main" />
    </section>

      <form action="/procesare_formular.php" method="post">
        <div class="box">
            <div class="contact form">
              <h3>Lasă-ne un mesaj!</h3>
              <form id="myForm" method="post" action="https://formspree.io/f/xoqzlogo">
                <div class="formbox">
                <div class="row50">
                    <div class="inputbox">
                      <span>Nume, Prenume</span>
                      <input type="text" name="name" placeholder="Ionescu" required v-model="Nume">
                    </div>
    
                    <div class="inputbox">
                        <span>E-mail</span>
                        <input type="mail" name="email" placeholder="ionescuion@gmail.com" required v-model="Email">
                        </div>
                    <div>
                        <div class="sex-loc">
                    <div class="inputbox">
               
                            <div class="inputbox">
                                <select id="oras" name="oras" required v-model="Sex">
                                    <option value="Chisinau">Sex</option>
                                    <option value="Balti">Feminin</option>
                                    <option value="Orhei">Masculin</option>
                                    <option value="Orhei">Prefer sa nu spun</option>
                                    <option value="Orhei">Altceva</option>
                                </select>
                            </div>
                    </div>
                    <div class="inputbox">
                        <select id="oras" name="oras" required v-model="Oras">
                            <option value="">Oras</option>
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
                      </form>
                      </div>
        
                <div class="row100">
                  <div class="inputbox">
                    <span>Message</span>
                    <textarea name="message" placeholder="Lăsați mesajul dvs aici" required v-model="Mesaj"></textarea>
                  </div>
                </div>
        
    
                      <div class="inputbox">
                        <input type="submit" value="Trimite" @click="handleSubmit" >
                      </div>

                      
                   </div>
    
             </form>
          
    
    </template>
    <script> 
import {db} from '../firebase/index.js';
import {addDoc,collection} from 'firebase/firestore';
    export default {
      name: "myFormular",
      data: function(){
        return {
          Email:"",
          Mesaj:"",
          Nume:"",
          Oras:"",
          Sex:""


}

      },
      methods: {
        handleSubmit: async function(e){
        e.preventDefault()

          const review = await addDoc(collection(db, "formulare"), 
          {
            Email: this.Email,
          Mesaj:this.Mesaj,
          Nume:this.Nume,
          Oras:this.Oras,
          Sex:this.Sex

          })

      }}
    }
    </script>
    <style>
.form{
    grid-area: form;
}

.formbox{
    position: relative;
    width: 100%;

}
.formbox .row50{
    display: flex;
    gap: 20px;
}
.inputbox{
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
}
.formbox .row50 .inputbox{
    width: 100%;
}
.inputbox span{
    color: rgb(255, 255, 255);
    margin-top: 10px;
    margin-bottom: 5px;
    
}
.inputbox input{
    padding: 10px;
    font-size: 17px;
    outline: none;
    border: 1px solid #333;
}
.inputbox textarea{
    padding: 10px;
    font-size: 17px;
    outline: none;
    border: 1px solid #333;
    resize: none;
    min-height: 50px;
    margin-bottom: 10px;

}
.inputbox input[type="submit"]{
    background-color: #1f3b55;
    color: #fff;
    border: none;
    font-size: 17px;
    max-width: 120px;
    font-weight: 500;
    cursor: pointer;

}
.sex-loc{
   margin-top: 20px;
}
Sectiunea Sectiunea Misiunea Noastra
.sec {
  position: relative;
  padding: 100px;
  background: rgb(7, 1, 36);
}
.sec h2 {
  font-size: 1.2rem;
  margin-bottom: 10px;
  color: white;
}
.sec p {
  color: white;
}

</style>
