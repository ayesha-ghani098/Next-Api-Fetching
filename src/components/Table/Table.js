"use client";
import React, { useState } from "react";
import { Table } from "antd";

const DataTable = ({ data, type, setData }) => {
  const [editId, setEditId] = useState(-1);

  const handleEdit = (i) => {
    setEditId(i);
  };

  const handleSave = (i) => {
    setEditId(-1);
    const dataUpdated = [...data];
    dataUpdated[i] = { ...data[i] };
    setData(dataUpdated);
    localStorage.setItem("data1", JSON.stringify(dataUpdated));
  };

  // TABLE COLUMNS
  const universitiesColumns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (_, { name }, i) => (
        <>
          {editId === i ? (
            <input
              value={name}
              onChange={(e) => {
                const dataUpdated = [...data];
                dataUpdated[i] = { ...data[i], name: e.target.value };
                setData(dataUpdated);
              }}
            />
          ) : (
            name
          )}
        </>
      ),
    },
    {
      title: "Domain",
      dataIndex: "domains",
      key: "domains",
      render: (_, { domains }, i) => (
        <>
          {editId === i ? (
            <input
              value={domains}
              onChange={(e) => {
                const dataUpdated = [...data];
                dataUpdated[i] = { ...data[i], domains: e.target.value };
                setData(dataUpdated);
              }}
            />
          ) : (
            domains
          )}
        </>
      ),
    },
    {
      title: "Website Link",
      dataIndex: "web_pages",
      key: "web_pages",
      render: (_, { web_pages }, i) => (
        <>
          {editId === i ? (
            <input
              value={web_pages}
              onChange={(e) => {
                const dataUpdated = [...data];
                dataUpdated[i] = { ...data[i], web_pages: e.target.value };
                setData(dataUpdated);
              }}
            />
          ) : (
            web_pages
          )}
        </>
      ),
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record, i) => (
        <>
          {editId === i ? (
            <>
              <button onClick={() => handleSave(i)}>Save</button>
              <button onClick={() => setEditId(-1)}>Cancel</button>
            </>
          ) : (
            <button onClick={() => handleEdit(i)}>Edit</button>
          )}
        </>
      ),
    },
  ];

  const countriesColumns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (_, { name }, i) => (
        <>
          {editId === i ? (
            <input
              value={name}
              onChange={(e) => {
                const dataUpdated = [...data];
                dataUpdated[i] = { ...data[i], name: e.target.value };
                setData(dataUpdated);
              }}
            />
          ) : (
            name
          )}
        </>
      ),
    },
    {
      title: "Domain",
      dataIndex: "topLevelDomain",
      key: "topLevelDomain",
      render: (_, { topLevelDomain }, i) => (
        <>
          {editId === i ? (
            <input
              value={topLevelDomain}
              onChange={(e) => {
                const dataUpdated = [...data];
                dataUpdated[i] = { ...data[i], topLevelDomain: e.target.value };
                setData(dataUpdated);
              }}
            />
          ) : (
            topLevelDomain
          )}
        </>
      ),
    },
    {
      title: "Capital",
      dataIndex: "capital",
      key: "capital",
      render: (_, record, i) => (
        <>
          {editId === i ? (
            <input
              value={record.capital}
              onChange={(e) => {
                const dataUpdated = [...data];
                dataUpdated[i] = { ...data[i], capital: e.target.value };
                setData(dataUpdated);
              }}
            />
          ) : (
            record.capital
          )}
        </>
      ),
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record, i) => (
        <>
          {editId === i ? (
            <>
              <button onClick={() => handleSave(i)}>Save</button>
              <button onClick={() => setEditId(-1)}>Cancel</button>
            </>
          ) : (
            <button onClick={() => handleEdit(i)}>Edit</button>
          )}
        </>
      ),
    },
  ];

  return (
    <Table
      columns={type === "country" ? countriesColumns : universitiesColumns}
      dataSource={data}
    />
  );
};

export default DataTable;
