import React from "react";
import SubScriptionForm from "../../components/subscription-form/SubscriptionForm";

const Home = () => {
  return (
    <div className="flex justify-center items-center md:h-5/6 px-15 md:overflow-hidden">
      <div className="md:grid grid-cols-2 gap-20">
        <div className="flex-col justify-center max-w-sm">
          <label className="text-white text-6xl mb-10 inline-block">
            <span className="text-amber-400">Subcribe now </span>to get games in
            email
          </label>
          <SubScriptionForm />
        </div>
        <div className="text-white pt-16">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec
          fermentum nulla. Nam fermentum ex ut nisi tempor, id gravida nulla
          pharetra. In sit amet quam quis quam lacinia bibendum. Maecenas eu
          tempus mi. Praesent nec quam eget ante dapibus aliquet eu aliquam sem.
          Morbi venenatis, erat in viverra egestas, mauris massa lacinia erat,
          id laoreet quam nunc eu nisi. Donec sagittis sit amet odio elementum
          sagittis. Ut scelerisque metus neque, in ultricies odio dictum nec.
          Integer suscipit accumsan tortor, id dignissim mauris eleifend
          interdum. Sed lacinia risus turpis, sit amet euismod ex malesuada in.
          Donec elit est, mattis ut commodo a, viverra a velit. Donec massa dui,
          consequat sed ipsum ac, condimentum mollis quam.
        </div>
      </div>
    </div>
  );
};

export default Home;
