<script>
import { Line } from "vue-chartjs";

export default {
  extends: Line,
  props: ["data", "options", "labels", "borderColor"],
  methods: {
    renderLineChart() {
      this.renderChart(
        {
          labels: this.labels,
          datasets: [
            {
              label: "Weight in KG",
              data: this.chartdata,
              fill: false,
              borderColor: this.borderColor,
            },
          ],
        },
        this.options
      );
    },
  },
  mounted() {
    this.renderLineChart();
  },
  computed: {
    chartdata() {
      return this.data;
    },
  },
  watch: {
    data() {
      this.renderLineChart();
    },
  },
};
</script>

<style></style>
