<template>
    <div>
        <div class="headline-attribute">
        <h2>Verkabeln auf höchstem <span class="secondary"> Niveau.</span></h2>
        <p>Jahrelange Erfahrung mit professionellem Engagement.</p>
        </div>
        <div class="attribute-container">
            <div>
                <img src="@/assets/icons/architektur.png" alt="architektur">
                <h4 class="secondary headline-attribute">Architektur <br> & Bauwesen</h4>
                <p>Jahrelange Erfahrung mit <br>
                    professionellem Engagement.</p>
                <div class="d-flex align-items-center mt-2">
                    <router-link class="secondary " :to="{ name: 'Home' }">Mehr lesen</router-link>
                    <img class="ml-1" src="@/assets/icons/arrow.png" alt="arrow">
                </div>
            </div>
            <div>
                <img src="@/assets/icons/construction-consulting.png" alt="baufirma">
                <h4 class="secondary headline-attribute">Construction
                    <br> & Consulting</h4>
                <p>Jahrelange Erfahrung mit <br>
                    professionellem Engagement.</p>
                <div class="d-flex align-items-center mt-2">
                    <router-link class="secondary " :to="{ name: 'Home' }">Mehr lesen</router-link>
                    <img class="ml-1" src="@/assets/icons/arrow.png" alt="arrow">
                </div>
            </div>
            <div>
                <img src="@/assets/icons/baufirma.png" alt="architektur">
                <h4 class="secondary headline-attribute">Baufirmen
                    <br> Management</h4>
                <p>Jahrelange Erfahrung mit <br>
                    professionellem Engagement.</p>
                <div class="d-flex align-items-center mt-2">
                    <router-link class="secondary " :to="{ name: 'Home' }">Mehr lesen</router-link>
                    <img class="ml-1" src="@/assets/icons/arrow.png" alt="arrow">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>
    .attribute-container {
        margin-top: 4rem;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        flex-wrap: wrap;
        grid-gap: 60px;
    }

    .headline-attribute {
        margin: 20px 0;
    }

    @media only screen and (max-width: 1050px) {
    .attribute-container {
        padding: 0 20px;
        grid-template-columns: 1fr 1fr;
    }}

    @media only screen and (max-width: 400px) {
    .attribute-container {
       display: flex;
       text-align: center;
    }

    .headline-attribute {
        padding: 0 20px;
    }
  }
</style>