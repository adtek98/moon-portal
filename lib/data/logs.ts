const logs = [
  {
    timestamp: 1671200022720,
    message: {
      body: "waitForService: Service [/config_manager/get_param] is now available.",
      severity_text: "info",
      resource: {
        "service.name": "test-device-1",
        "telemetry.sdk.language": "python",
        "telemetry.sdk.name": "opentelemetry",
        "telemetry.sdk.version": "1.12.0",
      },
    },
  },
  {
    timestamp: 1671200022729,
    message: {
      body: "waitForService: Service [/config_manager/get_param] is now available.",
      severity_text: "info",
      resource: {
        "service.name": "test-device-1",
        "telemetry.sdk.language": "python",
        "telemetry.sdk.name": "opentelemetry",
        "telemetry.sdk.version": "1.12.0",
      },
    },
  },
  {
    timestamp: 1671200022801,
    message: {
      body: "[MoonSmartFocus::loadParameters] ___Moon Parameters___",
      severity_text: "info",
      resource: {
        "service.name": "test-device-1",
        "telemetry.sdk.language": "python",
        "telemetry.sdk.name": "opentelemetry",
        "telemetry.sdk.version": "1.12.0",
      },
    },
  },
  {
    timestamp: 1671200022801,
    message: {
      body: "[MoonSmartFocus::loadParameters] Max display resolution: 2 m",
      severity_text: "info",
      resource: {
        "service.name": "test-device-1",
        "telemetry.sdk.language": "python",
        "telemetry.sdk.name": "opentelemetry",
        "telemetry.sdk.version": "1.12.0",
      },
    },
  },
  {
    timestamp: 1671200022801,
    message: {
      body: "[MoonSmartFocus::loadParameters] Distance threshold: 0.01 m",
      severity_text: "info",
      resource: {
        "service.name": "test-device-1",
        "telemetry.sdk.language": "python",
        "telemetry.sdk.name": "opentelemetry",
        "telemetry.sdk.version": "1.12.0",
      },
    },
  },
  {
    timestamp: 1671200022801,
    message: {
      body: "[MoonSmartFocus::loadParameters] Distance tolerance: 1e-05 m",
      severity_text: "info",
      resource: {
        "service.name": "test-device-1",
        "telemetry.sdk.language": "python",
        "telemetry.sdk.name": "opentelemetry",
        "telemetry.sdk.version": "1.12.0",
      },
    },
  },
  {
    timestamp: 1671200022801,
    message: {
      body: "[MoonSmartFocus::loadParameters] Distance smoothing factor: 0",
      severity_text: "info",
      resource: {
        "service.name": "test-device-1",
        "telemetry.sdk.language": "python",
        "telemetry.sdk.name": "opentelemetry",
        "telemetry.sdk.version": "1.12.0",
      },
    },
  },
  {
    timestamp: 1671200022801,
    message: {
      body: "[MoonSmartFocus::loadParameters] Distance sampling method: cog",
      severity_text: "info",
      resource: {
        "service.name": "test-device-1",
        "telemetry.sdk.language": "python",
        "telemetry.sdk.name": "opentelemetry",
        "telemetry.sdk.version": "1.12.0",
      },
    },
  },
  {
    timestamp: 1671200022801,
    message: {
      body: "[MoonSmartFocus::loadParameters] Distance sampling sigma: 3",
      severity_text: "info",
      resource: {
        "service.name": "test-device-1",
        "telemetry.sdk.language": "python",
        "telemetry.sdk.name": "opentelemetry",
        "telemetry.sdk.version": "1.12.0",
      },
    },
  },
  {
    timestamp: 1671200022801,
    message: {
      body: "[MoonSmartFocus::loadParameters] Max sensor distance: 0 m",
      severity_text: "info",
      resource: {
        "service.name": "test-device-1",
        "telemetry.sdk.language": "python",
        "telemetry.sdk.name": "opentelemetry",
        "telemetry.sdk.version": "1.12.0",
      },
    },
  },
  {
    timestamp: 1671200022801,
    message: {
      body: "[MoonSmartFocus::loadParameters] Stereo camera offset: 0 m",
      severity_text: "info",
      resource: {
        "service.name": "test-device-1",
        "telemetry.sdk.language": "python",
        "telemetry.sdk.name": "opentelemetry",
        "telemetry.sdk.version": "1.12.0",
      },
    },
  },
  {
    timestamp: 1671200022801,
    message: {
      body: "[MoonSmartFocus::loadParameters] Processing distance limits max: 25 min:0.35",
      severity_text: "info",
      resource: {
        "service.name": "test-device-1",
        "telemetry.sdk.language": "python",
        "telemetry.sdk.name": "opentelemetry",
        "telemetry.sdk.version": "1.12.0",
      },
    },
  },
  {
    timestamp: 1671200022801,
    message: {
      body: "[MoonSmartFocus::loadParameters] Point mode: nearest",
      severity_text: "info",
      resource: {
        "service.name": "test-device-1",
        "telemetry.sdk.language": "python",
        "telemetry.sdk.name": "opentelemetry",
        "telemetry.sdk.version": "1.12.0",
      },
    },
  },
  {
    timestamp: 1671200022818,
    message: {
      body: "Service call failed: service [/config_manager/get_param] responded with an error: service cannot process request: service handler returned None",
      severity_text: "error",
      resource: {
        "service.name": "test-device-1",
        "telemetry.sdk.language": "python",
        "telemetry.sdk.name": "opentelemetry",
        "telemetry.sdk.version": "1.12.0",
      },
    },
  },
  {
    timestamp: 1671200022820,
    message: {
      body: "Service call failed: service [/config_manager/get_param] responded with an error: service cannot process request: service handler returned None",
      severity_text: "error",
      resource: {
        "service.name": "test-device-1",
        "telemetry.sdk.language": "python",
        "telemetry.sdk.name": "opentelemetry",
        "telemetry.sdk.version": "1.12.0",
      },
    },
  },
  {
    timestamp: 1671200022841,
    message: {
      body: "[MoonSmartFocus::Area::set] Tracking Area set to. x1: 0 y1: 0 x2: 1 y2: 1",
      severity_text: "info",
      resource: {
        "service.name": "test-device-1",
        "telemetry.sdk.language": "python",
        "telemetry.sdk.name": "opentelemetry",
        "telemetry.sdk.version": "1.12.0",
      },
    },
  },
  {
    timestamp: 1671200022841,
    message: {
      body: "[MoonSmartFocus::Area::set]  set to. x1: 0.47 y1: 0.45 x2: 0.53 y2: 0.55",
      severity_text: "info",
      resource: {
        "service.name": "test-device-1",
        "telemetry.sdk.language": "python",
        "telemetry.sdk.name": "opentelemetry",
        "telemetry.sdk.version": "1.12.0",
      },
    },
  },
  {
    timestamp: 1671200022841,
    message: {
      body: "[MoonSmartFocus::Area::set] 16Vertical - 0 set to. x1: 0 y1: 0.15 x2: 0.0625 y2: 0.75",
      severity_text: "info",
      resource: {
        "service.name": "test-device-1",
        "telemetry.sdk.language": "python",
        "telemetry.sdk.name": "opentelemetry",
        "telemetry.sdk.version": "1.12.0",
      },
    },
  },
  {
    timestamp: 1671200022841,
    message: {
      body: "[MoonSmartFocus::Area::set] 16Vertical - 1 set to. x1: 0.0625 y1: 0.15 x2: 0.125 y2: 0.75",
      severity_text: "info",
      resource: {
        "service.name": "test-device-1",
        "telemetry.sdk.language": "python",
        "telemetry.sdk.name": "opentelemetry",
        "telemetry.sdk.version": "1.12.0",
      },
    },
  },
  {
    timestamp: 1671200022841,
    message: {
      body: "[MoonSmartFocus::Area::set] 16Vertical - 2 set to. x1: 0.125 y1: 0.15 x2: 0.1875 y2: 0.75",
      severity_text: "info",
      resource: {
        "service.name": "test-device-1",
        "telemetry.sdk.language": "python",
        "telemetry.sdk.name": "opentelemetry",
        "telemetry.sdk.version": "1.12.0",
      },
    },
  },
  {
    timestamp: 1671200022841,
    message: {
      body: "[MoonSmartFocus::Area::set] 16Vertical - 3 set to. x1: 0.1875 y1: 0.15 x2: 0.25 y2: 0.75",
      severity_text: "info",
      resource: {
        "service.name": "test-device-1",
        "telemetry.sdk.language": "python",
        "telemetry.sdk.name": "opentelemetry",
        "telemetry.sdk.version": "1.12.0",
      },
    },
  },
  {
    timestamp: 1671200022841,
    message: {
      body: "[MoonSmartFocus::Area::set] 16Vertical - 4 set to. x1: 0.25 y1: 0.15 x2: 0.3125 y2: 0.75",
      severity_text: "info",
      resource: {
        "service.name": "test-device-1",
        "telemetry.sdk.language": "python",
        "telemetry.sdk.name": "opentelemetry",
        "telemetry.sdk.version": "1.12.0",
      },
    },
  },
  {
    timestamp: 1671200022841,
    message: {
      body: "[MoonSmartFocus::Area::set] 16Vertical - 5 set to. x1: 0.3125 y1: 0.15 x2: 0.375 y2: 0.75",
      severity_text: "info",
      resource: {
        "service.name": "test-device-1",
        "telemetry.sdk.language": "python",
        "telemetry.sdk.name": "opentelemetry",
        "telemetry.sdk.version": "1.12.0",
      },
    },
  },
  {
    timestamp: 1671200022841,
    message: {
      body: "[MoonSmartFocus::Area::set] 16Vertical - 6 set to. x1: 0.375 y1: 0.15 x2: 0.4375 y2: 0.75",
      severity_text: "info",
      resource: {
        "service.name": "test-device-1",
        "telemetry.sdk.language": "python",
        "telemetry.sdk.name": "opentelemetry",
        "telemetry.sdk.version": "1.12.0",
      },
    },
  },
  {
    timestamp: 1671200022841,
    message: {
      body: "[MoonSmartFocus::Area::set] 16Vertical - 7 set to. x1: 0.4375 y1: 0.15 x2: 0.5 y2: 0.75",
      severity_text: "info",
      resource: {
        "service.name": "test-device-1",
        "telemetry.sdk.language": "python",
        "telemetry.sdk.name": "opentelemetry",
        "telemetry.sdk.version": "1.12.0",
      },
    },
  },
  {
    timestamp: 1671200022841,
    message: {
      body: "[MoonSmartFocus::Area::set] 16Vertical - 8 set to. x1: 0.5 y1: 0.15 x2: 0.5625 y2: 0.75",
      severity_text: "info",
      resource: {
        "service.name": "test-device-1",
        "telemetry.sdk.language": "python",
        "telemetry.sdk.name": "opentelemetry",
        "telemetry.sdk.version": "1.12.0",
      },
    },
  },
  {
    timestamp: 1671200022841,
    message: {
      body: "[MoonSmartFocus::Area::set] 16Vertical - 9 set to. x1: 0.5625 y1: 0.15 x2: 0.625 y2: 0.75",
      severity_text: "info",
      resource: {
        "service.name": "test-device-1",
        "telemetry.sdk.language": "python",
        "telemetry.sdk.name": "opentelemetry",
        "telemetry.sdk.version": "1.12.0",
      },
    },
  },
  {
    timestamp: 1671200022841,
    message: {
      body: "[MoonSmartFocus::Area::set] 16Vertical - 10 set to. x1: 0.625 y1: 0.15 x2: 0.6875 y2: 0.75",
      severity_text: "info",
      resource: {
        "service.name": "test-device-1",
        "telemetry.sdk.language": "python",
        "telemetry.sdk.name": "opentelemetry",
        "telemetry.sdk.version": "1.12.0",
      },
    },
  },
  {
    timestamp: 1671200022841,
    message: {
      body: "[MoonSmartFocus::Area::set] 16Vertical - 11 set to. x1: 0.6875 y1: 0.15 x2: 0.75 y2: 0.75",
      severity_text: "info",
      resource: {
        "service.name": "test-device-1",
        "telemetry.sdk.language": "python",
        "telemetry.sdk.name": "opentelemetry",
        "telemetry.sdk.version": "1.12.0",
      },
    },
  },
  {
    timestamp: 1671200022841,
    message: {
      body: "[MoonSmartFocus::Area::set] 16Vertical - 12 set to. x1: 0.75 y1: 0.15 x2: 0.8125 y2: 0.75",
      severity_text: "info",
      resource: {
        "service.name": "test-device-1",
        "telemetry.sdk.language": "python",
        "telemetry.sdk.name": "opentelemetry",
        "telemetry.sdk.version": "1.12.0",
      },
    },
  },
  {
    timestamp: 1671200022841,
    message: {
      body: "[MoonSmartFocus::Area::set] 16Vertical - 13 set to. x1: 0.8125 y1: 0.15 x2: 0.875 y2: 0.75",
      severity_text: "info",
      resource: {
        "service.name": "test-device-1",
        "telemetry.sdk.language": "python",
        "telemetry.sdk.name": "opentelemetry",
        "telemetry.sdk.version": "1.12.0",
      },
    },
  },
  {
    timestamp: 1671200022841,
    message: {
      body: "[MoonSmartFocus::Area::set] 16Vertical - 14 set to. x1: 0.875 y1: 0.15 x2: 0.9375 y2: 0.75",
      severity_text: "info",
      resource: {
        "service.name": "test-device-1",
        "telemetry.sdk.language": "python",
        "telemetry.sdk.name": "opentelemetry",
        "telemetry.sdk.version": "1.12.0",
      },
    },
  },
  {
    timestamp: 1671200022841,
    message: {
      body: "[MoonSmartFocus::Area::set] 16Vertical - 15 set to. x1: 0.9375 y1: 0.15 x2: 1 y2: 0.75",
      severity_text: "info",
      resource: {
        "service.name": "test-device-1",
        "telemetry.sdk.language": "python",
        "telemetry.sdk.name": "opentelemetry",
        "telemetry.sdk.version": "1.12.0",
      },
    },
  },
  {
    timestamp: 1671200022841,
    message: {
      body: "[MoonSmartFocus::Area::set] 8Vertical - 0 set to. x1: 0.05 y1: 0.15 x2: 0.1625 y2: 0.75",
      severity_text: "info",
      resource: {
        "service.name": "test-device-1",
        "telemetry.sdk.language": "python",
        "telemetry.sdk.name": "opentelemetry",
        "telemetry.sdk.version": "1.12.0",
      },
    },
  },
  {
    timestamp: 1671200022841,
    message: {
      body: "[MoonSmartFocus::Area::set] 8Vertical - 1 set to. x1: 0.1625 y1: 0.15 x2: 0.275 y2: 0.75",
      severity_text: "info",
      resource: {
        "service.name": "test-device-1",
        "telemetry.sdk.language": "python",
        "telemetry.sdk.name": "opentelemetry",
        "telemetry.sdk.version": "1.12.0",
      },
    },
  },
  {
    timestamp: 1671200022841,
    message: {
      body: "[MoonSmartFocus::Area::set] 8Vertical - 2 set to. x1: 0.275 y1: 0.15 x2: 0.3875 y2: 0.75",
      severity_text: "info",
      resource: {
        "service.name": "test-device-1",
        "telemetry.sdk.language": "python",
        "telemetry.sdk.name": "opentelemetry",
        "telemetry.sdk.version": "1.12.0",
      },
    },
  },
  {
    timestamp: 1671200022841,
    message: {
      body: "[MoonSmartFocus::Area::set] 8Vertical - 3 set to. x1: 0.3875 y1: 0.15 x2: 0.5 y2: 0.75",
      severity_text: "info",
      resource: {
        "service.name": "test-device-1",
        "telemetry.sdk.language": "python",
        "telemetry.sdk.name": "opentelemetry",
        "telemetry.sdk.version": "1.12.0",
      },
    },
  },
  {
    timestamp: 1671200022841,
    message: {
      body: "[MoonSmartFocus::Area::set] 8Vertical - 4 set to. x1: 0.5 y1: 0.15 x2: 0.6125 y2: 0.75",
      severity_text: "info",
      resource: {
        "service.name": "test-device-1",
        "telemetry.sdk.language": "python",
        "telemetry.sdk.name": "opentelemetry",
        "telemetry.sdk.version": "1.12.0",
      },
    },
  },
  {
    timestamp: 1671200022841,
    message: {
      body: "[MoonSmartFocus::Area::set] 8Vertical - 5 set to. x1: 0.6125 y1: 0.15 x2: 0.725 y2: 0.75",
      severity_text: "info",
      resource: {
        "service.name": "test-device-1",
        "telemetry.sdk.language": "python",
        "telemetry.sdk.name": "opentelemetry",
        "telemetry.sdk.version": "1.12.0",
      },
    },
  },
  {
    timestamp: 1671200022841,
    message: {
      body: "[MoonSmartFocus::Area::set] 8Vertical - 6 set to. x1: 0.725 y1: 0.15 x2: 0.8375 y2: 0.75",
      severity_text: "info",
      resource: {
        "service.name": "test-device-1",
        "telemetry.sdk.language": "python",
        "telemetry.sdk.name": "opentelemetry",
        "telemetry.sdk.version": "1.12.0",
      },
    },
  },
  {
    timestamp: 1671200022841,
    message: {
      body: "[MoonSmartFocus::Area::set] 8Vertical - 7 set to. x1: 0.8375 y1: 0.15 x2: 0.95 y2: 0.75",
      severity_text: "info",
      resource: {
        "service.name": "test-device-1",
        "telemetry.sdk.language": "python",
        "telemetry.sdk.name": "opentelemetry",
        "telemetry.sdk.version": "1.12.0",
      },
    },
  },
  {
    timestamp: 1671200022841,
    message: {
      body: "[MoonSmartFocus::Area::set] 3x1 - 0 set to. x1: 0.05 y1: 0.15 x2: 0.35 y2: 0.75",
      severity_text: "info",
      resource: {
        "service.name": "test-device-1",
        "telemetry.sdk.language": "python",
        "telemetry.sdk.name": "opentelemetry",
        "telemetry.sdk.version": "1.12.0",
      },
    },
  },
  {
    timestamp: 1671200022841,
    message: {
      body: "[MoonSmartFocus::Area::set] 3x1 - 1 set to. x1: 0.35 y1: 0.15 x2: 0.65 y2: 0.75",
      severity_text: "info",
      resource: {
        "service.name": "test-device-1",
        "telemetry.sdk.language": "python",
        "telemetry.sdk.name": "opentelemetry",
        "telemetry.sdk.version": "1.12.0",
      },
    },
  },
  {
    timestamp: 1671200022841,
    message: {
      body: "[MoonSmartFocus::Area::set] 3x1 - 2 set to. x1: 0.65 y1: 0.15 x2: 0.95 y2: 0.75",
      severity_text: "info",
      resource: {
        "service.name": "test-device-1",
        "telemetry.sdk.language": "python",
        "telemetry.sdk.name": "opentelemetry",
        "telemetry.sdk.version": "1.12.0",
      },
    },
  },
  {
    timestamp: 1671200022841,
    message: {
      body: "[MoonSmartFocus::Area::set] 3x2 - 0 set to. x1: 0.05 y1: 0.15 x2: 0.35 y2: 0.45",
      severity_text: "info",
      resource: {
        "service.name": "test-device-1",
        "telemetry.sdk.language": "python",
        "telemetry.sdk.name": "opentelemetry",
        "telemetry.sdk.version": "1.12.0",
      },
    },
  },
  {
    timestamp: 1671200022841,
    message: {
      body: "[MoonSmartFocus::Area::set] 3x2 - 03x2 - 1 set to. x1: 0.05 y1: 0.45 x2: 0.35 y2: 0.75",
      severity_text: "info",
      resource: {
        "service.name": "test-device-1",
        "telemetry.sdk.language": "python",
        "telemetry.sdk.name": "opentelemetry",
        "telemetry.sdk.version": "1.12.0",
      },
    },
  },
  {
    timestamp: 1671200022841,
    message: {
      body: "[MoonSmartFocus::Area::set] 3x2 - 2 set to. x1: 0.35 y1: 0.15 x2: 0.65 y2: 0.45",
      severity_text: "info",
      resource: {
        "service.name": "test-device-1",
        "telemetry.sdk.language": "python",
        "telemetry.sdk.name": "opentelemetry",
        "telemetry.sdk.version": "1.12.0",
      },
    },
  },
  {
    timestamp: 1671200022841,
    message: {
      body: "[MoonSmartFocus::Area::set] 3x2 - 23x2 - 3 set to. x1: 0.35 y1: 0.45 x2: 0.65 y2: 0.75",
      severity_text: "info",
      resource: {
        "service.name": "test-device-1",
        "telemetry.sdk.language": "python",
        "telemetry.sdk.name": "opentelemetry",
        "telemetry.sdk.version": "1.12.0",
      },
    },
  },
  {
    timestamp: 1671200022841,
    message: {
      body: "[MoonSmartFocus::Area::set] 3x2 - 4 set to. x1: 0.65 y1: 0.15 x2: 0.95 y2: 0.45",
      severity_text: "info",
      resource: {
        "service.name": "test-device-1",
        "telemetry.sdk.language": "python",
        "telemetry.sdk.name": "opentelemetry",
        "telemetry.sdk.version": "1.12.0",
      },
    },
  },
  {
    timestamp: 1671200022841,
    message: {
      body: "[MoonSmartFocus::Area::set] 3x2 - 43x2 - 5 set to. x1: 0.65 y1: 0.45 x2: 0.95 y2: 0.75",
      severity_text: "info",
      resource: {
        "service.name": "test-device-1",
        "telemetry.sdk.language": "python",
        "telemetry.sdk.name": "opentelemetry",
        "telemetry.sdk.version": "1.12.0",
      },
    },
  },
  {
    timestamp: 1671200023328,
    message: {
      body: "[Realsense Camera]: Looking for camera...",
      severity_text: "info",
      resource: {
        "service.name": "test-device-1",
        "telemetry.sdk.language": "python",
        "telemetry.sdk.name": "opentelemetry",
        "telemetry.sdk.version": "1.12.0",
      },
    },
  },
  {
    timestamp: 1671200023829,
    message: {
      body: "[Realsense Camera]: Looking for camera...",
      severity_text: "info",
      resource: {
        "service.name": "test-device-1",
        "telemetry.sdk.language": "python",
        "telemetry.sdk.name": "opentelemetry",
        "telemetry.sdk.version": "1.12.0",
      },
    },
  },
  {
    timestamp: 1671200024332,
    message: {
      body: "[Realsense Camera]: Looking for camera...",
      severity_text: "info",
      resource: {
        "service.name": "test-device-1",
        "telemetry.sdk.language": "python",
        "telemetry.sdk.name": "opentelemetry",
        "telemetry.sdk.version": "1.12.0",
      },
    },
  },
  {
    timestamp: 1671200024834,
    message: {
      body: "[Realsense Camera]: Looking for camera...",
      severity_text: "info",
      resource: {
        "service.name": "test-device-1",
        "telemetry.sdk.language": "python",
        "telemetry.sdk.name": "opentelemetry",
        "telemetry.sdk.version": "1.12.0",
      },
    },
  },
  {
    timestamp: 1671200025336,
    message: {
      body: "[Realsense Camera]: Looking for camera...",
      severity_text: "info",
      resource: {
        "service.name": "test-device-1",
        "telemetry.sdk.language": "python",
        "telemetry.sdk.name": "opentelemetry",
        "telemetry.sdk.version": "1.12.0",
      },
    },
  },
  {
    timestamp: 1671200025838,
    message: {
      body: "[Realsense Camera]: Looking for camera...",
      severity_text: "info",
      resource: {
        "service.name": "test-device-1",
        "telemetry.sdk.language": "python",
        "telemetry.sdk.name": "opentelemetry",
        "telemetry.sdk.version": "1.12.0",
      },
    },
  },
  {
    timestamp: 1671200026340,
    message: {
      body: "[Realsense Camera]: Looking for camera...",
      severity_text: "info",
      resource: {
        "service.name": "test-device-1",
        "telemetry.sdk.language": "python",
        "telemetry.sdk.name": "opentelemetry",
        "telemetry.sdk.version": "1.12.0",
      },
    },
  },
  {
    timestamp: 1671200026841,
    message: {
      body: "[Realsense Camera]: Looking for camera...",
      severity_text: "info",
      resource: {
        "service.name": "test-device-1",
        "telemetry.sdk.language": "python",
        "telemetry.sdk.name": "opentelemetry",
        "telemetry.sdk.version": "1.12.0",
      },
    },
  },
  {
    timestamp: 1671200027342,
    message: {
      body: "[Realsense Camera]: Looking for camera...",
      severity_text: "info",
      resource: {
        "service.name": "test-device-1",
        "telemetry.sdk.language": "python",
        "telemetry.sdk.name": "opentelemetry",
        "telemetry.sdk.version": "1.12.0",
      },
    },
  },
  {
    timestamp: 1671200027844,
    message: {
      body: "[Realsense Camera]: Looking for camera...",
      severity_text: "info",
      resource: {
        "service.name": "test-device-1",
        "telemetry.sdk.language": "python",
        "telemetry.sdk.name": "opentelemetry",
        "telemetry.sdk.version": "1.12.0",
      },
    },
  },
  {
    timestamp: 1671200028346,
    message: {
      body: "[Realsense Camera]: Looking for camera...",
      severity_text: "info",
      resource: {
        "service.name": "test-device-1",
        "telemetry.sdk.language": "python",
        "telemetry.sdk.name": "opentelemetry",
        "telemetry.sdk.version": "1.12.0",
      },
    },
  },
  {
    timestamp: 1671200028848,
    message: {
      body: "[Realsense Camera]: Looking for camera...",
      severity_text: "info",
      resource: {
        "service.name": "test-device-1",
        "telemetry.sdk.language": "python",
        "telemetry.sdk.name": "opentelemetry",
        "telemetry.sdk.version": "1.12.0",
      },
    },
  },
  {
    timestamp: 1671200029349,
    message: {
      body: "[Realsense Camera]: Looking for camera...",
      severity_text: "info",
      resource: {
        "service.name": "test-device-1",
        "telemetry.sdk.language": "python",
        "telemetry.sdk.name": "opentelemetry",
        "telemetry.sdk.version": "1.12.0",
      },
    },
  },
  {
    timestamp: 1671200029851,
    message: {
      body: "[Realsense Camera]: Looking for camera...",
      severity_text: "info",
      resource: {
        "service.name": "test-device-1",
        "telemetry.sdk.language": "python",
        "telemetry.sdk.name": "opentelemetry",
        "telemetry.sdk.version": "1.12.0",
      },
    },
  },
  {
    timestamp: 1671200030352,
    message: {
      body: "[Realsense Camera]: Looking for camera...",
      severity_text: "info",
      resource: {
        "service.name": "test-device-1",
        "telemetry.sdk.language": "python",
        "telemetry.sdk.name": "opentelemetry",
        "telemetry.sdk.version": "1.12.0",
      },
    },
  },
  {
    timestamp: 1671200030855,
    message: {
      body: "[Realsense Camera]: Looking for camera...",
      severity_text: "info",
      resource: {
        "service.name": "test-device-1",
        "telemetry.sdk.language": "python",
        "telemetry.sdk.name": "opentelemetry",
        "telemetry.sdk.version": "1.12.0",
      },
    },
  },
  {
    timestamp: 1671200031357,
    message: {
      body: "[Realsense Camera]: Looking for camera...",
      severity_text: "info",
      resource: {
        "service.name": "test-device-1",
        "telemetry.sdk.language": "python",
        "telemetry.sdk.name": "opentelemetry",
        "telemetry.sdk.version": "1.12.0",
      },
    },
  },
  {
    timestamp: 1671200031858,
    message: {
      body: "[Realsense Camera]: Looking for camera...",
      severity_text: "info",
      resource: {
        "service.name": "test-device-1",
        "telemetry.sdk.language": "python",
        "telemetry.sdk.name": "opentelemetry",
        "telemetry.sdk.version": "1.12.0",
      },
    },
  },
  {
    timestamp: 1671200032360,
    message: {
      body: "[Realsense Camera]: Looking for camera...",
      severity_text: "info",
      resource: {
        "service.name": "test-device-1",
        "telemetry.sdk.language": "python",
        "telemetry.sdk.name": "opentelemetry",
        "telemetry.sdk.version": "1.12.0",
      },
    },
  },
  {
    timestamp: 1671200032860,
    message: {
      body: "[Realsense Camera]: Looking for camera...",
      severity_text: "info",
      resource: {
        "service.name": "test-device-1",
        "telemetry.sdk.language": "python",
        "telemetry.sdk.name": "opentelemetry",
        "telemetry.sdk.version": "1.12.0",
      },
    },
  },
  {
    timestamp: 1671200033362,
    message: {
      body: "[Realsense Camera]: Looking for camera...",
      severity_text: "info",
      resource: {
        "service.name": "test-device-1",
        "telemetry.sdk.language": "python",
        "telemetry.sdk.name": "opentelemetry",
        "telemetry.sdk.version": "1.12.0",
      },
    },
  },
  {
    timestamp: 1671200033864,
    message: {
      body: "[Realsense Camera]: Looking for camera...",
      severity_text: "info",
      resource: {
        "service.name": "test-device-1",
        "telemetry.sdk.language": "python",
        "telemetry.sdk.name": "opentelemetry",
        "telemetry.sdk.version": "1.12.0",
      },
    },
  },
  {
    timestamp: 1671200034365,
    message: {
      body: "[Realsense Camera]: Looking for camera...",
      severity_text: "info",
      resource: {
        "service.name": "test-device-1",
        "telemetry.sdk.language": "python",
        "telemetry.sdk.name": "opentelemetry",
        "telemetry.sdk.version": "1.12.0",
      },
    },
  },
  {
    timestamp: 1671200034868,
    message: {
      body: "[Realsense Camera]: Looking for camera...",
      severity_text: "info",
      resource: {
        "service.name": "test-device-1",
        "telemetry.sdk.language": "python",
        "telemetry.sdk.name": "opentelemetry",
        "telemetry.sdk.version": "1.12.0",
      },
    },
  },
  {
    timestamp: 1671200035368,
    message: {
      body: "[Realsense Camera]: Looking for camera...",
      severity_text: "info",
      resource: {
        "service.name": "test-device-1",
        "telemetry.sdk.language": "python",
        "telemetry.sdk.name": "opentelemetry",
        "telemetry.sdk.version": "1.12.0",
      },
    },
  },
  {
    timestamp: 1671200035871,
    message: {
      body: "[Realsense Camera]: Looking for camera...",
      severity_text: "info",
      resource: {
        "service.name": "test-device-1",
        "telemetry.sdk.language": "python",
        "telemetry.sdk.name": "opentelemetry",
        "telemetry.sdk.version": "1.12.0",
      },
    },
  },
  {
    timestamp: 1671200036372,
    message: {
      body: "[Realsense Camera]: Looking for camera...",
      severity_text: "info",
      resource: {
        "service.name": "test-device-1",
        "telemetry.sdk.language": "python",
        "telemetry.sdk.name": "opentelemetry",
        "telemetry.sdk.version": "1.12.0",
      },
    },
  },
  {
    timestamp: 1671200036875,
    message: {
      body: "[Realsense Camera]: Looking for camera...",
      severity_text: "info",
      resource: {
        "service.name": "test-device-1",
        "telemetry.sdk.language": "python",
        "telemetry.sdk.name": "opentelemetry",
        "telemetry.sdk.version": "1.12.0",
      },
    },
  },
  {
    timestamp: 1671200037376,
    message: {
      body: "[Realsense Camera]: Looking for camera...",
      severity_text: "info",
      resource: {
        "service.name": "test-device-1",
        "telemetry.sdk.language": "python",
        "telemetry.sdk.name": "opentelemetry",
        "telemetry.sdk.version": "1.12.0",
      },
    },
  },
  {
    timestamp: 1671200037878,
    message: {
      body: "[Realsense Camera]: Looking for camera...",
      severity_text: "info",
      resource: {
        "service.name": "test-device-1",
        "telemetry.sdk.language": "python",
        "telemetry.sdk.name": "opentelemetry",
        "telemetry.sdk.version": "1.12.0",
      },
    },
  },
  {
    timestamp: 1671200038379,
    message: {
      body: "[Realsense Camera]: Looking for camera...",
      severity_text: "info",
      resource: {
        "service.name": "test-device-1",
        "telemetry.sdk.language": "python",
        "telemetry.sdk.name": "opentelemetry",
        "telemetry.sdk.version": "1.12.0",
      },
    },
  },
  {
    timestamp: 1671200038880,
    message: {
      body: "[Realsense Camera]: Looking for camera...",
      severity_text: "info",
      resource: {
        "service.name": "test-device-1",
        "telemetry.sdk.language": "python",
        "telemetry.sdk.name": "opentelemetry",
        "telemetry.sdk.version": "1.12.0",
      },
    },
  },
  {
    timestamp: 1671200039382,
    message: {
      body: "[Realsense Camera]: Looking for camera...",
      severity_text: "info",
      resource: {
        "service.name": "test-device-1",
        "telemetry.sdk.language": "python",
        "telemetry.sdk.name": "opentelemetry",
        "telemetry.sdk.version": "1.12.0",
      },
    },
  },
  {
    timestamp: 1671200039884,
    message: {
      body: "[Realsense Camera]: Looking for camera...",
      severity_text: "info",
      resource: {
        "service.name": "test-device-1",
        "telemetry.sdk.language": "python",
        "telemetry.sdk.name": "opentelemetry",
        "telemetry.sdk.version": "1.12.0",
      },
    },
  },
  {
    timestamp: 1671200040385,
    message: {
      body: "[Realsense Camera]: Looking for camera...",
      severity_text: "info",
      resource: {
        "service.name": "test-device-1",
        "telemetry.sdk.language": "python",
        "telemetry.sdk.name": "opentelemetry",
        "telemetry.sdk.version": "1.12.0",
      },
    },
  },
  {
    timestamp: 1671200040888,
    message: {
      body: "[Realsense Camera]: Looking for camera...",
      severity_text: "info",
      resource: {
        "service.name": "test-device-1",
        "telemetry.sdk.language": "python",
        "telemetry.sdk.name": "opentelemetry",
        "telemetry.sdk.version": "1.12.0",
      },
    },
  },
  {
    timestamp: 1671200041388,
    message: {
      body: "[Realsense Camera]: Looking for camera...",
      severity_text: "info",
      resource: {
        "service.name": "test-device-1",
        "telemetry.sdk.language": "python",
        "telemetry.sdk.name": "opentelemetry",
        "telemetry.sdk.version": "1.12.0",
      },
    },
  },
  {
    timestamp: 1671200041891,
    message: {
      body: "[Realsense Camera]: Looking for camera...",
      severity_text: "info",
      resource: {
        "service.name": "test-device-1",
        "telemetry.sdk.language": "python",
        "telemetry.sdk.name": "opentelemetry",
        "telemetry.sdk.version": "1.12.0",
      },
    },
  },
  {
    timestamp: 1671200042392,
    message: {
      body: "[Realsense Camera]: Looking for camera...",
      severity_text: "info",
      resource: {
        "service.name": "test-device-1",
        "telemetry.sdk.language": "python",
        "telemetry.sdk.name": "opentelemetry",
        "telemetry.sdk.version": "1.12.0",
      },
    },
  },
  {
    timestamp: 1671200042894,
    message: {
      body: "[Realsense Camera]: Looking for camera...",
      severity_text: "info",
      resource: {
        "service.name": "test-device-1",
        "telemetry.sdk.language": "python",
        "telemetry.sdk.name": "opentelemetry",
        "telemetry.sdk.version": "1.12.0",
      },
    },
  },
  {
    timestamp: 1671200043396,
    message: {
      body: "[Realsense Camera]: Looking for camera...",
      severity_text: "info",
      resource: {
        "service.name": "test-device-1",
        "telemetry.sdk.language": "python",
        "telemetry.sdk.name": "opentelemetry",
        "telemetry.sdk.version": "1.12.0",
      },
    },
  },
  {
    timestamp: 1671200043897,
    message: {
      body: "[Realsense Camera]: Looking for camera...",
      severity_text: "info",
      resource: {
        "service.name": "test-device-1",
        "telemetry.sdk.language": "python",
        "telemetry.sdk.name": "opentelemetry",
        "telemetry.sdk.version": "1.12.0",
      },
    },
  },
  {
    timestamp: 1671200044398,
    message: {
      body: "[Realsense Camera]: Looking for camera...",
      severity_text: "info",
      resource: {
        "service.name": "test-device-1",
        "telemetry.sdk.language": "python",
        "telemetry.sdk.name": "opentelemetry",
        "telemetry.sdk.version": "1.12.0",
      },
    },
  },
  {
    timestamp: 1671200044900,
    message: {
      body: "[Realsense Camera]: Looking for camera...",
      severity_text: "info",
      resource: {
        "service.name": "test-device-1",
        "telemetry.sdk.language": "python",
        "telemetry.sdk.name": "opentelemetry",
        "telemetry.sdk.version": "1.12.0",
      },
    },
  },
  {
    timestamp: 1671200045401,
    message: {
      body: "[Realsense Camera]: Looking for camera...",
      severity_text: "info",
      resource: {
        "service.name": "test-device-1",
        "telemetry.sdk.language": "python",
        "telemetry.sdk.name": "opentelemetry",
        "telemetry.sdk.version": "1.12.0",
      },
    },
  },
  {
    timestamp: 1671200045904,
    message: {
      body: "[Realsense Camera]: Looking for camera...",
      severity_text: "info",
      resource: {
        "service.name": "test-device-1",
        "telemetry.sdk.language": "python",
        "telemetry.sdk.name": "opentelemetry",
        "telemetry.sdk.version": "1.12.0",
      },
    },
  },
  {
    timestamp: 1671200046405,
    message: {
      body: "[Realsense Camera]: Looking for camera...",
      severity_text: "info",
      resource: {
        "service.name": "test-device-1",
        "telemetry.sdk.language": "python",
        "telemetry.sdk.name": "opentelemetry",
        "telemetry.sdk.version": "1.12.0",
      },
    },
  },
  {
    timestamp: 1671200046908,
    message: {
      body: "[Realsense Camera]: Looking for camera...",
      severity_text: "info",
      resource: {
        "service.name": "test-device-1",
        "telemetry.sdk.language": "python",
        "telemetry.sdk.name": "opentelemetry",
        "telemetry.sdk.version": "1.12.0",
      },
    },
  },
  {
    timestamp: 1671200047408,
    message: {
      body: "[Realsense Camera]: Looking for camera...",
      severity_text: "info",
      resource: {
        "service.name": "test-device-1",
        "telemetry.sdk.language": "python",
        "telemetry.sdk.name": "opentelemetry",
        "telemetry.sdk.version": "1.12.0",
      },
    },
  },
  {
    timestamp: 1671200047911,
    message: {
      body: "[Realsense Camera]: Looking for camera...",
      severity_text: "info",
      resource: {
        "service.name": "test-device-1",
        "telemetry.sdk.language": "python",
        "telemetry.sdk.name": "opentelemetry",
        "telemetry.sdk.version": "1.12.0",
      },
    },
  },
  {
    timestamp: 1671200048413,
    message: {
      body: "[Realsense Camera]: Looking for camera...",
      severity_text: "info",
      resource: {
        "service.name": "test-device-1",
        "telemetry.sdk.language": "python",
        "telemetry.sdk.name": "opentelemetry",
        "telemetry.sdk.version": "1.12.0",
      },
    },
  },
  {
    timestamp: 1671200048914,
    message: {
      body: "[Realsense Camera]: Looking for camera...",
      severity_text: "info",
      resource: {
        "service.name": "test-device-1",
        "telemetry.sdk.language": "python",
        "telemetry.sdk.name": "opentelemetry",
        "telemetry.sdk.version": "1.12.0",
      },
    },
  },
  {
    timestamp: 1671200049416,
    message: {
      body: "[Realsense Camera]: Looking for camera...",
      severity_text: "info",
      resource: {
        "service.name": "test-device-1",
        "telemetry.sdk.language": "python",
        "telemetry.sdk.name": "opentelemetry",
        "telemetry.sdk.version": "1.12.0",
      },
    },
  },
  {
    timestamp: 1671200049916,
    message: {
      body: "[Realsense Camera]: Looking for camera...",
      severity_text: "info",
      resource: {
        "service.name": "test-device-1",
        "telemetry.sdk.language": "python",
        "telemetry.sdk.name": "opentelemetry",
        "telemetry.sdk.version": "1.12.0",
      },
    },
  },
  {
    timestamp: 1671200050418,
    message: {
      body: "[Realsense Camera]: Looking for camera...",
      severity_text: "info",
      resource: {
        "service.name": "test-device-1",
        "telemetry.sdk.language": "python",
        "telemetry.sdk.name": "opentelemetry",
        "telemetry.sdk.version": "1.12.0",
      },
    },
  },
  {
    timestamp: 1671200050920,
    message: {
      body: "[Realsense Camera]: Looking for camera...",
      severity_text: "info",
      resource: {
        "service.name": "test-device-1",
        "telemetry.sdk.language": "python",
        "telemetry.sdk.name": "opentelemetry",
        "telemetry.sdk.version": "1.12.0",
      },
    },
  },
  {
    timestamp: 1671200051423,
    message: {
      body: "[Realsense Camera]: Looking for camera...",
      severity_text: "info",
      resource: {
        "service.name": "test-device-1",
        "telemetry.sdk.language": "python",
        "telemetry.sdk.name": "opentelemetry",
        "telemetry.sdk.version": "1.12.0",
      },
    },
  },
  {
    timestamp: 1671200051924,
    message: {
      body: "[Realsense Camera]: Looking for camera...",
      severity_text: "info",
      resource: {
        "service.name": "test-device-1",
        "telemetry.sdk.language": "python",
        "telemetry.sdk.name": "opentelemetry",
        "telemetry.sdk.version": "1.12.0",
      },
    },
  },
  {
    timestamp: 1671200052426,
    message: {
      body: "[Realsense Camera]: Looking for camera...",
      severity_text: "info",
      resource: {
        "service.name": "test-device-1",
        "telemetry.sdk.language": "python",
        "telemetry.sdk.name": "opentelemetry",
        "telemetry.sdk.version": "1.12.0",
      },
    },
  },
];

export default logs;
