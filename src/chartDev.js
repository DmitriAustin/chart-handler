window.charts = {
  items: {},
  tabs: false,
  load: function (config) {
    this.tabs = config.tabs || false;
    this.items = config.items;
  },
  init: function () {
    google.charts.load('43', {
      packages: ['line', 'bar', 'corechart']
    });

    google.charts.setOnLoadCallback((function () {
      this.setUp();
    }.bind(this)));
  },
  setUp: function () {
    if (!this.tabs) {
      this.renderItems();
    } else {
      var tabs = this.getTabs();

      this.renderTabs(tabs);
    }
  },
  renderItems: function () {
    var items = this.items,
      charts = {},
      itemChart = {},
      chart = '',
      item = '';

    for (item in items) {
      for (chart in items[item]) {
        var itemChart = this.charts.get(item, items[item][chart]);
        charts[Object.keys(charts).length] = itemChart;
      }
    }
    this.render(charts);
  },
  renderTabs: function (tabs) {
    var that = this;

    for (tab in tabs) {
      tabLink = document.querySelector('[href="#' + tab + '"]');

      if (tabLink.classList.contains('active')) {
        that.render(tabs[tab]);
      }

      tabLink.addEventListener('click', function (tab) {
        return function () {
          var charts = tabs[tab];

          setTimeout(function () {
            that.render(charts);
          }, 1);
        };
      }(tab));
    }
  },
  render: function (charts) {
    for (chart in charts) {
      charts[chart].draw();
    }
  },
  charts: {
    data: {},
    container: {},
    get: function (type, data) {
      switch (type) {
        case 'line':
          {
          this.data = this.line.getData();
          var cols = this.line.getColumns(this.data, data.columns),
            rows = this.line.getRows(this.data, data.rows),
            chart = this.line.getChart(data.container),
            result = {
              data: this.data,
              chart: chart,
            };
          break;
          }
        case 'bar':
          {
          this.data = this.bar.getData(data.dataTable);
          var chart = this.bar.getChart(data.container),
            result = {
              data: this.data,
              chart: chart,
            };
          break;
          }
        case 'pie':
          {
          this.data = this.pie.getData(data.dataTable);
          var chart = this.pie.getChart(data.container),
            result = {
              data: this.data,
              chart: chart,
            };
          break;
          }
      }

      result.options = data.options;
      result.container = data.container;
      result.getContainerWidth = function () {
        return this.container.offsetWidth;
      };
      result.draw = function () {
        this.options.width = this.getContainerWidth();
        this.chart.draw(this.data, this.options);
      };

      return result;
    },
    pie: {
      getData: function (dataTable) {
        return new google.visualization.arrayToDataTable(dataTable);
      },
      getChart: function (container) {
        return new google.visualization.PieChart(container);
      },
    },
    bar: {
      getData: function (dataTable) {
        return new google.visualization.arrayToDataTable(dataTable);
      },
      getChart: function (container) {
        return new google.charts.Bar(container);
      },
    },
    line: {
      getData: function () {
        return new google.visualization.DataTable();
      },
      getRows: function (data, rows) {
        data.addRows(rows);
        return data;
      },
      getColumns: function (data, cols) {
        for (index in cols) {
          for (col in cols[index]) {
            data.addColumn(col, cols[index][col]);
          }
        }

        return data;
      },
      getChart: function (container) {
        return new google.charts.Line(container);
      },
    }
  },
  getTabs: function () {
    var items = this.items,
      tabs = [],
      itemChart = {};

    for (item in items) {
      for (chart in items[item]) {
        if (!items[item][chart].container) 
        {
          continue;
        }
        tab = items[item][chart].tabHref;

        if (!tabs[tab]) {
          tabs[tab] = {};
        }

        itemChart = this.charts.get(item, items[item][chart]);

        tabs[tab][Object.keys(tabs[tab]).length] = itemChart;
      }
    }

    return tabs;
  },
};