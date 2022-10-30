<template>
  <div class="footer">
     <div class="content pt-4 pb-6">
         <div class="d-flex align-items-center">
             <h2 class="white mr-3"><span class="secondary">Kontaktieren</span> Sie uns! </h2>
             <button class="mb-1">Nachricht versenden</button>
         </div>
         <hr class="mt-2">

    <div class="footer-grid">
         <div class="contact-info">
             <div class="contact-grid align-items-center mt-2">
                    <img class="mr-1" src="@/assets/icons/telefon.png" alt="telephone number">
                    <p class="white">+49 1889288939</p>
                </div>
                 <div class="contact-grid align-items-center mt-2">
                    <img class="mr-1" src="@/assets/icons/mail.png" alt="Innovatives unternehmen">
                    <p class="white">info@kabelbau.de</p>
                </div>
                 <div class="contact-grid align-items-center mt-2">
                    <img class="mr-1" src="@/assets/icons/map.png" alt="nachhaltiges unternehmen">
                    <p class="white">Hans-Auer Str. 32, 80840 Cloppenburg</p>
                </div> 
         </div>

        <div class="social-info">
             <div class="social-grid align-items-center mt-2">
                    <img class="mr-1" src="@/assets/icons/icons8-facebook.png" alt="telephone number">
                    <p class="white">Facebook</p>
                </div>
                 <div class="social-grid align-items-center mt-2">
                    <img class="mr-1" src="@/assets/icons/icons8-instagram.png" alt="Innovatives unternehmen">
                    <p class="white">Instagram</p>
                </div>
                 <div class="social-grid align-items-center mt-2">
                    <img class="mr-1" src="@/assets/icons/icons8-twitter.png" alt="nachhaltiges unternehmen">
                    <p class="white">Twitter</p>
                </div> 
         </div>

         </div>
         <div class="mt-4">
             <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2370.0772656940067!2d9.967612215726344!3d53.556388166658735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b18f6b16876c0d%3A0xe4547029b9726d08!2sSAE%20Institute%20Hamburg!5e0!3m2!1sen!2sde!4v1617286890204!5m2!1sen!2sde" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
         </div>

         <p class="white mt-2">
             ©2021 Walther Kabelbaufirma 
         </p>
         
     </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoepd>
    button {
    margin: 0;
    }

    .footer {
        background: var(--primary);
    }

    .footer-grid {
        display: grid;
    grid-template-columns: 1fr 1fr;
    }

    .contact-grid, .social-grid {
    width: 300px;
    display: grid;
    grid-template-columns: 1fr 3fr;
  }

  iframe {
      
      width: 100%;
  }

   @media only screen and (max-width: 600px) {
   
    .footer-grid {
    display: block;
    }
  }

  @media only screen and (max-width: 800px) {
  h2, button {
  margin-top: 2rem;
  }
  }
</style>