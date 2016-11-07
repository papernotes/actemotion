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
}
