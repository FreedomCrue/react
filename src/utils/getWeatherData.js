const getWeatherData = (weathercode) => {
  switch (weathercode) {
    case 0:
      return {
        icon: {
          day: "https://img.icons8.com/color-glass/512/null/sun--v1.png",
          night:
            "https://img.icons8.com/color-glass/512/null/bright-moon--v1.png",
        },
        forecast: "Чистое небо",
        forecast_short: "Clear",
      };

    case 1:
      return {
        icon: {
          day: "https://img.icons8.com/color-glass/512/null/sun--v1.png",
          night:
            "https://img.icons8.com/color-glass/512/null/bright-moon--v1.png",
        },
        forecast: "Преимущественно ясно",
        forecast_short: "Clear",
      };

    case 2:
      return {
        icon: {
          day: "https://img.icons8.com/color-glass/512/null/partly-cloudy-day--v1.png",
          night:
            "https://img.icons8.com/color-glass/512/null/partly-cloudy-night.png",
        },
        forecast: "Переменная облачность",
        forecast_short: "Partly",
      };

    case 3:
      return {
        icon: {
          day: "https://img.icons8.com/color-glass/512/null/clouds--v1.png",
          night: "https://img.icons8.com/color-glass/512/null/clouds--v1.png",
        },
        forecast: "Облачно",
        forecast_short: "Cloudy",
      };

    case 45:
    case 48:
      return {
        icon: {
          day: "https://img.icons8.com/color-glass/512/null/foggy-night-1.png",
          night:
            "https://img.icons8.com/color-glass/512/null/foggy-night-1.png",
        },
        forecast: "Туман",
        forecast_short: "Fog",
      };

    case 51:
    case 53:
    case 55:
    case 56:
    case 57:
      return {
        icon: {
          day: "https://img.icons8.com/color-glass/512/null/wet.png",
          night: "https://img.icons8.com/color-glass/512/null/wet.png",
        },
        forecast: "Морось",
        forecast_short: "Drizzle",
      };

    case 61:
    case 63:
    case 65:
      return {
        icon: {
          day: "https://img.icons8.com/color-glass/512/null/light-rain.png",
          night: "https://img.icons8.com/color-glass/512/null/light-rain.png",
        },
        forecast: "Небольшой дождь",
        forecast_short: "Slight",
      };

    case 66:
    case 67:
      return {
        icon: {
          day: "https://img.icons8.com/color-glass/512/null/downpour.png",
          night: "https://img.icons8.com/color-glass/512/null/downpour.png",
        },
        forecast: "Дождливо",
        forecast_short: "Rainy",
      };

    case 71:
    case 73:
    case 75:
      return {
        icon: {
          day: "https://img.icons8.com/color-glass/512/null/snowflake.png",
          night: "https://img.icons8.com/color-glass/512/null/snowflake.png",
        },
        forecast: "Небольшой снег",
        forecast_short: "Slight",
      };

    case 77:
      return {
        icon: {
          day: "https://img.icons8.com/color-glass/512/null/snowy-sunny-day.png",
          night:
            "https://img.icons8.com/color-glass/512/null/light-snow--v1.png",
        },
        forecast: "Снежно",
        forecast_short: "Snowy",
      };

    case 80:
    case 81:
    case 82:
      return {
        icon: {
          day: "https://img.icons8.com/color-glass/512/null/heavy-rain.png",
          night: "https://img.icons8.com/color-glass/512/null/heavy-rain.png",
        },
        forecast: "Сильный дождь",
        forecast_short: "Heavy",
      };

    case 85:
    case 86:
      return {
        icon: {
          day: "https://img.icons8.com/color-glass/512/null/snow-storm.png",
          night: "https://img.icons8.com/color-glass/512/null/snow-storm.png",
        },
        forecast: "Снегопад",
        forecast_short: "Snow",
      };

    case 95:
    case 96:
    case 99:
      return {
        icon: {
          day: "https://img.icons8.com/color-glass/512/null/chance-of-storm.png",
          night:
            "https://img.icons8.com/color-glass/512/null/chance-of-storm.png",
        },
        forecast: "Гроза",
        forecast_short: "Thunderstorm",
      };

    default: {
      return {
        icon: null,
        forecast: null,
        forecast_short: null,
      };
    }
  }
};

export default getWeatherData;
