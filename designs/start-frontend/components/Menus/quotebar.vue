<template>
  <div>
    <v-row>
      <v-toolbar color="blue">
        <v-col cols="9">
          <v-toolbar color="blue" density="compact">
            <v-list-item density="compact" id="quote"></v-list-item>
          </v-toolbar>
        </v-col>
        <v-col cols="3">
          <v-toolbar color="blue" density="compact">
            <h4 id="dateTime"></h4>
          </v-toolbar>
        </v-col>
      </v-toolbar>
    </v-row>
  </div>
</template>

<script>
  import Quote from "inspirational-quotes";

  export default {
    mounted() {
      setInterval(quoteTimer, 1000);

      function quoteTimer() {
        document.getElementById("quote").innerHTML = Quote.getRandomQuote();
      }

      setInterval(myTimer, 1000);

      function myTimer() {
        const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October",
          "November", "December"
        ];
        const date = new Date();

        let name = month[date.getMonth()];
        const day = new Date().toLocaleString();

        document.getElementById("dateTime").innerHTML = name + " " + day;

        document.getElementById("quote").innerHTML = Quote.getRandomQuote();
      }
    }
  }
</script>

<script setup>

</script>