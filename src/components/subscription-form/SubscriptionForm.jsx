import React, { useState } from "react";

const SubScriptionForm = () => {
  const [inputs, setInputs] = useState({ difficult: "easy", email: "" });
  const [isSentSubscription, setIsSentSubscription] = useState(false);

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputs.email)) return

    try {
      await fetch("https://dummyjson.com/products/add", {
        method: "post",
        body: JSON.stringify(inputs),
      });

      setIsSentSubscription(true);
    } catch (e) {
      console.error("Error adding a new product: " + e);
    }
  };

  const handleOnChange = (e) => {
    e.preventDefault();

    setInputs((prev) => ({ ...prev, [e.target.name]: event.target.value }));
    setIsSentSubscription(false);
  };

  return (
    <div className="w-80">
      <form onSubmit={handleOnSubmit} className="flex flex-col mb-10">
        <input
          name="email"
          value={inputs.email}
          type="email"
          onChange={(e) => handleOnChange(e)}
          className="rounded-full h-12 mb-5 mw-80 shadow-lg px-10"
          placeholder="Enter email to subscribe"
        ></input>
        <select
          name="difficult"
          onChange={(e) => handleOnChange(e)}
          className="rounded-full h-12 mb-5 mw-80 shadow-lg px-10"
        >
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="difficult">Difficult</option>
        </select>
        <input
          className="rounded-full h-12 bg-amber-400 w-52 shadow-lg hover:bg-amber-300"
          type="submit"
          value="Send"
        ></input>
        { isSentSubscription && <div className={'text-green-400 border rounded border-green-400 m-auto mt-10 p-4'}>Subscription successfully sent!</div>}
      </form>
    </div>
  );
};

export default SubScriptionForm;
