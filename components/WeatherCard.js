import { useRouter } from "next/router";

const WeatherCard = (props) => {
  const router = useRouter();

  const openCityPreview = () => {
    router.push({
      pathname: "/city",
      query: {
        name: props.name,
        temp: props.temp,
      },
    });
  };

  return (
    <div className=" bg-blue-400 rounded-xl p-6 text-white font-light">
      <div className=" flex flex-col justify-center items-center space-y-4 w-[320px] h-[300px] ">
        <span className="text-2xl">{props.name}</span>
        <span className=" text-[70px]">{props.temp}°</span>
        <span className=" text-xl">{props.weather}</span>
        <span className=" text-xl">Feels like {props.feelsTemp}°C</span>

        <div className=" flex justify-center text-xl space-x-4">
          <span>H:{props.tempMax}°</span>
          <span>L:{props.tempMin}°</span>
        </div>
      </div>

      <button
        className="text-center w-full text-lg bg-white text-black py-3 rounded-lg font-medium ease-in-out duration-100 active:scale-105"
        onClick={openCityPreview}
      >
        See more
      </button>
    </div>
  );
};

export default WeatherCard;
