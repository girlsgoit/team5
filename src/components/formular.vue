<template>
  <section class="bigS">
    <img src="./Img/studentw.png" alt="Main" />
  </section>

  <div class="box">
    <div class="contact-form">
      <h3>Lasă-ne un mesaj!</h3>

        <input class="form-input"
          type="text"
          name="name"
          placeholder="Ionescu"
          v-model="Nume"
          required
        />

        <input class="form-input"
          type="mail"
          name="email"
          placeholder="ionescuion@gmail.com"
          v-model="Email"
          required
        />

        <select class="form-input" id="sex" name="sex" v-model="Sex" required>
          <option value="Chisinau">Sex</option>
          <option value="Feminin">Feminin</option>
          <option value="Masculin">Masculin</option>
          <option value="Prefer sa nu spun">Prefer sa nu spun</option>
          <option value="Altceva">Altceva</option>
        </select>
        <select class="form-input" id="oras" name="oras" v-model="Oras" required>
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

        <textarea class="form-input"
          name="message"
          placeholder="Lăsați mesajul dvs aici"
          v-model="Mesaj"
          required
        ></textarea>

        <button id="submit-button" type="submit" @click="handleSubmit" >Trimite</button>
      </div>
  </div>
</template>
<script>
import { db } from "../firebase/index.js";
import { addDoc, collection } from "firebase/firestore";
export default {
  name: "myFormular",
  data: function () {
    return {
      Email: "",
      Mesaj: "",
      Nume: "",
      Oras: "",
      Sex: "",
    };
  },
  methods: {
    handleSubmit: async function (e) {
      e.preventDefault();

      const review = await addDoc(collection(db, "formulare"), {
        Email: this.Email,
        Mesaj: this.Mesaj,
        Nume: this.Nume,
        Oras: this.Oras,
        Sex: this.Sex,
      });
    },
  },
};
</script>
<style scoped>

textarea {
  padding: 10px;
  font-size: 17px;
  outline: none;
  border: 1px solid #333;
  resize: none;
  min-height: 50px;
  margin-bottom: 10px;
}
input[type="submit"] {
  background-color: #1f3b55;
  color: #fff;
  border: none;
  font-size: 17px;
  max-width: 120px;
  font-weight: 500;
  cursor: pointer;
}

h3 {
  font-size: 1.2rem;
  margin-bottom: 20px;
  color: white;
}

.box{
  background-color: #1f3b55;
}

.contact-form{
  display: flex;
  flex-direction: column;
  align-items: center;
}

.form-input{
  width: 600px;
  margin-bottom: 30px;
  padding: 10px;
}
#sex, #oras{
  width:625px;
}

#submit-button{
  background-color: #152738;
  padding: 20px 60px;
  color:white;
  font-size: 16px;
  margin-bottom: 10px;
}
</style>
