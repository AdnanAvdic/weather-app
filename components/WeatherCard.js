const WeatherCard = (props) => {
  return (
    <div className="flex justify-between center bg-white rounded-xl p-6">
      <div className=" flex flex-col">
        <span>{props.temp}°C</span>
        <span className=" mt-6">{props.weather}</span>
      </div>
      <div className=" flex flex-col">
        <span>Feels like {props.feelsTemp}°C</span>
        <span className="mt-6">{props.name}</span>
      </div>
    </div>
  );
};

export default WeatherCard;
