import React, { useEffect, useState, useRef } from "react";

import { AutoComplete, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";

import { Empty } from "antd";

import {
  openPanel,
  openCollapsedBox,
  openReadBox,
  searchCustomer
} from "../../redux/actions";

export default function SearchItem({ config }) {
  let { entity, searchConfig } = config;

  const { displayLabels, searchFields, outputValue = "_id" } = searchConfig;
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const [options, setOptions] = useState([]);

  const { search:{ result, isFetching, isSuccess}} = useSelector(
    ({customer}) => customer
  );

  const isTyping = useRef(false);

  let delayTimer = null;
  useEffect(() => {
    isFetching && setOptions([{ label: "... Searching" }]);
  }, [isFetching]);
  const onSearch = (searchText) => {
    isTyping.current = true;

    clearTimeout(delayTimer);
    delayTimer = setTimeout(function () {
      if (isTyping.current && searchText !== "") {
        dispatch(
          searchCustomer({
            question: searchText,
            fields: searchFields,
          })
        );
      }
      isTyping.current = false;
    }, 500);
  };

  const onSelect = (data) => {
    const currentItem = result.find((item) => {
      return item[outputValue] === data;
    });
    console.log(entity, currentItem);
    //dispatch(crud.currentItem(currentItem));
    dispatch(openPanel());
    dispatch(openCollapsedBox());
    dispatch(openReadBox());
  };

  const onChange = (data) => {
    const currentItem = options.find((item) => {
      return item.value === data;
    });
    const currentValue = currentItem ? currentItem.label : data;
    setValue(currentValue);
  };

  useEffect(() => {
    let optionResults = [];

    result.map((item) => {
      const labels = displayLabels.map((x) => item[x]).join(" ");
      optionResults.push({ label: labels, value: item[outputValue] });
    });

    setOptions(optionResults);
  }, [result]);

  return (
    <AutoComplete
      value={value}
      options={options}
      style={{
        width: "100%",
      }}
      onSelect={onSelect}
      onSearch={onSearch}
      onChange={onChange}
      notFoundContent={!isSuccess ? <Empty /> : ""}
      allowClear={true}
      placeholder="Your Search here"
    >
      <Input suffix={<SearchOutlined />} />
    </AutoComplete>
  );
}
