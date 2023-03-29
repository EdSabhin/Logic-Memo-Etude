import React, { useMemo, useCallback } from "react";
import { dataType } from "../App";

type Props = {
  data: Array<dataType>;
};

const Table = ({ data }: Props) => {
  console.log(data);
  return (
    <div className="overflow-x-auto w-[40rem]">
      <table className="table w-full">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Catchphrase</th>
          </tr>
        </thead>
        <tbody>
          {data !== undefined &&
            data.map((item: dataType, index: number) => {
              return (
                <tr key={item.id}>
                  <th>{index}</th>
                  <td>{item.company.name}</td>
                  <td>{item.company.catchPhrase}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

//export default Table;

//Memoized Component
export default React.memo(Table);
