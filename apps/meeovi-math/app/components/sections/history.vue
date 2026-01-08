<template>
  <v-card class="history-card" elevation="3">
    <v-card-title>Calculation & Conversion History</v-card-title>
    <v-card-text>
      <v-list>
        <v-list-item v-for="(item, index) in history" :key="index">
          <v-list-item-content>
            <div class="text-body-2">{{ item.timestamp }} - <strong>{{ item.type }}</strong></div>
            <div class="text-body-1">{{ item.summary }}</div>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-btn color="error" block class="mt-4" @click="clearHistory">Clear History</v-btn>
      <v-btn color="primary" block class="mt-2" @click="exportHistory">Export History</v-btn>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      history: []
    }
  },
  mounted() {
    this.loadHistory();
  },
  methods: {
    loadHistory() {
      const raw = localStorage.getItem('meeovi-math-history');
      this.history = raw ? JSON.parse(raw) : [];
    },
    clearHistory() {
      localStorage.removeItem('meeovi-math-history');
      this.history = [];
    },
    exportHistory() {
      if (!this.history.length) return;
      const csvRows = [
        'Timestamp,Type,Summary'
      ];
      this.history.forEach(item => {
        // Escape quotes and commas
        const timestamp = '"' + (item.timestamp || '').replace(/"/g, '""') + '"';
        const type = '"' + (item.type || '').replace(/"/g, '""') + '"';
        const summary = '"' + (item.summary || '').replace(/"/g, '""') + '"';
        csvRows.push([timestamp, type, summary].join(','));
      });
      const csvContent = csvRows.join('\n');
      const blob = new Blob([csvContent], { type: 'text/csv' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'meeovi-math-history.csv';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    },
  }
}
</script>

<style scoped>
.history-card {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
