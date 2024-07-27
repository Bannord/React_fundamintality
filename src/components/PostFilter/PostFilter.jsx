import React from "react";
import MySelect from "../UI/select/MySelect";

const PostFilter = ({ filter, setFilter }) => {
  return (
    <div>
      <MySelect
        value={filter.sort}
        onChange={(selectedSort) =>
          setFilter({ ...filter, sort: selectedSort })
        }
        defaultValue="Сортировка"
        options={[
          { value: "title", name: "По названию" },
          { value: "body", name: "По описанию" },
        ]}
      />

      <input
        type="text"
        placeholder="Search..."
        value={filter.query}
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
      />
    </div>
  );
};

export default PostFilter;
