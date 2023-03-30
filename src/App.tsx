import { useState, useMemo, useCallback, useRef } from "react";

import Button from "./Components/Button";
import Input from "./Components/Input";
import Table from "./Components/Table";

export type dataType = {
  company: companyData;
  id: number;
};

export type companyData = {
  name: string;
  catchPhrase: string;
  bs?: string;
};

function App() {
  const [data, setData] = useState<Array<dataType>>([]);
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [catchPhrase, setCatchphrase] = useState("");
  const refInputName = useRef<HTMLInputElement>(null);
  const refInputCatchphrase = useRef<HTMLInputElement>(null);

  function FetchButton() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((dataFetch) => {
        if (data.length) {
          setData((data) => [...data, ...dataFetch]);
        } else {
          setData(dataFetch);
        }

        console.log(dataFetch);
      });
  }

  const inputData: dataType = {
    id: data.length + 1,
    company: { name: name, catchPhrase: catchPhrase },
  };

  function pushInputData(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (name.length && catchPhrase.length) {
      setData((data: any) => [...data, inputData]);
    } else {
      setError("You have to add a name and a catchphrase!");
    }
  }

  // function pushInputData(e: React.FormEvent<HTMLFormElement>) {
  //   const pushResult = useMemo(() => {
  //     e.preventDefault();
  //     setData((data: any) => [...data, inputData]);
  //   }, []);
  //   return pushResult;
  // }

  function resetTable() {
    setData([]);
    setError("");
    setName("");
    setCatchphrase("");
    if (refInputName.current && refInputCatchphrase.current) {
      refInputName.current.value = "";
      refInputCatchphrase.current.value = "";
    }
  }

  return (
    <div className="w-full h-screen flex justify-center p-8 gap-20  bg-zinc-800">
      <div className="flex w-full justify-center items-start gap-20">
        <div className="flex gap-24">
          <Button text="TROZ(Fetch)" handleClick={FetchButton} />
          <Table data={data} />
          <div className="flex flex-col justify-center gap-8 h-full">
            <form
              onSubmit={pushInputData}
              className="flex flex-col justify-center gap-8 h-full"
            >
              <Input
                refInput={refInputName}
                placeholder="Enter your name!"
                setInput={setName}
              />
              <Input
                refInput={refInputCatchphrase}
                placeholder="Enter your catchphrase!"
                setInput={setCatchphrase}
              />
              <Button text="ZORT(Add)" />
            </form>
            <Button text="NARF(Reset)" handleClick={resetTable} />
            {error && <p className="text-red-400">{error}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
