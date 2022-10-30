<template>
  <div class="team">
     <div class="content pt-5">
        <h2>Das zeichnet unser <span class="secondary"> Team</span> aus.</h2>
        <p>Unschlagbar gut aufgestellt und ihre beste Wahl für das nächste Projekt.</p>
        <div class="skillset pt-2">
                <div class="skill-grid align-items-center mt-2">
                    <img class="mr-1" src="@/assets/icons/mitarbeiter.png" alt="workers">
                    <p class="secondary">500 Mitarbeiter</p>
                </div>
                 <div class="skill-grid align-items-center mt-2">
                    <img class="mr-1" src="@/assets/icons/innovation.png" alt="Innovatives unternehmen">
                    <p class="secondary">Innovatives Unternehmen</p>
                </div>
                 <div class="skill-grid align-items-center mt-2">
                    <img class="mr-1" src="@/assets/icons/nachhaltig.png" alt="nachhaltiges unternehmen">
                    <p class="secondary">Nachhaltige Denkweise</p>
                </div>
                 <div class="skill-grid align-items-center mt-2">
                    <img class="mr-1" src="@/assets/icons/energie.png" alt="energieversorger">
                    <p class="secondary">Größter Energieversorger</p>
                </div>
            
        </div>
        <button class="mt-3">Work with us!</button>
     </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
   .team {
    height: 90vh;
    max-width: 100%;
    background-image: url("../assets/imgs/owner_edit.png");
    background-position: center top;
    background-repeat: no-repeat;
    background-size: cover;
   } 

   .skill-grid {
    width: 300px;
    display: grid;
    grid-template-columns: 1fr 3fr;
  }

  @media only screen and (max-width: 800px) {
   h2 {
    margin-top: 3rem;
    font-size: 2rem;
   }

    .headline-attribute {
        padding: 0 20px;
    }

    .team {
        background-position: 80% 50%;
    }

    .skill-grid {
        background: rgba(255, 255, 255, 0.809);
        padding: 5px;

    }
  }

</style>