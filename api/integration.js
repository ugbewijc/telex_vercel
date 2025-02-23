export const integration = {
    "data": {
      "date": {
        "created_at": "2025-02-22",
        "updated_at": "2025-02-22"
      },
      "descriptions": {
        "app_description": "Automated Performance Monitoring system that tracks server performace that host an application on vercel",
        "app_logo": "https://avatars.githubusercontent.com/u/10807055?v=4.",
        "app_name": "Vercel Performance Integrator.",
        "app_url": "https://telex-vercel.vercel.app",
        "background_color": "#HEXCODE"
      },
      "integration_category": "Monitoring & Logging",
      "integration_type": "interval",
      "is_active": false,
      "output": [
        {
          "label": "vercel_performance",
          "value": true
        }
      ],
      "key_features": [
        "Latest performance data.",
        "Deployments details.",
      ],
    //   "permissions": {
    //     "monitoring_user": {
    //       "always_online": true,
    //       "display_name": "Performance Monitor"
    //     }
    //   },
      "settings": [
        {
          "label": "interval",
          "type": "text",
          "required": true,
          "default": "* * * * *"
        },
        {
          "label": "Vercel Token",
          "type": "text",
          "required": true,
          "default": ""
        }
      ],
      "tick_url": "https://telex-vercel.vercel.app/tick",
      "target_url": "",//Optional URL for getting data from the Telex channel
    }
  }