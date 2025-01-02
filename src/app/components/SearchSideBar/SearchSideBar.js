"use client";

import { useParams, useSelectedLayoutSegment } from "next/navigation";
import Form from "../Form/Form";

const SearchSideBar = ({ genres }) => {
  const segment = useSelectedLayoutSegment();
  const { id } = useParams();

  const getSideBarTitle = () => {
    if (!segment) {
      return "Films";
    }
    const genre = genres.find((genre) => genre.id === Number(id));
    if (!genre) {
      return <p>not found</p>;
    }
    return genre.name;
  };

  const title = getSideBarTitle();

  console.log(title);

  return (
    <div>
      <h1> {title}</h1>
      <Form />
    </div>
  );
};

export default SearchSideBar;
