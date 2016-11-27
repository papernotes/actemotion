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
      data.push(['Level ' + key, counts[key]])
    }
    return data;
  }

  generateEmotionGraph(events) {
    var counts = {};
    var data = [];
    data.push(['Activity', 'Happiness Level']);

    for (var i in events) {
      if (events[i].emotion === 'happy') {
        if (counts[events[i].type] == null) {
          counts[events[i].type] = 1;
        }
        else {
          ++counts[events[i].type];
        }
      }
    }

    for (var key in counts) {
      data.push([key, counts[key]])
    }

    return data;
  }
  

  generateCSPGraph(events) {
    var data = [];
    var conf = 0;
    var sat = 0;
    var prod = 0;

    for (var i in events) {
      conf = conf + events[i].confidence;
      sat = sat + events[i].satisfaction;
      prod = prod + events[i].productivity;
    }

    conf = conf / events.length;
    sat = sat / events.length;
    prod = prod / events.length;
    // console.log(conf);
    // console.log(sat);
    // console.log(prod);

    data.push(['CSP', 'Average Level'], ['Confidence', conf], 
      ['Satisfaction', sat], ['Productivity', prod]);
    return data;
  }


  generateSadGraph(events) {
    var counts = {};
    var data = [];
    data.push(['Activity', 'Sad Events']);

    for (var i in events) {
      if (events[i].emotion === 'sad') {
        if (counts[events[i].type] == null) {
          counts[events[i].type] = 1;
        }
        else {
          ++counts[events[i].type];
        }
      }
    }

    for (var key in counts) {
      data.push([key, counts[key]])
    }

    return data;
  }


  generateAngryGraph(events) {
    var counts = {};
    var data = [];
    data.push(['Activity', 'Angry Events']);

    for (var i in events) {
      if (events[i].emotion === 'angry') {
        if (counts[events[i].type] == null) {
          counts[events[i].type] = 1;
        }
        else {
          ++counts[events[i].type];
        }
      }
    }

    for (var key in counts) {
      data.push([key, counts[key]])
    }

    return data;
  }



  generateEmotionEvents(events) {
    var newEvents = JSON.parse(JSON.stringify(events));
    for (var i in newEvents) {
      newEvents[i].title = newEvents[i].emotion;
    }
    return newEvents;
  }

}
