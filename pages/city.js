import { useRouter } from "next/router";

const City = () => {
  const router = useRouter();
  const { name, temp } = router.query;

  return (
    <section className="bg-blue-600 h-[100vh]">
      <div className=" text-white text-3xl text-center">
        <ul className=" space-y-6">
          <li>{name}</li>
          <li>{temp}</li>
        </ul>
      </div>
    </section>
  );
};

export default City;
