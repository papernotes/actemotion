/*
 * Formats data for charts
 */

export default class DataFormatter {

  generateFeelingsGraph(events) {
    var counts = {};
    var data = [];
    data.push(['Feeling', 'Intensity']);

    for (var i in events) {
      if (counts[events[i].emotion] == null) {
        counts[events[i].emotion] = 1;
      }
      else {
        ++counts[events[i].emotion];
      }
    }

    for (var key in counts) {
      data.push([key, counts[key]])
    }
    return data;
  }

  generateEnergyGraph(events) {
    var counts = {};
    var data = [];
    data.push(['Energy', 'Level']);

    for (var i in events) {
      if (counts[events[i].energy] == null) {
        counts[events[i].energy] = 1;
      }
      else {
        ++counts[events[i].energy];
      }
    }

    for (var key in counts) {
      data.push(['Energy Level ' + key, counts[key]])
    }
    return data;
  }

}
