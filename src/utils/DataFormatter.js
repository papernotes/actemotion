/*
 * Formats data for charts
 */

export default class DataFormatter {

  emptyCheck(data) {
    if (data.length > 1)
      return data;
    else {
      data.push(['no_event', 0]);
      return data;
    }
  }

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
    return this.emptyCheck(data);
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
    return this.emptyCheck(data);
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

    return this.emptyCheck(data);
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
    return this.emptyCheck(data);
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

    return this.emptyCheck(data);
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

    return this.emptyCheck(data);
  }

   generateAnxiousGraph(events) {
    var counts = {};
    var data = [];
    data.push(['Activity', 'Anxious Events']);

    for (var i in events) {
      if (events[i].emotion === 'anxious') {
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

    return this.emptyCheck(data);
  }

 generateDisgustGraph(events) {
    var counts = {};
    var data = [];
    data.push(['Activity', 'Disgust Events']);

    for (var i in events) {
      if (events[i].emotion === 'disgust') {
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

    return this.emptyCheck(data);
  }

 generateEnvyGraph(events) {
    var counts = {};
    var data = [];
    data.push(['Activity', 'Envy Events']);

    for (var i in events) {
      if (events[i].emotion === 'envy') {
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

    return this.emptyCheck(data);
  }

 generateExcitedGraph(events) {
    var counts = {};
    var data = [];
    data.push(['Activity', 'Excited Events']);

    for (var i in events) {
      if (events[i].emotion === 'excited') {
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

    return this.emptyCheck(data);
  }

 generateFearGraph(events) {
    var counts = {};
    var data = [];
    data.push(['Activity', 'Fear Events']);

    for (var i in events) {
      if (events[i].emotion === 'fear') {
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

    return this.emptyCheck(data);
  }

 generateHopeGraph(events) {
    var counts = {};
    var data = [];
    data.push(['Activity', 'Hope Events']);

    for (var i in events) {
      if (events[i].emotion === 'hope') {
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

    return this.emptyCheck(data);
  }

   generateJoyGraph(events) {
    var counts = {};
    var data = [];
    data.push(['Activity', 'Joy Events']);

    for (var i in events) {
      if (events[i].emotion === 'joy') {
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

    return this.emptyCheck(data);
  }

   generateSurpriseGraph(events) {
    var counts = {};
    var data = [];
    data.push(['Activity', 'Surprise Events']);

    for (var i in events) {
      if (events[i].emotion === 'surprise') {
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

    return this.emptyCheck(data);
  }

  generateEmotionEvents(events) {
    var newEvents = JSON.parse(JSON.stringify(events));
    for (var i in newEvents) {
      newEvents[i].title = newEvents[i].emotion;
    }
    return newEvents;
  }

  generateEventNamesGraph(events) {
    var counts = {};
    var data = [];
    data.push(['Event Name', 'Counts']);

    for (var i in events) {
      if (counts[events[i].title] == null) {
        counts[events[i].title] = 1;
      }
      else {
        ++counts[events[i].title];
      }
    }

    for (var key in counts) {
      data.push([key, counts[key]])
    }

    return this.emptyCheck(data);
  }

  generateHappyEventNamesGraph(events) {
    var counts = {};
    var data = [];
    data.push(['Happy Event Name', 'Counts']);

    for (var i in events) {
      if (events[i].emotion === 'happy') {
        if (counts[events[i].title] == null) {
          counts[events[i].title] = 1;
        }
        else {
          ++counts[events[i].title];
        }
      }
    }

    for (var key in counts) {
      data.push([key, counts[key]])
    }

    return this.emptyCheck(data);
  }

  generateSadEventNamesGraph(events) {
    var counts = {};
    var data = [];
    data.push(['Sad Event Name', 'Counts']);

    for (var i in events) {
      if (events[i].emotion === 'sad') {
        if (counts[events[i].title] == null) {
          counts[events[i].title] = 1;
        }
        else {
          ++counts[events[i].title];
        }
      }
    }

    for (var key in counts) {
      data.push([key, counts[key]])
    }

    return this.emptyCheck(data);
  }

  generateAnxiousEventNamesGraph(events) {
    var counts = {};
    var data = [];
    data.push(['Anxious Event Name', 'Counts']);

    for (var i in events) {
      if (events[i].emotion === 'anxious') {
        if (counts[events[i].title] == null) {
          counts[events[i].title] = 1;
        }
        else {
          ++counts[events[i].title];
        }
      }
    }

    for (var key in counts) {
      data.push([key, counts[key]])
    }

    return this.emptyCheck(data);
  }

  generateDisgustEventNamesGraph(events) {
    var counts = {};
    var data = [];
    data.push(['Disgust Event Name', 'Counts']);

    for (var i in events) {
      if (events[i].emotion === 'disgust') {
        if (counts[events[i].title] == null) {
          counts[events[i].title] = 1;
        }
        else {
          ++counts[events[i].title];
        }
      }
    }

    for (var key in counts) {
      data.push([key, counts[key]])
    }

    return this.emptyCheck(data);
  }

  generateEnvyEventNamesGraph(events) {
    var counts = {};
    var data = [];
    data.push(['Envy Event Name', 'Counts']);

    for (var i in events) {
      if (events[i].emotion === 'envy') {
        if (counts[events[i].title] == null) {
          counts[events[i].title] = 1;
        }
        else {
          ++counts[events[i].title];
        }
      }
    }

    for (var key in counts) {
      data.push([key, counts[key]])
    }

    return this.emptyCheck(data);
  }

  generateExcitedEventNamesGraph(events) {
    var counts = {};
    var data = [];
    data.push(['Excited Event Name', 'Counts']);

    for (var i in events) {
      if (events[i].emotion === 'excited') {
        if (counts[events[i].title] == null) {
          counts[events[i].title] = 1;
        }
        else {
          ++counts[events[i].title];
        }
      }
    }

    for (var key in counts) {
      data.push([key, counts[key]])
    }

    return this.emptyCheck(data);
  }

  generateFearEventNamesGraph(events) {
    var counts = {};
    var data = [];
    data.push(['Fear Event Name', 'Counts']);

    for (var i in events) {
      if (events[i].emotion === 'fear') {
        if (counts[events[i].title] == null) {
          counts[events[i].title] = 1;
        }
        else {
          ++counts[events[i].title];
        }
      }
    }

    for (var key in counts) {
      data.push([key, counts[key]])
    }

    return this.emptyCheck(data);
  }

  generateHopeEventNamesGraph(events) {
    var counts = {};
    var data = [];
    data.push(['Hope Event Name', 'Counts']);

    for (var i in events) {
      if (events[i].emotion === 'hope') {
        if (counts[events[i].title] == null) {
          counts[events[i].title] = 1;
        }
        else {
          ++counts[events[i].title];
        }
      }
    }

    for (var key in counts) {
      data.push([key, counts[key]])
    }

    return this.emptyCheck(data);
  }

  generateJoyEventNamesGraph(events) {
    var counts = {};
    var data = [];
    data.push(['Joy Event Name', 'Counts']);

    for (var i in events) {
      if (events[i].emotion === 'joy') {
        if (counts[events[i].title] == null) {
          counts[events[i].title] = 1;
        }
        else {
          ++counts[events[i].title];
        }
      }
    }

    for (var key in counts) {
      data.push([key, counts[key]])
    }

    return this.emptyCheck(data);
  }

  generateAngryEventNamesGraph(events) {
    var counts = {};
    var data = [];
    data.push(['Angry Event Name', 'Counts']);

    for (var i in events) {
      if (events[i].emotion === 'angry') {
        if (counts[events[i].title] == null) {
          counts[events[i].title] = 1;
        }
        else {
          ++counts[events[i].title];
        }
      }
    }

    for (var key in counts) {
      data.push([key, counts[key]])
    }

    return this.emptyCheck(data);
  }

  generateSurpriseEventNamesGraph(events) {
    var counts = {};
    var data = [];
    data.push(['Surprise Event Name', 'Counts']);

    for (var i in events) {
      if (events[i].emotion === 'surprise') {
        if (counts[events[i].title] == null) {
          counts[events[i].title] = 1;
        }
        else {
          ++counts[events[i].title];
        }
      }
    }

    for (var key in counts) {
      data.push([key, counts[key]])
    }

    return this.emptyCheck(data);
  }
}
