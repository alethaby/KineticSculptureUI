
var IDLE = {
  id: 0,
  master: {
    values: {
      
    },
    events: {
      
    }
  },
  tablet: {
    values: {
      
    },
    events: {
      
    }
  }
};
var STATE_IDLE = 0;
var OFF = {
  id: 1,
  master: {
    values: {
      
    },
    events: {
      
    }
  },
  tablet: {
    values: {
      
    },
    events: {
      
    }
  }
};
var STATE_OFF = 1;
var KINETICSCULPTURE = {
  id: 2,
  master: {
    values: {
      red: new HardwareValue(2, 0, Manager.TYPE_UINT32),
      blue: new HardwareValue(2, 1, Manager.TYPE_UINT32),
      green: new HardwareValue(2, 2, Manager.TYPE_UINT32),
      frontSpeed: new HardwareValue(2, 3, Manager.TYPE_UINT32),
      backSpeed: new HardwareValue(2, 4, Manager.TYPE_UINT32)
    },
    events: {
      allLightsOff: function allLightsOff() { manager.sendEvent(0, 2); },
      allMotorsOff: function allMotorsOff() { manager.sendEvent(1, 2); },
      demo: function demo() { manager.sendEvent(2, 2); }
    }
  },
  tablet: {
    values: {
      
    },
    events: {
      demoComplete: new LocalEvent(2, 0)
    }
  }
};
var STATE_KINETICSCULPTURE = 2;

var STATES = {
  IDLE: IDLE,
  OFF: OFF,
  KINETICSCULPTURE: KINETICSCULPTURE
};
var manager = new Manager([IDLE, OFF, KINETICSCULPTURE]);
