<script>
    import App from "./App.svelte";
    import { SvelteGantt, SvelteGanttDependencies, SvelteGanttTable, MomentSvelteGanttDateAdapter } from "svelte-gantt";
    import moment from "moment";

    function time(input) {
    console.log(moment(input, "DD/MM/YY").toISOString());

    return moment(input, "DD/MM/YY");
}

const currentStart = time("01/01/22");
const currentEnd = time("30/06/22");

const data = {
  rows: [
    {
      id: 1,
      label: "Ryan",
    },
    {
      id: 2,
      label: "David",
    },
  ],
  tasks: [
    {
      id: 1,
      resourceId: 1,
      label: "PET-CT",
      from: moment().startOf('week').valueOf(),
      to: moment().endOf('week').valueOf(),
      classes: "orange",
    },
    {
      id: 2,
      resourceId: 1,
      label: "Auditing",
      from: moment().startOf('week').valueOf(),
      to: moment().endOf('week').valueOf(),
      classes: "orange",
    },
    {
      id: 3,
      resourceId: 2,
      label: "Auditing2",
      from: moment().startOf('week').valueOf(),
      to: moment().endOf('week').valueOf(),
      classes: "orange",
    },
  ],
  dependencies: [],
};

const options = {
  dateAdapter: new MomentSvelteGanttDateAdapter(moment),
  rows: data.rows,
  tasks: data.tasks,
  dependencies: data.dependencies,
  timeRanges: [],
  columnUnit: "day",
  columnOffset: 7,
  magnetUnit: "day",
  magnetOffset: 1,
  rowHeight: 52,
  rowPadding: 6,
  headers: [
    { unit: "year", format: "YYYY", sticky: true },
    { unit: "month", format: "MM", sticky: true },
  ],
  fitWidth: true,
  minWidth: 800,
  from: currentStart,
  to: currentEnd,
  tableHeaders: [{ title: "Apex Planning", property: "label", width: 140, type: "tree" }],
  tableWidth: 240,
  ganttTableModules: [SvelteGanttTable],
  ganttBodyModules: [SvelteGanttDependencies],
};

const gantt = new SvelteGantt({
  // target a DOM element
  target: document.body,
  // svelte-gantt options
  props: options,
});

</script>