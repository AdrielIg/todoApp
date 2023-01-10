import axios from "axios";
import React, { FormEvent, useCallback, useEffect, useState } from "react";

const MainComponent = () => {
  const [values, setValues] = useState<number[]>([]);
  const [currentValue, setCurrentValue] = useState<string>("");

  const getAllNumbers = useCallback(async (): Promise<void> => {
    // we will use nginx to redirect it to the proper URL
    const values: number[] = await axios.get("/vi/api/values/all");
    setValues(values);
  }, []);

  const saveNumber = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      await axios.post("/v1/api/values", {
        value: parseInt(currentValue),
      });
      setCurrentValue("");
      await getAllNumbers();
    },
    [currentValue, getAllNumbers],
  );

  useEffect(() => {
    getAllNumbers()
      .then((numbers: any) => setValues(numbers))
      .catch((e) => {
        console.log(e);
      });
  });

  return (
    <div>
      <button onClick={getAllNumbers}>Get all numbers</button>
      <h4>values</h4>
      <div>
        {values.map((value, i) => (
          <p key={i}>{value}</p>
        ))}
      </div>
      <form onSubmit={saveNumber}>
        <label>Enter your value:</label>
        <input
          value={currentValue}
          onChange={(e) => setCurrentValue(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default MainComponent;
