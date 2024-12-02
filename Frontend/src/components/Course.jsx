import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import list from "../../public/list.json";
import { Link } from "react-router-dom";
import axios from "axios";
function Course() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  },[]);
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-[4rem] items-center justify-center text-center ">
          <h1 className="pt-6">
            We're deligted to have you{" "}
            <span className="text-pink-500">Here! :)</span>
          </h1>
          <p className="mt-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus, explicabo quibusdam asperiores, rerum sed corporis
            aperiam tenetur dolore tempore tempora quam provident maxime, modi
            harum facilis odit. Nostrum excepturi illum ab, deserunt in
            quibusdam quam, cumque quae voluptas nemo sint. Nemo atque nostrum
            laborum esse similique et sed dolorem soluta!
          </p>
          <Link to="/">
            <button className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300 mt-5">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 flex gap-4 flex-wrap justify-center">
          {book.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
