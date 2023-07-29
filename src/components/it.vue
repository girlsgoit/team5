<template> 
<section id="blog">
      <div class="blog-heading">
          <span>IT</span>
          <h3>Tehnologia informației și comunicațiilor (TIC):</h3>
      </div>
      <div class="blog-container">
          <div class="blog-box">
              <div class="blog-img">
                  <img src="./Img/softwaredev.png" alt="poza articol">
              </div>

              <div class="blog-text">
                 
               
                  <a href="#" class="blog-tittle">Dezvoltator de Software:</a>
             <p> Salariul mediu pentru dezvoltatori de software variază între aproximativ 50.000 USD și 120.000 USD pe an, în funcție de experiență, specializare </p>
              </div>

              <div class="rate">
                  <input type="radio" id="star5" name="rate" value="5" />
                  <label for="star5" title="text">5 stars</label>
                  <input type="radio" id="star4" name="rate" value="4" />
                  <label for="star4" title="text">4 stars</label>
                  <input type="radio" id="star3" name="rate" value="3" />
                  <label for="star3" title="text">3 stars</label>
                  <input type="radio" id="star2" name="rate" value="2" />
                  <label for="star2" title="text">2 stars</label>
                  <input type="radio" id="star1" name="rate" value="1" />
                  <label for="star1" title="text">1 star</label>
                </div>
          </div>


          <div class="blog-box">
              <div class="blog-img">
                  <img src="./Img/cybersec.png" alt="poza articol">
              </div>
              <div class="blog-text">
                 
               
                  <a href="#" class="blog-tittle">Specialist în Securitate Cibernetică: </a>
             <p> 70.000 USD și 150.000 USD pe an, cu un accent deosebit pe experiență, certificări și expertiză în domeniu.</p>
              </div>
              <div class="rate">
                  <input type="radio" id="star5" name="rate" value="5" />
                  <label for="star5" title="text">5 stars</label>
                  <input type="radio" id="star4" name="rate" value="4" />
                  <label for="star4" title="text">4 stars</label>
                  <input type="radio" id="star3" name="rate" value="3" />
                  <label for="star3" title="text">3 stars</label>
                  <input type="radio" id="star2" name="rate" value="2" />
                  <label for="star2" title="text">2 stars</label>
                  <input type="radio" id="star1" name="rate" value="1" />
                  <label for="star1" title="text">1 star</label>
                </div>
          </div>

          <div class="blog-box">
              <div class="blog-img">
                  <img src="./Img/analistd.png" alt="poza articol">
              </div>
              <div class="blog-text">
                 
               
                  <a href="#" class="blog-tittle">Analist de Date:</a>
             <p>50.000 USD și 100.000 USD pe an, cu variații în funcție de nivelul de experiență și cerințele specifice ale angajatorului.</p>
              </div>
              <div class="rate">
                  <input type="radio" id="star5" name="rate" value="5" />
                  <label for="star5" title="text">5 stars</label>
                  <input type="radio" id="star4" name="rate" value="4" />
                  <label for="star4" title="text">4 stars</label>
                  <input type="radio" id="star3" name="rate" value="3" />
                  <label for="star3" title="text">3 stars</label>
                  <input type="radio" id="star2" name="rate" value="2" />
                  <label for="star2" title="text">2 stars</label>
                  <input type="radio" id="star1" name="rate" value="1" />
                  <label for="star1" title="text">1 star</label>
                </div>
          </div>
          
          </div>
          
  </section>
</template>
<script>
export default{

}
</script>
<style scoped>
*{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
}
a{
    text-decoration: none;
}
ul{
    list-style: none;
}
#blog{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 40px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.5);
}
.blog-heading{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.blog-heading span{
    color: rgb(226, 43, 192);
}
.blog-heading h3{
    font-size: 2.4rem;
    color: black;
    font-weight: 600;
}
.blog-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
    flex-wrap: wrap;
}
.blog-box{
    width: 350px;
    background-color: white;
    border: 1px solid pink;
    margin: 20px;
}
.blog-img{
    width: 100%;
    height: auto;
}
.blog-img img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
}
.blog-text{
    padding: 30px;
    display: flex;
    flex-direction: column;
}
.blog-text span{
    color: rgb(66, 49, 199);
    font-size: 0.9rem;
}
.blog-text .blog-tittle{
    font-size: 1.3rem;
    font-weight: 500;
    color: rgb(23, 23, 40);
}
.blog-text .blog-tittle:hover{
    color: rgb(76, 15, 100);
    transition: all ease 0.3s;
}
.blog-text p{
    color: cadetblue;
    font-size: 0.9rem;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 20px 0px;
    
}
.rate {
    float: center;
    height: 46px;
    padding: 0 90px;
}
.rate:not(:checked) > input {
    position:absolute;
    top:-9999px;
}
.rate:not(:checked) > label {
    float:right;
    width:1em;
    overflow:hidden;
    white-space:nowrap;
    cursor:pointer;
    font-size:30px;
    color:#ccc;
}
.rate:not(:checked) > label:before {
    content: '★ ';
}
.rate > input:checked ~ label {
    color: #ffc700;    
}
.rate:not(:checked) > label:hover,
.rate:not(:checked) > label:hover ~ label {
    color: #deb217;  
}
.rate > input:checked + label:hover,
.rate > input:checked + label:hover ~ label,
.rate > input:checked ~ label:hover,
.rate > input:checked ~ label:hover ~ label,
.rate > label:hover ~ input:checked ~ label {
    color: #c59b08;
}

</style>