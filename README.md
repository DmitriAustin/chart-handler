# Chart Handler
#### A module that handles the registration of multiple google charts to render on document load and also handle upgrades to be rendered after initial page load. 

## Version v0.0.1

The most basic features are present at this point.

## Dependency
By default, chartHandler was forced to load automatically Google charts library to work as well. We recommend that you define manually this. Please, visit the [Google charts website](https://developers.google.com/chart/) and see how include their script in your page.

## Include JS files
```html
<html>
  <head>  
  <!-- Includes the google charts file. -->
  <script src="//www.gstatic.com/charts/loader.js"></script>  
  <!-- Includes the chart handler file. -->
  <script src="chartHandler.js"></script>
  </head>
  <body>
    <!-- Your chart container --> 
    <div id="chart"></div>
    <script>
      // Your chart declaration/definition.    
    </script>
  </body>
</html>
```
## Chart config

Defines the config data of a chart item that must be handled by the module. 

### Typedef

```js
/**
 * The config data of a chart to be registered.
 * 
 * @typedef {{
 *   type: string,
 *   containerSelector: string,
 *   options: object,
 *   dataTable: object|array,
 * }}
 */
chartHandler.ChartConfig;

```

## Usage

### Rendering
```js 
// Defines the chart config data.
var chartConfig = {
  type: 'line',
  containerSelector: '#chart',
  options: {
    chart: {
      title: 'Box Office Earnings in First Two Weeks of Opening',
      subtitle: 'in millions of dollars (USD)'
    },
    width: 900, // Default: container width. 
    height: 500 // Default: 400.
  },
  dataTable: {
    columns: {
      'Col 1': 'number',
      'Col 2': 'number',
      'Col 3': 'number',
      'Col 4': 'number',
    },
    rows: [
      [1, 37.8, 80.8, 41.8],
      [2, 30.9, 69.5, 32.4],
      [3, 25.4, 57, 25.7],
    ],
  }
};

// Registers the chart in handler.
chartHandler.register(chartConfig);
// Renders the registered chart.
chartHandler.render('#chart');

// Renders all registereds. Renders again if already rendered.
// chartHandler.renderAll();

// Renders all registereds that is not rendered yet.
// chartHandler.renderAllDiff();
```

### Updating data

```js
var chartElement = document.querySelector('#chart');

// Changes the width of chart.
chartElement.Chart.options.width = 600;

// Adding a new row.
chartElement.Chart.data.addRow([4, 25.4, 57, 25.7]);

// Upgrade the charts to apply the changes.
chartHandler.upgradeAll();
```

## Javascript API 

Method | Description
-------|------------
`chartHandler.register(chartConfig)` | Registers the charts for future use. Can be called for register multiple charts or only one. This method append items in a registereds array.
`chartHandler.render(containerSelector)` | Renders the chart of a given container selector. The chart must be registered.
`chartHandler.renderAll()` | Renders all registered charts.
`chartHandler.renderAllDiff()` | Renders all registered charts that is not rendered yet.
`chartHandler.upgradeAll()` | Draw again all rendered charts with their data and options updates.