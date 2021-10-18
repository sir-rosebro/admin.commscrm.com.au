import React, { useEffect, useRef, useState } from "react";
import { Row, Col} from "antd";
import { useSelector } from "react-redux";


export default function ReadItem({ config }) {
 
  let { readColumns } = config;
  const { current: { read} } =  useSelector(
    ({customer}) => customer
  );
  const { isReadBoxOpen } =  useSelector(
    ({ui}) => ui
  );
  const [listState, setListState] = useState([]);

  const isFirstRun = useRef(true);
  useEffect(() => {
    console.log("currentResult :", read);
    console.log("readColumns :", readColumns);
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }
    const list = [];
    readColumns.map((props) => {
      const propsKey = props.dataIndex;
      const propsTitle = props.title;
      const value = read[propsKey];
      list.push({ propsKey, label: propsTitle, value: value });
    });
    setListState(list);
  }, [read]);

  const show = isReadBoxOpen
    ? { display: "block", opacity: 1 }
    : { display: "none", opacity: 0 };

  const itemsList = listState.map((item) => {
    return (
      <Row key={item.propsKey} gutter={12}>
        <Col className="gutter-row" span={8}>
          <p>{item.label}</p>
        </Col>
        <Col className="gutter-row" span={2}>
          <p> : </p>
        </Col>
        <Col className="gutter-row" span={14}>
          <p>{item.propsKey === 'isApproved'?read['isApproved']?'Approved':'Pending':item.value}</p>
        </Col>
      </Row>
    );
  });

  console.log("itemsList :", itemsList);
  return <div style={show}>{itemsList}</div>;
}
