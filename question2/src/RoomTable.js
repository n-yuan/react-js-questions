import React, { Fragment } from "react";
import data from "./data.json";
import { Table } from "antd";

const RoomTable = () => {
  const columns = [
    {
      title: "First Name",
      dataIndex: "nameFirst",
      key: "nameFirst",
    },
    {
      title: "Last Name",
      dataIndex: "nameLast",
      key: "nameLast",
    },
    ,
    {
      title: "Room",
      dataIndex: "room",
      key: "room",
    },
  ];

  const renderData = data.map((item, index) => {
    return {
      key: index,
      nameFirst: item.nameFirst,
      nameLast: item.nameLast,
      room: item.room,
    };
  });

  return (
    <Fragment>
      <Table
        rowClassName={(record, index) =>
          index % 2 === 0 ? "table-row-light" : "table-row-dark"
        }
        columns={columns}
        dataSource={renderData}
        pagination={false}
      />
    </Fragment>
  );
};

export default RoomTable;
